// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeServiceEnvironmentsRequest, DescribeServiceEnvironmentsResponse } from "../models/models_0";
import {
  de_DescribeServiceEnvironmentsCommand,
  se_DescribeServiceEnvironmentsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceEnvironmentsCommand}.
 */
export interface DescribeServiceEnvironmentsCommandInput extends DescribeServiceEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceEnvironmentsCommand}.
 */
export interface DescribeServiceEnvironmentsCommandOutput
  extends DescribeServiceEnvironmentsResponse,
    __MetadataBearer {}

/**
 * <p>Describes one or more of your service environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DescribeServiceEnvironmentsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DescribeServiceEnvironmentsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // DescribeServiceEnvironmentsRequest
 *   serviceEnvironments: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeServiceEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceEnvironmentsResponse
 * //   serviceEnvironments: [ // ServiceEnvironmentDetailList
 * //     { // ServiceEnvironmentDetail
 * //       serviceEnvironmentName: "STRING_VALUE", // required
 * //       serviceEnvironmentArn: "STRING_VALUE", // required
 * //       serviceEnvironmentType: "SAGEMAKER_TRAINING", // required
 * //       state: "ENABLED" || "DISABLED",
 * //       status: "CREATING" || "UPDATING" || "DELETING" || "DELETED" || "VALID" || "INVALID",
 * //       capacityLimits: [ // CapacityLimits // required
 * //         { // CapacityLimit
 * //           maxCapacity: Number("int"),
 * //           capacityUnit: "STRING_VALUE",
 * //         },
 * //       ],
 * //       tags: { // TagrisTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeServiceEnvironmentsCommandInput - {@link DescribeServiceEnvironmentsCommandInput}
 * @returns {@link DescribeServiceEnvironmentsCommandOutput}
 * @see {@link DescribeServiceEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @public
 */
export class DescribeServiceEnvironmentsCommand extends $Command
  .classBuilder<
    DescribeServiceEnvironmentsCommandInput,
    DescribeServiceEnvironmentsCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "DescribeServiceEnvironments", {})
  .n("BatchClient", "DescribeServiceEnvironmentsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeServiceEnvironmentsCommand)
  .de(de_DescribeServiceEnvironmentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceEnvironmentsRequest;
      output: DescribeServiceEnvironmentsResponse;
    };
    sdk: {
      input: DescribeServiceEnvironmentsCommandInput;
      output: DescribeServiceEnvironmentsCommandOutput;
    };
  };
}
