// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTopicsDetectionJobRequest, DescribeTopicsDetectionJobResponse } from "../models/models_0";
import { de_DescribeTopicsDetectionJobCommand, se_DescribeTopicsDetectionJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTopicsDetectionJobCommand}.
 */
export interface DescribeTopicsDetectionJobCommandInput extends DescribeTopicsDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTopicsDetectionJobCommand}.
 */
export interface DescribeTopicsDetectionJobCommandOutput extends DescribeTopicsDetectionJobResponse, __MetadataBearer {}

/**
 * <p>Gets the properties associated with a topic detection job. Use this operation to get
 *       the status of a detection job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeTopicsDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeTopicsDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DescribeTopicsDetectionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTopicsDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTopicsDetectionJobResponse
 * //   TopicsDetectionJobProperties: { // TopicsDetectionJobProperties
 * //     JobId: "STRING_VALUE",
 * //     JobArn: "STRING_VALUE",
 * //     JobName: "STRING_VALUE",
 * //     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //     Message: "STRING_VALUE",
 * //     SubmitTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     InputDataConfig: { // InputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 * //       DocumentReaderConfig: { // DocumentReaderConfig
 * //         DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 * //         DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 * //         FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 * //           "TABLES" || "FORMS",
 * //         ],
 * //       },
 * //     },
 * //     OutputDataConfig: { // OutputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     NumberOfTopics: Number("int"),
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     VolumeKmsKeyId: "STRING_VALUE",
 * //     VpcConfig: { // VpcConfig
 * //       SecurityGroupIds: [ // SecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTopicsDetectionJobCommandInput - {@link DescribeTopicsDetectionJobCommandInput}
 * @returns {@link DescribeTopicsDetectionJobCommandOutput}
 * @see {@link DescribeTopicsDetectionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTopicsDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The specified job was not found. Check the job ID and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class DescribeTopicsDetectionJobCommand extends $Command
  .classBuilder<
    DescribeTopicsDetectionJobCommandInput,
    DescribeTopicsDetectionJobCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "DescribeTopicsDetectionJob", {})
  .n("ComprehendClient", "DescribeTopicsDetectionJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTopicsDetectionJobCommand)
  .de(de_DescribeTopicsDetectionJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTopicsDetectionJobRequest;
      output: DescribeTopicsDetectionJobResponse;
    };
    sdk: {
      input: DescribeTopicsDetectionJobCommandInput;
      output: DescribeTopicsDetectionJobCommandOutput;
    };
  };
}
