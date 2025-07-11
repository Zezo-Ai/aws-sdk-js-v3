// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeContactRequest } from "../models/models_1";
import { DescribeContactResponse, DescribeContactResponseFilterSensitiveLog } from "../models/models_3";
import { de_DescribeContactCommand, se_DescribeContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeContactCommand}.
 */
export interface DescribeContactCommandInput extends DescribeContactRequest {}
/**
 * @public
 *
 * The output of {@link DescribeContactCommand}.
 */
export interface DescribeContactCommandOutput extends DescribeContactResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Describes the specified contact. </p>
 *          <important>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>SystemEndpoint</code> is not populated for contacts with initiation method of
 *       MONITOR, QUEUE_TRANSFER, or CALLBACK</p>
 *                </li>
 *                <li>
 *                   <p>Contact information remains available in Amazon Connect for 24 months from the
 *        <code>InitiationTimestamp</code>, and then it is deleted. Only contact information that is
 *       available in Amazon Connect is returned by this API.</p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 * };
 * const command = new DescribeContactCommand(input);
 * const response = await client.send(command);
 * // { // DescribeContactResponse
 * //   Contact: { // Contact
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     InitialContactId: "STRING_VALUE",
 * //     PreviousContactId: "STRING_VALUE",
 * //     ContactAssociationId: "STRING_VALUE",
 * //     InitiationMethod: "INBOUND" || "OUTBOUND" || "TRANSFER" || "QUEUE_TRANSFER" || "CALLBACK" || "API" || "DISCONNECT" || "MONITOR" || "EXTERNAL_OUTBOUND" || "WEBRTC_API" || "AGENT_REPLY" || "FLOW",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL",
 * //     QueueInfo: { // QueueInfo
 * //       Id: "STRING_VALUE",
 * //       EnqueueTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     AgentInfo: { // AgentInfo
 * //       Id: "STRING_VALUE",
 * //       ConnectedToAgentTimestamp: new Date("TIMESTAMP"),
 * //       AgentPauseDurationInSeconds: Number("int"),
 * //       HierarchyGroups: { // HierarchyGroups
 * //         Level1: { // AgentHierarchyGroup
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Level2: {
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Level3: {
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Level4: {
 * //           Arn: "STRING_VALUE",
 * //         },
 * //         Level5: {
 * //           Arn: "STRING_VALUE",
 * //         },
 * //       },
 * //       DeviceInfo: { // DeviceInfo
 * //         PlatformName: "STRING_VALUE",
 * //         PlatformVersion: "STRING_VALUE",
 * //         OperatingSystem: "STRING_VALUE",
 * //       },
 * //       Capabilities: { // ParticipantCapabilities
 * //         Video: "SEND",
 * //         ScreenShare: "SEND",
 * //       },
 * //       AfterContactWorkDuration: Number("int"),
 * //       AfterContactWorkStartTimestamp: new Date("TIMESTAMP"),
 * //       AfterContactWorkEndTimestamp: new Date("TIMESTAMP"),
 * //       AgentInitiatedHoldDuration: Number("int"),
 * //       StateTransitions: [ // StateTransitions
 * //         { // StateTransition
 * //           State: "INITIAL" || "CONNECTED" || "DISCONNECTED" || "MISSED",
 * //           StateStartTimestamp: new Date("TIMESTAMP"),
 * //           StateEndTimestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //     InitiationTimestamp: new Date("TIMESTAMP"),
 * //     DisconnectTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //     LastPausedTimestamp: new Date("TIMESTAMP"),
 * //     LastResumedTimestamp: new Date("TIMESTAMP"),
 * //     TotalPauseCount: Number("int"),
 * //     TotalPauseDurationInSeconds: Number("int"),
 * //     ScheduledTimestamp: new Date("TIMESTAMP"),
 * //     RelatedContactId: "STRING_VALUE",
 * //     WisdomInfo: { // WisdomInfo
 * //       SessionArn: "STRING_VALUE",
 * //     },
 * //     CustomerId: "STRING_VALUE",
 * //     CustomerEndpoint: { // EndpointInfo
 * //       Type: "TELEPHONE_NUMBER" || "VOIP" || "CONTACT_FLOW" || "CONNECT_PHONENUMBER_ARN" || "EMAIL_ADDRESS",
 * //       Address: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //     },
 * //     SystemEndpoint: {
 * //       Type: "TELEPHONE_NUMBER" || "VOIP" || "CONTACT_FLOW" || "CONNECT_PHONENUMBER_ARN" || "EMAIL_ADDRESS",
 * //       Address: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //     },
 * //     QueueTimeAdjustmentSeconds: Number("int"),
 * //     QueuePriority: Number("long"),
 * //     Tags: { // ContactTagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ConnectedToSystemTimestamp: new Date("TIMESTAMP"),
 * //     RoutingCriteria: { // RoutingCriteria
 * //       Steps: [ // Steps
 * //         { // Step
 * //           Expiry: { // Expiry
 * //             DurationInSeconds: Number("int"),
 * //             ExpiryTimestamp: new Date("TIMESTAMP"),
 * //           },
 * //           Expression: { // Expression
 * //             AttributeCondition: { // AttributeCondition
 * //               Name: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //               ProficiencyLevel: Number("float"),
 * //               Range: { // Range
 * //                 MinProficiencyLevel: Number("float"),
 * //                 MaxProficiencyLevel: Number("float"),
 * //               },
 * //               MatchCriteria: { // MatchCriteria
 * //                 AgentsCriteria: { // AgentsCriteria
 * //                   AgentIds: [ // AgentIds
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               ComparisonOperator: "STRING_VALUE",
 * //             },
 * //             AndExpression: [ // Expressions
 * //               {
 * //                 AttributeCondition: {
 * //                   Name: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                   ProficiencyLevel: Number("float"),
 * //                   Range: {
 * //                     MinProficiencyLevel: Number("float"),
 * //                     MaxProficiencyLevel: Number("float"),
 * //                   },
 * //                   MatchCriteria: {
 * //                     AgentsCriteria: {
 * //                       AgentIds: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                   ComparisonOperator: "STRING_VALUE",
 * //                 },
 * //                 AndExpression: [
 * //                   "<Expression>",
 * //                 ],
 * //                 OrExpression: [
 * //                   "<Expression>",
 * //                 ],
 * //                 NotAttributeCondition: {
 * //                   Name: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                   ProficiencyLevel: Number("float"),
 * //                   Range: {
 * //                     MinProficiencyLevel: Number("float"),
 * //                     MaxProficiencyLevel: Number("float"),
 * //                   },
 * //                   MatchCriteria: {
 * //                     AgentsCriteria: {
 * //                       AgentIds: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                   ComparisonOperator: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             OrExpression: [
 * //               "<Expression>",
 * //             ],
 * //             NotAttributeCondition: {
 * //               Name: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //               ProficiencyLevel: Number("float"),
 * //               Range: {
 * //                 MinProficiencyLevel: Number("float"),
 * //                 MaxProficiencyLevel: Number("float"),
 * //               },
 * //               MatchCriteria: {
 * //                 AgentsCriteria: {
 * //                   AgentIds: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               ComparisonOperator: "STRING_VALUE",
 * //             },
 * //           },
 * //           Status: "ACTIVE" || "INACTIVE" || "JOINED" || "EXPIRED",
 * //         },
 * //       ],
 * //       ActivationTimestamp: new Date("TIMESTAMP"),
 * //       Index: Number("int"),
 * //     },
 * //     Customer: { // Customer
 * //       DeviceInfo: {
 * //         PlatformName: "STRING_VALUE",
 * //         PlatformVersion: "STRING_VALUE",
 * //         OperatingSystem: "STRING_VALUE",
 * //       },
 * //       Capabilities: {
 * //         Video: "SEND",
 * //         ScreenShare: "SEND",
 * //       },
 * //     },
 * //     Campaign: { // Campaign
 * //       CampaignId: "STRING_VALUE",
 * //     },
 * //     AnsweringMachineDetectionStatus: "ANSWERED" || "UNDETECTED" || "ERROR" || "HUMAN_ANSWERED" || "SIT_TONE_DETECTED" || "SIT_TONE_BUSY" || "SIT_TONE_INVALID_NUMBER" || "FAX_MACHINE_DETECTED" || "VOICEMAIL_BEEP" || "VOICEMAIL_NO_BEEP" || "AMD_UNRESOLVED" || "AMD_UNANSWERED" || "AMD_ERROR" || "AMD_NOT_APPLICABLE",
 * //     CustomerVoiceActivity: { // CustomerVoiceActivity
 * //       GreetingStartTimestamp: new Date("TIMESTAMP"),
 * //       GreetingEndTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     QualityMetrics: { // QualityMetrics
 * //       Agent: { // AgentQualityMetrics
 * //         Audio: { // AudioQualityMetricsInfo
 * //           QualityScore: Number("float"),
 * //           PotentialQualityIssues: [ // PotentialAudioQualityIssues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       Customer: { // CustomerQualityMetrics
 * //         Audio: {
 * //           QualityScore: Number("float"),
 * //           PotentialQualityIssues: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     ChatMetrics: { // ChatMetrics
 * //       ChatContactMetrics: { // ChatContactMetrics
 * //         MultiParty: true || false,
 * //         TotalMessages: Number("int"),
 * //         TotalBotMessages: Number("int"),
 * //         TotalBotMessageLengthInChars: Number("int"),
 * //         ConversationCloseTimeInMillis: Number("long"),
 * //         ConversationTurnCount: Number("int"),
 * //         AgentFirstResponseTimestamp: new Date("TIMESTAMP"),
 * //         AgentFirstResponseTimeInMillis: Number("long"),
 * //       },
 * //       AgentMetrics: { // ParticipantMetrics
 * //         ParticipantId: "STRING_VALUE",
 * //         ParticipantType: "ALL" || "MANAGER" || "AGENT" || "CUSTOMER" || "THIRDPARTY",
 * //         ConversationAbandon: true || false,
 * //         MessagesSent: Number("int"),
 * //         NumResponses: Number("int"),
 * //         MessageLengthInChars: Number("int"),
 * //         TotalResponseTimeInMillis: Number("long"),
 * //         MaxResponseTimeInMillis: Number("long"),
 * //         LastMessageTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       CustomerMetrics: {
 * //         ParticipantId: "STRING_VALUE",
 * //         ParticipantType: "ALL" || "MANAGER" || "AGENT" || "CUSTOMER" || "THIRDPARTY",
 * //         ConversationAbandon: true || false,
 * //         MessagesSent: Number("int"),
 * //         NumResponses: Number("int"),
 * //         MessageLengthInChars: Number("int"),
 * //         TotalResponseTimeInMillis: Number("long"),
 * //         MaxResponseTimeInMillis: Number("long"),
 * //         LastMessageTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //     DisconnectDetails: { // DisconnectDetails
 * //       PotentialDisconnectIssue: "STRING_VALUE",
 * //     },
 * //     AdditionalEmailRecipients: { // AdditionalEmailRecipients
 * //       ToList: [ // EmailRecipientsList
 * //         { // EmailRecipient
 * //           Address: "STRING_VALUE",
 * //           DisplayName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CcList: [
 * //         {
 * //           Address: "STRING_VALUE",
 * //           DisplayName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     SegmentAttributes: { // SegmentAttributes
 * //       "<keys>": { // SegmentAttributeValue
 * //         ValueString: "STRING_VALUE",
 * //         ValueMap: { // SegmentAttributeValueMap
 * //           "<keys>": {
 * //             ValueString: "STRING_VALUE",
 * //             ValueMap: {
 * //               "<keys>": "<SegmentAttributeValue>",
 * //             },
 * //             ValueInteger: Number("int"),
 * //           },
 * //         },
 * //         ValueInteger: Number("int"),
 * //       },
 * //     },
 * //     Recordings: [ // Recordings
 * //       { // RecordingInfo
 * //         StorageType: "S3" || "KINESIS_VIDEO_STREAM" || "KINESIS_STREAM" || "KINESIS_FIREHOSE",
 * //         Location: "STRING_VALUE",
 * //         MediaStreamType: "AUDIO" || "VIDEO",
 * //         ParticipantType: "ALL" || "MANAGER" || "AGENT" || "CUSTOMER" || "THIRDPARTY",
 * //         FragmentStartNumber: "STRING_VALUE",
 * //         FragmentStopNumber: "STRING_VALUE",
 * //         StartTimestamp: new Date("TIMESTAMP"),
 * //         StopTimestamp: new Date("TIMESTAMP"),
 * //         Status: "AVAILABLE" || "DELETED",
 * //         DeletionReason: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DisconnectReason: "STRING_VALUE",
 * //     ContactEvaluations: { // ContactEvaluations
 * //       "<keys>": { // ContactEvaluation
 * //         FormId: "STRING_VALUE",
 * //         EvaluationArn: "STRING_VALUE",
 * //         Status: "COMPLETE" || "IN_PROGRESS" || "DELETED",
 * //         StartTimestamp: new Date("TIMESTAMP"),
 * //         EndTimestamp: new Date("TIMESTAMP"),
 * //         DeleteTimestamp: new Date("TIMESTAMP"),
 * //         ExportLocation: "STRING_VALUE",
 * //       },
 * //     },
 * //     ContactDetails: { // ContactDetails
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //     Attributes: { // Attributes
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeContactCommandInput - {@link DescribeContactCommandInput}
 * @returns {@link DescribeContactCommandOutput}
 * @see {@link DescribeContactCommandInput} for command's `input` shape.
 * @see {@link DescribeContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DescribeContactCommand extends $Command
  .classBuilder<
    DescribeContactCommandInput,
    DescribeContactCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeContact", {})
  .n("ConnectClient", "DescribeContactCommand")
  .f(void 0, DescribeContactResponseFilterSensitiveLog)
  .ser(se_DescribeContactCommand)
  .de(de_DescribeContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeContactRequest;
      output: DescribeContactResponse;
    };
    sdk: {
      input: DescribeContactCommandInput;
      output: DescribeContactCommandOutput;
    };
  };
}
