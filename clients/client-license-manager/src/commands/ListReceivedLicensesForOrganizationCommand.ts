// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  ListReceivedLicensesForOrganizationRequest,
  ListReceivedLicensesForOrganizationResponse,
} from "../models/models_0";
import {
  de_ListReceivedLicensesForOrganizationCommand,
  se_ListReceivedLicensesForOrganizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReceivedLicensesForOrganizationCommand}.
 */
export interface ListReceivedLicensesForOrganizationCommandInput extends ListReceivedLicensesForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link ListReceivedLicensesForOrganizationCommand}.
 */
export interface ListReceivedLicensesForOrganizationCommandOutput
  extends ListReceivedLicensesForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Lists the licenses received for all accounts in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListReceivedLicensesForOrganizationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListReceivedLicensesForOrganizationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const input = { // ListReceivedLicensesForOrganizationRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListReceivedLicensesForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // ListReceivedLicensesForOrganizationResponse
 * //   Licenses: [ // GrantedLicenseList
 * //     { // GrantedLicense
 * //       LicenseArn: "STRING_VALUE",
 * //       LicenseName: "STRING_VALUE",
 * //       ProductName: "STRING_VALUE",
 * //       ProductSKU: "STRING_VALUE",
 * //       Issuer: { // IssuerDetails
 * //         Name: "STRING_VALUE",
 * //         SignKey: "STRING_VALUE",
 * //         KeyFingerprint: "STRING_VALUE",
 * //       },
 * //       HomeRegion: "STRING_VALUE",
 * //       Status: "AVAILABLE" || "PENDING_AVAILABLE" || "DEACTIVATED" || "SUSPENDED" || "EXPIRED" || "PENDING_DELETE" || "DELETED",
 * //       Validity: { // DatetimeRange
 * //         Begin: "STRING_VALUE", // required
 * //         End: "STRING_VALUE",
 * //       },
 * //       Beneficiary: "STRING_VALUE",
 * //       Entitlements: [ // EntitlementList
 * //         { // Entitlement
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //           MaxCount: Number("long"),
 * //           Overage: true || false,
 * //           Unit: "Count" || "None" || "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second", // required
 * //           AllowCheckIn: true || false,
 * //         },
 * //       ],
 * //       ConsumptionConfiguration: { // ConsumptionConfiguration
 * //         RenewType: "None" || "Weekly" || "Monthly",
 * //         ProvisionalConfiguration: { // ProvisionalConfiguration
 * //           MaxTimeToLiveInMinutes: Number("int"), // required
 * //         },
 * //         BorrowConfiguration: { // BorrowConfiguration
 * //           AllowEarlyCheckIn: true || false, // required
 * //           MaxTimeToLiveInMinutes: Number("int"), // required
 * //         },
 * //       },
 * //       LicenseMetadata: [ // MetadataList
 * //         { // Metadata
 * //           Name: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreateTime: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //       ReceivedMetadata: { // ReceivedMetadata
 * //         ReceivedStatus: "PENDING_WORKFLOW" || "PENDING_ACCEPT" || "REJECTED" || "ACTIVE" || "FAILED_WORKFLOW" || "DELETED" || "DISABLED" || "WORKFLOW_COMPLETED",
 * //         ReceivedStatusReason: "STRING_VALUE",
 * //         AllowedOperations: [ // AllowedOperationList
 * //           "CreateGrant" || "CheckoutLicense" || "CheckoutBorrowLicense" || "CheckInLicense" || "ExtendConsumptionLicense" || "ListPurchasedLicenses" || "CreateToken",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReceivedLicensesForOrganizationCommandInput - {@link ListReceivedLicensesForOrganizationCommandInput}
 * @returns {@link ListReceivedLicensesForOrganizationCommandOutput}
 * @see {@link ListReceivedLicensesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListReceivedLicensesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class ListReceivedLicensesForOrganizationCommand extends $Command
  .classBuilder<
    ListReceivedLicensesForOrganizationCommandInput,
    ListReceivedLicensesForOrganizationCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "ListReceivedLicensesForOrganization", {})
  .n("LicenseManagerClient", "ListReceivedLicensesForOrganizationCommand")
  .f(void 0, void 0)
  .ser(se_ListReceivedLicensesForOrganizationCommand)
  .de(de_ListReceivedLicensesForOrganizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReceivedLicensesForOrganizationRequest;
      output: ListReceivedLicensesForOrganizationResponse;
    };
    sdk: {
      input: ListReceivedLicensesForOrganizationCommandInput;
      output: ListReceivedLicensesForOrganizationCommandOutput;
    };
  };
}
