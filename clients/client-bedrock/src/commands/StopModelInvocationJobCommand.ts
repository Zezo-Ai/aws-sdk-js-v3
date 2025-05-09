// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopModelInvocationJobRequest, StopModelInvocationJobResponse } from "../models/models_0";
import { de_StopModelInvocationJobCommand, se_StopModelInvocationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopModelInvocationJobCommand}.
 */
export interface StopModelInvocationJobCommandInput extends StopModelInvocationJobRequest {}
/**
 * @public
 *
 * The output of {@link StopModelInvocationJobCommand}.
 */
export interface StopModelInvocationJobCommandOutput extends StopModelInvocationJobResponse, __MetadataBearer {}

/**
 * <p>Stops a batch inference job. You're only charged for tokens that were already processed. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/batch-inference-stop.html">Stop a batch inference job</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, StopModelInvocationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, StopModelInvocationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // StopModelInvocationJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopModelInvocationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopModelInvocationJobCommandInput - {@link StopModelInvocationJobCommandInput}
 * @returns {@link StopModelInvocationJobCommandOutput}
 * @see {@link StopModelInvocationJobCommandInput} for command's `input` shape.
 * @see {@link StopModelInvocationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class StopModelInvocationJobCommand extends $Command
  .classBuilder<
    StopModelInvocationJobCommandInput,
    StopModelInvocationJobCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "StopModelInvocationJob", {})
  .n("BedrockClient", "StopModelInvocationJobCommand")
  .f(void 0, void 0)
  .ser(se_StopModelInvocationJobCommand)
  .de(de_StopModelInvocationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopModelInvocationJobRequest;
      output: {};
    };
    sdk: {
      input: StopModelInvocationJobCommandInput;
      output: StopModelInvocationJobCommandOutput;
    };
  };
}
