// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopClusterInput, StopClusterOutput } from "../models/models_0";
import { de_StopClusterCommand, se_StopClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopClusterCommand}.
 */
export interface StopClusterCommandInput extends StopClusterInput {}
/**
 * @public
 *
 * The output of {@link StopClusterCommand}.
 */
export interface StopClusterCommandOutput extends StopClusterOutput, __MetadataBearer {}

/**
 * <p>Stops the running elastic cluster that is specified by <code>clusterArn</code>.
 *       The elastic cluster must be in the <i>available</i> state. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, StopClusterCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, StopClusterCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * const client = new DocDBElasticClient(config);
 * const input = { // StopClusterInput
 *   clusterArn: "STRING_VALUE", // required
 * };
 * const command = new StopClusterCommand(input);
 * const response = await client.send(command);
 * // { // StopClusterOutput
 * //   cluster: { // Cluster
 * //     clusterName: "STRING_VALUE", // required
 * //     clusterArn: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     clusterEndpoint: "STRING_VALUE", // required
 * //     createTime: "STRING_VALUE", // required
 * //     adminUserName: "STRING_VALUE", // required
 * //     authType: "STRING_VALUE", // required
 * //     shardCapacity: Number("int"), // required
 * //     shardCount: Number("int"), // required
 * //     vpcSecurityGroupIds: [ // StringList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     subnetIds: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     preferredMaintenanceWindow: "STRING_VALUE", // required
 * //     kmsKeyId: "STRING_VALUE", // required
 * //     shards: [ // ShardList
 * //       { // Shard
 * //         shardId: "STRING_VALUE", // required
 * //         createTime: "STRING_VALUE", // required
 * //         status: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     backupRetentionPeriod: Number("int"),
 * //     preferredBackupWindow: "STRING_VALUE",
 * //     shardInstanceCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StopClusterCommandInput - {@link StopClusterCommandInput}
 * @returns {@link StopClusterCommandOutput}
 * @see {@link StopClusterCommandInput} for command's `input` shape.
 * @see {@link StopClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>ThrottlingException will be thrown when request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A structure defining a validation exception.</p>
 *
 * @throws {@link DocDBElasticServiceException}
 * <p>Base exception class for all service exceptions from DocDBElastic service.</p>
 *
 *
 * @example Basic Stop Cluster Example
 * ```javascript
 * // update applied
 * const input = {
 *   clusterArn: "arn:aws:docdb-elastic:us-east-1:$AWS_ACCOUNT_ID:cluster/$CLUSTER_ID"
 * };
 * const command = new StopClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   cluster: {
 *     adminUserName: "sampleAdminUser",
 *     authType: "PLAIN_TEXT",
 *     backupRetentionPeriod: 1,
 *     clusterArn: "arn:aws:docdb-elastic:us-east-1:$AWS_ACCOUNT_ID:cluster/$CLUSTER_ID",
 *     clusterEndpoint: "sampleClusterName.us-east-1.docdb-elastic.amazonaws.com",
 *     clusterName: "sampleClusterName",
 *     createTime: "2000-01-01T00:00:00.000Z",
 *     kmsKeyId: "AWS_OWNED_KMS_KEY",
 *     preferredBackupWindow: "01:00-01:30",
 *     preferredMaintenanceWindow: "mon:00:00-mon:00:30",
 *     shardCapacity: 2,
 *     shardCount: 2,
 *     shardInstanceCount: 1,
 *     shards:     [],
 *     status: "STOPPING",
 *     subnetIds: [
 *       "subnetId1",
 *       "subnetId2"
 *     ],
 *     vpcSecurityGroupIds: [
 *       "vpcSgId1, vpcSgId2"
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StopClusterCommand extends $Command
  .classBuilder<
    StopClusterCommandInput,
    StopClusterCommandOutput,
    DocDBElasticClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBElasticClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeraDbLionfishServiceLambda", "StopCluster", {})
  .n("DocDBElasticClient", "StopClusterCommand")
  .f(void 0, void 0)
  .ser(se_StopClusterCommand)
  .de(de_StopClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopClusterInput;
      output: StopClusterOutput;
    };
    sdk: {
      input: StopClusterCommandInput;
      output: StopClusterCommandOutput;
    };
  };
}
