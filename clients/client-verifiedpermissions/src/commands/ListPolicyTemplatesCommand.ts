// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListPolicyTemplatesInput,
  ListPolicyTemplatesOutput,
  ListPolicyTemplatesOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListPolicyTemplatesCommand, se_ListPolicyTemplatesCommand } from "../protocols/Aws_json1_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  VerifiedPermissionsClientResolvedConfig,
} from "../VerifiedPermissionsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyTemplatesCommand}.
 */
export interface ListPolicyTemplatesCommandInput extends ListPolicyTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListPolicyTemplatesCommand}.
 */
export interface ListPolicyTemplatesCommandOutput extends ListPolicyTemplatesOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of all policy templates in the specified policy store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, ListPolicyTemplatesCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, ListPolicyTemplatesCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // ListPolicyTemplatesInput
 *   policyStoreId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPolicyTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   policyTemplates: [ // PolicyTemplatesList // required
 * //     { // PolicyTemplateItem
 * //       policyStoreId: "STRING_VALUE", // required
 * //       policyTemplateId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       createdDate: new Date("TIMESTAMP"), // required
 * //       lastUpdatedDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPolicyTemplatesCommandInput - {@link ListPolicyTemplatesCommandInput}
 * @returns {@link ListPolicyTemplatesCommandOutput}
 * @see {@link ListPolicyTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListPolicyTemplatesCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request failed because it references a resource that doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of an internal error. Try your request again later</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because it exceeded a throttling quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because one or more input parameters don't satisfy their constraint requirements. The output is provided as a list of fields and a reason for each field that isn't valid.</p> <p>The possible reasons include the following:</p> <ul> <li> <p> <b>UnrecognizedEntityType</b> </p> <p>The policy includes an entity type that isn't found in the schema.</p> </li> <li> <p> <b>UnrecognizedActionId</b> </p> <p>The policy includes an action id that isn't found in the schema.</p> </li> <li> <p> <b>InvalidActionApplication</b> </p> <p>The policy includes an action that, according to the schema, doesn't support the specified principal and resource.</p> </li> <li> <p> <b>UnexpectedType</b> </p> <p>The policy included an operand that isn't a valid type for the specified operation.</p> </li> <li> <p> <b>IncompatibleTypes</b> </p> <p>The types of elements included in a <code>set</code>, or the types of expressions used in an <code>if...then...else</code> clause aren't compatible in this context.</p> </li> <li> <p> <b>MissingAttribute</b> </p> <p>The policy attempts to access a record or entity attribute that isn't specified in the schema. Test for the existence of the attribute first before attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the <i>Cedar Policy Language Guide</i>.</p> </li> <li> <p> <b>UnsafeOptionalAttributeAccess</b> </p> <p>The policy attempts to access a record or entity attribute that is optional and isn't guaranteed to be present. Test for the existence of the attribute first before attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the <i>Cedar Policy Language Guide</i>.</p> </li> <li> <p> <b>ImpossiblePolicy</b> </p> <p>Cedar has determined that a policy condition always evaluates to false. If the policy is always false, it can never apply to any query, and so it can never affect an authorization decision.</p> </li> <li> <p> <b>WrongNumberArguments</b> </p> <p>The policy references an extension type with the wrong number of arguments.</p> </li> <li> <p> <b>FunctionArgumentValidationError</b> </p> <p>Cedar couldn't parse the argument passed to an extension type. For example, a string that is to be parsed as an IPv4 address can contain only digits and the period character.</p> </li> </ul>
 *
 * @throws {@link VerifiedPermissionsServiceException}
 * <p>Base exception class for all service exceptions from VerifiedPermissions service.</p>
 *
 *
 * @example ListPolicyTemplates
 * ```javascript
 * // The following example retrieves a list of all of the policy templates in the specified policy store.
 * const input = {
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new ListPolicyTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policyTemplates: [
 *     {
 *       createdDate: "2024-08-12T18:20:50.99Z",
 *       description: "Generic template",
 *       lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *       policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *       policyTemplateId: "PTEXAMPLEabcdefg111111"
 *     },
 *     {
 *       createdDate: "2024-08-12T18:20:50.99Z",
 *       description: "Template for research dept",
 *       lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *       policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *       policyTemplateId: "PTEXAMPLEabcdefg222222"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListPolicyTemplatesCommand extends $Command
  .classBuilder<
    ListPolicyTemplatesCommandInput,
    ListPolicyTemplatesCommandOutput,
    VerifiedPermissionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VerifiedPermissionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VerifiedPermissions", "ListPolicyTemplates", {})
  .n("VerifiedPermissionsClient", "ListPolicyTemplatesCommand")
  .f(void 0, ListPolicyTemplatesOutputFilterSensitiveLog)
  .ser(se_ListPolicyTemplatesCommand)
  .de(de_ListPolicyTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyTemplatesInput;
      output: ListPolicyTemplatesOutput;
    };
    sdk: {
      input: ListPolicyTemplatesCommandInput;
      output: ListPolicyTemplatesCommandOutput;
    };
  };
}
