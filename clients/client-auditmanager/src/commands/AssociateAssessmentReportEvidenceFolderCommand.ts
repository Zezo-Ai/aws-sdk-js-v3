// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateAssessmentReportEvidenceFolderRequest,
  AssociateAssessmentReportEvidenceFolderResponse,
} from "../models/models_0";
import {
  de_AssociateAssessmentReportEvidenceFolderCommand,
  se_AssociateAssessmentReportEvidenceFolderCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAssessmentReportEvidenceFolderCommand}.
 */
export interface AssociateAssessmentReportEvidenceFolderCommandInput
  extends AssociateAssessmentReportEvidenceFolderRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAssessmentReportEvidenceFolderCommand}.
 */
export interface AssociateAssessmentReportEvidenceFolderCommandOutput
  extends AssociateAssessmentReportEvidenceFolderResponse,
    __MetadataBearer {}

/**
 * <p> Associates an evidence folder to an assessment report in an Audit Manager
 *          assessment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, AssociateAssessmentReportEvidenceFolderCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // AssociateAssessmentReportEvidenceFolderRequest
 *   assessmentId: "STRING_VALUE", // required
 *   evidenceFolderId: "STRING_VALUE", // required
 * };
 * const command = new AssociateAssessmentReportEvidenceFolderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateAssessmentReportEvidenceFolderCommandInput - {@link AssociateAssessmentReportEvidenceFolderCommandInput}
 * @returns {@link AssociateAssessmentReportEvidenceFolderCommandOutput}
 * @see {@link AssociateAssessmentReportEvidenceFolderCommandInput} for command's `input` shape.
 * @see {@link AssociateAssessmentReportEvidenceFolderCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource that's specified in the request can't be found. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 *
 * @public
 */
export class AssociateAssessmentReportEvidenceFolderCommand extends $Command
  .classBuilder<
    AssociateAssessmentReportEvidenceFolderCommandInput,
    AssociateAssessmentReportEvidenceFolderCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "AssociateAssessmentReportEvidenceFolder", {})
  .n("AuditManagerClient", "AssociateAssessmentReportEvidenceFolderCommand")
  .f(void 0, void 0)
  .ser(se_AssociateAssessmentReportEvidenceFolderCommand)
  .de(de_AssociateAssessmentReportEvidenceFolderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAssessmentReportEvidenceFolderRequest;
      output: {};
    };
    sdk: {
      input: AssociateAssessmentReportEvidenceFolderCommandInput;
      output: AssociateAssessmentReportEvidenceFolderCommandOutput;
    };
  };
}
