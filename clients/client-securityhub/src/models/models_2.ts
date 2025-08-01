// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AccountDetails,
  Action,
  ActionTarget,
  Adjustment,
  AllowedOperators,
  AssociationStatus,
  AssociationType,
  AutoEnableStandards,
  AutomationRulesAction,
  AutomationRulesActionV2,
  AutomationRulesConfig,
  AutomationRulesFindingFilters,
  AwsAmazonMqBrokerDetails,
  AwsApiGatewayRestApiDetails,
  AwsApiGatewayStageDetails,
  AwsApiGatewayV2ApiDetails,
  AwsApiGatewayV2StageDetails,
  AwsAppSyncGraphQlApiDetails,
  AwsAthenaWorkGroupDetails,
  AwsAutoScalingAutoScalingGroupDetails,
  AwsAutoScalingLaunchConfigurationDetails,
  AwsBackupBackupPlanDetails,
  AwsBackupBackupVaultDetails,
  AwsBackupRecoveryPointDetails,
  AwsCertificateManagerCertificateDetails,
  AwsCloudFormationStackDetails,
  AwsCloudFrontDistributionDetails,
  AwsCloudTrailTrailDetails,
  AwsCloudWatchAlarmDetails,
  AwsCodeBuildProjectDetails,
  AwsDmsEndpointDetails,
  AwsDmsReplicationInstanceDetails,
  AwsDmsReplicationTaskDetails,
  AwsDynamoDbTableDetails,
  AwsEc2ClientVpnEndpointDetails,
  AwsEc2EipDetails,
  AwsEc2InstanceDetails,
  AwsEc2LaunchTemplateDetails,
  AwsEc2NetworkAclDetails,
  AwsEc2NetworkInterfaceDetails,
  AwsEc2RouteTableDetails,
  AwsEc2SecurityGroupDetails,
  AwsEc2SubnetDetails,
  AwsEc2TransitGatewayDetails,
  AwsEc2VolumeDetails,
  AwsEc2VpcDetails,
  AwsEc2VpcEndpointServiceDetails,
  AwsEc2VpcPeeringConnectionDetails,
  AwsEc2VpnConnectionDetails,
  AwsEcrContainerImageDetails,
  AwsEcrRepositoryDetails,
  AwsEcsClusterDetails,
  AwsEcsContainerDetails,
  AwsEcsServiceDetails,
  ConfigurationPolicyAssociationStatus,
  DateFilter,
  MapFilter,
  NoteUpdate,
  NumberFilter,
  RelatedFinding,
  RuleStatus,
  RuleStatusV2,
  SeverityLabel,
  SeverityUpdate,
  StringFilter,
  VerificationState,
  WorkflowStatus,
  WorkflowUpdate,
} from "./models_0";

import {
  AwsEcsTaskDefinitionDetails,
  AwsEcsTaskDetails,
  AwsEfsAccessPointDetails,
  AwsEksClusterDetails,
  AwsElasticBeanstalkEnvironmentDetails,
  AwsElasticsearchDomainDetails,
  AwsElbLoadBalancerDetails,
  AwsElbv2LoadBalancerDetails,
  AwsEventSchemasRegistryDetails,
  AwsEventsEndpointDetails,
  AwsEventsEventbusDetails,
  AwsGuardDutyDetectorDetails,
  AwsIamAccessKeyDetails,
  AwsIamGroupDetails,
  AwsIamPolicyDetails,
  AwsIamRoleDetails,
  AwsIamUserDetails,
  AwsKinesisStreamDetails,
  AwsKmsKeyDetails,
  AwsLambdaFunctionDetails,
  AwsLambdaLayerVersionDetails,
  AwsMskClusterDetails,
  AwsNetworkFirewallFirewallDetails,
  AwsNetworkFirewallFirewallPolicyDetails,
  AwsNetworkFirewallRuleGroupDetails,
  AwsOpenSearchServiceDomainDetails,
  AwsRdsDbClusterDetails,
  AwsRdsDbClusterSnapshotDetails,
  AwsRdsDbInstanceDetails,
  AwsRdsDbSecurityGroupDetails,
  AwsRdsDbSnapshotDetails,
  AwsRdsEventSubscriptionDetails,
  AwsRedshiftClusterDetails,
  AwsRoute53HostedZoneDetails,
  AwsS3AccessPointDetails,
  AwsS3AccountPublicAccessBlockDetails,
  AwsS3BucketDetails,
  AwsS3ObjectDetails,
  AwsSageMakerNotebookInstanceDetails,
  AwsSecretsManagerSecretDetails,
  ClassificationResult,
  Compliance,
  Detection,
  FindingProviderFields,
  GeneratorDetails,
  Malware,
  Network,
  NetworkPathComponent,
  Note,
  PatchSummary,
  ProcessDetails,
  RecordState,
  Remediation,
} from "./models_1";

import { SecurityHubServiceException as __BaseException } from "./SecurityHubServiceException";

/**
 * <p>Provides details about sensitive data that was detected on a resource.</p>
 * @public
 */
export interface DataClassificationDetails {
  /**
   * <p>The path to the folder or file that contains the sensitive data.</p>
   * @public
   */
  DetailedResultsLocation?: string | undefined;

  /**
   * <p>The details about the sensitive data that was detected on the resource.</p>
   * @public
   */
  Result?: ClassificationResult | undefined;
}

/**
 * <p>A wrapper type for the attributes of an Amazon SNS subscription.</p>
 * @public
 */
export interface AwsSnsTopicSubscription {
  /**
   * <p>The subscription's endpoint (format depends on the protocol).</p>
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * <p>The subscription's protocol.</p>
   * @public
   */
  Protocol?: string | undefined;
}

/**
 * <p>Provides information about an Amazon SNS topic to which notifications can be published.</p>
 * @public
 */
export interface AwsSnsTopicDetails {
  /**
   * <p>The ID of an Amazon Web Services managed key for Amazon SNS or a customer managed key.</p>
   * @public
   */
  KmsMasterKeyId?: string | undefined;

  /**
   * <p>Subscription is an embedded property that describes the subscription endpoints of an Amazon SNS topic.</p>
   * @public
   */
  Subscription?: AwsSnsTopicSubscription[] | undefined;

  /**
   * <p>The name of the Amazon SNS topic.</p>
   * @public
   */
  TopicName?: string | undefined;

  /**
   * <p>The subscription's owner.</p>
   * @public
   */
  Owner?: string | undefined;

  /**
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *       </p>
   * @public
   */
  SqsSuccessFeedbackRoleArn?: string | undefined;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon SQS endpoint.
   *       </p>
   * @public
   */
  SqsFailureFeedbackRoleArn?: string | undefined;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to a platform application endpoint.
   *       </p>
   * @public
   */
  ApplicationSuccessFeedbackRoleArn?: string | undefined;

  /**
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.
   *       </p>
   * @public
   */
  FirehoseSuccessFeedbackRoleArn?: string | undefined;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an Amazon Kinesis Data Firehose endpoint.
   *       </p>
   * @public
   */
  FirehoseFailureFeedbackRoleArn?: string | undefined;

  /**
   * <p>Indicates successful message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint.
   *       </p>
   * @public
   */
  HttpSuccessFeedbackRoleArn?: string | undefined;

  /**
   * <p>Indicates failed message delivery status for an Amazon SNS topic that is subscribed to an HTTP endpoint. </p>
   * @public
   */
  HttpFailureFeedbackRoleArn?: string | undefined;
}

/**
 * <p>Data about a queue.</p>
 * @public
 */
export interface AwsSqsQueueDetails {
  /**
   * <p>The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling KMS again.</p>
   * @public
   */
  KmsDataKeyReusePeriodSeconds?: number | undefined;

  /**
   * <p>The ID of an Amazon Web Services managed key for Amazon SQS or a custom
   *          KMS key.</p>
   * @public
   */
  KmsMasterKeyId?: string | undefined;

  /**
   * <p>The name of the new queue.</p>
   * @public
   */
  QueueName?: string | undefined;

  /**
   * <p>The ARN of the dead-letter queue to which Amazon SQS moves
   *          messages after the value of <code>maxReceiveCount</code> is exceeded. </p>
   * @public
   */
  DeadLetterTargetArn?: string | undefined;
}

/**
 * <p>Provides the details about the compliance status for a patch.</p>
 * @public
 */
export interface AwsSsmComplianceSummary {
  /**
   * <p>The current patch compliance status. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_COMPLIANT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSPECIFIED_DATA</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>CRITICAL</code>.</p>
   * @public
   */
  CompliantCriticalCount?: number | undefined;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>HIGH</code>.</p>
   * @public
   */
  CompliantHighCount?: number | undefined;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   * @public
   */
  CompliantMediumCount?: number | undefined;

  /**
   * <p>The type of execution that was used determine compliance.</p>
   * @public
   */
  ExecutionType?: string | undefined;

  /**
   * <p>For the patch items that are noncompliant, the number of items that have a severity of
   *             <code>CRITICAL</code>.</p>
   * @public
   */
  NonCompliantCriticalCount?: number | undefined;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   * @public
   */
  CompliantInformationalCount?: number | undefined;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>INFORMATIONAL</code>.</p>
   * @public
   */
  NonCompliantInformationalCount?: number | undefined;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   * @public
   */
  CompliantUnspecifiedCount?: number | undefined;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>LOW</code>.</p>
   * @public
   */
  NonCompliantLowCount?: number | undefined;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>HIGH</code>.</p>
   * @public
   */
  NonCompliantHighCount?: number | undefined;

  /**
   * <p>For the patches that are compliant, the number that have a severity of
   *          <code>LOW</code>.</p>
   * @public
   */
  CompliantLowCount?: number | undefined;

  /**
   * <p>The type of resource for which the compliance was determined. For
   *             <code>AwsSsmPatchCompliance</code>, <code>ComplianceType</code> is <code>Patch</code>. </p>
   * @public
   */
  ComplianceType?: string | undefined;

  /**
   * <p>The identifier of the patch baseline. The patch baseline lists the patches that are
   *          approved for installation.</p>
   * @public
   */
  PatchBaselineId?: string | undefined;

  /**
   * <p>The highest severity for the patches. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSPECIFIED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  OverallSeverity?: string | undefined;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>MEDIUM</code>.</p>
   * @public
   */
  NonCompliantMediumCount?: number | undefined;

  /**
   * <p>For the patches that are noncompliant, the number that have a severity of
   *             <code>UNSPECIFIED</code>.</p>
   * @public
   */
  NonCompliantUnspecifiedCount?: number | undefined;

  /**
   * <p>The identifier of the patch group for which compliance was determined. A patch group
   *          uses tags to group EC2 instances that should have the same patch compliance.</p>
   * @public
   */
  PatchGroup?: string | undefined;
}

/**
 * <p>Provides details about the compliance for a patch.</p>
 * @public
 */
export interface AwsSsmPatch {
  /**
   * <p>The compliance status details for the patch.</p>
   * @public
   */
  ComplianceSummary?: AwsSsmComplianceSummary | undefined;
}

/**
 * <p>Provides information about the state of a patch on an instance based on the patch
 *          baseline that was used to patch the instance.</p>
 * @public
 */
export interface AwsSsmPatchComplianceDetails {
  /**
   * <p>Information about the status of a patch.</p>
   * @public
   */
  Patch?: AwsSsmPatch | undefined;
}

