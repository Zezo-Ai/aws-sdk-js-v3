// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteChatControlsConfigurationRequest, DeleteChatControlsConfigurationResponse } from "../models/models_0";
import {
  de_DeleteChatControlsConfigurationCommand,
  se_DeleteChatControlsConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteChatControlsConfigurationCommand}.
 */
export interface DeleteChatControlsConfigurationCommandInput extends DeleteChatControlsConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChatControlsConfigurationCommand}.
 */
export interface DeleteChatControlsConfigurationCommandOutput
  extends DeleteChatControlsConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes chat controls configured for an existing Amazon Q Business application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, DeleteChatControlsConfigurationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, DeleteChatControlsConfigurationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // DeleteChatControlsConfigurationRequest
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteChatControlsConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChatControlsConfigurationCommandInput - {@link DeleteChatControlsConfigurationCommandInput}
 * @returns {@link DeleteChatControlsConfigurationCommandOutput}
 * @see {@link DeleteChatControlsConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteChatControlsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class DeleteChatControlsConfigurationCommand extends $Command
  .classBuilder<
    DeleteChatControlsConfigurationCommandInput,
    DeleteChatControlsConfigurationCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "DeleteChatControlsConfiguration", {})
  .n("QBusinessClient", "DeleteChatControlsConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteChatControlsConfigurationCommand)
  .de(de_DeleteChatControlsConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChatControlsConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteChatControlsConfigurationCommandInput;
      output: DeleteChatControlsConfigurationCommandOutput;
    };
  };
}
