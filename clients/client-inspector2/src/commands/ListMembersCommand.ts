// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListMembersRequest, ListMembersResponse } from "../models/models_1";
import { de_ListMembersCommand, se_ListMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMembersCommand}.
 */
export interface ListMembersCommandInput extends ListMembersRequest {}
/**
 * @public
 *
 * The output of {@link ListMembersCommand}.
 */
export interface ListMembersCommandOutput extends ListMembersResponse, __MetadataBearer {}

/**
 * <p>List members associated with the Amazon Inspector delegated administrator for your
 *          organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListMembersCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListMembersCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListMembersRequest
 *   onlyAssociated: true || false,
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListMembersResponse
 * //   members: [ // MemberList
 * //     { // Member
 * //       accountId: "STRING_VALUE",
 * //       relationshipStatus: "STRING_VALUE",
 * //       delegatedAdminAccountId: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMembersCommandInput - {@link ListMembersCommandInput}
 * @returns {@link ListMembersCommandOutput}
 * @see {@link ListMembersCommandInput} for command's `input` shape.
 * @see {@link ListMembersCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class ListMembersCommand extends $Command
  .classBuilder<
    ListMembersCommandInput,
    ListMembersCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "ListMembers", {})
  .n("Inspector2Client", "ListMembersCommand")
  .f(void 0, void 0)
  .ser(se_ListMembersCommand)
  .de(de_ListMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMembersRequest;
      output: ListMembersResponse;
    };
    sdk: {
      input: ListMembersCommandInput;
      output: ListMembersCommandOutput;
    };
  };
}
