import "@aws-sdk/signature-v4-crt";

import { ChecksumAlgorithm, S3, SelectObjectContentEventStream } from "@aws-sdk/client-s3";
import { afterAll, afterEach, beforeAll, describe, expect, test as it } from "vitest";

import { getIntegTestResources } from "../../../../tests/e2e/get-integ-test-resources";
import { createBuffer } from "./helpers";

let Key = `${Date.now()}`;

describe("@aws-sdk/client-s3", () => {
  let client: S3;
  let Bucket: string;
  let region: string;
  let mrapArn: string;

  beforeAll(async () => {
    const integTestResourcesEnv = await getIntegTestResources();
    Object.assign(process.env, integTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;
    mrapArn = (globalThis as any)?.window?.__env__?.AWS_SMOKE_TEST_MRAP_ARN || process?.env?.AWS_SMOKE_TEST_MRAP_ARN;

    Key = ``;

    client = new S3({ region });
  });

  describe("PutObject", () => {
    beforeAll(() => {
      Key = `${Date.now()}`;
    });
    afterAll(async () => {
      await client.deleteObject({ Bucket, Key });
    });
    it("should succeed with Node.js readable stream body", async () => {
      const length = 100 * 1024; // 100KB
      const chunkSize = 8 * 1024; // 8KB
      const { Readable } = require("stream");
      let sizeLeft = length;
      const inputStream = new Readable({
        read() {
          if (sizeLeft <= 0) {
            this.push(null); //end stream;
            return;
          }
          let chunk = "";
          for (let i = 0; i < Math.min(sizeLeft, chunkSize); i++) {
            chunk += "x";
          }
          this.push(chunk);
          sizeLeft -= chunk.length;
        },
      });
      inputStream.size = length; // This is required
      const result = await client.putObject({
        Bucket,
        Key,
        Body: inputStream,
      });
      expect(result.$metadata.httpStatusCode).toEqual(200);
    });
  });

  describe("GetObject", () => {
    beforeAll(async () => {
      Key = `${Date.now()}`;
    });

    afterAll(async () => {
      await client.deleteObject({ Bucket, Key });
    });

    it("should succeed with valid body payload with checksums", async () => {
      // prepare the object.
      const body = createBuffer("1MB");
      let bodyChecksum = "";

      const bodyChecksumReader = (next: any) => async (args: any) => {
        const checksumValue = args.request.headers["x-amz-checksum-crc32"];
        if (checksumValue) {
          bodyChecksum = checksumValue;
        }
        return next(args);
      };
      client.middlewareStack.addRelativeTo(bodyChecksumReader, {
        name: "bodyChecksumReader",
        relation: "before",
        toMiddleware: "deserializerMiddleware",
      });

      try {
        await client.putObject({ Bucket, Key, Body: body, ChecksumAlgorithm: ChecksumAlgorithm.CRC32 });
      } catch (e) {
        console.error("failed to put");
        throw e;
      }

      expect(bodyChecksum).not.toEqual("");

      try {
        // eslint-disable-next-line no-var
        var result = await client.getObject({ Bucket, Key, ChecksumMode: "ENABLED" });
      } catch (e) {
        console.error("failed to get");
        throw e;
      }

      expect(result.$metadata.httpStatusCode).toEqual(200);
      expect(result.ChecksumCRC32).toEqual(bodyChecksum);
      const { Readable } = require("stream");
      expect(result.Body).toBeInstanceOf(Readable);
    });
  }, 10_000);

  describe("ListObjects", () => {
    beforeAll(async () => {
      Key = `${Date.now()}`;
      await client.putObject({ Bucket, Key, Body: "foo" });
    });
    afterAll(async () => {
      await client.deleteObject({ Bucket, Key });
    });
    it("should succeed with valid bucket", async () => {
      const result = await client.listObjects({
        Bucket,
      });
      expect(result.$metadata.httpStatusCode).toEqual(200);
      expect(result.Contents).toBeInstanceOf(Array);
    });

    it("should throw with invalid bucket", () =>
      expect(client.listObjects({ Bucket: "invalid-bucket" })).rejects.toThrow());
  });

  describe("MultipartUpload", () => {
    let UploadId: string;
    let Etag: string;
    const multipartObjectKey = `${Key}-multipart`;
    beforeAll(() => {
      Key = `${Date.now()}`;
    });
    afterEach(async () => {
      if (UploadId) {
        await client.abortMultipartUpload({
          Bucket,
          Key: multipartObjectKey,
          UploadId,
        });
      }
      await client.deleteObject({
        Bucket,
        Key: multipartObjectKey,
      });
    });

    it("should successfully create, upload list and complete", async () => {
      //create multipart upload
      const createResult = await client.createMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
      });
      expect(createResult.$metadata.httpStatusCode).toEqual(200);
      expect(typeof createResult.UploadId).toEqual("string");
      UploadId = createResult.UploadId as string;

      //upload part
      const uploadResult = await client.uploadPart({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
        PartNumber: 1,
        Body: createBuffer("1KB"),
      });
      expect(uploadResult.$metadata.httpStatusCode).toEqual(200);
      expect(typeof uploadResult.ETag).toEqual("string");
      Etag = uploadResult.ETag as string;

      //list parts
      const listPartsResult = await client.listParts({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
      });
      expect(listPartsResult.$metadata.httpStatusCode).toEqual(200);
      expect(listPartsResult.Parts?.length).toEqual(1);
      expect(listPartsResult.Parts?.[0].ETag).toEqual(Etag);

      //complete multipart upload
      const completeResult = await client.completeMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
        UploadId,
        MultipartUpload: { Parts: [{ ETag: Etag, PartNumber: 1 }] },
      });
      expect(completeResult.$metadata.httpStatusCode).toEqual(200);

      //validate the object is uploaded
      const headResult = await client.headObject({
        Bucket,
        Key: multipartObjectKey,
      });
      expect(headResult.$metadata.httpStatusCode).toEqual(200);
    });

    it("should successfully create, abort, and list upload", async () => {
      //create multipart upload
      const createResult = await client.createMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
      });
      expect(createResult.$metadata.httpStatusCode).toEqual(200);
      const toAbort = createResult.UploadId;
      expect(typeof toAbort).toEqual("string");

      //abort multipart upload
      const abortResult = await client.abortMultipartUpload({
        Bucket,
        Key: multipartObjectKey,
        UploadId: toAbort,
      });
      expect(abortResult.$metadata.httpStatusCode).toEqual(204);

      //validate multipart upload is aborted
      const listUploadsResult = await client.listMultipartUploads({
        Bucket,
      });
      expect(listUploadsResult.$metadata.httpStatusCode).toEqual(200);
      expect((listUploadsResult.Uploads || []).map((upload) => upload.UploadId)).not.toContain(toAbort);
    });
  });

  describe("selectObjectContent", () => {
    const csvFile = `user_name,age
jsrocks,13
node4life,22
esfuture,29`;
    beforeAll(async () => {
      Key = `${Date.now()}`;
      await client.putObject({ Bucket, Key, Body: csvFile });
    });
    afterAll(async () => {
      await client.deleteObject({ Bucket, Key });
    });
    it("should succeed", async () => {
      const { Payload } = await client.selectObjectContent({
        Bucket,
        Key,
        ExpressionType: "SQL",
        Expression: "SELECT user_name FROM S3Object WHERE cast(age as int) > 20",
        InputSerialization: {
          CSV: {
            FileHeaderInfo: "USE",
            RecordDelimiter: "\n",
            FieldDelimiter: ",",
          },
        },
        OutputSerialization: {
          CSV: {},
        },
      });
      const events: SelectObjectContentEventStream[] = [];
      for await (const event of Payload!) {
        events.push(event);
      }
      expect(events.length).toEqual(3);
      expect(new TextDecoder().decode(events[0].Records?.Payload)).toEqual("node4life\nesfuture\n");
      expect(events[1].Stats?.Details).toBeDefined();
      expect(events[2].End).toBeDefined();
    });
  });

  describe("Multi-region access point", () => {
    beforeAll(async () => {
      Key = `${Date.now()}`;
      await client.putObject({ Bucket: mrapArn, Key, Body: "foo" });
    });
    afterAll(async () => {
      await client.deleteObject({ Bucket: mrapArn, Key });
    });
    it("should succeed with valid MRAP ARN", async () => {
      const result = await client.listObjects({
        Bucket: mrapArn,
      });
      expect(result.$metadata.httpStatusCode).toEqual(200);
      expect(result.Contents).toBeInstanceOf(Array);
    });
  });
});
