// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInsightRequest, DescribeInsightResponse } from "../models/models_0";
import { de_DescribeInsightCommand, se_DescribeInsightCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInsightCommand}.
 */
export interface DescribeInsightCommandInput extends DescribeInsightRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInsightCommand}.
 */
export interface DescribeInsightCommandOutput extends DescribeInsightResponse, __MetadataBearer {}

/**
 * <p> Returns details about an insight that you specify using its ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeInsightCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeInsightCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // DescribeInsightRequest
 *   Id: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DescribeInsightCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInsightResponse
 * //   ProactiveInsight: { // ProactiveInsight
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Severity: "LOW" || "MEDIUM" || "HIGH",
 * //     Status: "ONGOING" || "CLOSED",
 * //     InsightTimeRange: { // InsightTimeRange
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //     PredictionTimeRange: { // PredictionTimeRange
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //     ResourceCollection: { // ResourceCollection
 * //       CloudFormation: { // CloudFormationCollection
 * //         StackNames: [ // StackNames
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Tags: [ // TagCollections
 * //         { // TagCollection
 * //           AppBoundaryKey: "STRING_VALUE", // required
 * //           TagValues: [ // TagValues // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     SsmOpsItemId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * //   ReactiveInsight: { // ReactiveInsight
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Severity: "LOW" || "MEDIUM" || "HIGH",
 * //     Status: "ONGOING" || "CLOSED",
 * //     InsightTimeRange: {
 * //       StartTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //     ResourceCollection: {
 * //       CloudFormation: {
 * //         StackNames: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Tags: [
 * //         {
 * //           AppBoundaryKey: "STRING_VALUE", // required
 * //           TagValues: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     SsmOpsItemId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInsightCommandInput - {@link DescribeInsightCommandInput}
 * @returns {@link DescribeInsightCommandOutput}
 * @see {@link DescribeInsightCommandInput} for command's `input` shape.
 * @see {@link DescribeInsightCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class DescribeInsightCommand extends $Command
  .classBuilder<
    DescribeInsightCommandInput,
    DescribeInsightCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CapstoneControlPlaneService", "DescribeInsight", {})
  .n("DevOpsGuruClient", "DescribeInsightCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInsightCommand)
  .de(de_DescribeInsightCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInsightRequest;
      output: DescribeInsightResponse;
    };
    sdk: {
      input: DescribeInsightCommandInput;
      output: DescribeInsightCommandOutput;
    };
  };
}
