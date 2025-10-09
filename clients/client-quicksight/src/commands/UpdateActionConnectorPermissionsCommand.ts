// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateActionConnectorPermissionsRequest, UpdateActionConnectorPermissionsResponse } from "../models/models_5";
import {
  de_UpdateActionConnectorPermissionsCommand,
  se_UpdateActionConnectorPermissionsCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateActionConnectorPermissionsCommand}.
 */
export interface UpdateActionConnectorPermissionsCommandInput extends UpdateActionConnectorPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateActionConnectorPermissionsCommand}.
 */
export interface UpdateActionConnectorPermissionsCommandOutput
  extends UpdateActionConnectorPermissionsResponse,
    __MetadataBearer {}

/**
 * <p>Updates the permissions for an action connector by granting or revoking access for specific users and groups. You can control who can view, use, or manage the action connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateActionConnectorPermissionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateActionConnectorPermissionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateActionConnectorPermissionsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ActionConnectorId: "STRING_VALUE", // required
 *   GrantPermissions: [ // ResourcePermissionList
 *     { // ResourcePermission
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // ActionList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   RevokePermissions: [
 *     {
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateActionConnectorPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateActionConnectorPermissionsResponse
 * //   Arn: "STRING_VALUE",
 * //   ActionConnectorId: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   Permissions: [ // ResourcePermissionList
 * //     { // ResourcePermission
 * //       Principal: "STRING_VALUE", // required
 * //       Actions: [ // ActionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateActionConnectorPermissionsCommandInput - {@link UpdateActionConnectorPermissionsCommandInput}
 * @returns {@link UpdateActionConnectorPermissionsCommandOutput}
 * @see {@link UpdateActionConnectorPermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateActionConnectorPermissionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateActionConnectorPermissionsCommand extends $Command
  .classBuilder<
    UpdateActionConnectorPermissionsCommandInput,
    UpdateActionConnectorPermissionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "UpdateActionConnectorPermissions", {})
  .n("QuickSightClient", "UpdateActionConnectorPermissionsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateActionConnectorPermissionsCommand)
  .de(de_UpdateActionConnectorPermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateActionConnectorPermissionsRequest;
      output: UpdateActionConnectorPermissionsResponse;
    };
    sdk: {
      input: UpdateActionConnectorPermissionsCommandInput;
      output: UpdateActionConnectorPermissionsCommandOutput;
    };
  };
}
