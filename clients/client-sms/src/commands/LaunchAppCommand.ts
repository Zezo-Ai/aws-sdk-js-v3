// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LaunchAppRequest, LaunchAppResponse } from "../models/models_0";
import { de_LaunchAppCommand, se_LaunchAppCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link LaunchAppCommand}.
 */
export interface LaunchAppCommandInput extends LaunchAppRequest {}
/**
 * @public
 *
 * The output of {@link LaunchAppCommand}.
 */
export interface LaunchAppCommandOutput extends LaunchAppResponse, __MetadataBearer {}

/**
 * <p>Launches the specified application as a stack in CloudFormation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, LaunchAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, LaunchAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // LaunchAppRequest
 *   appId: "STRING_VALUE",
 * };
 * const command = new LaunchAppCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param LaunchAppCommandInput - {@link LaunchAppCommandInput}
 * @returns {@link LaunchAppCommandOutput}
 * @see {@link LaunchAppCommandInput} for command's `input` shape.
 * @see {@link LaunchAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 *
 * @public
 */
export class LaunchAppCommand extends $Command
  .classBuilder<
    LaunchAppCommandInput,
    LaunchAppCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "LaunchApp", {})
  .n("SMSClient", "LaunchAppCommand")
  .f(void 0, void 0)
  .ser(se_LaunchAppCommand)
  .de(de_LaunchAppCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LaunchAppRequest;
      output: {};
    };
    sdk: {
      input: LaunchAppCommandInput;
      output: LaunchAppCommandOutput;
    };
  };
}
