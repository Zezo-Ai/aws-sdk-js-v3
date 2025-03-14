import { HttpRequest } from "@smithy/protocol-http";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { addGlacierApiVersionMiddleware } from "./add-glacier-api-version";

describe("addGlacierApiVersion", () => {
  const mockNextHandler = vi.fn();
  const unusedDep = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const config = {
    apiVersion: "1970-01-01",
    bodyChecksumGenerator: unusedDep,
    sha256: unusedDep,
    utf8Decoder: unusedDep,
  };

  it("sets the x-amz-glacier-version header", async () => {
    const handler = addGlacierApiVersionMiddleware(config)(mockNextHandler, {} as any);

    await handler({
      input: {},
      request: new HttpRequest({
        headers: {},
      }),
    });

    // ensure the next handler was called
    expect(mockNextHandler.mock.calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["x-amz-glacier-version"]).toBe("1970-01-01");
  });
});
