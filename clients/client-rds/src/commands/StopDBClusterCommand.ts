// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopDBClusterMessage, StopDBClusterResult } from "../models/models_1";
import { de_StopDBClusterCommand, se_StopDBClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopDBClusterCommand}.
 */
export interface StopDBClusterCommandInput extends StopDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link StopDBClusterCommand}.
 */
export interface StopDBClusterCommandOutput extends StopDBClusterResult, __MetadataBearer {}

/**
 * <p>Stops an Amazon Aurora DB cluster. When you stop a DB cluster, Aurora retains the DB cluster's
 *        metadata, including its endpoints and DB parameter groups. Aurora also
 *        retains the transaction logs so you can do a point-in-time restore if necessary.</p>
 *          <p>For more information, see
 *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-cluster-stop-start.html">
 *                Stopping and Starting an Aurora Cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This operation only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // StopDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopDBClusterCommand(input);
 * const response = await client.send(command);
 * // { // StopDBClusterResult
 * //   DBCluster: { // DBCluster
 * //     AllocatedStorage: Number("int"),
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     BackupRetentionPeriod: Number("int"),
 * //     CharacterSetName: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     DBClusterParameterGroup: "STRING_VALUE",
 * //     DBSubnetGroup: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     AutomaticRestartTime: new Date("TIMESTAMP"),
 * //     PercentProgress: "STRING_VALUE",
 * //     EarliestRestorableTime: new Date("TIMESTAMP"),
 * //     Endpoint: "STRING_VALUE",
 * //     ReaderEndpoint: "STRING_VALUE",
 * //     CustomEndpoints: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     MultiAZ: true || false,
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LatestRestorableTime: new Date("TIMESTAMP"),
 * //     Port: Number("int"),
 * //     MasterUsername: "STRING_VALUE",
 * //     DBClusterOptionGroupMemberships: [ // DBClusterOptionGroupMemberships
 * //       { // DBClusterOptionGroupStatus
 * //         DBClusterOptionGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     ReplicationSourceIdentifier: "STRING_VALUE",
 * //     ReadReplicaIdentifiers: [ // ReadReplicaIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     StatusInfos: [ // DBClusterStatusInfoList
 * //       { // DBClusterStatusInfo
 * //         StatusType: "STRING_VALUE",
 * //         Normal: true || false,
 * //         Status: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBClusterMembers: [ // DBClusterMemberList
 * //       { // DBClusterMember
 * //         DBInstanceIdentifier: "STRING_VALUE",
 * //         IsClusterWriter: true || false,
 * //         DBClusterParameterGroupStatus: "STRING_VALUE",
 * //         PromotionTier: Number("int"),
 * //       },
 * //     ],
 * //     VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         VpcSecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     HostedZoneId: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DbClusterResourceId: "STRING_VALUE",
 * //     DBClusterArn: "STRING_VALUE",
 * //     AssociatedRoles: [ // DBClusterRoles
 * //       { // DBClusterRole
 * //         RoleArn: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         FeatureName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     CloneGroupId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     EarliestBacktrackTime: new Date("TIMESTAMP"),
 * //     BacktrackWindow: Number("long"),
 * //     BacktrackConsumedChangeRecords: Number("long"),
 * //     EnabledCloudwatchLogsExports: [ // LogTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     Capacity: Number("int"),
 * //     EngineMode: "STRING_VALUE",
 * //     ScalingConfigurationInfo: { // ScalingConfigurationInfo
 * //       MinCapacity: Number("int"),
 * //       MaxCapacity: Number("int"),
 * //       AutoPause: true || false,
 * //       SecondsUntilAutoPause: Number("int"),
 * //       TimeoutAction: "STRING_VALUE",
 * //       SecondsBeforeTimeout: Number("int"),
 * //     },
 * //     RdsCustomClusterConfiguration: { // RdsCustomClusterConfiguration
 * //       InterconnectSubnetId: "STRING_VALUE",
 * //       TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //       ReplicaMode: "open-read-only" || "mounted",
 * //     },
 * //     DeletionProtection: true || false,
 * //     HttpEndpointEnabled: true || false,
 * //     ActivityStreamMode: "sync" || "async",
 * //     ActivityStreamStatus: "stopped" || "starting" || "started" || "stopping",
 * //     ActivityStreamKmsKeyId: "STRING_VALUE",
 * //     ActivityStreamKinesisStreamName: "STRING_VALUE",
 * //     CopyTagsToSnapshot: true || false,
 * //     CrossAccountClone: true || false,
 * //     DomainMemberships: [ // DomainMembershipList
 * //       { // DomainMembership
 * //         Domain: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         FQDN: "STRING_VALUE",
 * //         IAMRoleName: "STRING_VALUE",
 * //         OU: "STRING_VALUE",
 * //         AuthSecretArn: "STRING_VALUE",
 * //         DnsIps: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GlobalClusterIdentifier: "STRING_VALUE",
 * //     GlobalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "unknown",
 * //     GlobalWriteForwardingRequested: true || false,
 * //     PendingModifiedValues: { // ClusterPendingModifiedValues
 * //       PendingCloudwatchLogsExports: { // PendingCloudwatchLogsExports
 * //         LogTypesToEnable: [
 * //           "STRING_VALUE",
 * //         ],
 * //         LogTypesToDisable: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       MasterUserPassword: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       BackupRetentionPeriod: Number("int"),
 * //       AllocatedStorage: Number("int"),
 * //       RdsCustomClusterConfiguration: {
 * //         InterconnectSubnetId: "STRING_VALUE",
 * //         TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //         ReplicaMode: "open-read-only" || "mounted",
 * //       },
 * //       Iops: Number("int"),
 * //       StorageType: "STRING_VALUE",
 * //       CertificateDetails: { // CertificateDetails
 * //         CAIdentifier: "STRING_VALUE",
 * //         ValidTill: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     DBClusterInstanceClass: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     PubliclyAccessible: true || false,
 * //     AutoMinorVersionUpgrade: true || false,
 * //     MonitoringInterval: Number("int"),
 * //     MonitoringRoleArn: "STRING_VALUE",
 * //     DatabaseInsightsMode: "standard" || "advanced",
 * //     PerformanceInsightsEnabled: true || false,
 * //     PerformanceInsightsKMSKeyId: "STRING_VALUE",
 * //     PerformanceInsightsRetentionPeriod: Number("int"),
 * //     ServerlessV2ScalingConfiguration: { // ServerlessV2ScalingConfigurationInfo
 * //       MinCapacity: Number("double"),
 * //       MaxCapacity: Number("double"),
 * //       SecondsUntilAutoPause: Number("int"),
 * //     },
 * //     NetworkType: "STRING_VALUE",
 * //     DBSystemId: "STRING_VALUE",
 * //     MasterUserSecret: { // MasterUserSecret
 * //       SecretArn: "STRING_VALUE",
 * //       SecretStatus: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     IOOptimizedNextAllowedModificationTime: new Date("TIMESTAMP"),
 * //     LocalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "requested",
 * //     AwsBackupRecoveryPointArn: "STRING_VALUE",
 * //     LimitlessDatabase: { // LimitlessDatabase
 * //       Status: "active" || "not-in-use" || "enabled" || "disabled" || "enabling" || "disabling" || "modifying-max-capacity" || "error",
 * //       MinRequiredACU: Number("double"),
 * //     },
 * //     StorageThroughput: Number("int"),
 * //     ClusterScalabilityType: "standard" || "limitless",
 * //     CertificateDetails: {
 * //       CAIdentifier: "STRING_VALUE",
 * //       ValidTill: new Date("TIMESTAMP"),
 * //     },
 * //     EngineLifecycleSupport: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StopDBClusterCommandInput - {@link StopDBClusterCommandInput}
 * @returns {@link StopDBClusterCommandOutput}
 * @see {@link StopDBClusterCommandInput} for command's `input` shape.
 * @see {@link StopDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link InvalidDBShardGroupStateFault} (client fault)
 *  <p>The DB shard group must be in the available state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To stop a DB cluster
 * ```javascript
 * // The following example stops a DB cluster and its DB instances.
 * const input = {
 *   DBClusterIdentifier: "mydbcluster"
 * };
 * const command = new StopDBClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBCluster: {
 *     AllocatedStorage: 1,
 *     AvailabilityZones: [
 *       "us-east-1a",
 *       "us-east-1e",
 *       "us-east-1b"
 *     ],
 *     BackupRetentionPeriod: 1,
 *     DBClusterIdentifier: "mydbcluster",
 *     DatabaseName: "mydb"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StopDBClusterCommand extends $Command
  .classBuilder<
    StopDBClusterCommandInput,
    StopDBClusterCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "StopDBCluster", {})
  .n("RDSClient", "StopDBClusterCommand")
  .f(void 0, void 0)
  .ser(se_StopDBClusterCommand)
  .de(de_StopDBClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDBClusterMessage;
      output: StopDBClusterResult;
    };
    sdk: {
      input: StopDBClusterCommandInput;
      output: StopDBClusterCommandOutput;
    };
  };
}
