// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetWorkflowVersionRequest, GetWorkflowVersionResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetWorkflowVersionCommand, se_GetWorkflowVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowVersionCommand}.
 */
export interface GetWorkflowVersionCommandInput extends GetWorkflowVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowVersionCommand}.
 */
export interface GetWorkflowVersionCommandOutput extends GetWorkflowVersionResponse, __MetadataBearer {}

/**
 * <p>Gets information about a workflow version. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html">Workflow versioning in Amazon Web Services HealthOmics</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetWorkflowVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetWorkflowVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetWorkflowVersionRequest
 *   workflowId: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   type: "STRING_VALUE",
 *   export: [ // WorkflowExportList
 *     "STRING_VALUE",
 *   ],
 *   workflowOwnerId: "STRING_VALUE",
 * };
 * const command = new GetWorkflowVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowVersionResponse
 * //   arn: "STRING_VALUE",
 * //   workflowId: "STRING_VALUE",
 * //   versionName: "STRING_VALUE",
 * //   accelerators: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   description: "STRING_VALUE",
 * //   definition: "STRING_VALUE",
 * //   digest: "STRING_VALUE",
 * //   engine: "STRING_VALUE",
 * //   main: "STRING_VALUE",
 * //   metadata: { // WorkflowMetadata
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   parameterTemplate: { // WorkflowParameterTemplate
 * //     "<keys>": { // WorkflowParameter
 * //       description: "STRING_VALUE",
 * //       optional: true || false,
 * //     },
 * //   },
 * //   status: "STRING_VALUE",
 * //   statusMessage: "STRING_VALUE",
 * //   storageType: "STRING_VALUE",
 * //   storageCapacity: Number("int"),
 * //   type: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   uuid: "STRING_VALUE",
 * //   workflowBucketOwnerId: "STRING_VALUE",
 * //   readme: "STRING_VALUE",
 * //   definitionRepositoryDetails: { // DefinitionRepositoryDetails
 * //     connectionArn: "STRING_VALUE",
 * //     fullRepositoryId: "STRING_VALUE",
 * //     sourceReference: { // SourceReference
 * //       type: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //     providerType: "STRING_VALUE",
 * //     providerEndpoint: "STRING_VALUE",
 * //   },
 * //   readmePath: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkflowVersionCommandInput - {@link GetWorkflowVersionCommandInput}
 * @returns {@link GetWorkflowVersionCommandOutput}
 * @see {@link GetWorkflowVersionCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowVersionCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class GetWorkflowVersionCommand extends $Command
  .classBuilder<
    GetWorkflowVersionCommandInput,
    GetWorkflowVersionCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "GetWorkflowVersion", {})
  .n("OmicsClient", "GetWorkflowVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkflowVersionCommand)
  .de(de_GetWorkflowVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowVersionRequest;
      output: GetWorkflowVersionResponse;
    };
    sdk: {
      input: GetWorkflowVersionCommandInput;
      output: GetWorkflowVersionCommandOutput;
    };
  };
}