/**
 * <p>
 *             An object describing a CloudWatch log group. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html">
 *                 Amazon Web Services::Logs::LogGroup</a> in the <i>CloudFormation User Guide</i>.
 *         </p>
 * @public
 */
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails {
  /**
   * <p>The ARN (ends with <code>:*</code>) of the CloudWatch Logs log group to which you want your logs emitted.</p>
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * <p>
 *             An array of objects that describes where your execution history events will be logged.
 *         </p>
 * @public
 */
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails {
  /**
   * <p>
   *             An object describing a CloudWatch Logs log group. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html">
   *                 Amazon Web Services::Logs::LogGroup</a> in the <i>CloudFormation User Guide</i>.
   *         </p>
   * @public
   */
  CloudWatchLogsLogGroup?:
    | AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails
    | undefined;
}

/**
 * <p>
 *             The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options.
 *         </p>
 * @public
 */
export interface AwsStepFunctionStateMachineLoggingConfigurationDetails {
  /**
   * <p>
   *             An array of objects that describes where your execution history events will be logged.
   *         </p>
   * @public
   */
  Destinations?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails[] | undefined;

  /**
   * <p>
   *             Determines whether execution data is included in your log. When set to false, data is excluded.
   *         </p>
   * @public
   */
  IncludeExecutionData?: boolean | undefined;

  /**
   * <p>
   *             Defines which category of execution history events are logged.
   *         </p>
   * @public
   */
  Level?: string | undefined;
}

/**
 * <p>
 *             Specifies whether X-Ray tracing is enabled.
 *         </p>
 * @public
 */
export interface AwsStepFunctionStateMachineTracingConfigurationDetails {
  /**
   * <p>
   *             When set to true, X-Ray tracing is enabled.
   *         </p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p>
 *             Provides details about an Step Functions state machine, which is a workflow consisting of a series of event-
 *             driven steps.
 *         </p>
 * @public
 */
export interface AwsStepFunctionStateMachineDetails {
  /**
   * <p>
   *             A user-defined or an auto-generated string that identifies a <code>Map</code> state. This parameter is present only if
   *             the <code>stateMachineArn</code> specified in input is a qualified state machine ARN.
   *         </p>
   * @public
   */
  Label?: string | undefined;

  /**
   * <p>
   *             Used to set CloudWatch Logs options.
   *         </p>
   * @public
   */
  LoggingConfiguration?: AwsStepFunctionStateMachineLoggingConfigurationDetails | undefined;

  /**
   * <p>
   *             The name of the state machine.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the IAM role used when creating this state machine.
   *         </p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>
   *             The ARN that identifies the state machine.
   *         </p>
   * @public
   */
  StateMachineArn?: string | undefined;

  /**
   * <p>
   *             The current status of the state machine.
   *         </p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>
   *             Specifies whether X-Ray tracing is enabled.
   *         </p>
   * @public
   */
  TracingConfiguration?: AwsStepFunctionStateMachineTracingConfigurationDetails | undefined;

  /**
   * <p>
   *             The type of the state machine (STANDARD or EXPRESS).
   *         </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>A match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.</p>
 * @public
 */
export interface AwsWafRateBasedRuleMatchPredicate {
  /**
   * <p>The unique identifier for the predicate.</p>
   * @public
   */
  DataId?: string | undefined;

  /**
   * <p>If set to <code>true</code>, then the rule actions are performed on requests that match the predicate settings.</p>
   *          <p>If set to <code>false</code>, then the rule actions are performed on all requests except those that match the predicate settings.
   *       </p>
   * @public
   */
  Negated?: boolean | undefined;

  /**
   * <p>The type of predicate. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ByteMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GeoMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RegexMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SizeConstraint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SqlInjectionMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XssMatch</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Details about a rate-based rule for global resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.</p>
 * @public
 */
export interface AwsWafRateBasedRuleDetails {
  /**
   * <p>The name of the metrics for the rate-based rule.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The name of the rate-based rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.</p>
   * @public
   */
  RateKey?: string | undefined;

  /**
   * <p>The maximum number of requests that have an identical value for the field specified in <code>RateKey</code> that are allowed within a five-minute period. If the number of requests exceeds <code>RateLimit</code> and the other predicates specified in the rule are met, WAF triggers the action for the rule.</p>
   * @public
   */
  RateLimit?: number | undefined;

  /**
   * <p>The unique identifier for the rate-based rule.</p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The predicates to include in the rate-based rule.</p>
   * @public
   */
  MatchPredicates?: AwsWafRateBasedRuleMatchPredicate[] | undefined;
}

/**
 * <p>Details for a match predicate. A predicate might look for characteristics such as specific IP addresses, geographic locations, or sizes.</p>
 * @public
 */
export interface AwsWafRegionalRateBasedRuleMatchPredicate {
  /**
   * <p>The unique identifier for the predicate.</p>
   * @public
   */
  DataId?: string | undefined;

  /**
   * <p>If set to <code>true</code>, then the rule actions are performed on requests that match the predicate settings.</p>
   *          <p>If set to <code>false</code>, then the rule actions are performed on all requests except those that match the predicate settings.</p>
   * @public
   */
  Negated?: boolean | undefined;

  /**
   * <p>The type of predicate. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ByteMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GeoMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IPMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RegexMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SizeConstraint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SqlInjectionMatch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>XssMatch</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>contains details about a rate-based rule for Regional resources. A rate-based rule provides settings to indicate when to allow, block, or count a request. Rate-based rules include the number of requests that arrive over a specified period of time.</p>
 * @public
 */
export interface AwsWafRegionalRateBasedRuleDetails {
  /**
   * <p>The name of the metrics for the rate-based rule.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The name of the rate-based rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The field that WAF uses to determine whether requests are likely arriving from single source and are subject to rate monitoring.</p>
   * @public
   */
  RateKey?: string | undefined;

  /**
   * <p>The maximum number of requests that have an identical value for the field specified in <code>RateKey</code> that are allowed within a five-minute period. If the number of requests exceeds <code>RateLimit</code> and the other predicates specified in the rule are met, WAF triggers the action for the rule.</p>
   * @public
   */
  RateLimit?: number | undefined;

  /**
   * <p>The unique identifier for the rate-based rule.</p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The predicates to include in the rate-based rule.</p>
   * @public
   */
  MatchPredicates?: AwsWafRegionalRateBasedRuleMatchPredicate[] | undefined;
}

/**
 * <p>Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
 *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.
 *       </p>
 * @public
 */
export interface AwsWafRegionalRulePredicateListDetails {
  /**
   * <p>A unique identifier for a predicate in a rule, such as <code>ByteMatchSetId</code> or <code>IPSetId</code>.
   *       </p>
   * @public
   */
  DataId?: string | undefined;

  /**
   * <p>Specifies if you want WAF to allow, block, or count requests based on the settings in the
   *          <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, or <code>SizeConstraintSet</code>.
   *       </p>
   * @public
   */
  Negated?: boolean | undefined;

  /**
   * <p>The type of predicate in a rule, such as <code>ByteMatch</code> or <code>IPSet</code>.
   *       </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides information about an WAF Regional rule. This rule identifies the web requests that you want to allow, block, or count. </p>
 * @public
 */
export interface AwsWafRegionalRuleDetails {
  /**
   * <p>A name for the metrics for the rule.
   *       </p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>A descriptive name for the rule.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>,
   *             <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>,
   *             <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to
   *          add to a rule and, for each object, indicates whether you want to negate the settings. </p>
   * @public
   */
  PredicateList?: AwsWafRegionalRulePredicateListDetails[] | undefined;

  /**
   * <p>The ID of the rule.
   *       </p>
   * @public
   */
  RuleId?: string | undefined;
}

/**
 * <p>Describes the action that WAF should take on a web request when it matches the criteria defined in the rule.
 *       </p>
 * @public
 */
export interface AwsWafRegionalRuleGroupRulesActionDetails {
  /**
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>, <code>RegexMatchSet</code>,
   * <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and, for each object, indicates whether you want to negate the settings.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides information about the rules attached to a rule group
 *       </p>
 * @public
 */
export interface AwsWafRegionalRuleGroupRulesDetails {
  /**
   * <p>The action that WAF should take on a web request when it matches the criteria defined in the rule. </p>
   * @public
   */
  Action?: AwsWafRegionalRuleGroupRulesActionDetails | undefined;

  /**
   * <p>If you define more than one rule in a web ACL, WAF evaluates each request against the rules in
   *          order based on the value of <code>Priority</code>. </p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The ID for a rule.
   *       </p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The type of rule in the rule group.
   *       </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides information about an WAF Regional rule group. The rule group is a collection of rules for inspecting and controlling web
 *          requests. </p>
 * @public
 */
export interface AwsWafRegionalRuleGroupDetails {
  /**
   * <p>A name for the metrics for this rule group.
   *       </p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The descriptive name of the rule group.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the rule group.
   *       </p>
   * @public
   */
  RuleGroupId?: string | undefined;

  /**
   * <p>Provides information about the rule statements used to identify the web requests that you want to allow, block, or
   * count.
   *       </p>
   * @public
   */
  Rules?: AwsWafRegionalRuleGroupRulesDetails[] | undefined;
}

/**
 * <p>The action that WAF takes when a web request matches all conditions in the
 *          rule, such as allow, block, or count the request. </p>
 * @public
 */
export interface AwsWafRegionalWebAclRulesListActionDetails {
  /**
   * <p>For actions that are associated with a rule, the action that WAF takes when a web request matches all conditions in a rule.
   *       </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides details about the action to use in the place of the action that results from the rule group
 * evaluation.
 *       </p>
 * @public
 */
export interface AwsWafRegionalWebAclRulesListOverrideActionDetails {
  /**
   * <p>Overrides the rule evaluation result in the rule group.
   *       </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>A combination of <code>ByteMatchSet</code>, <code>IPSet</code>, and/or <code>SqlInjectionMatchSet</code>
 * objects that identify the web requests that you want to allow, block, or count.
 *       </p>
 * @public
 */
export interface AwsWafRegionalWebAclRulesListDetails {
  /**
   * <p>The action that WAF takes when a web request matches all conditions in the rule, such as allow,
   *          block, or count the request.
   *       </p>
   * @public
   */
  Action?: AwsWafRegionalWebAclRulesListActionDetails | undefined;

  /**
   * <p>Overrides the rule evaluation result in the rule group.
   *       </p>
   * @public
   */
  OverrideAction?: AwsWafRegionalWebAclRulesListOverrideActionDetails | undefined;

  /**
   * <p>The order in which WAF evaluates the rules in a web ACL.
   *       </p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The ID of an WAF Regional rule to associate with a web ACL. </p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>For actions that are associated with a rule, the action that WAF takes when a web
   * request matches all conditions in a rule.
   *       </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides information about the web access control list (web ACL). The web ACL contains the rules that identify the requests that you
 *          want to allow, block, or count. </p>
 * @public
 */
export interface AwsWafRegionalWebAclDetails {
  /**
   * <p>The action to perform if none of the rules contained in the web ACL match.
   *       </p>
   * @public
   */
  DefaultAction?: string | undefined;

  /**
   * <p>A name for the metrics for this web ACL.
   *       </p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>A descriptive name for the web ACL.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>An array that contains the action for each rule in a web ACL, the priority of the rule, and the ID of
   * the rule.
   *       </p>
   * @public
   */
  RulesList?: AwsWafRegionalWebAclRulesListDetails[] | undefined;

  /**
   * <p>The ID of the web ACL.
   *       </p>
   * @public
   */
  WebAclId?: string | undefined;
}

/**
 * <p>Provides details about the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
 *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and,
 * for each object, indicates whether you want to negate the settings.
 *       </p>
 * @public
 */
export interface AwsWafRulePredicateListDetails {
  /**
   * <p>A unique identifier for a predicate in a rule, such as <code>ByteMatchSetId</code> or <code>IPSetId</code>.
   *       </p>
   * @public
   */
  DataId?: string | undefined;

  /**
   * <p>Specifies if you want WAF to allow, block, or count requests based on the settings in the
   *          <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, or <code>SizeConstraintSet</code>.
   *       </p>
   * @public
   */
  Negated?: boolean | undefined;

  /**
   * <p>The type of predicate in a rule, such as <code>ByteMatch</code> or <code>IPSet</code>.
   *       </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides information about a WAF rule. This rule specifies the web requests that you want to allow, block, or count.
 *       </p>
 * @public
 */
export interface AwsWafRuleDetails {
  /**
   * <p>The name of the metrics for this rule.
   *       </p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>A descriptive name for the rule.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Specifies the <code>ByteMatchSet</code>, <code>IPSet</code>, <code>SqlInjectionMatchSet</code>, <code>XssMatchSet</code>,
   *          <code>RegexMatchSet</code>, <code>GeoMatchSet</code>, and <code>SizeConstraintSet</code> objects that you want to add to a rule and,
   *          for each object, indicates whether you want to negate the settings.
   *       </p>
   * @public
   */
  PredicateList?: AwsWafRulePredicateListDetails[] | undefined;

  /**
   * <p>The ID of the WAF rule.
   *       </p>
   * @public
   */
  RuleId?: string | undefined;
}

/**
 * <p>Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.
 *       </p>
 * @public
 */
export interface AwsWafRuleGroupRulesActionDetails {
  /**
   * <p>The action that WAF should take on a web request when it matches the rule's
   *          statement.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides information about the rules attached to the rule group. These rules identify the web requests that you want to
 *          allow, block, or count.
 *       </p>
 * @public
 */
export interface AwsWafRuleGroupRulesDetails {
  /**
   * <p>Provides information about what action WAF should take on a web request when it matches the criteria defined in the rule.
   *       </p>
   * @public
   */
  Action?: AwsWafRuleGroupRulesActionDetails | undefined;

  /**
   * <p>If you define more than one rule in a web ACL, WAF evaluates each request against the rules in order
   *          based on the value of <code>Priority</code>.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The rule ID for a rule.
   *       </p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The type of rule.
   *       </p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides information about an WAF rule group. A rule group is a collection of rules for inspecting and controlling web requests.
 *       </p>
 * @public
 */
export interface AwsWafRuleGroupDetails {
  /**
   * <p>The name of the metrics for this rule group.
   *       </p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The name of the rule group.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the rule group.
   *       </p>
   * @public
   */
  RuleGroupId?: string | undefined;

  /**
   * <p>Provides information about the rules attached to the rule group. These rules identify the web requests that you want to
   * allow, block, or count.
   *       </p>
   * @public
   */
  Rules?: AwsWafRuleGroupRulesDetails[] | undefined;
}

/**
 * <p>
 *          A custom header for custom request and response handling.
 *       </p>
 * @public
 */
export interface AwsWafv2CustomHttpHeader {
  /**
   * <p>
   *          The name of the custom header.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *          The value of the custom header.
   *       </p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>
 *          Custom request handling behavior that inserts custom headers into a web request. WAF uses custom request handling when the rule action doesn't block the request.
 *       </p>
 * @public
 */
export interface AwsWafv2CustomRequestHandlingDetails {
  /**
   * <p>
   *          The HTTP headers to insert into the request.
   *       </p>
   * @public
   */
  InsertHeaders?: AwsWafv2CustomHttpHeader[] | undefined;
}

/**
 * <p>
 *          Specifies that WAF should allow the request and optionally defines additional custom handling for the request.
 *       </p>
 * @public
 */
export interface AwsWafv2ActionAllowDetails {
  /**
   * <p>
   *          Defines custom handling for the web request. For information about customizing web requests and responses, see
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   * @public
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails | undefined;
}

/**
 * <p>
 *          A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to block.
 *       </p>
 * @public
 */
export interface AwsWafv2CustomResponseDetails {
  /**
   * <p>
   *          References the response body that you want WAF to return to the web request client. You can define a custom response for a rule action or a default web ACL action that is set to block.
   *       </p>
   * @public
   */
  CustomResponseBodyKey?: string | undefined;

  /**
   * <p>
   *          The HTTP status code to return to the client. For a list of status codes that you can use in your custom responses, see
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html">Supported status codes for custom response</a> in the <i>WAF Developer Guide.</i>
   *          </p>
   * @public
   */
  ResponseCode?: number | undefined;

  /**
   * <p>
   *          The HTTP headers to use in the response.
   *       </p>
   * @public
   */
  ResponseHeaders?: AwsWafv2CustomHttpHeader[] | undefined;
}

/**
 * <p>
 *          Specifies that WAF should block the request and optionally defines additional custom handling for the response to the web request.
 *       </p>
 * @public
 */
export interface AwsWafv2ActionBlockDetails {
  /**
   * <p>
   *          Defines a custom response for the web request. For information, see
   *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   * @public
   */
  CustomResponse?: AwsWafv2CustomResponseDetails | undefined;
}

/**
 * <p>
 *          Specifies that WAF should run a CAPTCHA check against the request.
 *       </p>
 * @public
 */
export interface AwsWafv2RulesActionCaptchaDetails {
  /**
   * <p>
   *          Defines custom handling for the web request, used when the CAPTCHA inspection determines that the request's token is valid and unexpired. For more information,
   *          see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   * @public
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails | undefined;
}

/**
 * <p>
 *          Specifies that WAF should count the request.
 *       </p>
 * @public
 */
export interface AwsWafv2RulesActionCountDetails {
  /**
   * <p>
   *          Defines custom handling for the web request. For more information,
   *          see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html">Customizing web requests and responses in WAF</a> in the <i>WAF Developer Guide.</i>.
   *       </p>
   * @public
   */
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails | undefined;
}

/**
 * <p>
 *          The action that WAF should take on a web request when it matches a rule's statement.
 *          Settings at the web ACL level can override the rule action setting.
 *       </p>
 * @public
 */
export interface AwsWafv2RulesActionDetails {
  /**
   * <p>
   *          Instructs WAF to allow the web request.
   *       </p>
   * @public
   */
  Allow?: AwsWafv2ActionAllowDetails | undefined;

  /**
   * <p>
   *          Instructs WAF to block the web request.
   *       </p>
   * @public
   */
  Block?: AwsWafv2ActionBlockDetails | undefined;

  /**
   * <p>
   *          Instructs WAF to run a CAPTCHA check against the web request.
   *       </p>
   * @public
   */
  Captcha?: AwsWafv2RulesActionCaptchaDetails | undefined;

  /**
   * <p>
   *          Instructs WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
   *       </p>
   * @public
   */
  Count?: AwsWafv2RulesActionCountDetails | undefined;
}

/**
 * <p>
 *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
 *       </p>
 * @public
 */
export interface AwsWafv2VisibilityConfigDetails {
  /**
   * <p>
   *          A boolean indicating whether the associated resource sends metrics to Amazon CloudWatch. For the list of available
   *          metrics, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics">WAF metrics and dimensions</a> in the <i>WAF Developer Guide</i>.
   *       </p>
   * @public
   */
  CloudWatchMetricsEnabled?: boolean | undefined;

  /**
   * <p>
   *          A name of the Amazon CloudWatch metric.
   *       </p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>
   *          A boolean indicating whether WAF should store a sampling of the web requests that match the rules.
   *          You can view the sampled requests through the WAF console.
   *       </p>
   * @public
   */
  SampledRequestsEnabled?: boolean | undefined;
}

/**
 * <p>
 *          Provides details about rules in a rule group. A rule identifies web requests that you want to allow, block, or count. Each rule includes one top-level Statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
 *       </p>
 * @public
 */
export interface AwsWafv2RulesDetails {
  /**
   * <p>
   *          The action that WAF should take on a web request when it matches the rule statement. Settings at the web ACL level can override the rule action setting.
   *       </p>
   * @public
   */
  Action?: AwsWafv2RulesActionDetails | undefined;

  /**
   * <p>
   *          The name of the rule.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *          The action to use in the place of the action that results from the rule group evaluation.
   *       </p>
   * @public
   */
  OverrideAction?: string | undefined;

  /**
   * <p>
   *          If you define more than one Rule in a WebACL, WAF evaluates each request against the Rules in order based on the value of <code>Priority</code>.
   *          WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.
   *       </p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>
   *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *       </p>
   * @public
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails | undefined;
}

/**
 * <p>
 *          Details about an WAFv2 rule group.
 *       </p>
 * @public
 */
export interface AwsWafv2RuleGroupDetails {
  /**
   * <p>
   *          The web ACL capacity units (WCUs) required for this rule group.
   *       </p>
   * @public
   */
  Capacity?: number | undefined;

  /**
   * <p>
   *          A description of the rule group that helps with identification.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *          A unique identifier for the rule group.
   *       </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *          The name of the rule group. You cannot change the name of a rule group after you create it.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the entity.
   *       </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *          The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one
   *          top-level statement that WAF uses to identify matching web requests, and parameters that govern how
   *          WAF handles them.
   *       </p>
   * @public
   */
  Rules?: AwsWafv2RulesDetails[] | undefined;

  /**
   * <p>
   *          Specifies whether the rule group is for an Amazon CloudFront distribution or for a regional application.
   *          A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync
   *          GraphQL API, or an Amazon Cognito user pool.
   *       </p>
   * @public
   */
  Scope?: string | undefined;

  /**
   * <p>
   *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *       </p>
   * @public
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails | undefined;
}

/**
 * <p>
 *          Used for CAPTCHA and challenge token settings. Determines how long a CAPTCHA or challenge timestamp remains valid after WAF updates it for a successful CAPTCHA or challenge response.
 *       </p>
 * @public
 */
export interface AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails {
  /**
   * <p>
   *          The amount of time, in seconds, that a CAPTCHA or challenge timestamp is considered valid by WAF.
   *       </p>
   * @public
   */
  ImmunityTime?: number | undefined;
}

/**
 * <p>
 *          Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own <code>CaptchaConfig</code> settings.
 *       </p>
 * @public
 */
export interface AwsWafv2WebAclCaptchaConfigDetails {
  /**
   * <p>
   *          Determines how long a CAPTCHA timestamp in the token remains valid after the client successfully solves a CAPTCHA puzzle.
   *       </p>
   * @public
   */
  ImmunityTimeProperty?: AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails | undefined;
}

/**
 * <p>
 *          Specifies the action that Amazon CloudFront or WAF takes when a web request matches the conditions in the rule.
 *       </p>
 * @public
 */
export interface AwsWafv2WebAclActionDetails {
  /**
   * <p>
   *          Specifies that WAF should allow requests by default.
   *       </p>
   * @public
   */
  Allow?: AwsWafv2ActionAllowDetails | undefined;

  /**
   * <p>
   *          Specifies that WAF should block requests by default.
   *       </p>
   * @public
   */
  Block?: AwsWafv2ActionBlockDetails | undefined;
}

/**
 * <p>
 *          Details about an WAFv2 web Access Control List (ACL).
 *       </p>
 * @public
 */
export interface AwsWafv2WebAclDetails {
  /**
   * <p>
   *          The name of the web ACL.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.
   *       </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *          Indicates whether this web ACL is managed by Firewall Manager.
   *       </p>
   * @public
   */
  ManagedbyFirewallManager?: boolean | undefined;

  /**
   * <p>
   *          A unique identifier for the web ACL.
   *       </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *          The web ACL capacity units (WCUs) currently being used by this web ACL.
   *       </p>
   * @public
   */
  Capacity?: number | undefined;

  /**
   * <p>
   *          Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own
   *          <code>CaptchaConfig</code> settings.
   *       </p>
   * @public
   */
  CaptchaConfig?: AwsWafv2WebAclCaptchaConfigDetails | undefined;

  /**
   * <p>
   *          The action to perform if none of the Rules contained in the web ACL match.
   *       </p>
   * @public
   */
  DefaultAction?: AwsWafv2WebAclActionDetails | undefined;

  /**
   * <p>
   *          A description of the web ACL that helps with identification.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *          The Rule statements used to identify the web requests that you want to allow, block, or count. Each rule includes one
   *          top-level statement that WAF uses to identify matching web requests, and parameters that govern how
   *          WAF handles them.
   *       </p>
   * @public
   */
  Rules?: AwsWafv2RulesDetails[] | undefined;

  /**
   * <p>
   *          Defines and enables Amazon CloudWatch metrics and web request sample collection.
   *       </p>
   * @public
   */
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails | undefined;
}

/**
 * <p>Details about the action that CloudFront or WAF takes when a web request matches the
 *          conditions in the rule. </p>
 * @public
 */
export interface WafAction {
  /**
   * <p>Specifies how you want WAF to respond to requests that match the settings in a
   *          rule.</p>
   *          <p>Valid settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW</code> - WAF allows requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> - WAF blocks requests</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COUNT</code> - WAF increments a counter of the requests that
   *                match all of the conditions in the rule. WAF then continues to inspect
   *                the web request based on the remaining rules in the web ACL. You can't specify
   *                   <code>COUNT</code> for the default action for a web ACL.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Details about a rule to exclude from a rule group.</p>
 * @public
 */
export interface WafExcludedRule {
  /**
   * <p>The unique identifier for the rule to exclude from the rule group.</p>
   * @public
   */
  RuleId?: string | undefined;
}

/**
 * <p>Details about an override action for a rule.</p>
 * @public
 */
export interface WafOverrideAction {
  /**
   * <p>
   *             <code>COUNT</code> overrides the action specified by the individual rule within a
   *             <code>RuleGroup</code> .</p>
   *          <p>If set to <code>NONE</code>, the rule's action takes place.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Details for a rule in an WAF web ACL.</p>
 * @public
 */
export interface AwsWafWebAclRule {
  /**
   * <p>Specifies the action that CloudFront or WAF takes when a web request matches the
   *          conditions in the rule. </p>
   * @public
   */
  Action?: WafAction | undefined;

  /**
   * <p>Rules to exclude from a rule group.</p>
   * @public
   */
  ExcludedRules?: WafExcludedRule[] | undefined;

  /**
   * <p>Use the <code>OverrideAction</code> to test your <code>RuleGroup</code>.</p>
   *          <p>Any rule in a <code>RuleGroup</code> can potentially block a request. If you set the <code>OverrideAction</code> to
   *             <code>None</code>, the <code>RuleGroup</code> blocks a request if any individual rule in the <code>RuleGroup</code>
   *          matches the request and is configured to block that request.</p>
   *          <p>However, if you first want to test the <code>RuleGroup</code>,
   *          set the <code>OverrideAction</code> to <code>Count</code>. The <code>RuleGroup</code>
   *          then overrides any block action specified by individual rules contained within the group.
   *          Instead of blocking matching requests, those requests are counted.</p>
   *          <p>
   *             <code>ActivatedRule</code>|<code>OverrideAction</code> applies only when updating or
   *          adding a <code>RuleGroup</code>
   *          to a web ACL. In this case you don't use <code>ActivatedRule</code>
   *             <code>Action</code>. For all other update requests,
   *             <code>ActivatedRule</code>
   *             <code>Action</code> is used instead of <code>ActivatedRule</code>
   *             <code>OverrideAction</code>.</p>
   * @public
   */
  OverrideAction?: WafOverrideAction | undefined;

  /**
   * <p>Specifies the order in which the rules in a web
   *          ACL are evaluated. Rules with a lower value for <code>Priority</code> are
   *          evaluated before rules with a higher value. The value must be a unique integer. If you add
   *          multiple rules to a web ACL, the values don't need to be consecutive.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The identifier for a rule.</p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The rule type.</p>
   *          <p>Valid values: <code>REGULAR</code> | <code>RATE_BASED</code> | <code>GROUP</code>
   *          </p>
   *          <p>The default is <code>REGULAR</code>.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Provides information about an WAF web access control list (web ACL).</p>
 * @public
 */
export interface AwsWafWebAclDetails {
  /**
   * <p>A friendly name or description of the web ACL. You can't change the name of a web ACL  after you create it.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The action to perform if none of the rules contained in the web ACL match.</p>
   * @public
   */
  DefaultAction?: string | undefined;

  /**
   * <p>An array that contains the action for each rule in a web ACL, the priority of the rule, and the ID of the rule.</p>
   * @public
   */
  Rules?: AwsWafWebAclRule[] | undefined;

  /**
   * <p>A unique identifier for a web ACL.</p>
   * @public
   */
  WebAclId?: string | undefined;
}

/**
 * <p>Information about the encryption configuration for X-Ray.</p>
 * @public
 */
export interface AwsXrayEncryptionConfigDetails {
  /**
   * <p>The identifier of the KMS key that is used for encryption. Provided if <code>Type</code> is <code>KMS</code>.</p>
   * @public
   */
  KeyId?: string | undefined;

  /**
   * <p>The current status of the encryption configuration. Valid values are <code>ACTIVE</code> or <code>UPDATING</code>.</p>
   *          <p>When <code>Status</code> is equal to <code>UPDATING</code>, X-Ray might use both the old and new encryption.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The type of encryption. <code>KMS</code> indicates that the encryption uses KMS keys. <code>NONE</code> indicates the default encryption.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>
 *          Details about an external code repository with which you can connect your Amazon Web Services resources.
 *          The connection is established through Amazon Inspector.
 *       </p>
 * @public
 */
export interface CodeRepositoryDetails {
  /**
   * <p>
   *          The type of repository provider.
   *       </p>
   * @public
   */
  ProviderType?: string | undefined;

  /**
   * <p>
   *          The name of the project in the code repository.
   *       </p>
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the code security integration associated with the repository.
   *       </p>
   * @public
   */
  CodeSecurityIntegrationArn?: string | undefined;
}

/**
 * <p>Describes the mounting of a volume in a container.
 *       </p>
 * @public
 */
export interface VolumeMount {
  /**
   * <p>The name of the volume.
   *       </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The path in the container at which the volume should be mounted.
   *       </p>
   * @public
   */
  MountPath?: string | undefined;
}

/**
 * <p>Container details related to a finding.</p>
 * @public
 */
export interface ContainerDetails {
  /**
   * <p>The runtime of the container.
   *       </p>
   * @public
   */
  ContainerRuntime?: string | undefined;

  /**
   * <p>The name of the container related to a finding.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The identifier of the container image related to a finding.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The name of the container image related to a finding.</p>
   * @public
   */
  ImageName?: string | undefined;

  /**
   * <p>Indicates when the container started.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LaunchedAt?: string | undefined;

  /**
   * <p>Provides information about the mounting of a volume in a container.
   *       </p>
   * @public
   */
  VolumeMounts?: VolumeMount[] | undefined;

  /**
   * <p>When this parameter is <code>true</code>, the container is given elevated privileges on the host
   * container instance (similar to the root user).
   *       </p>
   * @public
   */
  Privileged?: boolean | undefined;
}

/**
 * <p>Additional details about a resource related to a finding.</p>
 *          <p>To provide the details, use the object that corresponds to the resource type. For
 *          example, if the resource type is <code>AwsEc2Instance</code>, then you use the
 *             <code>AwsEc2Instance</code> object to provide the details.</p>
 *          <p>If the type-specific object does not contain all of the fields you want to populate,
 *          then you use the <code>Other</code> object to populate those additional fields.</p>
 *          <p>You also use the <code>Other</code> object to populate the details when the selected
 *          type does not have a corresponding object.</p>
 * @public
 */
export interface ResourceDetails {
  /**
   * <p>Details for an autoscaling group.</p>
   * @public
   */
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails | undefined;

  /**
   * <p>Details for an CodeBuild project.</p>
   * @public
   */
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails | undefined;

  /**
   * <p>Details about a CloudFront distribution.</p>
   * @public
   */
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails | undefined;

  /**
   * <p>Details about an EC2 instance related to a finding.</p>
   * @public
   */
  AwsEc2Instance?: AwsEc2InstanceDetails | undefined;

  /**
   * <p>Details for an EC2 network interface.</p>
   * @public
   */
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails | undefined;

  /**
   * <p>Details for an EC2 security group.</p>
   * @public
   */
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails | undefined;

  /**
   * <p>Details for an Amazon EC2 volume.</p>
   * @public
   */
  AwsEc2Volume?: AwsEc2VolumeDetails | undefined;

  /**
   * <p>Details for an Amazon EC2 VPC.</p>
   * @public
   */
  AwsEc2Vpc?: AwsEc2VpcDetails | undefined;

  /**
   * <p>Details about an Elastic IP address.</p>
   * @public
   */
  AwsEc2Eip?: AwsEc2EipDetails | undefined;

  /**
   * <p>Details about a subnet in Amazon EC2.</p>
   * @public
   */
  AwsEc2Subnet?: AwsEc2SubnetDetails | undefined;

  /**
   * <p>Details about an EC2 network access control list (ACL).</p>
   * @public
   */
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails | undefined;

  /**
   * <p>Details about a load balancer.</p>
   * @public
   */
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails | undefined;

  /**
   * <p>Details about an Elastic Beanstalk environment.</p>
   * @public
   */
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails | undefined;

  /**
   * <p>Details for an Elasticsearch domain.</p>
   * @public
   */
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails | undefined;

  /**
   * <p>Details about an S3 bucket related to a finding.</p>
   * @public
   */
  AwsS3Bucket?: AwsS3BucketDetails | undefined;

  /**
   * <p>Details about the Amazon S3 Public Access Block configuration for an account.</p>
   * @public
   */
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails | undefined;

  /**
   * <p>Details about an S3 object related to a finding.</p>
   * @public
   */
  AwsS3Object?: AwsS3ObjectDetails | undefined;

  /**
   * <p>Details about a Secrets Manager secret.</p>
   * @public
   */
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails | undefined;

  /**
   * <p>Details about an IAM access key related to a finding.</p>
   * @public
   */
  AwsIamAccessKey?: AwsIamAccessKeyDetails | undefined;

  /**
   * <p>Details about an IAM user.</p>
   * @public
   */
  AwsIamUser?: AwsIamUserDetails | undefined;

  /**
   * <p>Details about an IAM permissions policy.</p>
   * @public
   */
  AwsIamPolicy?: AwsIamPolicyDetails | undefined;

  /**
   * <p>Provides information about a version 2 stage for Amazon API Gateway.</p>
   * @public
   */
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails | undefined;

  /**
   * <p>Provides information about a version 2 API in Amazon API Gateway.</p>
   * @public
   */
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails | undefined;

  /**
   * <p>Details about a DynamoDB table.</p>
   * @public
   */
  AwsDynamoDbTable?: AwsDynamoDbTableDetails | undefined;

  /**
   * <p>Provides information about a version 1 Amazon API Gateway stage.</p>
   * @public
   */
  AwsApiGatewayStage?: AwsApiGatewayStageDetails | undefined;

  /**
   * <p>Provides information about a REST API in version 1 of Amazon API Gateway.</p>
   * @public
   */
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails | undefined;

  /**
   * <p>Provides details about a CloudTrail trail.</p>
   * @public
   */
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails | undefined;

  /**
   * <p>Provides information about the state of a patch on an instance based on the patch baseline that was used to patch the instance.</p>
   * @public
   */
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails | undefined;

  /**
   * <p>Provides details about an Certificate Manager certificate.</p>
   * @public
   */
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails | undefined;

  /**
   * <p>Contains details about an Amazon Redshift cluster.</p>
   * @public
   */
  AwsRedshiftCluster?: AwsRedshiftClusterDetails | undefined;

  /**
   * <p>Contains details about a Classic Load Balancer.</p>
   * @public
   */
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails | undefined;

  /**
   * <p>Contains details about an IAM group.</p>
   * @public
   */
  AwsIamGroup?: AwsIamGroupDetails | undefined;

  /**
   * <p>Details about an IAM role.</p>
   * @public
   */
  AwsIamRole?: AwsIamRoleDetails | undefined;

  /**
   * <p>Details about an KMS key.</p>
   * @public
   */
  AwsKmsKey?: AwsKmsKeyDetails | undefined;

  /**
   * <p>Details about a Lambda function.</p>
   * @public
   */
  AwsLambdaFunction?: AwsLambdaFunctionDetails | undefined;

  /**
   * <p>Details for a Lambda layer version.</p>
   * @public
   */
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails | undefined;

  /**
   * <p>Details about an Amazon RDS database instance.</p>
   * @public
   */
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails | undefined;

  /**
   * <p>Details about an SNS topic.</p>
   * @public
   */
  AwsSnsTopic?: AwsSnsTopicDetails | undefined;

  /**
   * <p>Details about an SQS queue.</p>
   * @public
   */
  AwsSqsQueue?: AwsSqsQueueDetails | undefined;

  /**
   * <p>Details for an WAF web ACL.</p>
   * @public
   */
  AwsWafWebAcl?: AwsWafWebAclDetails | undefined;

  /**
   * <p>Details about an Amazon RDS database snapshot.</p>
   * @public
   */
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails | undefined;

  /**
   * <p>Details about an Amazon RDS database cluster snapshot.</p>
   * @public
   */
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails | undefined;

  /**
   * <p>Details about an Amazon RDS database cluster.</p>
   * @public
   */
  AwsRdsDbCluster?: AwsRdsDbClusterDetails | undefined;

  /**
   * <p>Details about an Amazon ECS cluster.</p>
   * @public
   */
  AwsEcsCluster?: AwsEcsClusterDetails | undefined;

  /**
   * <p>Provides information about a Docker container that's part of a task.
   *       </p>
   * @public
   */
  AwsEcsContainer?: AwsEcsContainerDetails | undefined;

  /**
   * <p>Details about a task definition. A task definition describes the container and volume definitions of an Amazon Elastic Container Service task.</p>
   * @public
   */
  AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails | undefined;

  /**
   * <p>Details about a container resource related to a finding.</p>
   * @public
   */
  Container?: ContainerDetails | undefined;

  /**
   * <p>Details about a resource that are not available in a type-specific details object. Use
   *          the <code>Other</code> object in the following cases.</p>
   *          <ul>
   *             <li>
   *                <p>The type-specific object does not contain all of the fields that you want to
   *                populate. In this case, first use the type-specific object to populate those fields.
   *                Use the <code>Other</code> object to populate the fields that are missing from the
   *                type-specific object.</p>
   *             </li>
   *             <li>
   *                <p>The resource type does not have a corresponding object. This includes resources
   *                for which the type is <code>Other</code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Other?: Record<string, string> | undefined;

  /**
   * <p>Details about an RDS event notification subscription.</p>
   * @public
   */
  AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails | undefined;

  /**
   * <p>Details about a service within an ECS cluster.</p>
   * @public
   */
  AwsEcsService?: AwsEcsServiceDetails | undefined;

  /**
   * <p>Provides details about a launch configuration.</p>
   * @public
   */
  AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails | undefined;

  /**
   * <p>Details about an Amazon EC2 VPN connection.</p>
   * @public
   */
  AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails | undefined;

  /**
   * <p>Information about an Amazon ECR image.</p>
   * @public
   */
  AwsEcrContainerImage?: AwsEcrContainerImageDetails | undefined;

  /**
   * <p>Details about an Amazon OpenSearch Service domain.</p>
   * @public
   */
  AwsOpenSearchServiceDomain?: AwsOpenSearchServiceDomainDetails | undefined;

  /**
   * <p>Details about the service configuration for a VPC endpoint service.</p>
   * @public
   */
  AwsEc2VpcEndpointService?: AwsEc2VpcEndpointServiceDetails | undefined;

  /**
   * <p>Information about the encryption configuration for X-Ray.</p>
   * @public
   */
  AwsXrayEncryptionConfig?: AwsXrayEncryptionConfigDetails | undefined;

  /**
   * <p>Details about a rate-based rule for global resources.</p>
   * @public
   */
  AwsWafRateBasedRule?: AwsWafRateBasedRuleDetails | undefined;

  /**
   * <p>Details about a rate-based rule for Regional resources.</p>
   * @public
   */
  AwsWafRegionalRateBasedRule?: AwsWafRegionalRateBasedRuleDetails | undefined;

  /**
   * <p>Information about an Amazon Elastic Container Registry repository.</p>
   * @public
   */
  AwsEcrRepository?: AwsEcrRepositoryDetails | undefined;

  /**
   * <p>Details about an Amazon EKS cluster.</p>
   * @public
   */
  AwsEksCluster?: AwsEksClusterDetails | undefined;

  /**
   * <p>Details about an Network Firewall firewall policy.</p>
   * @public
   */
  AwsNetworkFirewallFirewallPolicy?: AwsNetworkFirewallFirewallPolicyDetails | undefined;

  /**
   * <p>Details about an Network Firewall firewall.</p>
   * @public
   */
  AwsNetworkFirewallFirewall?: AwsNetworkFirewallFirewallDetails | undefined;

  /**
   * <p>Details about an Network Firewall rule group.</p>
   * @public
   */
  AwsNetworkFirewallRuleGroup?: AwsNetworkFirewallRuleGroupDetails | undefined;

  /**
   * <p>Details about an Amazon RDS DB security group.</p>
   * @public
   */
  AwsRdsDbSecurityGroup?: AwsRdsDbSecurityGroupDetails | undefined;

  /**
   * <p>Details about an Amazon Kinesis data stream.</p>
   * @public
   */
  AwsKinesisStream?: AwsKinesisStreamDetails | undefined;

  /**
   * <p>Details about an Amazon EC2 transit gateway that interconnects your virtual private clouds (VPC) and on-premises networks.</p>
   * @public
   */
  AwsEc2TransitGateway?: AwsEc2TransitGatewayDetails | undefined;

  /**
   * <p>Details about an Amazon EFS access point. An access point is an application-specific view into an EFS file system that
   * applies an operating system user and group, and a file system path, to any file system request made through the access point.
   *       </p>
   * @public
   */
  AwsEfsAccessPoint?: AwsEfsAccessPointDetails | undefined;

  /**
   * <p>Details about an CloudFormation stack. A stack is a collection of Amazon Web Services resources that you can manage as a single unit.</p>
   * @public
   */
  AwsCloudFormationStack?: AwsCloudFormationStackDetails | undefined;

  /**
   * <p>Details about an Amazon CloudWatch alarm. An alarm allows you to monitor and receive alerts about your Amazon Web Services resources and applications across multiple Regions.</p>
   * @public
   */
  AwsCloudWatchAlarm?: AwsCloudWatchAlarmDetails | undefined;

  /**
   * <p>Details about an Amazon EC2 VPC peering connection. A VPC peering connection is
   *          a networking connection between two VPCs that enables you to route traffic between them
   *          privately.
   *       </p>
   * @public
   */
  AwsEc2VpcPeeringConnection?: AwsEc2VpcPeeringConnectionDetails | undefined;

  /**
   * <p>Details about an WAF rule group for Regional resources.
   *       </p>
   * @public
   */
  AwsWafRegionalRuleGroup?: AwsWafRegionalRuleGroupDetails | undefined;

  /**
   * <p>Details about an WAF rule for Regional resources.
   *       </p>
   * @public
   */
  AwsWafRegionalRule?: AwsWafRegionalRuleDetails | undefined;

  /**
   * <p>Details about an WAF web access control list (web ACL) for Regional resources. </p>
   * @public
   */
  AwsWafRegionalWebAcl?: AwsWafRegionalWebAclDetails | undefined;

  /**
   * <p>Details about an WAF rule for global resources.
   *       </p>
   * @public
   */
  AwsWafRule?: AwsWafRuleDetails | undefined;

  /**
   * <p>Details about an WAF rule group for global resources.
   *       </p>
   * @public
   */
  AwsWafRuleGroup?: AwsWafRuleGroupDetails | undefined;

  /**
   * <p>Details about a task in a cluster. </p>
   * @public
   */
  AwsEcsTask?: AwsEcsTaskDetails | undefined;

  /**
   * <p>Provides details about an Backup backup vault.
   *       </p>
   * @public
   */
  AwsBackupBackupVault?: AwsBackupBackupVaultDetails | undefined;

  /**
   * <p>Provides details about an Backup backup plan.
   *       </p>
   * @public
   */
  AwsBackupBackupPlan?: AwsBackupBackupPlanDetails | undefined;

  /**
   * <p>Provides details about an Backup backup, or recovery point.
   *       </p>
   * @public
   */
  AwsBackupRecoveryPoint?: AwsBackupRecoveryPointDetails | undefined;

  /**
   * <p>
   *          Specifies the properties for creating an Amazon Elastic Compute Cloud (Amazon EC2) launch template.
   *       </p>
   * @public
   */
  AwsEc2LaunchTemplate?: AwsEc2LaunchTemplateDetails | undefined;

  /**
   * <p>
   *          Provides details about an Amazon SageMaker AI notebook instance.
   *       </p>
   * @public
   */
  AwsSageMakerNotebookInstance?: AwsSageMakerNotebookInstanceDetails | undefined;

  /**
   * <p>
   *          Details about an WAFv2 web Access Control List (ACL).
   *       </p>
   * @public
   */
  AwsWafv2WebAcl?: AwsWafv2WebAclDetails | undefined;

  /**
   * <p>
   *          Details about an WAFv2 rule group.
   *       </p>
   * @public
   */
  AwsWafv2RuleGroup?: AwsWafv2RuleGroupDetails | undefined;

  /**
   * <p>
   *          Provides details about a route table. A route table contains a set of rules, called routes, that
   *          determine where to direct network traffic from your subnet or gateway.
   *       </p>
   * @public
   */
  AwsEc2RouteTable?: AwsEc2RouteTableDetails | undefined;

  /**
   * <p>
   *             Provides details about AppSync message broker. A message broker allows software applications and
   *             components to communicate using various programming languages, operating systems, and formal messaging protocols.
   *         </p>
   * @public
   */
  AwsAmazonMqBroker?: AwsAmazonMqBrokerDetails | undefined;

  /**
   * <p>
   *             Provides details about an AppSync Graph QL API, which lets you query multiple databases, microservices,
   *             and APIs from a single GraphQL endpoint.
   *         </p>
   * @public
   */
  AwsAppSyncGraphQlApi?: AwsAppSyncGraphQlApiDetails | undefined;

  /**
   * <p>
   *             A schema defines the structure of events that are sent to Amazon EventBridge. Schema registries are containers for
   *             schemas. They collect and organize schemas so that your schemas are in logical groups.
   *         </p>
   * @public
   */
  AwsEventSchemasRegistry?: AwsEventSchemasRegistryDetails | undefined;

  /**
   * <p>
   *             Provides details about an Amazon GuardDuty detector. A detector is an object that represents the GuardDuty
   *             service. A detector is required for GuardDuty to become operational.
   *         </p>
   * @public
   */
  AwsGuardDutyDetector?: AwsGuardDutyDetectorDetails | undefined;

  /**
   * <p>
   *             Provides details about an Step Functions state machine, which is a workflow consisting of a series of event-driven steps.
   *         </p>
   * @public
   */
  AwsStepFunctionStateMachine?: AwsStepFunctionStateMachineDetails | undefined;

  /**
   * <p>
   *             Provides information about an Amazon Athena workgroup. A workgroup helps you separate users, teams,
   *             applications, or workloads. It also helps you set limits on data processing and track costs.
   *         </p>
   * @public
   */
  AwsAthenaWorkGroup?: AwsAthenaWorkGroupDetails | undefined;

  /**
   * <p>
   *             Provides details about Amazon EventBridge event bus for an endpoint. An event bus is a router that receives events
   * and delivers them to zero or more destinations, or targets.</p>
   * @public
   */
  AwsEventsEventbus?: AwsEventsEventbusDetails | undefined;

  /**
   * <p>
   *             Provides details about an Database Migration Service (DMS) endpoint. An endpoint provides connection, data
   * store type, and location information about your data store.</p>
   * @public
   */
  AwsDmsEndpoint?: AwsDmsEndpointDetails | undefined;

  /**
   * <p>
   *             Provides details about an Amazon EventBridge global endpoint. The endpoint can improve your application’s
   * availability by making it Regional-fault tolerant.</p>
   * @public
   */
  AwsEventsEndpoint?: AwsEventsEndpointDetails | undefined;

  /**
   * <p>
   *             Provides details about an DMS replication task. A replication task moves a set of data from the source
   * endpoint to the target endpoint.</p>
   * @public
   */
  AwsDmsReplicationTask?: AwsDmsReplicationTaskDetails | undefined;

  /**
   * <p>
   *             Provides details about an DMS replication instance. DMS uses a replication instance to connect to your
   * source data store, read the source data, and format the data for consumption by the target data store.</p>
   * @public
   */
  AwsDmsReplicationInstance?: AwsDmsReplicationInstanceDetails | undefined;

  /**
   * <p>
   *             Provides details about an Amazon Route 53 hosted zone, including the four name servers assigned to the hosted
   * zone. A hosted zone represents a collection of records that can be managed together, belonging to a single parent domain name.</p>
   * @public
   */
  AwsRoute53HostedZone?: AwsRoute53HostedZoneDetails | undefined;

  /**
   * <p>
   *             Provides details about an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster.</p>
   * @public
   */
  AwsMskCluster?: AwsMskClusterDetails | undefined;

  /**
   * <p>
   *             Provides details about an Amazon Simple Storage Service (Amazon S3) access point. S3 access points are named network
   *             endpoints that are attached to S3 buckets that you can use to perform S3 object operations.
   *         </p>
   * @public
   */
  AwsS3AccessPoint?: AwsS3AccessPointDetails | undefined;

  /**
   * <p>
   *             Provides details about an Client VPN endpoint. A Client VPN endpoint is the resource that you
   *             create and configure to enable and manage client VPN sessions. It's the termination point for all client VPN sessions.
   *         </p>
   * @public
   */
  AwsEc2ClientVpnEndpoint?: AwsEc2ClientVpnEndpointDetails | undefined;

  /**
   * <p>
   *          Details about an external code repository with which you can connect your Amazon Web Services resources.
   *          The connection is established through Amazon Inspector.
   *       </p>
   * @public
   */
  CodeRepository?: CodeRepositoryDetails | undefined;
}

/**
 * @public
 * @enum
 */
export const Partition = {
  AWS: "aws",
  AWS_CN: "aws-cn",
  AWS_US_GOV: "aws-us-gov",
} as const;

/**
 * @public
 */
export type Partition = (typeof Partition)[keyof typeof Partition];

/**
 * <p>A resource related to a finding.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The type of the resource that details are provided for. If possible, set
   *             <code>Type</code> to one of the supported resource types. For example, if the resource
   *          is an EC2 instance, then set <code>Type</code> to <code>AwsEc2Instance</code>.</p>
   *          <p>If the resource does not match any of the provided types, then set <code>Type</code> to
   *             <code>Other</code>. </p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The canonical identifier for the given resource type.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   * @public
   */
  Partition?: Partition | undefined;

  /**
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 16.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>Identifies the role of the resource in the finding. A resource is either the actor or target of the finding activity,</p>
   * @public
   */
  ResourceRole?: string | undefined;

  /**
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *           processed. Tags must follow <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html#tag-conventions">Amazon Web Services tag naming limits and requirements</a>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Contains information about sensitive data that was detected on the resource.</p>
   * @public
   */
  DataClassification?: DataClassificationDetails | undefined;

  /**
   * <p>Additional details about the resource related to a finding.</p>
   * @public
   */
  Details?: ResourceDetails | undefined;

  /**
   * <p>
   *             The name of the application that is related to a finding.
   *         </p>
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the application that is related to a finding.
   *         </p>
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * <p>The severity of the finding.</p>
 *          <p>The finding provider can provide the initial severity. The finding provider can only
 *          update the severity if it hasn't been updated using
 *          <code>BatchUpdateFindings</code>.</p>
 *          <p>The finding must have either <code>Label</code> or <code>Normalized</code> populated. If
 *          only one of these attributes is populated, then Security Hub automatically populates the other
 *          one. If neither attribute is populated, then the finding is invalid. <code>Label</code> is
 *          the preferred attribute.</p>
 * @public
 */
export interface Severity {
  /**
   * <p>Deprecated. This attribute isn't included in findings. Instead of providing
   *             <code>Product</code>, provide <code>Original</code>.</p>
   *          <p>The native severity as defined by the Amazon Web Services service or integrated partner product that
   *          generated the finding.</p>
   * @public
   */
  Product?: number | undefined;

  /**
   * <p>The severity value of the finding. The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - No issue was found.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - The issue does not require action on its own.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - The issue must be addressed but not urgently.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - The issue must be addressed as a priority.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - The issue must be remediated immediately to avoid it
   *                escalating.</p>
   *             </li>
   *          </ul>
   *          <p>If you provide <code>Normalized</code> and don't provide <code>Label</code>, then
   *             <code>Label</code> is set automatically as follows. </p>
   *          <ul>
   *             <li>
   *                <p>0 - <code>INFORMATIONAL</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>1–39 - <code>LOW</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>40–69 - <code>MEDIUM</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>70–89 - <code>HIGH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>90–100 - <code>CRITICAL</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Label?: SeverityLabel | undefined;

  /**
   * <p>Deprecated. The normalized severity of a finding.
   *          Instead of providing <code>Normalized</code>, provide <code>Label</code>.</p>
   *          <p>The value of <code>Normalized</code> can be an integer between <code>0</code> and <code>100</code>.</p>
   *          <p>If you provide <code>Label</code> and don't provide <code>Normalized</code>, then
   *             <code>Normalized</code> is set automatically as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INFORMATIONAL</code> - 0</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOW</code> - 1</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> - 40</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> - 70</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CRITICAL</code> - 90</p>
   *             </li>
   *          </ul>
   * @public
   */
  Normalized?: number | undefined;

  /**
   * <p>The native severity from the finding product that generated the finding.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 64.</p>
   * @public
   */
  Original?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ThreatIntelIndicatorCategory = {
  BACKDOOR: "BACKDOOR",
  CARD_STEALER: "CARD_STEALER",
  COMMAND_AND_CONTROL: "COMMAND_AND_CONTROL",
  DROP_SITE: "DROP_SITE",
  EXPLOIT_SITE: "EXPLOIT_SITE",
  KEYLOGGER: "KEYLOGGER",
} as const;

/**
 * @public
 */
export type ThreatIntelIndicatorCategory =
  (typeof ThreatIntelIndicatorCategory)[keyof typeof ThreatIntelIndicatorCategory];

/**
 * @public
 * @enum
 */
export const ThreatIntelIndicatorType = {
  DOMAIN: "DOMAIN",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  HASH_MD5: "HASH_MD5",
  HASH_SHA1: "HASH_SHA1",
  HASH_SHA256: "HASH_SHA256",
  HASH_SHA512: "HASH_SHA512",
  IPV4_ADDRESS: "IPV4_ADDRESS",
  IPV6_ADDRESS: "IPV6_ADDRESS",
  MUTEX: "MUTEX",
  PROCESS: "PROCESS",
  URL: "URL",
} as const;

/**
 * @public
 */
export type ThreatIntelIndicatorType = (typeof ThreatIntelIndicatorType)[keyof typeof ThreatIntelIndicatorType];

/**
 * <p>Details about the threat intelligence related to a finding.</p>
 * @public
 */
export interface ThreatIntelIndicator {
  /**
   * <p>The type of threat intelligence indicator.</p>
   * @public
   */
  Type?: ThreatIntelIndicatorType | undefined;

  /**
   * <p>The value of a threat intelligence indicator.</p>
   *          <p>Length Constraints: Minimum of 1 length. Maximum of 512 length.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The category of a threat intelligence indicator.</p>
   * @public
   */
  Category?: ThreatIntelIndicatorCategory | undefined;

  /**
   * <p>Indicates when the most recent instance of a threat intelligence indicator was
   *          observed.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastObservedAt?: string | undefined;

  /**
   * <p>The source of the threat intelligence indicator.</p>
   *          <p>Length Constraints: Minimum of 1 length. Maximum of 64 length.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The URL to the page or site where you can get more information about the threat
   *          intelligence indicator.</p>
   * @public
   */
  SourceUrl?: string | undefined;
}

/**
 * <p>Provides information about the file paths that were affected by the threat.
 * 		</p>
 * @public
 */
export interface FilePaths {
  /**
   * <p>Path to the infected or suspicious file on the resource it was detected on.
   * 		</p>
   *          <p>Length Constraints: Minimum of 1 length. Maximum of 128 length.</p>
   * @public
   */
  FilePath?: string | undefined;

  /**
   * <p>The name of the infected or suspicious file corresponding to the hash.
   * 		</p>
   *          <p>Length Constraints: Minimum of 1 length. Maximum of 128 length.</p>
   * @public
   */
  FileName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource on which the threat was detected.
   * 		</p>
   *          <p>Length Constraints: Minimum of 1 length. Maximum of 128 length.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The hash value for the infected or suspicious file.
   * 		</p>
   *          <p>Length Constraints: Minimum of 1 length. Maximum of 128 length.</p>
   * @public
   */
  Hash?: string | undefined;
}

/**
 * <p>Provides information about the threat detected in a security finding and the file paths that were affected by the threat.
 * 		</p>
 * @public
 */
export interface Threat {
  /**
   * <p>The name of the threat.
   * 		</p>
   *          <p>Length Constraints: Minimum of 1 length. Maximum of 128 length.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The severity of the threat.
   * 		</p>
   *          <p>Length Constraints: Minimum of 1 length. Maximum of 128 length.</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>This total number of items in which the threat has been detected.
   * 		</p>
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * <p>Provides information about the file paths that were affected by the threat.
   * 		</p>
   *          <p>Array Members: Minimum number of 1 item. Maximum number of 5 items.</p>
   * @public
   */
  FilePaths?: FilePaths[] | undefined;
}

/**
 * <p>
 *             Provides details about where a code vulnerability is located in your Lambda function.
 *         </p>
 * @public
 */
export interface CodeVulnerabilitiesFilePath {
  /**
   * <p>
   *         	The line number of the last line of code in which the vulnerability is located.
   *         </p>
   * @public
   */
  EndLine?: number | undefined;

  /**
   * <p>
   *             The name of the file in which the code vulnerability is located.
   *         </p>
   * @public
   */
  FileName?: string | undefined;

  /**
   * <p>
   *             The file path to the code in which the vulnerability is located.
   *         </p>
   * @public
   */
  FilePath?: string | undefined;

  /**
   * <p>
   *             The line number of the first line of code in which the vulnerability is located.
   *         </p>
   * @public
   */
  StartLine?: number | undefined;
}

/**
 * <p>Provides details about the vulnerabilities found in your Lambda function code. This field pertains to findings that
 *             Security Hub receives from Amazon Inspector.
 *         </p>
 * @public
 */
export interface VulnerabilityCodeVulnerabilities {
  /**
   * <p>
   *             The Common Weakness Enumeration (CWE) item associated with the detected code vulnerability.
   *         </p>
   * @public
   */
  Cwes?: string[] | undefined;

  /**
   * <p>
   *             Provides details about where a code vulnerability is located in your Lambda function.
   *         </p>
   * @public
   */
  FilePath?: CodeVulnerabilitiesFilePath | undefined;

  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the Lambda layer in which the code vulnerability is located.
   *         </p>
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * <p>CVSS scores from the advisory related to the vulnerability.</p>
 * @public
 */
export interface Cvss {
  /**
   * <p>The version of CVSS for the CVSS score.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The base CVSS score.</p>
   * @public
   */
  BaseScore?: number | undefined;

  /**
   * <p>The base scoring vector for the CVSS score.</p>
   * @public
   */
  BaseVector?: string | undefined;

  /**
   * <p>The origin of the original CVSS score and vector.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>Adjustments to the CVSS metrics.</p>
   * @public
   */
  Adjustments?: Adjustment[] | undefined;
}

/**
 * @public
 * @enum
 */
export const VulnerabilityExploitAvailable = {
  NO: "NO",
  YES: "YES",
} as const;

/**
 * @public
 */
export type VulnerabilityExploitAvailable =
  (typeof VulnerabilityExploitAvailable)[keyof typeof VulnerabilityExploitAvailable];

/**
 * @public
 * @enum
 */
export const VulnerabilityFixAvailable = {
  NO: "NO",
  PARTIAL: "PARTIAL",
  YES: "YES",
} as const;

/**
 * @public
 */
export type VulnerabilityFixAvailable = (typeof VulnerabilityFixAvailable)[keyof typeof VulnerabilityFixAvailable];

/**
 * <p>A vendor that generates a vulnerability report.</p>
 * @public
 */
export interface VulnerabilityVendor {
  /**
   * <p>The name of the vendor.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The URL of the vulnerability advisory.</p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The severity that the vendor assigned to the vulnerability.</p>
   * @public
   */
  VendorSeverity?: string | undefined;

  /**
   * <p>Indicates when the vulnerability advisory was created.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  VendorCreatedAt?: string | undefined;

  /**
   * <p>Indicates when the vulnerability advisory was last updated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  VendorUpdatedAt?: string | undefined;
}

/**
 * <p>Information about a software package.</p>
 * @public
 */
export interface SoftwarePackage {
  /**
   * <p>The name of the software package.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The version of the software package.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The epoch of the software package.</p>
   * @public
   */
  Epoch?: string | undefined;

  /**
   * <p>The release of the software package.</p>
   * @public
   */
  Release?: string | undefined;

  /**
   * <p>The architecture used for the software package.</p>
   * @public
   */
  Architecture?: string | undefined;

  /**
   * <p>The source of the package.</p>
   * @public
   */
  PackageManager?: string | undefined;

  /**
   * <p>The file system path to the package manager inventory file.</p>
   * @public
   */
  FilePath?: string | undefined;

  /**
   * <p>The version of the software package in which the vulnerability has been resolved.
   *       </p>
   * @public
   */
  FixedInVersion?: string | undefined;

  /**
   * <p>Describes the actions a customer can take to resolve the vulnerability in the software package.
   *       </p>
   * @public
   */
  Remediation?: string | undefined;

  /**
   * <p>The source layer hash of the vulnerable package.
   *       </p>
   * @public
   */
  SourceLayerHash?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source layer.
   *       </p>
   * @public
   */
  SourceLayerArn?: string | undefined;
}

/**
 * <p>A vulnerability associated with a finding.</p>
 * @public
 */
export interface Vulnerability {
  /**
   * <p>The identifier of the vulnerability.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>List of software packages that have the vulnerability.</p>
   * @public
   */
  VulnerablePackages?: SoftwarePackage[] | undefined;

  /**
   * <p>CVSS scores from the advisory related to the vulnerability.</p>
   * @public
   */
  Cvss?: Cvss[] | undefined;

  /**
   * <p>List of vulnerabilities that are related to this vulnerability.</p>
   * @public
   */
  RelatedVulnerabilities?: string[] | undefined;

  /**
   * <p>Information about the vendor that generates the vulnerability report.</p>
   * @public
   */
  Vendor?: VulnerabilityVendor | undefined;

  /**
   * <p>A list of URLs that provide additional information about the vulnerability.</p>
   * @public
   */
  ReferenceUrls?: string[] | undefined;

  /**
   * <p>Specifies if all vulnerable packages in a finding have a value for <code>FixedInVersion</code>
   * and <code>Remediation</code>.
   * This field is evaluated for each vulnerability <code>Id</code> based on the number of vulnerable packages that have a value for both
   * <code>FixedInVersion</code> and <code>Remediation</code>. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>YES</code> if all vulnerable packages have a value for both <code>FixedInVersion</code> and <code>Remediation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO</code> if no vulnerable packages have a value for <code>FixedInVersion</code> and <code>Remediation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIAL</code> otherwise</p>
   *             </li>
   *          </ul>
   * @public
   */
  FixAvailable?: VulnerabilityFixAvailable | undefined;

  /**
   * <p>The Exploit Prediction Scoring System (EPSS) score for a finding.
   * 		</p>
   * @public
   */
  EpssScore?: number | undefined;

  /**
   * <p>Whether an exploit is available for a finding.
   * 		</p>
   * @public
   */
  ExploitAvailable?: VulnerabilityExploitAvailable | undefined;

  /**
   * <p>
   *             The date and time of the last exploit associated with a finding discovered in your environment.
   *         </p>
   * @public
   */
  LastKnownExploitAt?: string | undefined;

  /**
   * <p>The vulnerabilities found in your Lambda function code. This field pertains to findings that
   * Security Hub receives from Amazon Inspector.
   *         </p>
   * @public
   */
  CodeVulnerabilities?: VulnerabilityCodeVulnerabilities[] | undefined;
}

/**
 * <p>Provides details about the status of the investigation into a finding.</p>
 * @public
 */
export interface Workflow {
  /**
   * <p>The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to <code>SUPPRESSED</code> or <code>RESOLVED</code> does not prevent a new finding for the same issue.</p>
   *          <p>The allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                         <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ComplianceStatus</code> changes from <code>PASSED</code> to either
   *                         <code>WARNING</code>, <code>FAILED</code>, or
   *                      <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that you notified the resource owner about the
   *                security issue. Used when the initial reviewer is not the resource owner, and needs
   *                intervention from the resource owner.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and don't believe that any action is needed. The finding is no longer updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: WorkflowStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkflowState = {
  ASSIGNED: "ASSIGNED",
  DEFERRED: "DEFERRED",
  IN_PROGRESS: "IN_PROGRESS",
  NEW: "NEW",
  RESOLVED: "RESOLVED",
} as const;

/**
 * @public
 */
export type WorkflowState = (typeof WorkflowState)[keyof typeof WorkflowState];

/**
 * <p>Provides a consistent format for Security Hub findings.
 *          <code>AwsSecurityFinding</code> format allows you to share findings between Amazon Web Services
 *          security services and third-party solutions.</p>
 *          <note>
 *             <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party
 *             solutions and standards checks.</p>
 *          </note>
 * @public
 */
export interface AwsSecurityFinding {
  /**
   * <p>The schema version that a finding is formatted for. The value is <code>2018-10-08</code>.</p>
   * @public
   */
  SchemaVersion: string | undefined;

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 512.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   *          <p>Length Constraints: Minimum length of 12. Maximum length of 2048.</p>
   * @public
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update this attribute with <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is a custom integration.</p>
   *          <p>When you use the Security Hub console or API to filter findings by product name, you use this attribute.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 128.</p>
   * @public
   */
  ProductName?: string | undefined;

  /**
   * <p>The name of the company for the product that generated the finding.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update this attribute with <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>. The exception to this is a custom integration.</p>
   *          <p>When you use the Security Hub console or API to filter findings by company name, you use this attribute.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 128.
   *        </p>
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * <p>The Region from which the finding was generated.</p>
   *          <p>Security Hub populates this attribute automatically for each finding. You cannot update it using <code>BatchImportFindings</code> or <code>BatchUpdateFindings</code>.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 16.
   *        </p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, or something else.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 512.</p>
   * @public
   */
  GeneratorId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that a finding is generated in.</p>
   *          <p>Length Constraints: 12.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>One or more finding types in the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   *          <p>Array Members: Maximum number of 50 items.</p>
   * @public
   */
  Types?: string[] | undefined;

  /**
   * <p>Indicates when the security findings provider first observed the potential security
   *          issue that a finding captured.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  FirstObservedAt?: string | undefined;

  /**
   * <p>Indicates when the security findings provider most recently observed a change in the resource that is involved in the finding.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastObservedAt?: string | undefined;

  /**
   * <p>Indicates when the security findings provider created the potential security issue that
   *          a finding captured.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedAt: string | undefined;

  /**
   * <p>Indicates when the security findings provider last updated the finding record.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  UpdatedAt: string | undefined;

  /**
   * <p>A finding's severity.</p>
   * @public
   */
  Severity?: Severity | undefined;

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   * @public
   */
  Criticality?: number | undefined;

  /**
   * <p>A finding's title. <code>Title</code> is a required property.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>A finding's description. <code>Description</code> is a required property.</p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 1024.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A data type that describes the remediation options for a finding.</p>
   * @public
   */
  Remediation?: Remediation | undefined;

  /**
   * <p>A URL that links to a page about the current finding in the security findings provider's
   *          solution.</p>
   * @public
   */
  SourceUrl?: string | undefined;

  /**
   * <p>A data type where security findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   *          <p>Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 2048 characters.</p>
   * @public
   */
  ProductFields?: Record<string, string> | undefined;

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding.</p>
   *          <p>Can contain up to 50 key-value pairs. For each key-value pair, the key can contain up to 128 characters, and the value can contain up to 1024 characters.</p>
   * @public
   */
  UserDefinedFields?: Record<string, string> | undefined;

  /**
   * <p>A list of malware related to a finding.</p>
   *          <p>Array Members: Maximum number of 5 items.</p>
   * @public
   */
  Malware?: Malware[] | undefined;

  /**
   * <p>The details of network-related information about a finding.</p>
   * @public
   */
  Network?: Network | undefined;

  /**
   * <p>Provides information about a network path that is relevant to a finding. Each entry
   *          under <code>NetworkPath</code> represents a component of that path.</p>
   * @public
   */
  NetworkPath?: NetworkPathComponent[] | undefined;

  /**
   * <p>The details of process-related information about a finding.</p>
   * @public
   */
  Process?: ProcessDetails | undefined;

  /**
   * <p>Details about the threat detected in a security finding and the file paths that were affected by the threat.
   *       </p>
   *          <p>Array Members: Minimum number of 1 item. Maximum number of 32 items.</p>
   * @public
   */
  Threats?: Threat[] | undefined;

  /**
   * <p>Threat intelligence details related to a finding.</p>
   *          <p>Array Members: Minimum number of 1 item. Maximum number of 5 items.</p>
   * @public
   */
  ThreatIntelIndicators?: ThreatIntelIndicator[] | undefined;

  /**
   * <p>A set of resource data types that describe the resources that the finding refers
   *          to.</p>
   *          <p>Array Members: Minimum number of 1 item. Maximum number of 32 items.</p>
   * @public
   */
  Resources: Resource[] | undefined;

  /**
   * <p>This data type is exclusive to findings that are generated as the result of a check run
   *          against a specific rule in a supported security standard, such as CIS Amazon Web Services Foundations.
   *          Contains security standard-related finding details.</p>
   * @public
   */
  Compliance?: Compliance | undefined;

  /**
   * <p>Indicates the veracity of a finding. </p>
   * @public
   */
  VerificationState?: VerificationState | undefined;

  /**
   * <p>The workflow state of a finding. </p>
   *
   * @deprecated
   * @public
   */
  WorkflowState?: WorkflowState | undefined;

  /**
   * <p>Provides information about the status of the investigation into a finding.</p>
   * @public
   */
  Workflow?: Workflow | undefined;

  /**
   * <p>The record state of a finding.</p>
   * @public
   */
  RecordState?: RecordState | undefined;

  /**
   * <p>A list of related findings.</p>
   *          <p>Array Members: Minimum number of 1 item. Maximum number of 10 items.</p>
   * @public
   */
  RelatedFindings?: RelatedFinding[] | undefined;

  /**
   * <p>A user-defined note added to a finding.</p>
   * @public
   */
  Note?: Note | undefined;

  /**
   * <p>Provides a list of vulnerabilities associated with the findings.</p>
   * @public
   */
  Vulnerabilities?: Vulnerability[] | undefined;

  /**
   * <p>Provides an overview of the patch compliance status for an instance against a selected
   *          compliance standard.</p>
   * @public
   */
  PatchSummary?: PatchSummary | undefined;

  /**
   * <p>Provides details about an action that affects or that was taken on a resource.</p>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>In a <code>BatchImportFindings</code> request, finding providers use <code>FindingProviderFields</code> to provide and update their own values for confidence, criticality, related findings, severity, and types.</p>
   * @public
   */
  FindingProviderFields?: FindingProviderFields | undefined;

  /**
   * <p>Indicates whether the finding is a sample finding.</p>
   * @public
   */
  Sample?: boolean | undefined;

  /**
   * <p>Provides metadata for the Amazon CodeGuru detector associated with a finding. This field pertains to
   * findings that relate to Lambda functions. Amazon Inspector identifies policy violations and
   * vulnerabilities in Lambda function code based on internal detectors developed
   * in collaboration with Amazon CodeGuru. Security Hub receives those findings.
   *         </p>
   * @public
   */
  GeneratorDetails?: GeneratorDetails | undefined;

  /**
   * <p>A timestamp that indicates when Security Hub received a finding and begins to process it.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ProcessedAt?: string | undefined;

  /**
   * <p>The name of the Amazon Web Services account from which a finding was generated.
   *         </p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 50.
   *         </p>
   * @public
   */
  AwsAccountName?: string | undefined;

  /**
   * <p>
   *             Provides details about an Amazon GuardDuty Extended Threat Detection attack sequence. GuardDuty generates an attack
   *             sequence finding when multiple events align to a potentially suspicious activity. To receive GuardDuty attack sequence findings in Security Hub, you
   * 				must have GuardDuty enabled. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-extended-threat-detection.html">GuardDuty Extended Threat Detection </a> in the <i>Amazon GuardDuty User Guide</i>.
   *         </p>
   * @public
   */
  Detection?: Detection | undefined;
}

/**
 * <p>A keyword filter for querying findings.</p>
 * @public
 */
export interface KeywordFilter {
  /**
   * <p>A value for the keyword.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>The IP filter for querying findings.</p>
 * @public
 */
export interface IpFilter {
  /**
   * <p>A finding's CIDR value.</p>
   * @public
   */
  Cidr?: string | undefined;
}

/**
 * <p>Boolean filter for querying findings.</p>
 * @public
 */
export interface BooleanFilter {
  /**
   * <p>The value of the boolean.</p>
   * @public
   */
  Value?: boolean | undefined;
}

/**
 * <p>A collection of filters that are applied to all active findings aggregated by Security Hub.</p>
 *          <p>You can filter by up to ten finding attributes. For each attribute, you can provide up to
 *          20 filter values.</p>
 * @public
 */
export interface AwsSecurityFindingFilters {
  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a third-party company
   *          (security findings provider) after this provider's product (solution that generates
   *          findings) is registered with Security Hub.</p>
   * @public
   */
  ProductArn?: StringFilter[] | undefined;

  /**
   * <p>The Amazon Web Services account ID in which a finding is generated.</p>
   * @public
   */
  AwsAccountId?: StringFilter[] | undefined;

  /**
   * <p>The security findings provider-specific identifier for a finding.</p>
   * @public
   */
  Id?: StringFilter[] | undefined;

  /**
   * <p>The identifier for the solution-specific component (a discrete unit of logic) that
   *          generated a finding. In various security findings providers' solutions, this generator can
   *          be called a rule, a check, a detector, a plugin, etc.</p>
   * @public
   */
  GeneratorId?: StringFilter[] | undefined;

  /**
   * <p>The Region from which the finding was generated.</p>
   * @public
   */
  Region?: StringFilter[] | undefined;

  /**
   * <p>A finding type in the format of <code>namespace/category/classifier</code> that
   *          classifies a finding.</p>
   * @public
   */
  Type?: StringFilter[] | undefined;

  /**
   * <p>A timestamp that indicates when the security findings provider first
   *          observed the potential security issue that a finding captured.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  FirstObservedAt?: DateFilter[] | undefined;

  /**
   * <p>A timestamp that indicates when the security findings provider most recently observed a change in the resource that is involved in the finding.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  LastObservedAt?: DateFilter[] | undefined;

  /**
   * <p>A timestamp that indicates when the security findings provider
   *          created the potential security issue that a finding reflects.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  CreatedAt?: DateFilter[] | undefined;

  /**
   * <p>A timestamp that indicates when the security findings provider last
   *          updated the finding record.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  UpdatedAt?: DateFilter[] | undefined;

  /**
   * <p>The native severity as defined by the security findings provider's solution that
   *          generated the finding.</p>
   *
   * @deprecated
   * @public
   */
  SeverityProduct?: NumberFilter[] | undefined;

  /**
   * <p>The normalized severity of a finding.</p>
   *
   * @deprecated
   * @public
   */
  SeverityNormalized?: NumberFilter[] | undefined;

  /**
   * <p>The label of a finding's severity.</p>
   * @public
   */
  SeverityLabel?: StringFilter[] | undefined;

  /**
   * <p>A finding's confidence. Confidence is defined as the likelihood that a finding
   *          accurately identifies the behavior or issue that it was intended to identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   * @public
   */
  Confidence?: NumberFilter[] | undefined;

  /**
   * <p>The level of importance assigned to the resources associated with the finding.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources.</p>
   * @public
   */
  Criticality?: NumberFilter[] | undefined;

  /**
   * <p>A finding's title.</p>
   * @public
   */
  Title?: StringFilter[] | undefined;

  /**
   * <p>A finding's description.</p>
   * @public
   */
  Description?: StringFilter[] | undefined;

  /**
   * <p>The recommendation of what to do about the issue described in a finding.</p>
   * @public
   */
  RecommendationText?: StringFilter[] | undefined;

  /**
   * <p>A URL that links to a page about the current finding in the security findings provider's
   *          solution.</p>
   * @public
   */
  SourceUrl?: StringFilter[] | undefined;

  /**
   * <p>A data type where security findings providers can include additional solution-specific
   *          details that aren't part of the defined <code>AwsSecurityFinding</code> format.</p>
   * @public
   */
  ProductFields?: MapFilter[] | undefined;

  /**
   * <p>The name of the solution (product) that generates findings.</p>
   * @public
   */
  ProductName?: StringFilter[] | undefined;

  /**
   * <p>The name of the findings provider (company) that owns the solution (product) that
   *          generates findings.</p>
   * @public
   */
  CompanyName?: StringFilter[] | undefined;

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding. </p>
   * @public
   */
  UserDefinedFields?: MapFilter[] | undefined;

  /**
   * <p>The name of the malware that was observed.</p>
   * @public
   */
  MalwareName?: StringFilter[] | undefined;

  /**
   * <p>The type of the malware that was observed.</p>
   * @public
   */
  MalwareType?: StringFilter[] | undefined;

  /**
   * <p>The filesystem path of the malware that was observed.</p>
   * @public
   */
  MalwarePath?: StringFilter[] | undefined;

  /**
   * <p>The state of the malware that was observed.</p>
   * @public
   */
  MalwareState?: StringFilter[] | undefined;

  /**
   * <p>Indicates the direction of network traffic associated with a finding.</p>
   * @public
   */
  NetworkDirection?: StringFilter[] | undefined;

  /**
   * <p>The protocol of network-related information about a finding.</p>
   * @public
   */
  NetworkProtocol?: StringFilter[] | undefined;

  /**
   * <p>The source IPv4 address of network-related information about a finding.</p>
   * @public
   */
  NetworkSourceIpV4?: IpFilter[] | undefined;

  /**
   * <p>The source IPv6 address of network-related information about a finding.</p>
   * @public
   */
  NetworkSourceIpV6?: IpFilter[] | undefined;

  /**
   * <p>The source port of network-related information about a finding.</p>
   * @public
   */
  NetworkSourcePort?: NumberFilter[] | undefined;

  /**
   * <p>The source domain of network-related information about a finding.</p>
   * @public
   */
  NetworkSourceDomain?: StringFilter[] | undefined;

  /**
   * <p>The source media access control (MAC) address of network-related information about a
   *          finding.</p>
   * @public
   */
  NetworkSourceMac?: StringFilter[] | undefined;

  /**
   * <p>The destination IPv4 address of network-related information about a finding.</p>
   * @public
   */
  NetworkDestinationIpV4?: IpFilter[] | undefined;

  /**
   * <p>The destination IPv6 address of network-related information about a finding.</p>
   * @public
   */
  NetworkDestinationIpV6?: IpFilter[] | undefined;

  /**
   * <p>The destination port of network-related information about a finding.</p>
   * @public
   */
  NetworkDestinationPort?: NumberFilter[] | undefined;

  /**
   * <p>The destination domain of network-related information about a finding.</p>
   * @public
   */
  NetworkDestinationDomain?: StringFilter[] | undefined;

  /**
   * <p>The name of the process.</p>
   * @public
   */
  ProcessName?: StringFilter[] | undefined;

  /**
   * <p>The path to the process executable.</p>
   * @public
   */
  ProcessPath?: StringFilter[] | undefined;

  /**
   * <p>The process ID.</p>
   * @public
   */
  ProcessPid?: NumberFilter[] | undefined;

  /**
   * <p>The parent process ID. This field accepts positive integers between <code>O</code> and <code>2147483647</code>.</p>
   * @public
   */
  ProcessParentPid?: NumberFilter[] | undefined;

  /**
   * <p>A timestamp that identifies when the process was launched.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ProcessLaunchedAt?: DateFilter[] | undefined;

  /**
   * <p>A timestamp that identifies when the process was terminated.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ProcessTerminatedAt?: DateFilter[] | undefined;

  /**
   * <p>The type of a threat intelligence indicator.</p>
   * @public
   */
  ThreatIntelIndicatorType?: StringFilter[] | undefined;

  /**
   * <p>The value of a threat intelligence indicator.</p>
   * @public
   */
  ThreatIntelIndicatorValue?: StringFilter[] | undefined;

  /**
   * <p>The category of a threat intelligence indicator.</p>
   * @public
   */
  ThreatIntelIndicatorCategory?: StringFilter[] | undefined;

  /**
   * <p>A timestamp that identifies the last observation of a threat intelligence indicator.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ThreatIntelIndicatorLastObservedAt?: DateFilter[] | undefined;

  /**
   * <p>The source of the threat intelligence.</p>
   * @public
   */
  ThreatIntelIndicatorSource?: StringFilter[] | undefined;

  /**
   * <p>The URL for more details from the source of the threat intelligence.</p>
   * @public
   */
  ThreatIntelIndicatorSourceUrl?: StringFilter[] | undefined;

  /**
   * <p>Specifies the type of the resource that details are provided for.</p>
   * @public
   */
  ResourceType?: StringFilter[] | undefined;

  /**
   * <p>The canonical identifier for the given resource type.</p>
   * @public
   */
  ResourceId?: StringFilter[] | undefined;

  /**
   * <p>The canonical Amazon Web Services partition name that the Region is assigned to.</p>
   * @public
   */
  ResourcePartition?: StringFilter[] | undefined;

  /**
   * <p>The canonical Amazon Web Services external Region name where this resource is located.</p>
   * @public
   */
  ResourceRegion?: StringFilter[] | undefined;

  /**
   * <p>A list of Amazon Web Services tags associated with a resource at the time the finding was
   *          processed.</p>
   * @public
   */
  ResourceTags?: MapFilter[] | undefined;

  /**
   * <p>The instance type of the instance.</p>
   * @public
   */
  ResourceAwsEc2InstanceType?: StringFilter[] | undefined;

  /**
   * <p>The Amazon Machine Image (AMI) ID of the instance.</p>
   * @public
   */
  ResourceAwsEc2InstanceImageId?: StringFilter[] | undefined;

  /**
   * <p>The IPv4 addresses associated with the instance.</p>
   * @public
   */
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[] | undefined;

  /**
   * <p>The IPv6 addresses associated with the instance.</p>
   * @public
   */
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[] | undefined;

  /**
   * <p>The key name associated with the instance.</p>
   * @public
   */
  ResourceAwsEc2InstanceKeyName?: StringFilter[] | undefined;

  /**
   * <p>The IAM profile ARN of the instance.</p>
   * @public
   */
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[] | undefined;

  /**
   * <p>The identifier of the VPC that the instance was launched in.</p>
   * @public
   */
  ResourceAwsEc2InstanceVpcId?: StringFilter[] | undefined;

  /**
   * <p>The identifier of the subnet that the instance was launched in.</p>
   * @public
   */
  ResourceAwsEc2InstanceSubnetId?: StringFilter[] | undefined;

  /**
   * <p>The date and time the instance was launched.</p>
   * @public
   */
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[] | undefined;

  /**
   * <p>The canonical user ID of the owner of the S3 bucket.</p>
   * @public
   */
  ResourceAwsS3BucketOwnerId?: StringFilter[] | undefined;

  /**
   * <p>The display name of the owner of the S3 bucket.</p>
   * @public
   */
  ResourceAwsS3BucketOwnerName?: StringFilter[] | undefined;

  /**
   * <p>The user associated with the IAM access key related to a finding.</p>
   *
   * @deprecated
   * @public
   */
  ResourceAwsIamAccessKeyUserName?: StringFilter[] | undefined;

  /**
   * <p>The name of the principal that is associated with an IAM access key.</p>
   * @public
   */
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[] | undefined;

  /**
   * <p>The status of the IAM access key related to a finding.</p>
   * @public
   */
  ResourceAwsIamAccessKeyStatus?: StringFilter[] | undefined;

  /**
   * <p>The creation date/time of the IAM access key related to a finding.</p>
   * @public
   */
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[] | undefined;

  /**
   * <p>The name of an IAM user.</p>
   * @public
   */
  ResourceAwsIamUserUserName?: StringFilter[] | undefined;

  /**
   * <p>The name of the container related to a finding.</p>
   * @public
   */
  ResourceContainerName?: StringFilter[] | undefined;

  /**
   * <p>The identifier of the image related to a finding.</p>
   * @public
   */
  ResourceContainerImageId?: StringFilter[] | undefined;

  /**
   * <p>The name of the image related to a finding.</p>
   * @public
   */
  ResourceContainerImageName?: StringFilter[] | undefined;

  /**
   * <p>A timestamp that identifies when the container was started.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  ResourceContainerLaunchedAt?: DateFilter[] | undefined;

  /**
   * <p>The details of a resource that doesn't have a specific subfield for the resource type
   *          defined.</p>
   * @public
   */
  ResourceDetailsOther?: MapFilter[] | undefined;

  /**
   * <p>Exclusive to findings that are generated as the result of a check run against a specific
   *          rule in a supported standard, such as CIS Amazon Web Services Foundations. Contains security
   *          standard-related finding details.</p>
   * @public
   */
  ComplianceStatus?: StringFilter[] | undefined;

  /**
   * <p>The veracity of a finding.</p>
   * @public
   */
  VerificationState?: StringFilter[] | undefined;

  /**
   * <p>The workflow state of a finding.</p>
   *          <p>Note that this field is deprecated. To search for a finding based on its workflow
   *          status, use <code>WorkflowStatus</code>.</p>
   * @public
   */
  WorkflowState?: StringFilter[] | undefined;

  /**
   * <p>The status of the investigation into a finding. Allowed values are the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NEW</code> - The initial state of a finding, before it is reviewed.</p>
   *                <p>Security Hub also resets the workflow status from <code>NOTIFIED</code> or
   *                   <code>RESOLVED</code> to <code>NEW</code> in the following cases:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to either <code>WARNING</code>,
   *                         <code>FAILED</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOTIFIED</code> - Indicates that the resource owner has been notified about
   *                the security issue. Used when the initial reviewer is not the resource owner, and
   *                needs intervention from the resource owner.</p>
   *                <p>If one of the following occurs, the workflow status is changed automatically from
   *                <code>NOTIFIED</code> to <code>NEW</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to <code>FAILED</code>,
   *                      <code>WARNING</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUPPRESSED</code> - Indicates that you reviewed the finding and don't believe that any action is
   *                needed.</p>
   *                <p>The workflow status of a <code>SUPPRESSED</code> finding does not change if
   *                <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                <code>ACTIVE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESOLVED</code> - The finding was reviewed and remediated and is now
   *                considered resolved. </p>
   *                <p>The finding remains <code>RESOLVED</code> unless one of the following occurs:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>RecordState</code> changes from <code>ARCHIVED</code> to
   *                      <code>ACTIVE</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Compliance.Status</code> changes from <code>PASSED</code> to <code>FAILED</code>,
   *                      <code>WARNING</code>, or <code>NOT_AVAILABLE</code>.</p>
   *                   </li>
   *                </ul>
   *                <p>In those cases, the workflow status is automatically reset to <code>NEW</code>.</p>
   *                <p>For findings from controls, if <code>Compliance.Status</code> is <code>PASSED</code>,
   *                then Security Hub automatically sets the workflow status to <code>RESOLVED</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkflowStatus?: StringFilter[] | undefined;

  /**
   * <p>The updated record state for the finding.</p>
   * @public
   */
  RecordState?: StringFilter[] | undefined;

  /**
   * <p>The ARN of the solution that generated a related finding.</p>
   * @public
   */
  RelatedFindingsProductArn?: StringFilter[] | undefined;

  /**
   * <p>The solution-generated identifier for a related finding.</p>
   * @public
   */
  RelatedFindingsId?: StringFilter[] | undefined;

  /**
   * <p>The text of a note.</p>
   * @public
   */
  NoteText?: StringFilter[] | undefined;

  /**
   * <p>The timestamp of when the note was updated.</p>
   * @public
   */
  NoteUpdatedAt?: DateFilter[] | undefined;

  /**
   * <p>The principal that created a note.</p>
   * @public
   */
  NoteUpdatedBy?: StringFilter[] | undefined;

  /**
   * <p>A keyword for a finding.</p>
   *
   * @deprecated
   * @public
   */
  Keyword?: KeywordFilter[] | undefined;

  /**
   * <p>The finding provider value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   * @public
   */
  FindingProviderFieldsConfidence?: NumberFilter[] | undefined;

  /**
   * <p>The finding provider value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   * @public
   */
  FindingProviderFieldsCriticality?: NumberFilter[] | undefined;

  /**
   * <p>The finding identifier of a related finding that is identified by the finding provider.</p>
   * @public
   */
  FindingProviderFieldsRelatedFindingsId?: StringFilter[] | undefined;

  /**
   * <p>The ARN of the solution that generated a related finding that is identified by the finding provider.</p>
   * @public
   */
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[] | undefined;

  /**
   * <p>The finding provider value for the severity label.</p>
   * @public
   */
  FindingProviderFieldsSeverityLabel?: StringFilter[] | undefined;

  /**
   * <p>The finding provider's original value for the severity.</p>
   * @public
   */
  FindingProviderFieldsSeverityOriginal?: StringFilter[] | undefined;

  /**
   * <p>One or more finding types that the finding provider assigned to the finding. Uses the format of <code>namespace/category/classifier</code>
   *          that classify a finding.</p>
   *          <p>Valid namespace values are: Software and Configuration Checks | TTPs | Effects | Unusual
   *          Behaviors | Sensitive Data Identifications</p>
   * @public
   */
  FindingProviderFieldsTypes?: StringFilter[] | undefined;

  /**
   * <p>Indicates whether or not sample findings are included in the filter results.</p>
   * @public
   */
  Sample?: BooleanFilter[] | undefined;

  /**
   * <p>
   *          The unique identifier of a control across standards. Values for this field typically consist of an
   *          Amazon Web Services service and a number, such as APIGateway.5.
   *       </p>
   * @public
   */
  ComplianceSecurityControlId?: StringFilter[] | undefined;

  /**
   * <p>
   *          The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the
   *          Amazon Resource Name (ARN) returned for a standard in the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html">DescribeStandards</a> API response.
   *       </p>
   * @public
   */
  ComplianceAssociatedStandardsId?: StringFilter[] | undefined;

  /**
   * <p>
   *             Indicates whether a software vulnerability in your environment has a known exploit. You can filter findings by this
   *             field only if you use Security Hub and Amazon Inspector.
   *         </p>
   * @public
   */
  VulnerabilitiesExploitAvailable?: StringFilter[] | undefined;

  /**
   * <p>
   *             Indicates whether a vulnerability is fixed in a newer version of the affected software packages. You can filter
   *             findings by this field only if you use Security Hub and Amazon Inspector.
   *
   *         </p>
   * @public
   */
  VulnerabilitiesFixAvailable?: StringFilter[] | undefined;

  /**
   * <p>
   *             The name of a security control parameter.
   *         </p>
   * @public
   */
  ComplianceSecurityControlParametersName?: StringFilter[] | undefined;

  /**
   * <p>
   *             The current value of a security control parameter.
   *         </p>
   * @public
   */
  ComplianceSecurityControlParametersValue?: StringFilter[] | undefined;

  /**
   * <p>The name of the Amazon Web Services account in which a finding is generated.</p>
   * @public
   */
  AwsAccountName?: StringFilter[] | undefined;

  /**
   * <p>
   *             The name of the application that is related to a finding.
   *         </p>
   * @public
   */
  ResourceApplicationName?: StringFilter[] | undefined;

  /**
   * <p>
   *             The ARN of the application that is related to a finding.
   *         </p>
   * @public
   */
  ResourceApplicationArn?: StringFilter[] | undefined;
}

/**
 * <p>Identifies which finding to get the finding history for.</p>
 * @public
 */
export interface AwsSecurityFindingIdentifier {
  /**
   * <p>The identifier of the finding that was specified by the finding provider.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The ARN generated by Security Hub that uniquely identifies a product that generates findings.
   *          This can be the ARN for a third-party product that is integrated with Security Hub, or the ARN for
   *          a custom integration.</p>
   * @public
   */
  ProductArn: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteAutomationRulesRequest {
  /**
   * <p>
   *          A list of Amazon Resource Names (ARNs) for the rules that are to be deleted.
   *       </p>
   * @public
   */
  AutomationRulesArns: string[] | undefined;
}

/**
 * <p>
 *          A list of objects containing <code>RuleArn</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. This parameter
 *          tells you which automation rules the request didn't process and why.
 *       </p>
 * @public
 */
export interface UnprocessedAutomationRule {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) for the unprocessed automation rule.
   *       </p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>
   *          The error code associated with the unprocessed automation rule.
   *       </p>
   * @public
   */
  ErrorCode?: number | undefined;

  /**
   * <p>
   *          An error message describing why a request didn't process a specific rule.
   *       </p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteAutomationRulesResponse {
  /**
   * <p>
   *          A list of properly processed rule ARNs.
   *       </p>
   * @public
   */
  ProcessedAutomationRules?: string[] | undefined;

  /**
   * <p>
   *          A list of objects containing <code>RuleArn</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. This parameter
   *          tells you which automation rules the request didn't delete and why.
   *       </p>
   * @public
   */
  UnprocessedAutomationRules?: UnprocessedAutomationRule[] | undefined;
}

/**
 * @public
 */
export interface BatchDisableStandardsRequest {
  /**
   * <p>The ARNs of the standards subscriptions to disable.</p>
   * @public
   */
  StandardsSubscriptionArns: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const StandardsControlsUpdatable = {
  NOT_READY_FOR_UPDATES: "NOT_READY_FOR_UPDATES",
  READY_FOR_UPDATES: "READY_FOR_UPDATES",
} as const;

/**
 * @public
 */
export type StandardsControlsUpdatable = (typeof StandardsControlsUpdatable)[keyof typeof StandardsControlsUpdatable];

/**
 * @public
 * @enum
 */
export const StandardsStatus = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  INCOMPLETE: "INCOMPLETE",
  PENDING: "PENDING",
  READY: "READY",
} as const;

/**
 * @public
 */
export type StandardsStatus = (typeof StandardsStatus)[keyof typeof StandardsStatus];

/**
 * @public
 * @enum
 */
export const StatusReasonCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  MAXIMUM_NUMBER_OF_CONFIG_RULES_EXCEEDED: "MAXIMUM_NUMBER_OF_CONFIG_RULES_EXCEEDED",
  NO_AVAILABLE_CONFIGURATION_RECORDER: "NO_AVAILABLE_CONFIGURATION_RECORDER",
} as const;

/**
 * @public
 */
export type StatusReasonCode = (typeof StatusReasonCode)[keyof typeof StatusReasonCode];

/**
 * <p>The reason for the current status of your subscription to the standard.</p>
 * @public
 */
export interface StandardsStatusReason {
  /**
   * <p>The reason code that represents the reason for the current status of a standard subscription.</p>
   * @public
   */
  StatusReasonCode: StatusReasonCode | undefined;
}

/**
 * <p>A resource that represents your subscription to a supported standard.</p>
 * @public
 */
export interface StandardsSubscription {
  /**
   * <p>The ARN of the resource that represents your subscription to the standard.</p>
   * @public
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The ARN of the standard.</p>
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   * @public
   */
  StandardsInput: Record<string, string> | undefined;

  /**
   * <p>The status of your subscription to the standard. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - The standard is in the process of being enabled. Or the standard is already
   *                enabled and Security Hub is adding new controls to the standard.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - The standard is enabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INCOMPLETE</code> - The standard could not be enabled completely. One or more errors (<code>StandardsStatusReason</code>)
   *                occurred when Security Hub attempted to enable the standard.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The standard is in the process of being disabled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The standard could not be disabled. One or more errors (<code>StandardsStatusReason</code>)
   *                occurred when Security Hub attempted to disable the standard.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StandardsStatus: StandardsStatus | undefined;

  /**
   * <p>Specifies whether you can retrieve information about and configure individual controls that apply to the standard. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>READY_FOR_UPDATES</code> - Controls in the standard can be retrieved and configured.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_READY_FOR_UPDATES</code> - Controls in the standard cannot be retrieved or configured.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StandardsControlsUpdatable?: StandardsControlsUpdatable | undefined;

  /**
   * <p>The reason for the current status.</p>
   * @public
   */
  StandardsStatusReason?: StandardsStatusReason | undefined;
}

/**
 * @public
 */
export interface BatchDisableStandardsResponse {
  /**
   * <p>The details of the standards subscriptions that were disabled.</p>
   * @public
   */
  StandardsSubscriptions?: StandardsSubscription[] | undefined;
}

/**
 * <p>The standard that you want to enable.</p>
 * @public
 */
export interface StandardsSubscriptionRequest {
  /**
   * <p>The ARN of the standard that you want to enable. To view the list of available standards
   *          and their ARNs, use the <code>DescribeStandards</code> operation.</p>
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * <p>A key-value pair of input for the standard.</p>
   * @public
   */
  StandardsInput?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface BatchEnableStandardsRequest {
  /**
   * <p>The list of standards checks to enable.</p>
   * @public
   */
  StandardsSubscriptionRequests: StandardsSubscriptionRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchEnableStandardsResponse {
  /**
   * <p>The details of the standards subscriptions that were enabled.</p>
   * @public
   */
  StandardsSubscriptions?: StandardsSubscription[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAutomationRulesRequest {
  /**
   * <p>
   *          A list of rule ARNs to get details for.
   *       </p>
   * @public
   */
  AutomationRulesArns: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAutomationRulesResponse {
  /**
   * <p>
   *          A list of rule details for the provided rule ARNs.
   *       </p>
   * @public
   */
  Rules?: AutomationRulesConfig[] | undefined;

  /**
   * <p>
   *          A list of objects containing <code>RuleArn</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. This parameter
   *          tells you which automation rules the request didn't retrieve and why.
   *       </p>
   * @public
   */
  UnprocessedAutomationRules?: UnprocessedAutomationRule[] | undefined;
}

/**
 * <p>
 *             The target account, organizational unit, or the root that is associated with an Security Hub configuration. The configuration
 *             can be a configuration policy or self-managed behavior.
 *         </p>
 * @public
 */
export type Target =
  | Target.AccountIdMember
  | Target.OrganizationalUnitIdMember
  | Target.RootIdMember
  | Target.$UnknownMember;

/**
 * @public
 */
export namespace Target {
  /**
   * <p>
   *             The Amazon Web Services account ID of the target account.
   *         </p>
   * @public
   */
  export interface AccountIdMember {
    AccountId: string;
    OrganizationalUnitId?: never;
    RootId?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             The organizational unit ID of the target organizational unit.
   *         </p>
   * @public
   */
  export interface OrganizationalUnitIdMember {
    AccountId?: never;
    OrganizationalUnitId: string;
    RootId?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             The ID of the organization root.
   *         </p>
   * @public
   */
  export interface RootIdMember {
    AccountId?: never;
    OrganizationalUnitId?: never;
    RootId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AccountId?: never;
    OrganizationalUnitId?: never;
    RootId?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    AccountId: (value: string) => T;
    OrganizationalUnitId: (value: string) => T;
    RootId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Target, visitor: Visitor<T>): T => {
    if (value.AccountId !== undefined) return visitor.AccountId(value.AccountId);
    if (value.OrganizationalUnitId !== undefined) return visitor.OrganizationalUnitId(value.OrganizationalUnitId);
    if (value.RootId !== undefined) return visitor.RootId(value.RootId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>
 *             Provides details about the association between an Security Hub configuration and a target account, organizational unit, or
 *             the root. An association can exist between a target and a configuration policy, or between a target and self-managed
 *             behavior.
 *         </p>
 * @public
 */
export interface ConfigurationPolicyAssociation {
  /**
   * <p>
   *             The target account, organizational unit, or the root.
   *         </p>
   * @public
   */
  Target?: Target | undefined;
}

/**
 * @public
 */
export interface BatchGetConfigurationPolicyAssociationsRequest {
  /**
   * <p>
   *             Specifies one or more target account IDs, organizational unit (OU) IDs, or the root ID to retrieve associations for.
   *         </p>
   * @public
   */
  ConfigurationPolicyAssociationIdentifiers: ConfigurationPolicyAssociation[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetType = {
  ACCOUNT: "ACCOUNT",
  ORGANIZATIONAL_UNIT: "ORGANIZATIONAL_UNIT",
  ROOT: "ROOT",
} as const;

/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * <p>
 *             An object that contains the details of a configuration policy association that’s returned in a
 *             <code>ListConfigurationPolicyAssociations</code> request.
 *         </p>
 * @public
 */
export interface ConfigurationPolicyAssociationSummary {
  /**
   * <p>
   *             The universally unique identifier (UUID) of the configuration policy.
   *         </p>
   * @public
   */
  ConfigurationPolicyId?: string | undefined;

  /**
   * <p>
   *             The identifier of the target account, organizational unit, or the root.
   *         </p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>
   *             Specifies whether the target is an Amazon Web Services account, organizational unit, or the root.
   *         </p>
   * @public
   */
  TargetType?: TargetType | undefined;

  /**
   * <p>
   *             Indicates whether the association between the specified target and the configuration was directly applied by the
   *             Security Hub delegated administrator or inherited from a parent.
   *         </p>
   * @public
   */
  AssociationType?: AssociationType | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated.
   *         </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *             The current status of the association between the specified target and the configuration.
   *         </p>
   * @public
   */
  AssociationStatus?: ConfigurationPolicyAssociationStatus | undefined;

  /**
   * <p>
   *             The explanation for a <code>FAILED</code> value for <code>AssociationStatus</code>.
   *         </p>
   * @public
   */
  AssociationStatusMessage?: string | undefined;
}

/**
 * <p>
 *             An array of configuration policy associations, one for each configuration policy association identifier, that
 *             was specified in a <code>BatchGetConfigurationPolicyAssociations</code> request but couldn’t be processed due
 *             to an error.
 *         </p>
 * @public
 */
export interface UnprocessedConfigurationPolicyAssociation {
  /**
   * <p>
   *             Configuration policy association identifiers that were specified in a <code>BatchGetConfigurationPolicyAssociations</code>
   *             request but couldn’t be processed due to an error.
   *         </p>
   * @public
   */
  ConfigurationPolicyAssociationIdentifiers?: ConfigurationPolicyAssociation | undefined;

  /**
   * <p>
   *             An HTTP status code that identifies why the configuration policy association failed.
   *         </p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>
   *             A string that identifies why the configuration policy association failed.
   *         </p>
   * @public
   */
  ErrorReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetConfigurationPolicyAssociationsResponse {
  /**
   * <p>
   *             Describes associations for the target accounts, OUs, or the root.
   *         </p>
   * @public
   */
  ConfigurationPolicyAssociations?: ConfigurationPolicyAssociationSummary[] | undefined;

  /**
   * <p>
   *             An array of configuration policy associations, one for each configuration policy association identifier, that was
   *             specified in the request but couldn’t be processed due to an error.
   *         </p>
   * @public
   */
  UnprocessedConfigurationPolicyAssociations?: UnprocessedConfigurationPolicyAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSecurityControlsRequest {
  /**
   * <p> A list of security controls (identified with <code>SecurityControlId</code>,
   *             <code>SecurityControlArn</code>, or a mix of both parameters). The security control ID
   *          or Amazon Resource Name (ARN) is the same across standards. </p>
   * @public
   */
  SecurityControlIds: string[] | undefined;
}

/**
 * <p>
 *             An object that includes the data type of a security control parameter and its current value.
 *         </p>
 * @public
 */
export type ParameterValue =
  | ParameterValue.BooleanMember
  | ParameterValue.DoubleMember
  | ParameterValue.EnumMember
  | ParameterValue.EnumListMember
  | ParameterValue.IntegerMember
  | ParameterValue.IntegerListMember
  | ParameterValue.StringMember
  | ParameterValue.StringListMember
  | ParameterValue.$UnknownMember;

/**
 * @public
 */
export namespace ParameterValue {
  /**
   * <p>
   *             A control parameter that is an integer.
   *         </p>
   * @public
   */
  export interface IntegerMember {
    Integer: number;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             A control parameter that is a list of integers.
   *         </p>
   * @public
   */
  export interface IntegerListMember {
    Integer?: never;
    IntegerList: number[];
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             A control parameter that is a double.
   *         </p>
   * @public
   */
  export interface DoubleMember {
    Integer?: never;
    IntegerList?: never;
    Double: number;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             A control parameter that is a string.
   *         </p>
   * @public
   */
  export interface StringMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String: string;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             A control parameter that is a list of strings.
   *         </p>
   * @public
   */
  export interface StringListMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList: string[];
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             A control parameter that is a boolean.
   *         </p>
   * @public
   */
  export interface BooleanMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean: boolean;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             A control parameter that is an enum.
   *         </p>
   * @public
   */
  export interface EnumMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum: string;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             A control parameter that is a list of enums.
   *         </p>
   * @public
   */
  export interface EnumListMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Integer: (value: number) => T;
    IntegerList: (value: number[]) => T;
    Double: (value: number) => T;
    String: (value: string) => T;
    StringList: (value: string[]) => T;
    Boolean: (value: boolean) => T;
    Enum: (value: string) => T;
    EnumList: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ParameterValue, visitor: Visitor<T>): T => {
    if (value.Integer !== undefined) return visitor.Integer(value.Integer);
    if (value.IntegerList !== undefined) return visitor.IntegerList(value.IntegerList);
    if (value.Double !== undefined) return visitor.Double(value.Double);
    if (value.String !== undefined) return visitor.String(value.String);
    if (value.StringList !== undefined) return visitor.StringList(value.StringList);
    if (value.Boolean !== undefined) return visitor.Boolean(value.Boolean);
    if (value.Enum !== undefined) return visitor.Enum(value.Enum);
    if (value.EnumList !== undefined) return visitor.EnumList(value.EnumList);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ParameterValueType = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
} as const;

/**
 * @public
 */
export type ParameterValueType = (typeof ParameterValueType)[keyof typeof ParameterValueType];

/**
 * <p>
 *             An object that provides the current value of a security control parameter and identifies whether it has been customized.
 *         </p>
 * @public
 */
export interface ParameterConfiguration {
  /**
   * <p>
   *             Identifies whether a control parameter uses a custom user-defined value or subscribes to the default
   *             Security Hub behavior.</p>
   *          <p>When <code>ValueType</code> is set equal to <code>DEFAULT</code>, the default
   *             behavior can be a specific Security Hub default value, or the default behavior can be to ignore a specific parameter.
   *             When <code>ValueType</code> is set equal to <code>DEFAULT</code>, Security Hub ignores user-provided input for
   *             the <code>Value</code> field.</p>
   *          <p>When <code>ValueType</code> is set equal to <code>CUSTOM</code>, the <code>Value</code> field can't be empty.</p>
   * @public
   */
  ValueType: ParameterValueType | undefined;

  /**
   * <p>
   *             The current value of a control parameter.
   *         </p>
   * @public
   */
  Value?: ParameterValue | undefined;
}

/**
 * @public
 * @enum
 */
export const ControlStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ControlStatus = (typeof ControlStatus)[keyof typeof ControlStatus];

/**
 * @public
 * @enum
 */
export const SeverityRating = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type SeverityRating = (typeof SeverityRating)[keyof typeof SeverityRating];

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  READY: "READY",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * <p>
 *          A security control in Security Hub describes a security best practice related to a specific resource.
 *       </p>
 * @public
 */
export interface SecurityControl {
  /**
   * <p>
   *          The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Services service name and a
   *          number, such as APIGateway.3.
   *       </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for a security control across standards, such as
   *             <code>arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1</code>. This
   *          parameter doesn't mention a specific standard. </p>
   * @public
   */
  SecurityControlArn: string | undefined;

  /**
   * <p>The title of a security control.
   *       </p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p> The description of a security control across standards. This typically summarizes how
   *             Security Hub evaluates the control and the conditions under which it produces a
   *          failed finding. This parameter doesn't reference a specific standard. </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>
   *          A link to Security Hub documentation that explains how to remediate a failed finding for a security control.
   *       </p>
   * @public
   */
  RemediationUrl: string | undefined;

  /**
   * <p>
   *          The severity of a security control. For more information about how Security Hub determines control severity, see
   *          <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/controls-findings-create-update.html#control-findings-severity">Assigning severity to control findings</a> in the
   *          <i>Security Hub User Guide</i>.
   *       </p>
   * @public
   */
  SeverityRating: SeverityRating | undefined;

  /**
   * <p>
   *          The enablement status of a security control in a specific standard.
   *       </p>
   * @public
   */
  SecurityControlStatus: ControlStatus | undefined;

  /**
   * <p>
   *             Identifies whether customizable properties of a security control are reflected in Security Hub findings. A status of
   * <code>READY</code> indicates that Security Hub uses the current control parameter values when running security checks of the control.
   * A status of <code>UPDATING</code> indicates that all security checks might not use the current parameter values.
   *         </p>
   * @public
   */
  UpdateStatus?: UpdateStatus | undefined;

  /**
   * <p>
   *             An object that identifies the name of a control parameter, its current value, and whether it has been customized.
   *         </p>
   * @public
   */
  Parameters?: Record<string, ParameterConfiguration> | undefined;

  /**
   * <p>
   *             The most recent reason for updating the customizable properties of a security control. This differs from the
   *             <code>UpdateReason</code> field of the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">
   *                <code>BatchUpdateStandardsControlAssociations</code>
   *             </a> API, which tracks the
   *             reason for updating the enablement status of a control. This field accepts alphanumeric
   *             characters in addition to white spaces, dashes, and underscores.
   *         </p>
   * @public
   */
  LastUpdateReason?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UnprocessedErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INVALID_INPUT: "INVALID_INPUT",
  LIMIT_EXCEEDED: "LIMIT_EXCEEDED",
  NOT_FOUND: "NOT_FOUND",
} as const;

/**
 * @public
 */
export type UnprocessedErrorCode = (typeof UnprocessedErrorCode)[keyof typeof UnprocessedErrorCode];

/**
 * <p> Provides details about a security control for which a response couldn't be returned. </p>
 * @public
 */
export interface UnprocessedSecurityControl {
  /**
   * <p> The control (identified with <code>SecurityControlId</code>,
   *             <code>SecurityControlArn</code>, or a mix of both parameters) for which a response
   *          couldn't be returned. </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *          The error code for the unprocessed security control.
   *       </p>
   * @public
   */
  ErrorCode: UnprocessedErrorCode | undefined;

  /**
   * <p>
   *          The reason why the security control was unprocessed.
   *       </p>
   * @public
   */
  ErrorReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetSecurityControlsResponse {
  /**
   * <p>
   *          An array that returns the identifier, Amazon Resource Name (ARN), and other details about a security control.
   *          The same information is returned whether the request includes <code>SecurityControlId</code> or <code>SecurityControlArn</code>.
   *       </p>
   * @public
   */
  SecurityControls: SecurityControl[] | undefined;

  /**
   * <p>
   *          A security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) for which
   *          details cannot be returned.
   *       </p>
   * @public
   */
  UnprocessedIds?: UnprocessedSecurityControl[] | undefined;
}

/**
 * <p>
 *          An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters)
 *          and the Amazon Resource Name (ARN) of a standard. The security control ID or ARN is the same across standards.
 *       </p>
 * @public
 */
export interface StandardsControlAssociationId {
  /**
   * <p>
   *          The unique identifier (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) of a security
   *          control across standards.
   *       </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p>
   *          The ARN of a standard.
   *       </p>
   * @public
   */
  StandardsArn: string | undefined;
}

/**
 * @public
 */
export interface BatchGetStandardsControlAssociationsRequest {
  /**
   * <p>
   *          An array with one or more objects that includes a security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) and the Amazon Resource Name (ARN) of a standard.
   *          This field is used to query the enablement status of a control in a specified standard. The security control ID or ARN is the same across standards.
   *       </p>
   * @public
   */
  StandardsControlAssociationIds: StandardsControlAssociationId[] | undefined;
}

/**
 * <p> Provides details about a control's enablement status in a specified standard. </p>
 * @public
 */
export interface StandardsControlAssociationDetail {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of a security standard.
   *       </p>
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * <p>
   *          The unique identifier of a security control across standards. Values for this field typically consist of an Amazon Web Services service
   *          name and a number, such as APIGateway.3.
   *       </p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p> The ARN of a security control across standards, such as
   *             <code>arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1</code>. This
   *          parameter doesn't mention a specific standard. </p>
   * @public
   */
  SecurityControlArn: string | undefined;

  /**
   * <p>
   *          Specifies whether a control is enabled or disabled in a specified standard.
   *       </p>
   * @public
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * <p>
   *          The requirement that underlies a control in the compliance framework related to the standard.
   *       </p>
   * @public
   */
  RelatedRequirements?: string[] | undefined;

  /**
   * <p>
   *          The time at which the enablement status of the control in the specified standard was last updated.
   *       </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *          The reason for updating the enablement status of a control in a specified standard.
   *       </p>
   * @public
   */
  UpdatedReason?: string | undefined;

  /**
   * <p>
   *          The title of a control. This field may reference a specific standard.
   *       </p>
   * @public
   */
  StandardsControlTitle?: string | undefined;

  /**
   * <p>
   *          The description of a control. This typically summarizes how Security Hub evaluates the control and the
   *          conditions under which it produces a failed finding. This parameter may reference a specific standard.
   *       </p>
   * @public
   */
  StandardsControlDescription?: string | undefined;

  /**
   * <p> Provides the input parameter that Security Hub uses to call the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_UpdateStandardsControl.html">UpdateStandardsControl</a> API. This API can be used to enable or disable a control
   *          in a specified standard. </p>
   * @public
   */
  StandardsControlArns?: string[] | undefined;
}

/**
 * <p> Provides details about which
 *          control's enablement status couldn't be retrieved in a specified standard when calling <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>. This parameter also provides details
 *          about why the request was unprocessed. </p>
 * @public
 */
export interface UnprocessedStandardsControlAssociation {
  /**
   * <p> An array with one or more objects that includes a security control (identified with
   *             <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both
   *          parameters) and the Amazon Resource Name (ARN) of a standard. This parameter shows the
   *          specific controls for which the enablement status couldn't be retrieved in specified standards when
   *          calling <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>. </p>
   * @public
   */
  StandardsControlAssociationId: StandardsControlAssociationId | undefined;

  /**
   * <p>The error code for the unprocessed standard and control association.
   *       </p>
   * @public
   */
  ErrorCode: UnprocessedErrorCode | undefined;

  /**
   * <p>The reason why the standard and control association was unprocessed. </p>
   * @public
   */
  ErrorReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetStandardsControlAssociationsResponse {
  /**
   * <p>Provides the enablement status of a security control in a specified standard and other details for the control in relation to
   *          the specified standard.
   *       </p>
   * @public
   */
  StandardsControlAssociationDetails: StandardsControlAssociationDetail[] | undefined;

  /**
   * <p>
   *          A security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) whose enablement
   *          status in a specified standard cannot be returned.
   *       </p>
   * @public
   */
  UnprocessedAssociations?: UnprocessedStandardsControlAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchImportFindingsRequest {
  /**
   * <p>A list of findings to import. To successfully import a finding, it must follow the
   *             <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a>. Maximum of 100 findings per request.</p>
   * @public
   */
  Findings: AwsSecurityFinding[] | undefined;
}

/**
 * <p>The list of the findings that cannot be imported. For each finding, the list provides
 *          the error.</p>
 * @public
 */
export interface ImportFindingsError {
  /**
   * <p>The identifier of the finding that could not be updated.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The code of the error returned by the <code>BatchImportFindings</code> operation.</p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message of the error returned by the <code>BatchImportFindings</code>
   *          operation.</p>
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchImportFindingsResponse {
  /**
   * <p>The number of findings that failed to import.</p>
   * @public
   */
  FailedCount: number | undefined;

  /**
   * <p>The number of findings that were successfully imported.</p>
   * @public
   */
  SuccessCount: number | undefined;

  /**
   * <p>The list of findings that failed to import.</p>
   * @public
   */
  FailedFindings?: ImportFindingsError[] | undefined;
}

/**
 * <p>
 *          Specifies the parameters to update in an existing automation rule.
 *       </p>
 * @public
 */
export interface UpdateAutomationRulesRequestItem {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) for the rule.
   *       </p>
   * @public
   */
  RuleArn: string | undefined;

  /**
   * <p>
   *          Whether the rule is active after it is created. If
   *          this parameter is equal to <code>ENABLED</code>, Security Hub starts applying the rule to findings
   *          and finding updates after the rule is created. To change the value of this
   *          parameter after creating a rule, use <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html">
   *                <code>BatchUpdateAutomationRules</code>
   *             </a>.
   *       </p>
   * @public
   */
  RuleStatus?: RuleStatus | undefined;

  /**
   * <p> An integer ranging from 1 to 1000 that represents the order in which the rule action is
   *          applied to findings. Security Hub applies rules with lower values for this parameter
   *          first. </p>
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * <p>
   *          A description of the rule.
   *       </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *          The name of the rule.
   *       </p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding
   *             matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches
   *             the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   *         </p>
   * @public
   */
  IsTerminal?: boolean | undefined;

  /**
   * <p>
   *          A set of ASFF finding field attributes and corresponding expected values that
   *          Security Hub uses to filter findings. If a rule is enabled and a finding matches the conditions specified in
   *          this parameter, Security Hub applies the rule action to the finding.
   *       </p>
   * @public
   */
  Criteria?: AutomationRulesFindingFilters | undefined;

  /**
   * <p>
   *          One or more actions to update finding fields if a finding matches the conditions
   *          specified in <code>Criteria</code>.
   *       </p>
   * @public
   */
  Actions?: AutomationRulesAction[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateAutomationRulesRequest {
  /**
   * <p>
   *          An array of ARNs for the rules that are to be updated. Optionally, you can also include
   *          <code>RuleStatus</code> and <code>RuleOrder</code>.
   *       </p>
   * @public
   */
  UpdateAutomationRulesRequestItems: UpdateAutomationRulesRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateAutomationRulesResponse {
  /**
   * <p>
   *          A list of properly processed rule ARNs.
   *       </p>
   * @public
   */
  ProcessedAutomationRules?: string[] | undefined;

  /**
   * <p>
   *          A list of objects containing <code>RuleArn</code>, <code>ErrorCode</code>, and <code>ErrorMessage</code>. This parameter
   *          tells you which automation rules the request didn't update and why.
   *       </p>
   * @public
   */
  UnprocessedAutomationRules?: UnprocessedAutomationRule[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFindingsRequest {
  /**
   * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update
   *          up to 100 findings at a time.</p>
   *          <p>For each finding, the list provides the finding identifier and the ARN of the finding
   *          provider.</p>
   * @public
   */
  FindingIdentifiers: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The updated note.</p>
   * @public
   */
  Note?: NoteUpdate | undefined;

  /**
   * <p>Used to update the finding severity.</p>
   * @public
   */
  Severity?: SeverityUpdate | undefined;

  /**
   * <p>Indicates the veracity of a finding.</p>
   *          <p>The available values for <code>VerificationState</code> are  as follows.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> – The default disposition of a security finding</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRUE_POSITIVE</code> – The security finding is confirmed</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FALSE_POSITIVE</code> – The security finding was determined to be a false
   *                alarm</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where
   *                the finding doesn't pose any threat, is expected, or both</p>
   *             </li>
   *          </ul>
   * @public
   */
  VerificationState?: VerificationState | undefined;

  /**
   * <p>The updated value for the finding confidence. Confidence is defined as the likelihood
   *          that a finding accurately identifies the behavior or issue that it was intended to
   *          identify.</p>
   *          <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent
   *          confidence and 100 means 100 percent confidence.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The updated value for the level of importance assigned to the resources associated with
   *          the findings.</p>
   *          <p>A score of 0 means that the underlying resources have no criticality, and a score of 100
   *          is reserved for the most critical resources. </p>
   * @public
   */
  Criticality?: number | undefined;

  /**
   * <p>One or more finding types in the format of namespace/category/classifier that classify a
   *          finding.</p>
   *          <p>Valid namespace values are as follows.</p>
   *          <ul>
   *             <li>
   *                <p>Software and Configuration Checks</p>
   *             </li>
   *             <li>
   *                <p>TTPs</p>
   *             </li>
   *             <li>
   *                <p>Effects</p>
   *             </li>
   *             <li>
   *                <p>Unusual Behaviors</p>
   *             </li>
   *             <li>
   *                <p>Sensitive Data Identifications </p>
   *             </li>
   *          </ul>
   * @public
   */
  Types?: string[] | undefined;

  /**
   * <p>A list of name/value string pairs associated with the finding. These are custom,
   *          user-defined fields added to a finding.</p>
   * @public
   */
  UserDefinedFields?: Record<string, string> | undefined;

  /**
   * <p>Used to update the workflow status of a finding.</p>
   *          <p>The workflow status indicates the progress of the investigation into the finding. </p>
   * @public
   */
  Workflow?: WorkflowUpdate | undefined;

  /**
   * <p>A list of findings that are related to the updated findings.</p>
   * @public
   */
  RelatedFindings?: RelatedFinding[] | undefined;
}

/**
 * <p>A finding from a <code>BatchUpdateFindings</code> request that Security Hub was unable to
 *          update.</p>
 * @public
 */
export interface BatchUpdateFindingsUnprocessedFinding {
  /**
   * <p>The identifier of the finding that was not updated.</p>
   * @public
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * <p>The code associated with the error. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ConcurrentUpdateError</code> - Another request attempted to update the finding while this request was being processed.
   * This error may also occur if you call <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
   *                      <code>BatchUpdateFindings</code>
   *                   </a>
   * and <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
   *                      <code>BatchImportFindings</code>
   *                   </a> at the same time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DuplicatedFindingIdentifier</code> - The request included two or more findings with the same <code>FindingIdentifier</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FindingNotFound</code> - The <code>FindingIdentifier</code> included in the request did not match an existing finding.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FindingSizeExceeded</code> - The finding size was greater than the permissible value of 240 KB.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InternalFailure</code> - An internal service failure occurred when updating the finding.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InvalidInput</code> - The finding update contained an invalid value that did not satisfy the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html">Amazon Web Services Security Finding Format</a> syntax.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The message associated with the error. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Concurrent finding updates detected</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Finding Identifier is duplicated</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Finding Not Found</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Finding size exceeded 240 KB</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Internal service failure</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid Input</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFindingsResponse {
  /**
   * <p>The list of findings that were updated successfully.</p>
   * @public
   */
  ProcessedFindings: AwsSecurityFindingIdentifier[] | undefined;

  /**
   * <p>The list of findings that were not updated.</p>
   * @public
   */
  UnprocessedFindings: BatchUpdateFindingsUnprocessedFinding[] | undefined;
}

/**
 * <p>Provides a standard to identify security findings using OCSF.</p>
 * @public
 */
export interface OcsfFindingIdentifier {
  /**
   * <p>Finding cloud.account.uid, which is a unique identifier in the Amazon Web Services account..</p>
   * @public
   */
  CloudAccountUid: string | undefined;

  /**
   * <p>Finding finding_info.uid, which is a unique identifier for the finding from the finding provider.</p>
   * @public
   */
  FindingInfoUid: string | undefined;

  /**
   * <p>Finding metadata.product.uid, which is a unique identifier for the product.</p>
   * @public
   */
  MetadataProductUid: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFindingsV2Request {
  /**
   * <p>The list of finding <code>metadata.uid</code> to indicate findings to update.
   *          Finding <code>metadata.uid</code> is a globally unique identifier associated with the finding.
   *          Customers cannot use <code>MetadataUids</code> together with <code>FindingIdentifiers</code>.</p>
   * @public
   */
  MetadataUids?: string[] | undefined;

  /**
   * <p>Provides information to identify a specific V2 finding.</p>
   * @public
   */
  FindingIdentifiers?: OcsfFindingIdentifier[] | undefined;

  /**
   * <p>The updated value for a user provided comment about the finding.
   *          Minimum character length 1.
   *          Maximum character length 512.</p>
   * @public
   */
  Comment?: string | undefined;

  /**
   * <p>The updated value for the normalized severity identifier.
   *          The severity ID is an integer with the allowed enum values [0, 1, 2, 3, 4, 5, 99].
   *          When customer provides the updated severity ID, the string sibling severity will automatically be updated in the finding.</p>
   * @public
   */
  SeverityId?: number | undefined;

  /**
   * <p>The updated value for the normalized status identifier.
   *          The status ID is an integer with the allowed enum values [0, 1, 2, 3, 4, 5, 6, 99].
   *          When customer provides the updated status ID, the string sibling status will automatically be updated in the finding.</p>
   * @public
   */
  StatusId?: number | undefined;
}

/**
 * <p>The list of findings that were updated.</p>
 * @public
 */
export interface BatchUpdateFindingsV2ProcessedFinding {
  /**
   * <p>The finding identifier of a processed finding.</p>
   * @public
   */
  FindingIdentifier?: OcsfFindingIdentifier | undefined;

  /**
   * <p>The metadata.uid of a processed finding.</p>
   * @public
   */
  MetadataUid?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchUpdateFindingsV2UnprocessedFindingErrorCode = {
  ConflictException: "ConflictException",
  InternalServerException: "InternalServerException",
  ResourceNotFoundException: "ResourceNotFoundException",
  ValidationException: "ValidationException",
} as const;

/**
 * @public
 */
export type BatchUpdateFindingsV2UnprocessedFindingErrorCode =
  (typeof BatchUpdateFindingsV2UnprocessedFindingErrorCode)[keyof typeof BatchUpdateFindingsV2UnprocessedFindingErrorCode];

/**
 * <p>The list of findings that were not updated.</p>
 * @public
 */
export interface BatchUpdateFindingsV2UnprocessedFinding {
  /**
   * <p>The finding identifier of an unprocessed finding.</p>
   * @public
   */
  FindingIdentifier?: OcsfFindingIdentifier | undefined;

  /**
   * <p>The metadata.uid of an unprocessed finding.</p>
   * @public
   */
  MetadataUid?: string | undefined;

  /**
   * <p>Indicates the specific type of error preventing successful processing of a finding during a batch update operation.</p>
   * @public
   */
  ErrorCode?: BatchUpdateFindingsV2UnprocessedFindingErrorCode | undefined;

  /**
   * <p>A detailed description of why a finding could not be processed during a batch update operation.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateFindingsV2Response {
  /**
   * <p>The list of findings that were updated successfully.</p>
   * @public
   */
  ProcessedFindings: BatchUpdateFindingsV2ProcessedFinding[] | undefined;

  /**
   * <p>The list of V2 findings that were not updated.</p>
   * @public
   */
  UnprocessedFindings: BatchUpdateFindingsV2UnprocessedFinding[] | undefined;
}

/**
 * <p>The request causes conflict with the current state of the service resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>An array of requested updates to the enablement status of controls in specified
 *          standards. The objects in the array include a security control ID, the Amazon Resource Name (ARN) of the standard, the requested
 *          enablement status, and the reason for updating the enablement status.</p>
 * @public
 */
export interface StandardsControlAssociationUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the standard in which you want to update the
   *          control's enablement status.</p>
   * @public
   */
  StandardsArn: string | undefined;

  /**
   * <p>The unique identifier for the security control whose enablement status you want to update.</p>
   * @public
   */
  SecurityControlId: string | undefined;

  /**
   * <p>The desired enablement status of the control in the standard.</p>
   * @public
   */
  AssociationStatus: AssociationStatus | undefined;

  /**
   * <p>The reason for updating the control's enablement status in the standard.</p>
   * @public
   */
  UpdatedReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateStandardsControlAssociationsRequest {
  /**
   * <p>
   *          Updates the enablement status of a security control in a specified standard.
   *       </p>
   *          <p>
   *          Calls to this operation return a <code>RESOURCE_NOT_FOUND_EXCEPTION</code> error when the standard subscription for the control has <code>StandardsControlsUpdatable</code> value <code>NOT_READY_FOR_UPDATES</code>.
   *       </p>
   * @public
   */
  StandardsControlAssociationUpdates: StandardsControlAssociationUpdate[] | undefined;
}

/**
 * <p>Provides details about which control's enablement status could not be updated in a
 *          specified standard when calling the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a> API. This parameter also provides
 *          details about why the request was unprocessed. </p>
 * @public
 */
export interface UnprocessedStandardsControlAssociationUpdate {
  /**
   * <p>An array of control and standard associations for which an update failed when calling
   *          <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html">BatchUpdateStandardsControlAssociations</a>.
   *       </p>
   * @public
   */
  StandardsControlAssociationUpdate: StandardsControlAssociationUpdate | undefined;

  /**
   * <p>The error code for the unprocessed update of the control's enablement status in the
   *          specified standard.</p>
   * @public
   */
  ErrorCode: UnprocessedErrorCode | undefined;

  /**
   * <p>The reason why a control's enablement status in the specified standard couldn't be updated. </p>
   * @public
   */
  ErrorReason?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateStandardsControlAssociationsResponse {
  /**
   * <p>
   *          A security control (identified with <code>SecurityControlId</code>, <code>SecurityControlArn</code>, or a mix of both parameters) whose enablement status in a specified standard couldn't be updated.
   *       </p>
   * @public
   */
  UnprocessedAssociationUpdates?: UnprocessedStandardsControlAssociationUpdate[] | undefined;
}

/**
 * <p>
 *             The options for customizing a security control parameter with a boolean. For a boolean parameter, the options are
 *             <code>true</code> and <code>false</code>.
 *         </p>
 * @public
 */
export interface BooleanConfigurationOptions {
  /**
   * <p>
   *             The Security Hub default value for a boolean parameter.
   *         </p>
   * @public
   */
  DefaultValue?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const OcsfBooleanField = {
  COMPLIANCE_ASSESSMENTS_MEETS_CRITERIA: "compliance.assessments.meets_criteria",
  VULNERABILITIES_IS_EXPLOIT_AVAILABLE: "vulnerabilities.is_exploit_available",
  VULNERABILITIES_IS_FIX_AVAILABLE: "vulnerabilities.is_fix_available",
} as const;

/**
 * @public
 */
export type OcsfBooleanField = (typeof OcsfBooleanField)[keyof typeof OcsfBooleanField];

/**
 * <p>Enables filtering of security findings based on boolean field values in OCSF.</p>
 * @public
 */
export interface OcsfBooleanFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: OcsfBooleanField | undefined;

  /**
   * <p>Boolean filter for querying findings.</p>
   * @public
   */
  Filter?: BooleanFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const OcsfDateField = {
  FINDING_INFO_CREATED_TIME_DT: "finding_info.created_time_dt",
  FINDING_INFO_FIRST_SEEN_TIME_DT: "finding_info.first_seen_time_dt",
  FINDING_INFO_LAST_SEEN_TIME_DT: "finding_info.last_seen_time_dt",
  FINDING_INFO_MODIFIED_TIME_DT: "finding_info.modified_time_dt",
} as const;

/**
 * @public
 */
export type OcsfDateField = (typeof OcsfDateField)[keyof typeof OcsfDateField];

/**
 * <p>Enables filtering of security findings based on date and timestamp fields in OCSF.</p>
 * @public
 */
export interface OcsfDateFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: OcsfDateField | undefined;

  /**
   * <p>A date filter for querying findings.</p>
   * @public
   */
  Filter?: DateFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const OcsfMapField = {
  RESOURCES_TAGS: "resources.tags",
} as const;

/**
 * @public
 */
export type OcsfMapField = (typeof OcsfMapField)[keyof typeof OcsfMapField];

/**
 * <p>Enables filtering of security findings based on map field values in OCSF.</p>
 * @public
 */
export interface OcsfMapFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: OcsfMapField | undefined;

  /**
   * <p>A map filter for filtering Security Hub findings. Each map filter provides the field to check for, the
   *          value to check for, and the comparison operator.</p>
   * @public
   */
  Filter?: MapFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const OcsfNumberField = {
  ACTIVITY_ID: "activity_id",
  COMPLIANCE_STATUS_ID: "compliance.status_id",
  CONFIDENCE_SCORE: "confidence_score",
  FINDING_INFO_RELATED_EVENTS_COUNT: "finding_info.related_events_count",
  SEVERITY_ID: "severity_id",
  STATUS_ID: "status_id",
} as const;

/**
 * @public
 */
export type OcsfNumberField = (typeof OcsfNumberField)[keyof typeof OcsfNumberField];

/**
 * <p>Enables filtering of security findings based on numerical field values in OCSF.</p>
 * @public
 */
export interface OcsfNumberFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: OcsfNumberField | undefined;

  /**
   * <p>A number filter for querying findings.</p>
   * @public
   */
  Filter?: NumberFilter | undefined;
}

/**
 * @public
 * @enum
 */
export const OcsfStringField = {
  ACTIVITY_NAME: "activity_name",
  CLASS_NAME: "class_name",
  CLOUD_ACCOUNT_UID: "cloud.account.uid",
  CLOUD_PROVIDER: "cloud.provider",
  CLOUD_REGION: "cloud.region",
  COMMENT: "comment",
  COMPLIANCE_ASSESSMENTS_CATEGORY: "compliance.assessments.category",
  COMPLIANCE_ASSESSMENTS_NAME: "compliance.assessments.name",
  COMPLIANCE_CONTROL: "compliance.control",
  COMPLIANCE_STANDARDS: "compliance.standards",
  COMPLIANCE_STATUS: "compliance.status",
  FINDING_INFO_DESC: "finding_info.desc",
  FINDING_INFO_RELATED_EVENTS_PRODUCT_UID: "finding_info.related_events.product.uid",
  FINDING_INFO_RELATED_EVENTS_TITLE: "finding_info.related_events.title",
  FINDING_INFO_RELATED_EVENTS_UID: "finding_info.related_events.uid",
  FINDING_INFO_SRC_URL: "finding_info.src_url",
  FINDING_INFO_TITLE: "finding_info.title",
  FINDING_INFO_TYPES: "finding_info.types",
  FINDING_INFO_UID: "finding_info.uid",
  METADATA_PRODUCT_NAME: "metadata.product.name",
  METADATA_PRODUCT_UID: "metadata.product.uid",
  METADATA_PRODUCT_VENDOR_NAME: "metadata.product.vendor_name",
  METADATA_UID: "metadata.uid",
  REMEDIATION_DESC: "remediation.desc",
  REMEDIATION_REFERENCES: "remediation.references",
  RESOURCES_CLOUD_PARTITION: "resources.cloud_partition",
  RESOURCES_REGION: "resources.region",
  RESOURCES_TYPE: "resources.type",
  RESOURCES_UID: "resources.uid",
  SEVERITY: "severity",
  STATUS: "status",
  VULNERABILITIES_FIX_COVERAGE: "vulnerabilities.fix_coverage",
} as const;

/**
 * @public
 */
export type OcsfStringField = (typeof OcsfStringField)[keyof typeof OcsfStringField];

/**
 * <p>Enables filtering of security findings based on string field values in OCSF.</p>
 * @public
 */
export interface OcsfStringFilter {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  FieldName?: OcsfStringField | undefined;

  /**
   * <p>A string filter for filtering Security Hub findings.</p>
   * @public
   */
  Filter?: StringFilter | undefined;
}

/**
 * <p>Enables the creation of filtering criteria for security findings.</p>
 * @public
 */
export interface CompositeFilter {
  /**
   * <p>Enables filtering based on string field values.</p>
   * @public
   */
  StringFilters?: OcsfStringFilter[] | undefined;

  /**
   * <p>Enables filtering based on date and timestamp fields.</p>
   * @public
   */
  DateFilters?: OcsfDateFilter[] | undefined;

  /**
   * <p>Enables filtering  based on boolean field values.</p>
   * @public
   */
  BooleanFilters?: OcsfBooleanFilter[] | undefined;

  /**
   * <p>Enables filtering based on numerical field values.</p>
   * @public
   */
  NumberFilters?: OcsfNumberFilter[] | undefined;

  /**
   * <p>Enables filtering based on map field values.</p>
   * @public
   */
  MapFilters?: OcsfMapFilter[] | undefined;

  /**
   * <p>The logical operator used to combine multiple filter conditions.</p>
   * @public
   */
  Operator?: AllowedOperators | undefined;
}

/**
 * <p>
 *             The options for customizing a security control parameter that is a double.
 *         </p>
 * @public
 */
export interface DoubleConfigurationOptions {
  /**
   * <p>
   *             The Security Hub default value for a control parameter that is a double.
   *         </p>
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * <p>
   *             The minimum valid value for a control parameter that is a double.
   *         </p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>
   *             The maximum valid value for a control parameter that is a double.
   *         </p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>
 *             The options for customizing a security control parameter that is an enum.
 *         </p>
 * @public
 */
export interface EnumConfigurationOptions {
  /**
   * <p>
   *             The Security Hub default value for a control parameter that is an enum.
   *         </p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>
   *             The valid values for a control parameter that is an enum.
   *         </p>
   * @public
   */
  AllowedValues?: string[] | undefined;
}

/**
 * <p>
 *             The options for customizing a security control parameter that is a list of enums.
 *         </p>
 * @public
 */
export interface EnumListConfigurationOptions {
  /**
   * <p>
   *             The Security Hub default value for a control parameter that is a list of enums.
   *         </p>
   * @public
   */
  DefaultValue?: string[] | undefined;

  /**
   * <p>
   *             The maximum number of list items that an enum list control parameter can accept.
   *         </p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>
   *             The valid values for a control parameter that is a list of enums.
   *         </p>
   * @public
   */
  AllowedValues?: string[] | undefined;
}

/**
 * <p>
 *             The options for customizing a security control parameter that is an integer.
 *         </p>
 * @public
 */
export interface IntegerConfigurationOptions {
  /**
   * <p>
   *             The Security Hub default value for a control parameter that is an integer.
   *         </p>
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * <p>
   *             The minimum valid value for a control parameter that is an integer.
   *         </p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>
   *             The maximum valid value for a control parameter that is an integer.
   *         </p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>
 *             The options for customizing a security control parameter that is a list of integers.
 *         </p>
 * @public
 */
export interface IntegerListConfigurationOptions {
  /**
   * <p>
   *             The Security Hub default value for a control parameter that is a list of integers.
   *         </p>
   * @public
   */
  DefaultValue?: number[] | undefined;

  /**
   * <p>
   *             The minimum valid value for a control parameter that is a list of integers.
   *         </p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>
   *             The maximum valid value for a control parameter that is a list of integers.
   *         </p>
   * @public
   */
  Max?: number | undefined;

  /**
   * <p>
   *             The maximum number of list items that an interger list control parameter can accept.
   *         </p>
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * <p>
 *             The options for customizing a security control parameter that is a string.
 *         </p>
 * @public
 */
export interface StringConfigurationOptions {
  /**
   * <p>
   *             The Security Hub default value for a control parameter that is a string.
   *         </p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>
   *             An RE2 regular expression that Security Hub uses to validate a user-provided control parameter string.
   *         </p>
   * @public
   */
  Re2Expression?: string | undefined;

  /**
   * <p>
   *             The description of the RE2 regular expression.
   *         </p>
   * @public
   */
  ExpressionDescription?: string | undefined;
}

/**
 * <p>
 *             The options for customizing a security control parameter that is a list of strings.
 *         </p>
 * @public
 */
export interface StringListConfigurationOptions {
  /**
   * <p>
   *             The Security Hub default value for a control parameter that is a list of strings.
   *         </p>
   * @public
   */
  DefaultValue?: string[] | undefined;

  /**
   * <p>
   *             An RE2 regular expression that Security Hub uses to validate a user-provided list of strings for a control
   *             parameter.
   *         </p>
   * @public
   */
  Re2Expression?: string | undefined;

  /**
   * <p>
   *             The maximum number of list items that a string list control parameter can accept.
   *         </p>
   * @public
   */
  MaxItems?: number | undefined;

  /**
   * <p>
   *             The description of the RE2 regular expression.
   *         </p>
   * @public
   */
  ExpressionDescription?: string | undefined;
}

/**
 * <p>
 *             The options for customizing a security control parameter.
 *         </p>
 * @public
 */
export type ConfigurationOptions =
  | ConfigurationOptions.BooleanMember
  | ConfigurationOptions.DoubleMember
  | ConfigurationOptions.EnumMember
  | ConfigurationOptions.EnumListMember
  | ConfigurationOptions.IntegerMember
  | ConfigurationOptions.IntegerListMember
  | ConfigurationOptions.StringMember
  | ConfigurationOptions.StringListMember
  | ConfigurationOptions.$UnknownMember;

/**
 * @public
 */
export namespace ConfigurationOptions {
  /**
   * <p>
   *             The options for customizing a security control parameter that is an integer.
   *         </p>
   * @public
   */
  export interface IntegerMember {
    Integer: IntegerConfigurationOptions;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             The options for customizing a security control parameter that is a list of integers.
   *         </p>
   * @public
   */
  export interface IntegerListMember {
    Integer?: never;
    IntegerList: IntegerListConfigurationOptions;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             The options for customizing a security control parameter that is a double.
   *         </p>
   * @public
   */
  export interface DoubleMember {
    Integer?: never;
    IntegerList?: never;
    Double: DoubleConfigurationOptions;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             The options for customizing a security control parameter that is a string data type.
   *         </p>
   * @public
   */
  export interface StringMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String: StringConfigurationOptions;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             The options for customizing a security control parameter that is a list of strings.
   *         </p>
   * @public
   */
  export interface StringListMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList: StringListConfigurationOptions;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             The options for customizing a security control parameter that is a boolean. For a boolean parameter, the options are
   *             <code>true</code> and <code>false</code>.
   *         </p>
   * @public
   */
  export interface BooleanMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean: BooleanConfigurationOptions;
    Enum?: never;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             The options for customizing a security control parameter that is an enum.
   *         </p>
   * @public
   */
  export interface EnumMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum: EnumConfigurationOptions;
    EnumList?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             The options for customizing a security control parameter that is a list of enums.
   *         </p>
   * @public
   */
  export interface EnumListMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList: EnumListConfigurationOptions;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Integer?: never;
    IntegerList?: never;
    Double?: never;
    String?: never;
    StringList?: never;
    Boolean?: never;
    Enum?: never;
    EnumList?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Integer: (value: IntegerConfigurationOptions) => T;
    IntegerList: (value: IntegerListConfigurationOptions) => T;
    Double: (value: DoubleConfigurationOptions) => T;
    String: (value: StringConfigurationOptions) => T;
    StringList: (value: StringListConfigurationOptions) => T;
    Boolean: (value: BooleanConfigurationOptions) => T;
    Enum: (value: EnumConfigurationOptions) => T;
    EnumList: (value: EnumListConfigurationOptions) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConfigurationOptions, visitor: Visitor<T>): T => {
    if (value.Integer !== undefined) return visitor.Integer(value.Integer);
    if (value.IntegerList !== undefined) return visitor.IntegerList(value.IntegerList);
    if (value.Double !== undefined) return visitor.Double(value.Double);
    if (value.String !== undefined) return visitor.String(value.String);
    if (value.StringList !== undefined) return visitor.StringList(value.StringList);
    if (value.Boolean !== undefined) return visitor.Boolean(value.Boolean);
    if (value.Enum !== undefined) return visitor.Enum(value.Enum);
    if (value.EnumList !== undefined) return visitor.EnumList(value.EnumList);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>
 *             An object that contains the details of an Security Hub configuration policy that’s returned in a
 *             <code>ListConfigurationPolicies</code> request.
 *         </p>
 * @public
 */
export interface ConfigurationPolicySummary {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the configuration policy.
   *         </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *             The universally unique identifier (UUID) of the configuration policy.
   *         </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             The name of the configuration policy. Alphanumeric characters and the following ASCII characters are permitted:
   *             <code>-, ., !, *, /</code>.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The description of the configuration policy.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.
   *         </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *             Indicates whether the service that the configuration policy applies to is enabled in the policy.
   *         </p>
   * @public
   */
  ServiceEnabled?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectorAuthStatus = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type ConnectorAuthStatus = (typeof ConnectorAuthStatus)[keyof typeof ConnectorAuthStatus];

/**
 * @public
 * @enum
 */
export const ConnectorProviderName = {
  JIRA_CLOUD: "JIRA_CLOUD",
  SERVICENOW: "SERVICENOW",
} as const;

/**
 * @public
 */
export type ConnectorProviderName = (typeof ConnectorProviderName)[keyof typeof ConnectorProviderName];

/**
 * @public
 */
export interface ConnectorRegistrationsV2Request {
  /**
   * <p>The authCode retrieved from authUrl to complete the OAuth 2.0 authorization code flow.</p>
   * @public
   */
  AuthCode: string | undefined;

  /**
   * <p>The authState retrieved from authUrl to complete the OAuth 2.0 authorization code flow.</p>
   * @public
   */
  AuthState: string | undefined;
}

/**
 * @public
 */
export interface ConnectorRegistrationsV2Response {
  /**
   * <p>The Amazon Resource Name (ARN) of the connectorV2.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>The UUID of the connectorV2 to identify connectorV2 resource.</p>
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectorStatus = {
  CONNECTED: "CONNECTED",
  FAILED_TO_CONNECT: "FAILED_TO_CONNECT",
  PENDING_AUTHORIZATION: "PENDING_AUTHORIZATION",
  PENDING_CONFIGURATION: "PENDING_CONFIGURATION",
} as const;

/**
 * @public
 */
export type ConnectorStatus = (typeof ConnectorStatus)[keyof typeof ConnectorStatus];

/**
 * <p>The connectorV2 third-party provider configuration summary.</p>
 * @public
 */
export interface ProviderSummary {
  /**
   * <p>The name of the provider.</p>
   * @public
   */
  ProviderName?: ConnectorProviderName | undefined;

  /**
   * <p>The status for the connectorV2.</p>
   * @public
   */
  ConnectorStatus?: ConnectorStatus | undefined;
}

/**
 * <p>A condensed overview of the connectorV2..</p>
 * @public
 */
export interface ConnectorSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the connectorV2.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>The UUID of the connectorV2 to identify connectorV2 resource.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The Name field contains the user-defined name assigned to the integration connector. This helps identify and manage multiple connectors within Security Hub.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the connectorV2.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The connectorV2 third party provider configuration summary.</p>
   * @public
   */
  ProviderSummary: ProviderSummary | undefined;

  /**
   * <p>ISO 8601 UTC timestamp for the time create the connectorV2.</p>
   * @public
   */
  CreatedAt: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const ControlFindingGenerator = {
  SECURITY_CONTROL: "SECURITY_CONTROL",
  STANDARD_CONTROL: "STANDARD_CONTROL",
} as const;

/**
 * @public
 */
export type ControlFindingGenerator = (typeof ControlFindingGenerator)[keyof typeof ControlFindingGenerator];

/**
 * @public
 */
export interface CreateActionTargetRequest {
  /**
   * <p>The name of the custom action target. Can contain up to 20 characters.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description for the custom action target.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The ID for the custom action target. Can contain up to 20 alphanumeric characters.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * @public
 */
export interface CreateActionTargetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the custom action target.</p>
   * @public
   */
  ActionTargetArn: string | undefined;
}

/**
 * <p>The resource specified in the request conflicts with an existing resource.</p>
 * @public
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * @public
 */
export interface CreateAggregatorV2Request {
  /**
   * <p>Determines how Regions are linked to an Aggregator V2.</p>
   * @public
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>The list of Regions that are linked to the aggregation Region.</p>
   * @public
   */
  LinkedRegions?: string[] | undefined;

  /**
   * <p>A list of key-value pairs to be applied to the AggregatorV2.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique identifier used to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAggregatorV2Response {
  /**
   * <p>The ARN of the AggregatorV2.</p>
   * @public
   */
  AggregatorV2Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where data is aggregated.</p>
   * @public
   */
  AggregationRegion?: string | undefined;

  /**
   * <p>Determines how Regions are linked to an Aggregator V2.</p>
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * <p>The list of Regions that are linked to the aggregation Region.</p>
   * @public
   */
  LinkedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleRequest {
  /**
   * <p>
   *             User-defined tags associated with an automation rule.
   *         </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>
   *          Whether the rule is active after it is created. If
   *          this parameter is equal to <code>ENABLED</code>, Security Hub starts applying the rule to findings
   *          and finding updates after the rule is created. To change the value of this
   *          parameter after creating a rule, use <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateAutomationRules.html">
   *                <code>BatchUpdateAutomationRules</code>
   *             </a>.
   *       </p>
   * @public
   */
  RuleStatus?: RuleStatus | undefined;

  /**
   * <p>An integer ranging from 1 to 1000 that represents the order in which the rule action is
   *          applied to findings. Security Hub applies rules with lower values for this parameter
   *          first. </p>
   * @public
   */
  RuleOrder: number | undefined;

  /**
   * <p>
   *          The name of the rule.
   *       </p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>
   *          A description of the rule.
   *       </p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding
   *             matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches
   *             the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
   *         </p>
   * @public
   */
  IsTerminal?: boolean | undefined;

  /**
   * <p>
   *          A set of ASFF finding field attributes and corresponding expected values that
   *          Security Hub uses to filter findings. If a rule is enabled and a finding matches the conditions specified in
   *          this parameter, Security Hub applies the rule action to the finding.
   *       </p>
   * @public
   */
  Criteria: AutomationRulesFindingFilters | undefined;

  /**
   * <p>
   *          One or more actions to update finding fields if a finding matches the conditions
   *          specified in <code>Criteria</code>.
   *       </p>
   * @public
   */
  Actions: AutomationRulesAction[] | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleResponse {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the automation rule that you created.
   *       </p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * <p>Specifies the filtering criteria for security findings using OCSF.</p>
 * @public
 */
export interface OcsfFindingFilters {
  /**
   * <p>Enables the creation of complex filtering conditions by combining filter criteria.</p>
   * @public
   */
  CompositeFilters?: CompositeFilter[] | undefined;

  /**
   * <p>The logical operators used to combine the filtering on multiple <code>CompositeFilters</code>.</p>
   * @public
   */
  CompositeOperator?: AllowedOperators | undefined;
}

/**
 * <p>Defines the parameters and conditions used to evaluate and filter security findings.</p>
 * @public
 */
export type Criteria = Criteria.OcsfFindingCriteriaMember | Criteria.$UnknownMember;

/**
 * @public
 */
export namespace Criteria {
  /**
   * <p>The filtering conditions that align with OCSF standards.</p>
   * @public
   */
  export interface OcsfFindingCriteriaMember {
    OcsfFindingCriteria: OcsfFindingFilters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    OcsfFindingCriteria?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    OcsfFindingCriteria: (value: OcsfFindingFilters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Criteria, visitor: Visitor<T>): T => {
    if (value.OcsfFindingCriteria !== undefined) return visitor.OcsfFindingCriteria(value.OcsfFindingCriteria);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateAutomationRuleV2Request {
  /**
   * <p>The name of the V2 automation rule.</p>
   * @public
   */
  RuleName: string | undefined;

  /**
   * <p>The status of the V2 automation rule.</p>
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * <p>A description of the V2 automation rule.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The value for the rule priority.</p>
   * @public
   */
  RuleOrder: number | undefined;

  /**
   * <p>The filtering type and configuration of the automation rule.</p>
   * @public
   */
  Criteria: Criteria | undefined;

  /**
   * <p>A list of actions to be performed when the rule criteria is met.</p>
   * @public
   */
  Actions: AutomationRulesActionV2[] | undefined;

  /**
   * <p>A list of key-value pairs associated with the V2 automation rule.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique identifier used to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAutomationRuleV2Response {
  /**
   * <p>The ARN of the V2 automation rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>The ID of the V2 automation rule.</p>
   * @public
   */
  RuleId?: string | undefined;
}

/**
 * <p>
 *             A list of security controls and control parameter values that are included in a configuration policy.
 *         </p>
 * @public
 */
export interface SecurityControlCustomParameter {
  /**
   * <p>
   *             The ID of the security control.
   *         </p>
   * @public
   */
  SecurityControlId?: string | undefined;

  /**
   * <p>
   *             An object that specifies parameter values for a control in a configuration policy.
   *         </p>
   * @public
   */
  Parameters?: Record<string, ParameterConfiguration> | undefined;
}

/**
 * <p>
 *             An object that defines which security controls are enabled in an Security Hub configuration policy.
 *             The enablement status of a control is aligned across all of the enabled standards in an account.
 *         </p>
 * @public
 */
export interface SecurityControlsConfiguration {
  /**
   * <p>
   *             A list of security controls that are enabled in the configuration policy. Security Hub disables all other
   *             controls (including newly released controls) other than the listed controls.
   *         </p>
   * @public
   */
  EnabledSecurityControlIdentifiers?: string[] | undefined;

  /**
   * <p>
   *             A list of security controls that are disabled in the configuration policy. Security Hub enables all other
   *             controls (including newly released controls) other than the listed controls.
   *         </p>
   * @public
   */
  DisabledSecurityControlIdentifiers?: string[] | undefined;

  /**
   * <p>
   *             A list of security controls and control parameter values that are included in a configuration policy.
   *         </p>
   * @public
   */
  SecurityControlCustomParameters?: SecurityControlCustomParameter[] | undefined;
}

/**
 * <p>
 *             An object that defines how Security Hub is configured. The configuration policy includes whether
 *             Security Hub is enabled or disabled, a list of enabled security standards, a list of enabled or
 *             disabled security controls, and a list of custom parameter values for specified controls. If you provide a list of security controls that are enabled in the configuration
 *             policy, Security Hub disables all other controls (including newly released controls). If you provide a
 *             list of security controls that are disabled in the configuration policy, Security Hub enables all other
 *             controls (including newly released controls).
 *         </p>
 * @public
 */
export interface SecurityHubPolicy {
  /**
   * <p>
   *             Indicates whether Security Hub is enabled in the policy.
   *         </p>
   * @public
   */
  ServiceEnabled?: boolean | undefined;

  /**
   * <p>
   *             A list that defines which security standards are enabled in the configuration policy.
   *         </p>
   * @public
   */
  EnabledStandardIdentifiers?: string[] | undefined;

  /**
   * <p>
   *             An object that defines which security controls are enabled in the configuration policy. The enablement status
   *             of a control is aligned across all of the enabled standards in an account.
   *         </p>
   * @public
   */
  SecurityControlsConfiguration?: SecurityControlsConfiguration | undefined;
}

/**
 * <p>
 *             An object that defines how Security Hub is configured. It includes whether Security Hub is
 *             enabled or disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls.
 *             If you provide a list of security controls that are enabled in the configuration policy, Security Hub
 *             disables all other controls (including newly released controls). If you provide a list of security controls that
 *             are disabled in the configuration policy, Security Hub enables all other controls (including newly
 *             released controls).
 *         </p>
 * @public
 */
export type Policy = Policy.SecurityHubMember | Policy.$UnknownMember;

/**
 * @public
 */
export namespace Policy {
  /**
   * <p>
   *             The Amazon Web Services service that the configuration policy applies to.
   *         </p>
   * @public
   */
  export interface SecurityHubMember {
    SecurityHub: SecurityHubPolicy;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    SecurityHub?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    SecurityHub: (value: SecurityHubPolicy) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Policy, visitor: Visitor<T>): T => {
    if (value.SecurityHub !== undefined) return visitor.SecurityHub(value.SecurityHub);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateConfigurationPolicyRequest {
  /**
   * <p>
   *             The name of the configuration policy. Alphanumeric characters and the following ASCII characters are permitted:
   *             <code>-, ., !, *, /</code>.
   *         </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *             The description of the configuration policy.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             An object that defines how Security Hub is configured. It includes whether Security Hub is enabled or
   *             disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls.
   *             If you provide a list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including newly
   *             released controls). If you provide a list of security controls that are disabled in the configuration policy, Security Hub
   *             enables all other controls (including newly released controls).
   *         </p>
   * @public
   */
  ConfigurationPolicy: Policy | undefined;

  /**
   * <p>
   *             User-defined tags associated with a configuration policy. For more information, see
   *             <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/tagging-resources.html">Tagging Security Hub resources</a>
   *             in the <i>Security Hub user guide</i>.
   *         </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationPolicyResponse {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) of the configuration policy.
   *         </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *             The universally unique identifier (UUID) of the configuration policy.
   *         </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             The name of the configuration policy.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The description of the configuration policy.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.
   *         </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy was created.
   *         </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>
   *             An object that defines how Security Hub is configured. It includes whether Security Hub is enabled or disabled, a
   *             list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls.
   *             If the request included a list of security controls that are enabled in the configuration policy, Security Hub disables all other controls (including newly
   *             released controls). If the request included a list of security controls that are disabled in the configuration policy,
   *             Security Hub enables all other controls (including newly released controls).
   *         </p>
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
}

/**
 * <p>The initial configuration settings required to establish an integration between Security Hub and Jira Cloud.</p>
 * @public
 */
export interface JiraCloudProviderConfiguration {
  /**
   * <p>The project key for a JiraCloud instance.</p>
   * @public
   */
  ProjectKey?: string | undefined;
}

/**
 * <p>The initial configuration settings required to establish an integration between Security Hub and ServiceNow ITSM.</p>
 * @public
 */
export interface ServiceNowProviderConfiguration {
  /**
   * <p>The instance name of ServiceNow ITSM.</p>
   * @public
   */
  InstanceName: string | undefined;

  /**
   * <p>The client ID of ServiceNow ITSM.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The client secret of ServiceNow ITSM.</p>
   * @public
   */
  ClientSecret: string | undefined;
}

/**
 * <p>The initial configuration settings required to establish an integration between Security Hub and third-party provider.</p>
 * @public
 */
export type ProviderConfiguration =
  | ProviderConfiguration.JiraCloudMember
  | ProviderConfiguration.ServiceNowMember
  | ProviderConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProviderConfiguration {
  /**
   * <p>The configuration settings required to establish an integration with Jira Cloud.</p>
   * @public
   */
  export interface JiraCloudMember {
    JiraCloud: JiraCloudProviderConfiguration;
    ServiceNow?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration settings required to establish an integration with ServiceNow ITSM.</p>
   * @public
   */
  export interface ServiceNowMember {
    JiraCloud?: never;
    ServiceNow: ServiceNowProviderConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    JiraCloud?: never;
    ServiceNow?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    JiraCloud: (value: JiraCloudProviderConfiguration) => T;
    ServiceNow: (value: ServiceNowProviderConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProviderConfiguration, visitor: Visitor<T>): T => {
    if (value.JiraCloud !== undefined) return visitor.JiraCloud(value.JiraCloud);
    if (value.ServiceNow !== undefined) return visitor.ServiceNow(value.ServiceNow);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateConnectorV2Request {
  /**
   * <p>The unique name of the connectorV2.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the connectorV2.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The third-party provider’s service configuration.</p>
   * @public
   */
  Provider: ProviderConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of KMS key used to encrypt secrets for the connectorV2.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The tags to add to the connectorV2 when you create.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique identifier used to ensure idempotency.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectorV2Response {
  /**
   * <p>The Amazon Resource Name (ARN) of the connectorV2.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>The UUID of the connectorV2 to identify connectorV2 resource.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The Url provide to customers for OAuth auth code flow.</p>
   * @public
   */
  AuthUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreateFindingAggregatorRequest {
  /**
   * <p>Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.</p>
   *          <p>The selected option also determines how to use the Regions provided in the Regions list.</p>
   *          <p>The options are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS</code> - Aggregates findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL_REGIONS_EXCEPT_SPECIFIED</code> - Aggregates findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the <code>Regions</code> parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SPECIFIED_REGIONS</code> - Aggregates findings only from the Regions listed in the <code>Regions</code> parameter. Security Hub does not automatically aggregate findings from new Regions.
   *          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_REGIONS</code> - Aggregates no data because no Regions are selected as linked Regions.
   *           </p>
   *             </li>
   *          </ul>
   * @public
   */
  RegionLinkingMode: string | undefined;

  /**
   * <p>If <code>RegionLinkingMode</code> is <code>ALL_REGIONS_EXCEPT_SPECIFIED</code>, then this is a space-separated list of Regions that don't replicate and send findings to the home Region.</p>
   *          <p>If <code>RegionLinkingMode</code> is <code>SPECIFIED_REGIONS</code>, then this is a space-separated list of Regions that do replicate and send findings to the home Region.
   *       </p>
   *          <p>An <code>InvalidInputException</code> error results if you populate this field while <code>RegionLinkingMode</code> is
   *            <code>NO_REGIONS</code>.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and stop cross-Region aggregation.</p>
   * @public
   */
  FindingAggregatorArn?: string | undefined;

  /**
   * <p>The home Region. Findings generated in linked Regions are replicated and sent to the home Region.</p>
   * @public
   */
  FindingAggregationRegion?: string | undefined;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateInsightRequest {
  /**
   * <p>The name of the custom insight to create.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>One or more attributes used to filter the findings included in the insight. The insight
   *          only includes findings that match the criteria defined in the filters.</p>
   * @public
   */
  Filters: AwsSecurityFindingFilters | undefined;

  /**
   * <p>The attribute used to group the findings for the insight. The grouping attribute
   *          identifies the type of item that the insight applies to. For example, if an insight is
   *          grouped by resource identifier, then the insight produces a list of resource
   *          identifiers.</p>
   * @public
   */
  GroupByAttribute: string | undefined;
}

/**
 * @public
 */
export interface CreateInsightResponse {
  /**
   * <p>The ARN of the insight created.</p>
   * @public
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersRequest {
  /**
   * <p>The list of accounts to associate with the Security Hub administrator account. For each account, the
   *          list includes the account ID and optionally the email address.</p>
   * @public
   */
  AccountDetails: AccountDetails[] | undefined;
}

/**
 * <p>Details about the account that was not processed.</p>
 * @public
 */
export interface Result {
  /**
   * <p>An Amazon Web Services account ID of the account that was not processed.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The reason that the account was not processed.</p>
   * @public
   */
  ProcessingResult?: string | undefined;
}

/**
 * @public
 */
export interface CreateMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * @public
 */
export interface CreateTicketV2Request {
  /**
   * <p>The UUID of the connectorV2 to identify connectorV2 resource.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The the unique ID for the finding.</p>
   * @public
   */
  FindingMetadataUid: string | undefined;

  /**
   * <p>The client idempotency token.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateTicketV2Response {
  /**
   * <p>The ID for the ticketv2.</p>
   * @public
   */
  TicketId: string | undefined;

  /**
   * <p>The url to the created ticket.</p>
   * @public
   */
  TicketSrcUrl?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SecurityControlProperty = {
  Parameters: "Parameters",
} as const;

/**
 * @public
 */
export type SecurityControlProperty = (typeof SecurityControlProperty)[keyof typeof SecurityControlProperty];

/**
 * @public
 */
export interface DeclineInvitationsRequest {
  /**
   * <p>The list of prospective member account IDs for which to decline an invitation.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeclineInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not processed. For each account, the list includes
   *          the account ID and the email address.</p>
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * @public
 */
export interface DeleteActionTargetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom action target to delete.</p>
   * @public
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteActionTargetResponse {
  /**
   * <p>The ARN of the custom action target that was deleted.</p>
   * @public
   */
  ActionTargetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAggregatorV2Request {
  /**
   * <p>The ARN of the Aggregator V2.</p>
   * @public
   */
  AggregatorV2Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAggregatorV2Response {}

/**
 * @public
 */
export interface DeleteAutomationRuleV2Request {
  /**
   * <p>The ARN of the V2 automation rule.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAutomationRuleV2Response {}

/**
 * @public
 */
export interface DeleteConfigurationPolicyRequest {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) or universally unique identifier (UUID) of the configuration policy.
   *         </p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationPolicyResponse {}

/**
 * @public
 */
export interface DeleteConnectorV2Request {
  /**
   * <p>The UUID of the connectorV2 to identify connectorV2 resource.</p>
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorV2Response {}

/**
 * @public
 */
export interface DeleteFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator to delete. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   * @public
   */
  FindingAggregatorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFindingAggregatorResponse {}

/**
 * @public
 */
export interface DeleteInsightRequest {
  /**
   * <p>The ARN of the insight to delete.</p>
   * @public
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInsightResponse {
  /**
   * <p>The ARN of the insight that was deleted.</p>
   * @public
   */
  InsightArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsRequest {
  /**
   * <p>The list of member account IDs that received the invitations you want to delete.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteInvitationsResponse {
  /**
   * <p>The list of Amazon Web Services accounts for which the invitations were not deleted. For each account,
   *          the list includes the account ID and the email address.</p>
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersRequest {
  /**
   * <p>The list of account IDs for the member accounts to delete.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteMembersResponse {
  /**
   * <p>The list of Amazon Web Services accounts that were not deleted. For each account, the list includes the
   *          account ID and the email address.</p>
   * @public
   */
  UnprocessedAccounts?: Result[] | undefined;
}

/**
 * @public
 */
export interface DescribeActionTargetsRequest {
  /**
   * <p>A list of custom action target ARNs for the custom action targets to retrieve.</p>
   * @public
   */
  ActionTargetArns?: string[] | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeActionTargets</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeActionTargetsResponse {
  /**
   * <p>A list of <code>ActionTarget</code> objects. Each object includes the <code>ActionTargetArn</code>,
   *             <code>Description</code>, and <code>Name</code> of a custom action target available in
   *          Security Hub.</p>
   * @public
   */
  ActionTargets: ActionTarget[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHubRequest {
  /**
   * <p>The ARN of the Hub resource to retrieve.</p>
   * @public
   */
  HubArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHubResponse {
  /**
   * <p>The ARN of the Hub resource that was retrieved.</p>
   * @public
   */
  HubArn?: string | undefined;

  /**
   * <p>The date and time when Security Hub was enabled in the account.</p>
   * @public
   */
  SubscribedAt?: string | undefined;

  /**
   * <p>Whether to automatically enable new controls when they are added to standards that are
   *          enabled.</p>
   *          <p>If set to <code>true</code>, then new controls for enabled standards are enabled
   *          automatically. If set to <code>false</code>, then new controls are not enabled.</p>
   *          <p>When you automatically enable new controls, you can interact with the controls in
   *            the console and programmatically immediately after release. However, automatically enabled controls have a temporary default status of
   *            <code>DISABLED</code>. It can take up to several days for Security Hub to process the control release and designate the
   *            control as <code>ENABLED</code> in your account. During the processing period, you can manually enable or disable a
   *            control, and Security Hub will maintain that designation regardless of whether you have <code>AutoEnableControls</code> set to
   *            <code>true</code>.</p>
   * @public
   */
  AutoEnableControls?: boolean | undefined;

  /**
   * <p>Specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to
   *          <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check
   *          applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings
   *          for a control check when the check applies to multiple enabled standards.</p>
   *          <p>The value for this field in a member account matches the value in the administrator
   *          account. For accounts that aren't part of an organization, the default value of this field
   *          is <code>SECURITY_CONTROL</code> if you enabled Security Hub on or after February 23,
   *          2023.</p>
   * @public
   */
  ControlFindingGenerator?: ControlFindingGenerator | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {}

/**
 * @public
 * @enum
 */
export const OrganizationConfigurationConfigurationType = {
  CENTRAL: "CENTRAL",
  LOCAL: "LOCAL",
} as const;

/**
 * @public
 */
export type OrganizationConfigurationConfigurationType =
  (typeof OrganizationConfigurationConfigurationType)[keyof typeof OrganizationConfigurationConfigurationType];

/**
 * @public
 * @enum
 */
export const OrganizationConfigurationStatus = {
  ENABLED: "ENABLED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type OrganizationConfigurationStatus =
  (typeof OrganizationConfigurationStatus)[keyof typeof OrganizationConfigurationStatus];

/**
 * <p>
 *             Provides information about the way an organization is configured in Security Hub.
 *         </p>
 * @public
 */
export interface OrganizationConfiguration {
  /**
   * <p>
   *             Indicates whether the organization uses local or central configuration.
   *         </p>
   *          <p>If you use local configuration, the
   *             Security Hub delegated administrator can set <code>AutoEnable</code> to <code>true</code> and
   *             <code>AutoEnableStandards</code> to <code>DEFAULT</code>. This automatically enables Security Hub and
   *             default security standards in new organization accounts. These new account settings must be set separately in
   *             each Amazon Web Services Region, and settings may be different in each Region.
   *         </p>
   *          <p>
   *             If you use central configuration, the delegated administrator can create configuration policies. Configuration
   *             policies can be used to configure Security Hub, security standards, and security controls in multiple
   *             accounts and Regions. If you want new organization accounts to use a specific configuration, you can create a
   *             configuration policy and associate it with the root or specific organizational units (OUs). New accounts will
   *             inherit the policy from the root or their assigned OU.
   *         </p>
   * @public
   */
  ConfigurationType?: OrganizationConfigurationConfigurationType | undefined;

  /**
   * <p>
   *             Describes whether central configuration could be enabled as the <code>ConfigurationType</code> for the
   *             organization. If your <code>ConfigurationType</code> is local configuration, then the value of <code>Status</code>
   *             is always <code>ENABLED</code>.
   *         </p>
   * @public
   */
  Status?: OrganizationConfigurationStatus | undefined;

  /**
   * <p>
   *             Provides an explanation if the value of <code>Status</code> is equal to <code>FAILED</code> when <code>ConfigurationType</code>
   *             is equal to <code>CENTRAL</code>.
   *         </p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * <p>Whether to automatically enable Security Hub in new member accounts when they join the organization.</p>
   *          <p>If set to <code>true</code>, then Security Hub is automatically enabled in new accounts. If set to <code>false</code>,
   *            then Security Hub isn't enabled in new accounts automatically. The default value is <code>false</code>.</p>
   *          <p>If the <code>ConfigurationType</code> of your organization is set to <code>CENTRAL</code>, then this field is set
   *            to <code>false</code> and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration
   *             policy in which Security Hub is enabled and associate the policy with new organization accounts.</p>
   * @public
   */
  AutoEnable?: boolean | undefined;

  /**
   * <p>Whether the maximum number of allowed member accounts are already associated with the
   *          Security Hub administrator account.</p>
   * @public
   */
  MemberAccountLimitReached?: boolean | undefined;

  /**
   * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a>
   *          in new member accounts when they join the organization.</p>
   *          <p>If equal to <code>DEFAULT</code>, then Security Hub default standards are automatically enabled for new member
   *          accounts. If equal to <code>NONE</code>, then default standards are not automatically enabled for new member
   *           accounts. The default value of this parameter is equal to <code>DEFAULT</code>.</p>
   *          <p>If the <code>ConfigurationType</code> of your organization is set to <code>CENTRAL</code>, then this field is set
   *            to <code>NONE</code> and can't be changed in the home Region and linked Regions. However, in that case, the delegated administrator can create a configuration
   *             policy in which specific security standards are enabled and associate the policy with new organization accounts.</p>
   * @public
   */
  AutoEnableStandards?: AutoEnableStandards | undefined;

  /**
   * <p>
   *             Provides information about the way an organization is configured in Security Hub.
   *         </p>
   * @public
   */
  OrganizationConfiguration?: OrganizationConfiguration | undefined;
}

/**
 * @public
 */
export interface DescribeProductsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeProducts</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The ARN of the integration to return.</p>
   * @public
   */
  ProductArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB: "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB: "SEND_FINDINGS_TO_SECURITY_HUB",
  UPDATE_FINDINGS_IN_SECURITY_HUB: "UPDATE_FINDINGS_IN_SECURITY_HUB",
} as const;

/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * <p>Contains details about a product.</p>
 * @public
 */
export interface Product {
  /**
   * <p>The ARN assigned to the product.</p>
   * @public
   */
  ProductArn: string | undefined;

  /**
   * <p>The name of the product.</p>
   * @public
   */
  ProductName?: string | undefined;

  /**
   * <p>The name of the company that provides the product.</p>
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * <p>A description of the product.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The categories assigned to the product.</p>
   * @public
   */
  Categories?: string[] | undefined;

  /**
   * <p>The types of integration that the product supports. Available values are the
   *          following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND_FINDINGS_TO_SECURITY_HUB</code> - The integration sends
   *                findings to Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECEIVE_FINDINGS_FROM_SECURITY_HUB</code> - The integration
   *                receives findings from Security Hub.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FINDINGS_IN_SECURITY_HUB</code> - The integration does not send new findings to Security Hub, but does make updates to the findings that it receives from Security Hub.</p>
   *             </li>
   *          </ul>
   * @public
   */
  IntegrationTypes?: IntegrationType[] | undefined;

  /**
   * <p>For integrations with Amazon Web Services services, the Amazon Web Services Console URL from which to activate the service.</p>
   *          <p>For integrations with third-party products, the Amazon Web Services Marketplace URL from which to subscribe to or purchase the product.</p>
   * @public
   */
  MarketplaceUrl?: string | undefined;

  /**
   * <p>The URL to the service or product documentation about the integration with Security Hub, including how to activate the integration.</p>
   * @public
   */
  ActivationUrl?: string | undefined;

  /**
   * <p>The resource policy associated with the product.</p>
   * @public
   */
  ProductSubscriptionResourcePolicy?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProductsResponse {
  /**
   * <p>A list of products, including details for each product.</p>
   * @public
   */
  Products: Product[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProductsV2Request {
  /**
   * <p>The token required for pagination.
   *          On your first call, set the value of this parameter to <code>NULL</code>.
   *          For subsequent calls, to continue listing data, set the value of this parameter to the value returned in the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IntegrationV2Type = {
  RECEIVE_FINDINGS_FROM_SECURITY_HUB: "RECEIVE_FINDINGS_FROM_SECURITY_HUB",
  SEND_FINDINGS_TO_SECURITY_HUB: "SEND_FINDINGS_TO_SECURITY_HUB",
  UPDATE_FINDINGS_IN_SECURITY_HUB: "UPDATE_FINDINGS_IN_SECURITY_HUB",
} as const;

/**
 * @public
 */
export type IntegrationV2Type = (typeof IntegrationV2Type)[keyof typeof IntegrationV2Type];

/**
 * <p>Defines the structure for the productV2.</p>
 * @public
 */
export interface ProductV2 {
  /**
   * <p>The name of the productV2.</p>
   * @public
   */
  ProductV2Name?: string | undefined;

  /**
   * <p>The name of the organization or vendor that provides the productV2.</p>
   * @public
   */
  CompanyName?: string | undefined;

  /**
   * <p>Detailed information about the productV2.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The domains or functional areas the productV2 addresses.</p>
   * @public
   */
  Categories?: string[] | undefined;

  /**
   * <p>The type of integration.</p>
   * @public
   */
  IntegrationV2Types?: IntegrationV2Type[] | undefined;

  /**
   * <p>The console URL where you can purchase or subscribe to products.</p>
   * @public
   */
  MarketplaceUrl?: string | undefined;

  /**
   * <p>The URL to the serviceV@ or productV2 documentation about the integration, which includes how to activate the integration.</p>
   * @public
   */
  ActivationUrl?: string | undefined;
}

/**
 * @public
 */
export interface DescribeProductsV2Response {
  /**
   * <p>Gets information about the product integration.</p>
   * @public
   */
  ProductsV2: ProductV2[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.
   *       Otherwise, this parameter is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityHubV2Request {}

/**
 * @public
 */
export interface DescribeSecurityHubV2Response {
  /**
   * <p>The ARN of the service resource.</p>
   * @public
   */
  HubV2Arn?: string | undefined;

  /**
   * <p>The date and time when the service was enabled in the account.</p>
   * @public
   */
  SubscribedAt?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStandardsRequest {
  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of standards to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides details about the management of a security standard.</p>
 * @public
 */
export interface StandardsManagedBy {
  /**
   * <p>An identifier for the company that manages a specific security standard. For existing
   *          standards, the value is equal to <code>Amazon Web Services</code>.</p>
   * @public
   */
  Company?: string | undefined;

  /**
   * <p>An identifier for the product that manages a specific security standard. For existing
   *          standards, the value is equal to the Amazon Web Services service that manages the
   *          standard.</p>
   * @public
   */
  Product?: string | undefined;
}

/**
 * <p>Provides information about a specific security standard.</p>
 * @public
 */
export interface Standard {
  /**
   * <p>The ARN of the standard.</p>
   * @public
   */
  StandardsArn?: string | undefined;

  /**
   * <p>The name of the standard.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the standard.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Whether the standard is enabled by default. When Security Hub is enabled from the console, if a
   *          standard is enabled by default, the check box for that standard is selected by
   *          default.</p>
   *          <p>When Security Hub is enabled using the <code>EnableSecurityHub</code> API operation, the
   *          standard is enabled by default unless <code>EnableDefaultStandards</code> is set to
   *             <code>false</code>.</p>
   * @public
   */
  EnabledByDefault?: boolean | undefined;

  /**
   * <p>Provides details about the management of a standard.
   *       </p>
   * @public
   */
  StandardsManagedBy?: StandardsManagedBy | undefined;
}

/**
 * @public
 */
export interface DescribeStandardsResponse {
  /**
   * <p>A list of available standards.</p>
   * @public
   */
  Standards?: Standard[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStandardsControlsRequest {
  /**
   * <p>The ARN of a resource that represents your subscription to a supported standard. To get
   *          the subscription ARNs of the standards you have enabled, use the <code>GetEnabledStandards</code> operation.</p>
   * @public
   */
  StandardsSubscriptionArn: string | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>DescribeStandardsControls</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of security standard controls to return.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Details for an individual security standard control.</p>
 * @public
 */
export interface StandardsControl {
  /**
   * <p>The ARN of the security standard control.</p>
   * @public
   */
  StandardsControlArn?: string | undefined;

  /**
   * <p>The current status of the security standard control. Indicates whether the control is
   *          enabled or disabled. Security Hub does not check against disabled controls.</p>
   * @public
   */
  ControlStatus?: ControlStatus | undefined;

  /**
   * <p>The reason provided for the most recent change in status for the control.</p>
   * @public
   */
  DisabledReason?: string | undefined;

  /**
   * <p>The date and time that the status of the security standard control was most recently
   *          updated.</p>
   * @public
   */
  ControlStatusUpdatedAt?: Date | undefined;

  /**
   * <p>The identifier of the security standard control.</p>
   * @public
   */
  ControlId?: string | undefined;

  /**
   * <p>The title of the security standard control.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The longer description of the security standard control. Provides information about what
   *          the control is checking for.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A link to remediation information for the control in the Security Hub user
   *          documentation.</p>
   * @public
   */
  RemediationUrl?: string | undefined;

  /**
   * <p>The severity of findings generated from this security standard control.</p>
   *          <p>The finding severity is based on an assessment of how easy it would be to compromise Amazon Web Services
   *          resources if the issue is detected.</p>
   * @public
   */
  SeverityRating?: SeverityRating | undefined;

  /**
   * <p>The list of requirements that are related to this control.</p>
   * @public
   */
  RelatedRequirements?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeStandardsControlsResponse {
  /**
   * <p>A list of security standards controls.</p>
   * @public
   */
  Controls?: StandardsControl[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the integrated product to disable the integration for.</p>
   * @public
   */
  ProductSubscriptionArn: string | undefined;
}

/**
 * @public
 */
export interface DisableImportFindingsForProductResponse {}

/**
 * @public
 * @enum
 */
export const SecurityHubFeature = {
  SECURITY_HUB: "SecurityHub",
  SECURITY_HUB_V2: "SecurityHubV2",
} as const;

/**
 * @public
 */
export type SecurityHubFeature = (typeof SecurityHubFeature)[keyof typeof SecurityHubFeature];

/**
 * @public
 */
export interface DisableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the Security Hub administrator account.</p>
   * @public
   */
  AdminAccountId: string | undefined;

  /**
   * <p>The feature for which the delegated admin account is disabled.
   *          Defaults to Security Hub if not specified.</p>
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface DisableOrganizationAdminAccountResponse {}

/**
 * @public
 */
export interface DisableSecurityHubRequest {}

/**
 * @public
 */
export interface DisableSecurityHubResponse {}

/**
 * @public
 */
export interface DisableSecurityHubV2Request {}

/**
 * @public
 */
export interface DisableSecurityHubV2Response {}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountRequest {}

/**
 * @public
 */
export interface DisassociateFromAdministratorAccountResponse {}

/**
 * @public
 */
export interface DisassociateFromMasterAccountRequest {}

/**
 * @public
 */
export interface DisassociateFromMasterAccountResponse {}

/**
 * @public
 */
export interface DisassociateMembersRequest {
  /**
   * <p>The account IDs of the member accounts to disassociate from the administrator account.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateMembersResponse {}

/**
 * @public
 */
export interface EnableImportFindingsForProductRequest {
  /**
   * <p>The ARN of the product to enable the integration for.</p>
   * @public
   */
  ProductArn: string | undefined;
}

/**
 * @public
 */
export interface EnableImportFindingsForProductResponse {
  /**
   * <p>The ARN of your subscription to the product to enable integrations for.</p>
   * @public
   */
  ProductSubscriptionArn?: string | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account identifier of the account to designate as the Security Hub administrator
   *          account.</p>
   * @public
   */
  AdminAccountId: string | undefined;

  /**
   * <p>The feature for which the delegated admin account is enabled.
   *          Defaults to Security Hub if not specified.</p>
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface EnableOrganizationAdminAccountResponse {
  /**
   * <p>The Amazon Web Services account identifier of the account to designate as the Security Hub administrator account.</p>
   * @public
   */
  AdminAccountId?: string | undefined;

  /**
   * <p>The feature where the delegated administrator is enabled.
   *       The default is Security Hub CSPM if no delegated administrator is specified in the request.</p>
   * @public
   */
  Feature?: SecurityHubFeature | undefined;
}

/**
 * @public
 */
export interface EnableSecurityHubRequest {
  /**
   * <p>The tags to add to the hub resource when you enable Security Hub.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Whether to enable the security standards that Security Hub has designated as automatically
   *          enabled. If you don't provide a value for <code>EnableDefaultStandards</code>, it is set
   *          to <code>true</code>. To not enable the automatically enabled standards, set
   *             <code>EnableDefaultStandards</code> to <code>false</code>.</p>
   * @public
   */
  EnableDefaultStandards?: boolean | undefined;

  /**
   * <p>This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on.
   *       If the value for this field is set to
   *       <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check
   *       applies to multiple enabled standards.</p>
   *          <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings
   *       for a control check when the check applies to multiple enabled standards.</p>
   *          <p>The value for this field in a member account matches the value in the administrator
   *          account. For accounts that aren't part of an organization, the default value of this field
   *          is <code>SECURITY_CONTROL</code> if you enabled Security Hub on or after February 23,
   *          2023.</p>
   * @public
   */
  ControlFindingGenerator?: ControlFindingGenerator | undefined;
}

/**
 * @public
 */
export interface EnableSecurityHubResponse {}

/**
 * @public
 */
export interface EnableSecurityHubV2Request {
  /**
   * <p>The tags to add to the hub V2 resource when you enable Security Hub.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface EnableSecurityHubV2Response {
  /**
   * <p>The ARN of the V2 resource that was created.</p>
   * @public
   */
  HubV2Arn?: string | undefined;
}

/**
 * <p>A finding aggregator is a Security Hub resource that specifies cross-Region aggregation settings, including the
 * home Region and any linked Regions.</p>
 * @public
 */
export interface FindingAggregator {
  /**
   * <p>The ARN of the finding aggregator. You use the finding aggregator ARN to retrieve details for, update, and delete the finding aggregator.</p>
   * @public
   */
  FindingAggregatorArn?: string | undefined;
}

/**
 * <p> An array of objects that provides details about a change to a finding, including the
 *                 Amazon Web Services Security Finding Format (ASFF) field that changed, the value of
 *             the field before the change, and the value of the field after the change. </p>
 * @public
 */
export interface FindingHistoryUpdate {
  /**
   * <p>
   *          The ASFF field that changed during the finding change event.
   *       </p>
   * @public
   */
  UpdatedField?: string | undefined;

  /**
   * <p>
   *          The value of the ASFF field before the finding change event.
   *       </p>
   * @public
   */
  OldValue?: string | undefined;

  /**
   * <p>
   *          The value of the ASFF field after the finding change event. To preserve storage and readability, Security Hub omits this value
   *           if <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_FindingHistoryRecord.html">
   *                <code>FindingHistoryRecord</code>
   *             </a> exceeds database limits.
   *       </p>
   * @public
   */
  NewValue?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FindingHistoryUpdateSourceType = {
  BATCH_IMPORT_FINDINGS: "BATCH_IMPORT_FINDINGS",
  BATCH_UPDATE_FINDINGS: "BATCH_UPDATE_FINDINGS",
} as const;

/**
 * @public
 */
export type FindingHistoryUpdateSourceType =
  (typeof FindingHistoryUpdateSourceType)[keyof typeof FindingHistoryUpdateSourceType];

/**
 * <p>
 *          Identifies the source of the finding change event.
 *       </p>
 * @public
 */
export interface FindingHistoryUpdateSource {
  /**
   * <p>
   *          Describes the type of finding change event, such as a call to <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
   *                <code>BatchImportFindings</code>
   *             </a> (by an integrated Amazon Web Services service or third party partner integration) or <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
   *                <code>BatchUpdateFindings</code>
   *             </a> (by a Security Hub customer).
   *       </p>
   * @public
   */
  Type?: FindingHistoryUpdateSourceType | undefined;

  /**
   * <p>
   *          The identity of the source that initiated the finding change event. For example, the Amazon Resource Name (ARN) of a partner that calls BatchImportFindings or of a customer that calls BatchUpdateFindings.
   *       </p>
   * @public
   */
  Identity?: string | undefined;
}

/**
 * <p>
 *          A list of events that changed the specified finding during the specified time period. Each record represents a single
 *          finding change event.
 *       </p>
 * @public
 */
export interface FindingHistoryRecord {
  /**
   * <p>Identifies which finding to get the finding history for.</p>
   * @public
   */
  FindingIdentifier?: AwsSecurityFindingIdentifier | undefined;

  /**
   * <p> A timestamp that indicates when Security Hub
   *             processed the updated finding record.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  UpdateTime?: Date | undefined;

  /**
   * <p>
   *          Identifies whether the event marks the creation of a new finding. A value of <code>True</code> means that the finding is
   *          newly created. A value of <code>False</code> means that the finding isn’t newly created.
   *       </p>
   * @public
   */
  FindingCreated?: boolean | undefined;

  /**
   * <p> Identifies the source of the event that changed the finding. For example, an integrated
   *                 Amazon Web Services service or third-party partner integration may call <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchImportFindings.html">
   *                <code>BatchImportFindings</code>
   *             </a>, or an Security Hub customer
   *             may call <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateFindings.html">
   *                <code>BatchUpdateFindings</code>
   *             </a>. </p>
   * @public
   */
  UpdateSource?: FindingHistoryUpdateSource | undefined;

  /**
   * <p>
   *          An array of objects that provides details about the finding change event, including the Amazon Web Services Security
   *          Finding Format (ASFF) field that changed, the value of the field before the change, and the value of the field after
   *          the change.
   *       </p>
   * @public
   */
  Updates?: FindingHistoryUpdate[] | undefined;

  /**
   * <p>
   *          A token for pagination purposes. Provide this token in the subsequent request to <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_GetFindingsHistory.html">
   *                <code>GetFindingsHistory</code>
   *             </a> to get
   *          up to an additional 100 results of history for the same finding that you specified in your initial request.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountRequest {}

/**
 * <p>Details about an invitation.</p>
 * @public
 */
export interface Invitation {
  /**
   * <p>The account ID of the Security Hub administrator account that the invitation was sent from.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the invitation sent to the member account.</p>
   * @public
   */
  InvitationId?: string | undefined;

  /**
   * <p>The timestamp of when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: Date | undefined;

  /**
   * <p>The current status of the association between the member and administrator accounts.</p>
   * @public
   */
  MemberStatus?: string | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountResponse {
  /**
   * <p>Details about an invitation.</p>
   * @public
   */
  Administrator?: Invitation | undefined;
}

/**
 * @public
 */
export interface GetAggregatorV2Request {
  /**
   * <p>The ARN of the Aggregator V2.</p>
   * @public
   */
  AggregatorV2Arn: string | undefined;
}

/**
 * @public
 */
export interface GetAggregatorV2Response {
  /**
   * <p>The ARN of the Aggregator V2.</p>
   * @public
   */
  AggregatorV2Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services Region where data is aggregated.</p>
   * @public
   */
  AggregationRegion?: string | undefined;

  /**
   * <p>Determines how Regions are linked to an Aggregator V2.</p>
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * <p>The list of Regions that are linked to the aggregation Region.</p>
   * @public
   */
  LinkedRegions?: string[] | undefined;
}

/**
 * @public
 */
export interface GetAutomationRuleV2Request {
  /**
   * <p>The ARN of the V2 automation rule.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetAutomationRuleV2Response {
  /**
   * <p>The ARN of the V2 automation rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>The ID of the V2 automation rule.</p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The value for the rule priority.</p>
   * @public
   */
  RuleOrder?: number | undefined;

  /**
   * <p>The name of the V2 automation rule.</p>
   * @public
   */
  RuleName?: string | undefined;

  /**
   * <p>The status of the V2 automation automation rule.</p>
   * @public
   */
  RuleStatus?: RuleStatusV2 | undefined;

  /**
   * <p>A description of the automation rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The filtering type and configuration of the V2 automation rule.</p>
   * @public
   */
  Criteria?: Criteria | undefined;

  /**
   * <p>A list of actions performed when the rule criteria is met.</p>
   * @public
   */
  Actions?: AutomationRulesActionV2[] | undefined;

  /**
   * <p>The timestamp when the V2 automation rule was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the V2 automation rule was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetConfigurationPolicyRequest {
  /**
   * <p>
   *             The Amazon Resource Name (ARN) or universally unique identifier (UUID) of the configuration policy.
   *         </p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationPolicyResponse {
  /**
   * <p>
   *             The ARN of the configuration policy.
   *         </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *             The UUID of the configuration policy.
   *         </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *             The name of the configuration policy.
   *         </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *             The description of the configuration policy.
   *         </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy was last updated.
   *         </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy was created.
   *         </p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>
   *             An object that defines how Security Hub is configured. It includes whether Security Hub is enabled or
   *             disabled, a list of enabled security standards, a list of enabled or disabled security controls, and a list of custom parameter values for specified controls.
   *             If the policy includes a list of security controls that are enabled, Security Hub disables all other controls (including newly released controls).
   *             If the policy includes a list of security controls that are disabled, Security Hub enables all other controls (including
   *             newly released controls).
   *         </p>
   * @public
   */
  ConfigurationPolicy?: Policy | undefined;
}

/**
 * @public
 */
export interface GetConfigurationPolicyAssociationRequest {
  /**
   * <p>
   *             The target account ID, organizational unit ID, or the root ID to retrieve the association for.
   *         </p>
   * @public
   */
  Target: Target | undefined;
}

/**
 * @public
 */
export interface GetConfigurationPolicyAssociationResponse {
  /**
   * <p>
   *             The universally unique identifier (UUID) of a configuration policy. For self-managed behavior, the value is
   *             <code>SELF_MANAGED_SECURITY_HUB</code>.
   *         </p>
   * @public
   */
  ConfigurationPolicyId?: string | undefined;

  /**
   * <p>
   *             The target account ID, organizational unit ID, or the root ID for which the association is retrieved.
   *         </p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>
   *             Specifies whether the target is an Amazon Web Services account, organizational unit, or the organization root.
   *         </p>
   * @public
   */
  TargetType?: TargetType | undefined;

  /**
   * <p>
   *             Indicates whether the association between the specified target and the configuration was directly applied by the
   *             Security Hub delegated administrator or inherited from a parent.
   *         </p>
   * @public
   */
  AssociationType?: AssociationType | undefined;

  /**
   * <p>
   *             The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated.
   *         </p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>
   *             The current status of the association between the specified target and the configuration.
   *         </p>
   * @public
   */
  AssociationStatus?: ConfigurationPolicyAssociationStatus | undefined;

  /**
   * <p>
   *             The explanation for a <code>FAILED</code> value for <code>AssociationStatus</code>.
   *         </p>
   * @public
   */
  AssociationStatusMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetConnectorV2Request {
  /**
   * <p>The UUID of the connectorV2 to identify connectorV2 resource.</p>
   * @public
   */
  ConnectorId: string | undefined;
}

/**
 * <p>Information about the operational status and health of a connectorV2.</p>
 * @public
 */
export interface HealthCheck {
  /**
   * <p>The status of the connectorV2.</p>
   * @public
   */
  ConnectorStatus: ConnectorStatus | undefined;

  /**
   * <p>The message for the reason of connectorStatus change.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>ISO 8601 UTC timestamp for the time check the health status of the connectorV2.</p>
   * @public
   */
  LastCheckedAt: Date | undefined;
}

/**
 * <p>Information about the configuration and status of a Jira Cloud integration.</p>
 * @public
 */
export interface JiraCloudDetail {
  /**
   * <p>The cloud id of the Jira Cloud.</p>
   * @public
   */
  CloudId?: string | undefined;

  /**
   * <p>The projectKey of Jira Cloud.</p>
   * @public
   */
  ProjectKey?: string | undefined;

  /**
   * <p>The URL domain of your Jira Cloud instance.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The URL to provide to customers for OAuth auth code flow.</p>
   * @public
   */
  AuthUrl?: string | undefined;

  /**
   * <p>The status of the authorization between Jira Cloud and the service.</p>
   * @public
   */
  AuthStatus?: ConnectorAuthStatus | undefined;
}

/**
 * <p>Information about a ServiceNow ITSM integration.</p>
 * @public
 */
export interface ServiceNowDetail {
  /**
   * <p>The instanceName of ServiceNow ITSM.</p>
   * @public
   */
  InstanceName?: string | undefined;

  /**
   * <p>The clientId of ServiceNow ITSM.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The status of the authorization between Jira Cloud and the service.</p>
   * @public
   */
  AuthStatus: ConnectorAuthStatus | undefined;
}

/**
 * <p>The third-party provider detail for a service configuration.</p>
 * @public
 */
export type ProviderDetail =
  | ProviderDetail.JiraCloudMember
  | ProviderDetail.ServiceNowMember
  | ProviderDetail.$UnknownMember;

/**
 * @public
 */
export namespace ProviderDetail {
  /**
   * <p>Details about a Jira Cloud integration.</p>
   * @public
   */
  export interface JiraCloudMember {
    JiraCloud: JiraCloudDetail;
    ServiceNow?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a ServiceNow ITSM integration.</p>
   * @public
   */
  export interface ServiceNowMember {
    JiraCloud?: never;
    ServiceNow: ServiceNowDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    JiraCloud?: never;
    ServiceNow?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    JiraCloud: (value: JiraCloudDetail) => T;
    ServiceNow: (value: ServiceNowDetail) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProviderDetail, visitor: Visitor<T>): T => {
    if (value.JiraCloud !== undefined) return visitor.JiraCloud(value.JiraCloud);
    if (value.ServiceNow !== undefined) return visitor.ServiceNow(value.ServiceNow);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetConnectorV2Response {
  /**
   * <p>The Amazon Resource Name (ARN) of the connectorV2.</p>
   * @public
   */
  ConnectorArn?: string | undefined;

  /**
   * <p>The UUID of the connectorV2 to identify connectorV2 resource.</p>
   * @public
   */
  ConnectorId: string | undefined;

  /**
   * <p>The name of the connectorV2.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the connectorV2.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of KMS key used for the connectorV2.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>ISO 8601 UTC timestamp for the time create the connectorV2.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>ISO 8601 UTC timestamp for the time update the connectorV2 connectorStatus.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The current health status for connectorV2</p>
   * @public
   */
  Health: HealthCheck | undefined;

  /**
   * <p>The third-party provider detail for a service configuration.</p>
   * @public
   */
  ProviderDetail: ProviderDetail | undefined;
}

/**
 * @public
 */
export interface GetEnabledStandardsRequest {
  /**
   * <p>The list of the standards subscription ARNs for the standards to retrieve.</p>
   * @public
   */
  StandardsSubscriptionArns?: string[] | undefined;

  /**
   * <p>The token that is required for pagination. On your first call to the
   *             <code>GetEnabledStandards</code> operation, set the value of this parameter to
   *             <code>NULL</code>.</p>
   *          <p>For subsequent calls to the operation, to continue listing data, set the value of this
   *          parameter to the value returned from the previous response.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetEnabledStandardsResponse {
  /**
   * <p>The list of <code>StandardsSubscriptions</code> objects that include information about
   *          the enabled standards.</p>
   * @public
   */
  StandardsSubscriptions?: StandardsSubscription[] | undefined;

  /**
   * <p>The pagination token to use to request the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetFindingAggregatorRequest {
  /**
   * <p>The ARN of the finding aggregator to return details for. To obtain the ARN, use <code>ListFindingAggregators</code>.</p>
   * @public
   */
  FindingAggregatorArn: string | undefined;
}

/**
 * @public
 */
export interface GetFindingAggregatorResponse {
  /**
   * <p>The ARN of the finding aggregator.</p>
   * @public
   */
  FindingAggregatorArn?: string | undefined;

  /**
   * <p>The home Region. Findings generated in linked Regions are replicated and sent to the home Region.</p>
   * @public
   */
  FindingAggregationRegion?: string | undefined;

  /**
   * <p>Indicates whether to link all Regions, all Regions except for a list of excluded Regions, or a list of included Regions.</p>
   * @public
   */
  RegionLinkingMode?: string | undefined;

  /**
   * <p>The list of excluded Regions or included Regions.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface GetFindingHistoryRequest {
  /**
   * <p>Identifies which finding to get the finding history for.</p>
   * @public
   */
  FindingIdentifier: AwsSecurityFindingIdentifier | undefined;

  /**
   * <p>A timestamp that indicates the start time of the requested finding history.</p>
   *          <p>If you provide values for both <code>StartTime</code> and <code>EndTime</code>,
   *                 Security Hub returns finding history for the specified time period. If you
   *             provide a value for <code>StartTime</code> but not for <code>EndTime</code>, Security Hub returns finding history from the <code>StartTime</code> to the time at
   *             which the API is called. If you provide a value for <code>EndTime</code> but not for
   *                 <code>StartTime</code>, Security Hub returns finding history from the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt">CreatedAt</a> timestamp of the finding to the <code>EndTime</code>. If you
   *             provide neither <code>StartTime</code> nor <code>EndTime</code>, Security Hub
   *             returns finding history from the <code>CreatedAt</code> timestamp of the finding to the time at which
   *             the API is called. In all of these scenarios, the response is limited to 100 results.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>
   *          An ISO 8601-formatted timestamp that indicates the end time of the requested finding history.</p>
   *          <p>If you provide values for both <code>StartTime</code> and <code>EndTime</code>,
   *                 Security Hub returns finding history for the specified time period. If you
   *             provide a value for <code>StartTime</code> but not for <code>EndTime</code>, Security Hub returns finding history from the <code>StartTime</code> to the time at
   *             which the API is called. If you provide a value for <code>EndTime</code> but not for
   *                 <code>StartTime</code>, Security Hub returns finding history from the <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_AwsSecurityFindingFilters.html#securityhub-Type-AwsSecurityFindingFilters-CreatedAt">CreatedAt</a> timestamp of the finding to the <code>EndTime</code>. If you
   *             provide neither <code>StartTime</code> nor <code>EndTime</code>, Security Hub
   *             returns finding history from the <code>CreatedAt</code> timestamp of the finding to the time at which
   *             the API is called. In all of these scenarios, the response is limited to 100 results.</p>
   *          <p>For more information about the validation and formatting of timestamp fields in Security Hub, see <a href="https://docs.aws.amazon.com/securityhub/1.0/APIReference/Welcome.html#timestamps">Timestamps</a>.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>
   *          A token for pagination purposes. Provide <code>NULL</code> as the initial value. In subsequent requests, provide the
   *          token included in the response to get up to an additional 100 results of finding history. If you don’t provide
   *          <code>NextToken</code>, Security Hub returns up to 100 results of finding history for each request.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>
   *          The maximum number of results to be returned. If you don’t provide it, Security Hub returns up to 100 results of finding history.
   *       </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFindingHistoryResponse {
  /**
   * <p>
   *          A list of events that altered the specified finding during the specified time period.
   *       </p>
   * @public
   */
  Records?: FindingHistoryRecord[] | undefined;

  /**
   * <p>
   *          A token for pagination purposes. Provide this token in the subsequent request to <code>GetFindingsHistory</code> to
   *          get up to an additional 100 results of history for the same finding that you specified in your initial request.
   *       </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "asc",
  DESCENDING: "desc",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * <p>A collection of finding attributes used to sort findings.</p>
 * @public
 */
export interface SortCriterion {
  /**
   * <p>The finding attribute used to sort findings.</p>
   * @public
   */
  Field?: string | undefined;

  /**
   * <p>The order used to sort findings.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @internal
 */
export const ServiceNowProviderConfigurationFilterSensitiveLog = (obj: ServiceNowProviderConfiguration): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ProviderConfigurationFilterSensitiveLog = (obj: ProviderConfiguration): any => {
  if (obj.JiraCloud !== undefined) return { JiraCloud: obj.JiraCloud };
  if (obj.ServiceNow !== undefined)
    return { ServiceNow: ServiceNowProviderConfigurationFilterSensitiveLog(obj.ServiceNow) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateConnectorV2RequestFilterSensitiveLog = (obj: CreateConnectorV2Request): any => ({
  ...obj,
  ...(obj.Provider && { Provider: ProviderConfigurationFilterSensitiveLog(obj.Provider) }),
});
