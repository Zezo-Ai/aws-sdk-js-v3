// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCapacityManagerDataExportRequest, DeleteCapacityManagerDataExportResult } from "../models/models_3";
import {
  de_DeleteCapacityManagerDataExportCommand,
  se_DeleteCapacityManagerDataExportCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCapacityManagerDataExportCommand}.
 */
export interface DeleteCapacityManagerDataExportCommandInput extends DeleteCapacityManagerDataExportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCapacityManagerDataExportCommand}.
 */
export interface DeleteCapacityManagerDataExportCommandOutput
  extends DeleteCapacityManagerDataExportResult,
    __MetadataBearer {}

/**
 * <p>
 * Deletes an existing Capacity Manager data export configuration. This stops future scheduled exports but does not delete previously exported files from S3.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCapacityManagerDataExportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCapacityManagerDataExportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteCapacityManagerDataExportRequest
 *   CapacityManagerDataExportId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteCapacityManagerDataExportCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCapacityManagerDataExportResult
 * //   CapacityManagerDataExportId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCapacityManagerDataExportCommandInput - {@link DeleteCapacityManagerDataExportCommandInput}
 * @returns {@link DeleteCapacityManagerDataExportCommandOutput}
 * @see {@link DeleteCapacityManagerDataExportCommandInput} for command's `input` shape.
 * @see {@link DeleteCapacityManagerDataExportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteCapacityManagerDataExportCommand extends $Command
  .classBuilder<
    DeleteCapacityManagerDataExportCommandInput,
    DeleteCapacityManagerDataExportCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteCapacityManagerDataExport", {})
  .n("EC2Client", "DeleteCapacityManagerDataExportCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCapacityManagerDataExportCommand)
  .de(de_DeleteCapacityManagerDataExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCapacityManagerDataExportRequest;
      output: DeleteCapacityManagerDataExportResult;
    };
    sdk: {
      input: DeleteCapacityManagerDataExportCommandInput;
      output: DeleteCapacityManagerDataExportCommandOutput;
    };
  };
}
