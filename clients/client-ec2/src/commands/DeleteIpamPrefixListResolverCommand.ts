// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIpamPrefixListResolverRequest, DeleteIpamPrefixListResolverResult } from "../models/models_3";
import { de_DeleteIpamPrefixListResolverCommand, se_DeleteIpamPrefixListResolverCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIpamPrefixListResolverCommand}.
 */
export interface DeleteIpamPrefixListResolverCommandInput extends DeleteIpamPrefixListResolverRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpamPrefixListResolverCommand}.
 */
export interface DeleteIpamPrefixListResolverCommandOutput
  extends DeleteIpamPrefixListResolverResult,
    __MetadataBearer {}

/**
 * <p>Deletes an IPAM prefix list resolver. Before deleting a resolver, you must first delete all resolver targets associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamPrefixListResolverCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamPrefixListResolverCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteIpamPrefixListResolverRequest
 *   DryRun: true || false,
 *   IpamPrefixListResolverId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpamPrefixListResolverCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIpamPrefixListResolverResult
 * //   IpamPrefixListResolver: { // IpamPrefixListResolver
 * //     OwnerId: "STRING_VALUE",
 * //     IpamPrefixListResolverId: "STRING_VALUE",
 * //     IpamPrefixListResolverArn: "STRING_VALUE",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     AddressFamily: "ipv4" || "ipv6",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LastVersionCreationStatus: "pending" || "success" || "failure",
 * //     LastVersionCreationStatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteIpamPrefixListResolverCommandInput - {@link DeleteIpamPrefixListResolverCommandInput}
 * @returns {@link DeleteIpamPrefixListResolverCommandOutput}
 * @see {@link DeleteIpamPrefixListResolverCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamPrefixListResolverCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteIpamPrefixListResolverCommand extends $Command
  .classBuilder<
    DeleteIpamPrefixListResolverCommandInput,
    DeleteIpamPrefixListResolverCommandOutput,
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
  .s("AmazonEC2", "DeleteIpamPrefixListResolver", {})
  .n("EC2Client", "DeleteIpamPrefixListResolverCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIpamPrefixListResolverCommand)
  .de(de_DeleteIpamPrefixListResolverCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpamPrefixListResolverRequest;
      output: DeleteIpamPrefixListResolverResult;
    };
    sdk: {
      input: DeleteIpamPrefixListResolverCommandInput;
      output: DeleteIpamPrefixListResolverCommandOutput;
    };
  };
}
