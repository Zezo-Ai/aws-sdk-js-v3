// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListConversationsRequest, ListConversationsResponse } from "../models/models_1";
import { de_ListConversationsCommand, se_ListConversationsCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConversationsCommand}.
 */
export interface ListConversationsCommandInput extends ListConversationsRequest {}
/**
 * @public
 *
 * The output of {@link ListConversationsCommand}.
 */
export interface ListConversationsCommandOutput extends ListConversationsResponse, __MetadataBearer {}

/**
 * <p>Lists one or more Amazon Q Business conversations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListConversationsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListConversationsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // ListConversationsRequest
 *   applicationId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListConversationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConversationsResponse
 * //   nextToken: "STRING_VALUE",
 * //   conversations: [ // Conversations
 * //     { // Conversation
 * //       conversationId: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConversationsCommandInput - {@link ListConversationsCommandInput}
 * @returns {@link ListConversationsCommandOutput}
 * @see {@link ListConversationsCommandInput} for command's `input` shape.
 * @see {@link ListConversationsCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link LicenseNotFoundException} (client fault)
 *  <p>You don't have permissions to perform the action because your license is inactive. Ask your admin to activate your license and try again after your licence is active.</p>
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
export class ListConversationsCommand extends $Command
  .classBuilder<
    ListConversationsCommandInput,
    ListConversationsCommandOutput,
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
  .s("ExpertQ", "ListConversations", {})
  .n("QBusinessClient", "ListConversationsCommand")
  .f(void 0, void 0)
  .ser(se_ListConversationsCommand)
  .de(de_ListConversationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConversationsRequest;
      output: ListConversationsResponse;
    };
    sdk: {
      input: ListConversationsCommandInput;
      output: ListConversationsCommandOutput;
    };
  };
}
