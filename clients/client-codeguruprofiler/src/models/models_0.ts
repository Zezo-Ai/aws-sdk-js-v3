// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CodeGuruProfilerServiceException as __BaseException } from "./CodeGuruProfilerServiceException";

/**
 * @public
 * @enum
 */
export const ActionGroup = {
  /**
   * Permission group type for Agent APIs - ConfigureAgent, PostAgentProfile
   */
  AGENT_PERMISSIONS: "agentPermissions",
} as const;

/**
 * @public
 */
export type ActionGroup = (typeof ActionGroup)[keyof typeof ActionGroup];

/**
 * @public
 * @enum
 */
export const EventPublisher = {
  /**
   * Notifications for Anomaly Detection
   */
  ANOMALY_DETECTION: "AnomalyDetection",
} as const;

/**
 * @public
 */
export type EventPublisher = (typeof EventPublisher)[keyof typeof EventPublisher];

/**
 * <p>Notification medium for users to get alerted for events that occur in application profile. We support SNS topic as a notification channel.</p>
 * @public
 */
export interface Channel {
  /**
   * <p>Unique identifier for each <code>Channel</code> in the notification configuration of a Profiling Group. A random UUID for channelId is used when adding a channel to the notification configuration if not specified in the request.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Unique arn of the resource to be used for notifications. We support a valid SNS topic arn as a channel uri.</p>
   * @public
   */
  uri: string | undefined;

  /**
   * <p>List of publishers for different type of events that may be detected in an application from the profile. Anomaly detection is the only event publisher in Profiler.</p>
   * @public
   */
  eventPublishers: EventPublisher[] | undefined;
}

/**
 * <p>The structure representing the AddNotificationChannelsRequest.</p>
 * @public
 */
export interface AddNotificationChannelsRequest {
  /**
   * <p>The name of the profiling group that we are setting up notifications for.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>One or 2 channels to report to when anomalies are detected.</p>
   * @public
   */
  channels: Channel[] | undefined;
}

/**
 * <p>The configuration for notifications stored for each profiling group. This includes up to
 *          to two channels and a list of event publishers associated with each channel.</p>
 * @public
 */
export interface NotificationConfiguration {
  /**
   * <p>List of up to two channels to be used for sending notifications for events detected from
   *          the application profile.</p>
   * @public
   */
  channels?: Channel[] | undefined;
}

/**
 * <p>The structure representing the AddNotificationChannelsResponse.</p>
 * @public
 */
export interface AddNotificationChannelsResponse {
  /**
   * <p>The new notification configuration for this profiling group.</p>
   * @public
   */
  notificationConfiguration?: NotificationConfiguration | undefined;
}

/**
 * <p>The requested operation would cause a conflict with the current state
 *         of a service resource associated with the request. Resolve the conflict
 *         before retrying this request.
 *       </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
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
  }
}

/**
 * <p>The resource specified in the request does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>You have exceeded your service quota. To perform the requested action,
 *         remove some of the relevant resources, or use <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a> to request a
 *         service quota increase.
 *       </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
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
  }
}

/**
 * <p>The parameter is not valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const AgentParameterField = {
  /**
   * Maximum stack depth to be captured by the CodeGuru Profiler.
   */
  MAX_STACK_DEPTH: "MaxStackDepth",
  /**
   * Percentage of memory to be used by CodeGuru profiler. Minimum of 30MB is required for the agent.
   */
  MEMORY_USAGE_LIMIT_PERCENT: "MemoryUsageLimitPercent",
  /**
   * Minimum time in milliseconds between sending reports.
   */
  MINIMUM_TIME_FOR_REPORTING_IN_MILLISECONDS: "MinimumTimeForReportingInMilliseconds",
  /**
   * Reporting interval in milliseconds used to report profiles.
   */
  REPORTING_INTERVAL_IN_MILLISECONDS: "ReportingIntervalInMilliseconds",
  /**
   * Sampling interval in milliseconds used to sample profiles.
   */
  SAMPLING_INTERVAL_IN_MILLISECONDS: "SamplingIntervalInMilliseconds",
} as const;

/**
 * @public
 */
export type AgentParameterField = (typeof AgentParameterField)[keyof typeof AgentParameterField];

/**
 * <p>
 *          The response of <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
 *                <code>ConfigureAgent</code>
 *             </a> that
 *          specifies if an agent profiles or not and for how long to return profiling data.
 *       </p>
 * @public
 */
export interface AgentConfiguration {
  /**
   * <p>
   *          A <code>Boolean</code> that specifies whether the profiling agent collects profiling data or not. Set to <code>true</code>
   *         to enable profiling.
   *       </p>
   * @public
   */
  shouldProfile: boolean | undefined;

  /**
   * <p>
   *          How long a profiling agent should send profiling data using
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
   *                <code>ConfigureAgent</code>
   *             </a>.
   *          For example, if this is set to 300, the profiling agent calls <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
   *                <code>ConfigureAgent</code>
   *             </a>
   *          every 5 minutes to submit the profiled data collected during that period.
   *       </p>
   * @public
   */
  periodInSeconds: number | undefined;

  /**
   * <p>
   *          Parameters used by the profiler. The valid parameters are:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MaxStackDepth</code> - The maximum depth of the stacks in the code that is represented in
   *                the profile. For example, if CodeGuru Profiler finds a method <code>A</code>,
   *                which calls method <code>B</code>, which calls method <code>C</code>, which
   *                calls method <code>D</code>, then the depth is 4. If the <code>maxDepth</code> is
   *                set to 2, then the profiler evaluates <code>A</code> and <code>B</code>.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MemoryUsageLimitPercent</code> - The percentage of memory that is used by the
   *                profiler.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MinimumTimeForReportingInMilliseconds</code> - The minimum time in milliseconds between
   *                sending reports.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReportingIntervalInMilliseconds</code> - The reporting interval in milliseconds used
   *                to report profiles.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SamplingIntervalInMilliseconds</code> - The sampling interval in milliseconds that is used to
   *                profile samples.
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  agentParameters?: Partial<Record<AgentParameterField, string>> | undefined;
}

/**
 * <p>
 *          Specifies whether profiling is enabled or disabled for a profiling group. It
 *          is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
 *                <code>ConfigureAgent</code>
 *             </a>
 *          to enable or disable profiling for a profiling group.
 *       </p>
 * @public
 */
export interface AgentOrchestrationConfig {
  /**
   * <p>
   *          A <code>Boolean</code> that specifies whether the profiling agent collects profiling data or not. Set to <code>true</code>
   *          to enable profiling.
   *       </p>
   * @public
   */
  profilingEnabled: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const AggregationPeriod = {
  /**
   * Period of one day.
   */
  P1D: "P1D",
  /**
   * Period of one hour.
   */
  PT1H: "PT1H",
  /**
   * Period of five minutes.
   */
  PT5M: "PT5M",
} as const;

/**
 * @public
 */
export type AggregationPeriod = (typeof AggregationPeriod)[keyof typeof AggregationPeriod];

/**
 * <p>
 *          Specifies the aggregation period and aggregation start time for
 *          an aggregated profile. An aggregated profile is used to collect posted agent profiles
 *          during an aggregation period. There are three possible aggregation periods (1 day,
 *          1 hour, or 5 minutes).
 *       </p>
 * @public
 */
export interface AggregatedProfileTime {
  /**
   * <p>
   *          The time that aggregation of posted agent profiles for a profiling group starts. The aggregation profile
   *          contains profiles posted by the agent starting at this time for an aggregation period
   *          specified by the <code>period</code> property of the <code>AggregatedProfileTime</code>
   *          object.
   *       </p>
   *          <p>
   *          Specify <code>start</code> using the ISO 8601 format. For example,
   *          2020-06-01T13:15:02.001Z  represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *       </p>
   * @public
   */
  start?: Date | undefined;

  /**
   * <p>
   *          The aggregation period. This indicates the period during which an aggregation profile
   *          collects posted agent profiles for a profiling group. Use one of three valid
   *          durations that are specified using the ISO 8601 format.
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>P1D</code> — 1 day
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PT1H</code> — 1 hour
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PT5M</code> — 5 minutes
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  period?: AggregationPeriod | undefined;
}

/**
 * @public
 * @enum
 */
export const FeedbackType = {
  /**
   * Profiler recommendation flagged as not useful.
   */
  Negative: "Negative",
  /**
   * Profiler recommendation flagged as useful.
   */
  Positive: "Positive",
} as const;

/**
 * @public
 */
export type FeedbackType = (typeof FeedbackType)[keyof typeof FeedbackType];

/**
 * <p>Feedback that can be submitted for each instance of an anomaly by the user.
 *             Feedback is be used for improvements in generating recommendations for the application.</p>
 * @public
 */
export interface UserFeedback {
  /**
   * <p>Optional <code>Positive</code> or <code>Negative</code> feedback submitted by
   *             the user about whether the recommendation is useful or not.</p>
   * @public
   */
  type: FeedbackType | undefined;
}

/**
 * <p>The specific duration in which the metric is flagged as anomalous.</p>
 * @public
 */
export interface AnomalyInstance {
  /**
   * <p>
   *             The universally unique identifier (UUID) of an instance of an anomaly in a metric.
   *         </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>
   *             The start time of the period during which the metric is flagged as anomalous.
   *             This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.
   *         </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             The end time of the period during which the metric is flagged as anomalous.
   *             This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.
   *         </p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Feedback type on a specific instance of anomaly submitted by the user.</p>
   * @public
   */
  userFeedback?: UserFeedback | undefined;
}

/**
 * @public
 * @enum
 */
export const MetricType = {
  /**
   * Metric value aggregated for all instances of a frame name in a profile relative to the root frame.
   */
  AggregatedRelativeTotalTime: "AggregatedRelativeTotalTime",
} as const;

/**
 * @public
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

/**
 * <p>
 *             Details about the metric that the analysis used when it detected the anomaly.
 *             The metric what is analyzed to create recommendations. It includes the name of the
 *             frame that was analyzed and the type and thread states used to derive the metric
 *             value for that frame.
 *         </p>
 * @public
 */
export interface Metric {
  /**
   * <p>
   *             The name of the method that appears as a frame in any stack in a profile.
   *         </p>
   * @public
   */
  frameName: string | undefined;

  /**
   * <p>
   *             A type that specifies how a metric for a frame is analyzed.
   *             The supported value <code>AggregatedRelativeTotalTime</code> is an
   *             aggregation of the metric value for one frame that is calculated across the
   *             occurences of all frames in a profile.</p>
   * @public
   */
  type: MetricType | undefined;

  /**
   * <p>
   *             The list of application runtime thread states that is used to calculate the
   *             metric value for the frame.
   *         </p>
   * @public
   */
  threadStates: string[] | undefined;
}

/**
 * <p>
 *             Details about an anomaly in a specific metric of application profile. The anomaly is detected using
 *             analysis of the metric data over a period of time.
 *         </p>
 * @public
 */
export interface Anomaly {
  /**
   * <p>
   *             Details about the metric that the analysis used when it detected the anomaly.
   *             The metric includes the name of the frame that was analyzed with the type and
   *             thread states used to derive the metric value for that frame.
   *         </p>
   * @public
   */
  metric: Metric | undefined;

  /**
   * <p>The reason for which metric was flagged as anomalous.</p>
   * @public
   */
  reason: string | undefined;

  /**
   * <p>
   *             A list of the instances of the detected anomalies during the requested period.
   *         </p>
   * @public
   */
  instances: AnomalyInstance[] | undefined;
}

/**
 * <p>
 *          The frame name, metric type, and thread states. These are used
 *          to derive the value of the metric for the frame.</p>
 * @public
 */
export interface FrameMetric {
  /**
   * <p> Name of the method common across the multiple occurrences of a frame in an application
   *          profile.</p>
   * @public
   */
  frameName: string | undefined;

  /**
   * <p> A type of aggregation that specifies how a metric for a frame is analyzed. The
   *          supported value <code>AggregatedRelativeTotalTime</code> is an aggregation of the metric
   *          value for one frame that is calculated across the occurrences of all frames in a profile. </p>
   * @public
   */
  type: MetricType | undefined;

  /**
   * <p>List of application runtime thread states used to get the counts for a frame a derive a metric value.</p>
   * @public
   */
  threadStates: string[] | undefined;
}

/**
 * <p>The structure representing the BatchGetFrameMetricDataRequest.</p>
 * @public
 */
export interface BatchGetFrameMetricDataRequest {
  /**
   * <p>
   *          The name of the profiling group associated with the
   *          the frame metrics used to return the time series values.
   *       </p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>
   *          The start time of the time period for the frame metrics used to return the time series values.
   *          This is specified
   *          using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *          millisecond past June 1, 2020 1:15:02 PM UTC.
   *       </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>
   *          The end time of the time period for the returned time series values.
   *          This is specified
   *          using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *          millisecond past June 1, 2020 1:15:02 PM UTC.
   *       </p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>
   *          The duration of the frame metrics used to return the time series values.
   *          Specify using the ISO 8601 format. The maximum period duration
   *          is one day (<code>PT24H</code> or <code>P1D</code>).
   *       </p>
   * @public
   */
  period?: string | undefined;

  /**
   * <p>The requested resolution of time steps for the returned time series of values.
   *          If the requested target resolution is not available due to data not being retained we provide a best effort
   *          result by falling back to the most granular available resolution after the target resolution.
   *          There are 3 valid values.
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>P1D</code> — 1 day
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PT1H</code> — 1 hour
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PT5M</code> — 5 minutes
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  targetResolution?: AggregationPeriod | undefined;

  /**
   * <p>
   *          The details of the metrics that are used to request a time series of values. The metric includes
   *          the name of the frame, the aggregation type to calculate the metric value for the
   *          frame, and the thread states to use to get the count for the metric value of the frame.</p>
   * @public
   */
  frameMetrics?: FrameMetric[] | undefined;
}

/**
 * <p>
 *          A data type that contains a <code>Timestamp</code> object. This is specified
 *          using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
 *          millisecond past June 1, 2020 1:15:02 PM UTC.
 *       </p>
 * @public
 */
export interface TimestampStructure {
  /**
   * <p>
   *          A <code>Timestamp</code>. This is specified
   *          using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *          millisecond past June 1, 2020 1:15:02 PM UTC.
   *       </p>
   * @public
   */
  value: Date | undefined;
}

/**
 * <p>
 *          Information about a frame metric and its values.
 *       </p>
 * @public
 */
export interface FrameMetricDatum {
  /**
   * <p>
   *          The frame name, metric type, and thread states. These are used
   *          to derive the value of the metric for the frame.</p>
   * @public
   */
  frameMetric: FrameMetric | undefined;

  /**
   * <p>
   *          A list of values that are associated with a frame metric.
   *       </p>
   * @public
   */
  values: number[] | undefined;
}

/**
 * <p>The structure representing the BatchGetFrameMetricDataResponse.</p>
 * @public
 */
export interface BatchGetFrameMetricDataResponse {
  /**
   * <p>
   *          The start time of the time period for the returned time series values.
   *          This is specified
   *          using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *          millisecond past June 1, 2020 1:15:02 PM UTC.
   *       </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>
   *          The end time of the time period for the returned time series values.
   *          This is specified
   *          using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *          millisecond past June 1, 2020 1:15:02 PM UTC.
   *       </p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>Resolution or granularity of the profile data used to generate the time series.
   *          This is the value used to jump through time steps in a time series. There are 3 valid values.
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>P1D</code> — 1 day
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PT1H</code> — 1 hour
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PT5M</code> — 5 minutes
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  resolution: AggregationPeriod | undefined;

  /**
   * <p>
   *          List of instances, or time steps, in the time series. For example, if the
   *          <code>period</code> is one day (<code>PT24H)</code>), and the <code>resolution</code>
   *          is five minutes (<code>PT5M</code>), then there are 288 <code>endTimes</code> in the
   *          list that are each five minutes appart.
   *       </p>
   * @public
   */
  endTimes: TimestampStructure[] | undefined;

  /**
   * <p>List of instances which remained unprocessed. This will create a missing time step in the list of end times.</p>
   * @public
   */
  unprocessedEndTimes: Record<string, TimestampStructure[]> | undefined;

  /**
   * <p>Details of the metrics to request a time series of values. The metric includes
   *          the name of the frame, the aggregation type to calculate the metric value for the frame,
   *          and the thread states to use to get the count for the metric value of the frame.</p>
   * @public
   */
  frameMetricData: FrameMetricDatum[] | undefined;
}

/**
 * <p>The structure representing the GetFindingsReportAccountSummaryRequest.</p>
 * @public
 */
export interface GetFindingsReportAccountSummaryRequest {
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>GetFindingsReportAccountSummary</code>
   *          request where <code>maxResults</code> was used and the results exceeded the value of that parameter.
   *          Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned by <code> GetFindingsReportAccountSummary</code> in paginated output.
   *             When this parameter is used, <code>GetFindingsReportAccountSummary</code> only returns <code>maxResults</code>
   *             results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial
   *             request can be seen by sending another <code>GetFindingsReportAccountSummary</code> request with the returned
   *             <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A <code>Boolean</code> value indicating whether to only return reports from daily profiles. If set
   *             to <code>True</code>, only analysis data from daily profiles is returned. If set to <code>False</code>,
   *             analysis data is returned from smaller time windows (for example, one hour).</p>
   * @public
   */
  dailyReportsOnly?: boolean | undefined;
}

/**
 * <p>
 *             Information about potential recommendations that might be created from the
 *             analysis of profiling data.
 *         </p>
 * @public
 */
export interface FindingsReportSummary {
  /**
   * <p>The universally unique identifier (UUID) of the recommendation report.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the profiling group that is associated with the analysis data.</p>
   * @public
   */
  profilingGroupName?: string | undefined;

  /**
   * <p>The start time of the profile the analysis data is about.
   *             This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.</p>
   * @public
   */
  profileStartTime?: Date | undefined;

  /**
   * <p>
   *             The end time of the period during which the metric is flagged as anomalous.
   *             This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.
   *         </p>
   * @public
   */
  profileEndTime?: Date | undefined;

  /**
   * <p>The total number of different recommendations that were found by the analysis.</p>
   * @public
   */
  totalNumberOfFindings?: number | undefined;
}

/**
 * <p>The structure representing the GetFindingsReportAccountSummaryResponse.</p>
 * @public
 */
export interface GetFindingsReportAccountSummaryResponse {
  /**
   * <p>The return list of
   *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_FindingsReportSummary.html">
   *                <code>FindingsReportSummary</code>
   *             </a>
   *             objects taht contain summaries of analysis results for all profiling groups in your AWS account.</p>
   * @public
   */
  reportSummaries: FindingsReportSummary[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>GetFindingsReportAccountSummary</code> request.
   *          When the results of a <code>GetFindingsReportAccountSummary</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the resource that contains the tags to return.
   *       </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>
   *          The list of tags assigned to the specified resource. This is the list of tags
   *          returned in the response.
   *       </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const MetadataField = {
  /**
   * Unique identifier for the agent instance.
   */
  AGENT_ID: "AgentId",
  /**
   * AWS requestId of the Lambda invocation.
   */
  AWS_REQUEST_ID: "AwsRequestId",
  /**
   * Compute platform on which agent is running.
   */
  COMPUTE_PLATFORM: "ComputePlatform",
  /**
   * Execution environment on which Lambda function is running.
   */
  EXECUTION_ENVIRONMENT: "ExecutionEnvironment",
  /**
   * Function ARN that's used to invoke the Lambda function.
   */
  LAMBDA_FUNCTION_ARN: "LambdaFunctionArn",
  /**
   * Memory allocated for the Lambda function.
   */
  LAMBDA_MEMORY_LIMIT_IN_MB: "LambdaMemoryLimitInMB",
  /**
   * Time in milliseconds for the previous Lambda invocation.
   */
  LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS: "LambdaPreviousExecutionTimeInMilliseconds",
  /**
   * Time in milliseconds left before the execution times out.
   */
  LAMBDA_REMAINING_TIME_IN_MILLISECONDS: "LambdaRemainingTimeInMilliseconds",
  /**
   * Time in milliseconds between two invocations of the Lambda function.
   */
  LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS: "LambdaTimeGapBetweenInvokesInMilliseconds",
} as const;

/**
 * @public
 */
export type MetadataField = (typeof MetadataField)[keyof typeof MetadataField];

/**
 * <p>The structure representing the configureAgentRequest.</p>
 * @public
 */
export interface ConfigureAgentRequest {
  /**
   * <p>
   *          The name of the profiling group for which the configured agent is collecting profiling data.
   *       </p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p> A universally unique identifier (UUID) for a profiling instance. For example, if the
   *          profiling instance is an Amazon EC2 instance, it is the instance ID. If it is an AWS
   *          Fargate container, it is the container's task ID. </p>
   * @public
   */
  fleetInstanceId?: string | undefined;

  /**
   * <p> Metadata captured about the compute platform the agent is running on. It includes
   *          information about sampling and reporting. The valid fields are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPUTE_PLATFORM</code> - The compute platform on which the agent is running
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AGENT_ID</code> - The ID for an agent instance.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_REQUEST_ID</code> - The AWS request ID of a Lambda invocation.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXECUTION_ENVIRONMENT</code> - The execution environment a Lambda function is running on.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAMBDA_FUNCTION_ARN</code> - The Amazon Resource Name (ARN) that is used to invoke a Lambda function.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAMBDA_MEMORY_LIMIT_IN_MB</code> - The memory allocated to a Lambda function.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAMBDA_REMAINING_TIME_IN_MILLISECONDS</code> - The time in milliseconds before execution of a Lambda function times out.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAMBDA_TIME_GAP_BETWEEN_INVOKES_IN_MILLISECONDS</code> - The time in milliseconds between two invocations of a Lambda function.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAMBDA_PREVIOUS_EXECUTION_TIME_IN_MILLISECONDS</code> - The time in milliseconds for the previous Lambda invocation.
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  metadata?: Partial<Record<MetadataField, string>> | undefined;
}

/**
 * <p>The structure representing the configureAgentResponse.</p>
 * @public
 */
export interface ConfigureAgentResponse {
  /**
   * <p>
   *          An <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AgentConfiguration.html">
   *                <code>AgentConfiguration</code>
   *             </a>
   *          object that specifies if an agent profiles or not and for how long to return profiling data.
   *       </p>
   * @public
   */
  configuration: AgentConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ComputePlatform = {
  /**
   * Compute platform meant to used for AWS Lambda.
   */
  AWSLAMBDA: "AWSLambda",
  /**
   * Compute platform meant to used for all usecases (like EC2, Fargate, physical servers etc.) but AWS Lambda.
   */
  DEFAULT: "Default",
} as const;

/**
 * @public
 */
export type ComputePlatform = (typeof ComputePlatform)[keyof typeof ComputePlatform];

/**
 * <p>The structure representing the createProfiliingGroupRequest.</p>
 * @public
 */
export interface CreateProfilingGroupRequest {
  /**
   * <p>The name of the profiling group to create.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>
   *          The compute platform of the profiling group. Use <code>AWSLambda</code> if your application
   *          runs on AWS Lambda. Use <code>Default</code> if your application runs on a compute platform that
   *          is not AWS Lambda, such an Amazon EC2 instance, an on-premises server, or a different platform.
   *          If not specified, <code>Default</code> is used.
   *       </p>
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * <p> Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the
   *          accidental creation of duplicate profiling groups if there are failures and retries. </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>
   *          Specifies whether profiling is enabled or disabled for the created profiling group.
   *       </p>
   * @public
   */
  agentOrchestrationConfig?: AgentOrchestrationConfig | undefined;

  /**
   * <p>
   *          A list of tags to add to the created profiling group.
   *       </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>
 *          Profiling status includes information about the last time a profile agent pinged back,
 *          the last time a profile was received, and the aggregation period and start time for the
 *          most recent aggregated profile.
 *       </p>
 * @public
 */
export interface ProfilingStatus {
  /**
   * <p>The date and time when the most recent profile was received. Specify using
   *          the ISO 8601 format. For example,
   *          2020-06-01T13:15:02.001Z  represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</p>
   * @public
   */
  latestAgentProfileReportedAt?: Date | undefined;

  /**
   * <p>
   *          An <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AggregatedProfileTime.html">
   *                <code>AggregatedProfileTime</code>
   *             </a>
   *          object that contains the aggregation period and start time for an aggregated profile.
   *       </p>
   * @public
   */
  latestAggregatedProfile?: AggregatedProfileTime | undefined;

  /**
   * <p>The date and time when the profiling agent most recently pinged back. Specify using
   *          the ISO 8601 format. For example,
   *          2020-06-01T13:15:02.001Z  represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</p>
   * @public
   */
  latestAgentOrchestratedAt?: Date | undefined;
}

/**
 * <p>
 *          Contains information about a profiling group.
 *       </p>
 * @public
 */
export interface ProfilingGroupDescription {
  /**
   * <p>The name of the profiling group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>
   *          An <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AgentOrchestrationConfig.html">
   *                <code>AgentOrchestrationConfig</code>
   *             </a>
   *          object that indicates if the profiling group is enabled for profiled or not.
   *       </p>
   * @public
   */
  agentOrchestrationConfig?: AgentOrchestrationConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) identifying the profiling group resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The time when the profiling group was created. Specify using
   *          the ISO 8601 format. For example,
   *          2020-06-01T13:15:02.001Z  represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *       </p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *          The date and time when the profiling group was last updated. Specify using
   *          the ISO 8601 format. For example,
   *          2020-06-01T13:15:02.001Z  represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *       </p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>
   *          A <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingStatus.html">
   *                <code>ProfilingStatus</code>
   *             </a> object
   *          that includes information about the last time a profile agent pinged back,
   *          the last time a profile was received, and the aggregation period and start time for the
   *          most recent aggregated profile.
   *       </p>
   * @public
   */
  profilingStatus?: ProfilingStatus | undefined;

  /**
   * <p>
   *          The compute platform of the profiling group. If it is set to <code>AWSLambda</code>, then
   *          the profiled application runs on AWS Lambda. If it is set to <code>Default</code>, then the
   *          profiled application runs on a compute platform that is not AWS Lambda, such an Amazon EC2 instance,
   *          an on-premises server, or a different platform. The default is <code>Default</code>.
   *       </p>
   * @public
   */
  computePlatform?: ComputePlatform | undefined;

  /**
   * <p>
   *          A list of the tags that belong to this profiling group.
   *       </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The structure representing the createProfilingGroupResponse.</p>
 * @public
 */
export interface CreateProfilingGroupResponse {
  /**
   * <p> The returned <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
   *                <code>ProfilingGroupDescription</code>
   *             </a> object that contains information
   *          about the created profiling group. </p>
   * @public
   */
  profilingGroup: ProfilingGroupDescription | undefined;
}

/**
 * <p>The structure representing the deleteProfilingGroupRequest.</p>
 * @public
 */
export interface DeleteProfilingGroupRequest {
  /**
   * <p>The name of the profiling group to delete.</p>
   * @public
   */
  profilingGroupName: string | undefined;
}

/**
 * <p>The structure representing the deleteProfilingGroupResponse.</p>
 * @public
 */
export interface DeleteProfilingGroupResponse {}

/**
 * <p>The structure representing the describeProfilingGroupRequest.</p>
 * @public
 */
export interface DescribeProfilingGroupRequest {
  /**
   * <p>
   *          The name of the profiling group to get information about.
   *       </p>
   * @public
   */
  profilingGroupName: string | undefined;
}

/**
 * <p>The structure representing the describeProfilingGroupResponse.</p>
 * @public
 */
export interface DescribeProfilingGroupResponse {
  /**
   * <p>
   *          The returned <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
   *                <code>ProfilingGroupDescription</code>
   *             </a>
   *          object that contains information about the requested profiling group.
   *       </p>
   * @public
   */
  profilingGroup: ProfilingGroupDescription | undefined;
}

/**
 * <p>The structure representing the GetNotificationConfigurationRequest.</p>
 * @public
 */
export interface GetNotificationConfigurationRequest {
  /**
   * <p>The name of the profiling group we want to get the notification configuration for.</p>
   * @public
   */
  profilingGroupName: string | undefined;
}

/**
 * <p>The structure representing the GetNotificationConfigurationResponse.</p>
 * @public
 */
export interface GetNotificationConfigurationResponse {
  /**
   * <p>The current notification configuration for this profiling group.</p>
   * @public
   */
  notificationConfiguration: NotificationConfiguration | undefined;
}

/**
 * <p>
 *             The structure representing the <code>getPolicyRequest</code>.
 *         </p>
 * @public
 */
export interface GetPolicyRequest {
  /**
   * <p>The name of the profiling group.</p>
   * @public
   */
  profilingGroupName: string | undefined;
}

/**
 * <p>The structure representing the <code>getPolicyResponse</code>.</p>
 * @public
 */
export interface GetPolicyResponse {
  /**
   * <p>The JSON-formatted resource-based policy attached to the <code>ProfilingGroup</code>.</p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p>A unique identifier for the current revision of the returned policy.</p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * <p>The structure representing the getProfileRequest.</p>
 * @public
 */
export interface GetProfileRequest {
  /**
   * <p>The name of the profiling group to get.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>The start time of the profile to get. Specify using
   *          the ISO 8601 format. For example,
   *          2020-06-01T13:15:02.001Z  represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</p>
   *
   *          <p>
   *          If you specify <code>startTime</code>, then you must also specify <code>period</code>
   *          or <code>endTime</code>, but not both.
   *       </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>
   *          Used with <code>startTime</code> or <code>endTime</code> to specify
   *          the time range for the returned aggregated profile. Specify using
   *          the ISO 8601 format. For example, <code>P1DT1H1M1S</code>.
   *       </p>
   *
   *          <p>
   *          To get the latest aggregated profile, specify only <code>period</code>.
   *       </p>
   * @public
   */
  period?: string | undefined;

  /**
   * <p>
   *          The end time of the requested profile. Specify using
   *          the ISO 8601 format. For example,
   *          2020-06-01T13:15:02.001Z  represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.
   *       </p>
   *          <p>
   *          If you specify <code>endTime</code>, then you must also specify <code>period</code>
   *          or <code>startTime</code>, but not both.
   *       </p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>
   *          The maximum depth of the stacks in the code that is represented in
   *          the aggregated profile. For example, if CodeGuru Profiler finds a method <code>A</code>,
   *          which calls method <code>B</code>, which calls method <code>C</code>, which
   *          calls method <code>D</code>, then the depth is 4. If the <code>maxDepth</code> is
   *          set to 2, then the aggregated profile contains representations of methods <code>A</code>
   *          and <code>B</code>.
   *       </p>
   * @public
   */
  maxDepth?: number | undefined;

  /**
   * <p>
   *          The format of the returned profiling data. The format maps to the
   *          <code>Accept</code> and <code>Content-Type</code> headers of the
   *          HTTP request. You can specify one of the following:
   *         or the default .
   *       </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>application/json</code> — standard JSON format
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>application/x-amzn-ion</code> — the Amazon Ion data format. For more information,
   *                see <a href="http://amzn.github.io/ion-docs/">Amazon Ion</a>.
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  accept?: string | undefined;
}

/**
 * <p>The structure representing the getProfileResponse.</p>
 * @public
 */
export interface GetProfileResponse {
  /**
   * <p>Information about the profile.</p>
   * @public
   */
  profile: Uint8Array | undefined;

  /**
   * <p>The content type of the profile in the payload. It is
   *         either <code>application/json</code> or the default
   *         <code>application/x-amzn-ion</code>.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The content encoding of the profile.</p>
   * @public
   */
  contentEncoding?: string | undefined;
}

/**
 * <p>The structure representing the GetRecommendationsRequest.</p>
 * @public
 */
export interface GetRecommendationsRequest {
  /**
   * <p>
   *             The name of the profiling group to get analysis data about.
   *         </p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>
   *             The end time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>.
   *             This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.
   *         </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             The start time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>.
   *             This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.
   *         </p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>
   *             The language used to provide analysis. Specify using a string that is one
   *             of the following <code>BCP 47</code> language codes.
   *         </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>de-DE</code> - German, Germany
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>en-GB</code> - English, United Kingdom
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>en-US</code> - English, United States
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>es-ES</code> - Spanish, Spain
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>fr-FR</code> - French, France
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>it-IT</code> - Italian, Italy
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ja-JP</code> - Japanese, Japan
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ko-KR</code> - Korean, Republic of Korea
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>pt-BR</code> - Portugese, Brazil
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>zh-CN</code> - Chinese, China
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>zh-TW</code> - Chinese, Taiwan
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>
 *             A set of rules used to make a recommendation during an analysis.
 *         </p>
 * @public
 */
export interface Pattern {
  /**
   * <p>The universally unique identifier (UUID) of this pattern.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name for this pattern.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the recommendation. This explains a potential
   *             inefficiency in a profiled application.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>
   *             A string that contains the steps recommended to address the potential inefficiency.
   *         </p>
   * @public
   */
  resolutionSteps?: string | undefined;

  /**
   * <p>A list of frame names that were searched during the analysis that generated
   *             a recommendation.</p>
   * @public
   */
  targetFrames?: string[][] | undefined;

  /**
   * <p>
   *             The percentage of time an application spends in one method that triggers
   *             a recommendation. The percentage of time is the same as the percentage of
   *             the total gathered sample counts during analysis.
   *         </p>
   * @public
   */
  thresholdPercent?: number | undefined;

  /**
   * <p>
   *             A list of the different counters used to determine if there is a match.
   *         </p>
   * @public
   */
  countersToAggregate?: string[] | undefined;
}

/**
 * <p>The part of a profile that contains a recommendation found during analysis.</p>
 * @public
 */
export interface Match {
  /**
   * <p>The target frame that triggered a match.</p>
   * @public
   */
  targetFramesIndex?: number | undefined;

  /**
   * <p>The location in the profiling graph that contains a recommendation found during analysis.</p>
   * @public
   */
  frameAddress?: string | undefined;

  /**
   * <p>The value in the profile data that exceeded the recommendation threshold.</p>
   * @public
   */
  thresholdBreachValue?: number | undefined;
}

/**
 * <p>A potential improvement that was found from analyzing the profiling data.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>How many different places in the profile graph triggered a match.</p>
   * @public
   */
  allMatchesCount: number | undefined;

  /**
   * <p>How much of the total sample count is potentially affected.</p>
   * @public
   */
  allMatchesSum: number | undefined;

  /**
   * <p>The pattern that analysis recognized in the profile to make this recommendation.</p>
   * @public
   */
  pattern: Pattern | undefined;

  /**
   * <p>List of the matches with most impact. </p>
   * @public
   */
  topMatches: Match[] | undefined;

  /**
   * <p>The start time of the profile that was used by this analysis.
   *         This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>End time of the profile that was used by this analysis.
   *             This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.</p>
   * @public
   */
  endTime: Date | undefined;
}

/**
 * <p>The structure representing the GetRecommendationsResponse.</p>
 * @public
 */
export interface GetRecommendationsResponse {
  /**
   * <p>The name of the profiling group the analysis data is about.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>
   *             The start time of the profile the analysis data is about. This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.
   *         </p>
   * @public
   */
  profileStartTime: Date | undefined;

  /**
   * <p>
   *             The end time of the profile the analysis data is about. This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.
   *         </p>
   * @public
   */
  profileEndTime: Date | undefined;

  /**
   * <p>The list of recommendations that the analysis found for this profile.</p>
   * @public
   */
  recommendations: Recommendation[] | undefined;

  /**
   * <p>
   *             The list of anomalies that the analysis has found for this profile.
   *         </p>
   * @public
   */
  anomalies: Anomaly[] | undefined;
}

/**
 * <p>The structure representing the ListFindingsReportsRequest.</p>
 * @public
 */
export interface ListFindingsReportsRequest {
  /**
   * <p>The name of the profiling group from which to search for analysis data.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>
   *             The start time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>.
   *             This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.
   *         </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>
   *             The end time of the profile to get analysis data about. You must specify <code>startTime</code> and <code>endTime</code>.
   *             This is specified
   *             using the ISO 8601 format. For example, 2020-06-01T13:15:02.001Z represents 1
   *             millisecond past June 1, 2020 1:15:02 PM UTC.
   *         </p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated <code>ListFindingsReportsRequest</code>
   *          request where <code>maxResults</code> was used and the results exceeded the value of that parameter.
   *          Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *       the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of report results returned by <code>ListFindingsReports</code>
   *          in paginated output. When this parameter is used, <code>ListFindingsReports</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListFindingsReports</code> request with the returned
   *          <code>nextToken</code> value.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A <code>Boolean</code> value indicating whether to only return reports from daily profiles. If set
   *         to <code>True</code>, only analysis data from daily profiles is returned. If set to <code>False</code>,
   *         analysis data is returned from smaller time windows (for example, one hour).</p>
   * @public
   */
  dailyReportsOnly?: boolean | undefined;
}

/**
 * <p>The structure representing the ListFindingsReportsResponse.</p>
 * @public
 */
export interface ListFindingsReportsResponse {
  /**
   * <p>The list of analysis results summaries.</p>
   * @public
   */
  findingsReportSummaries: FindingsReportSummary[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListFindingsReports</code> request.
   *          When the results of a <code>ListFindingsReports</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OrderBy = {
  /**
   * Order by timestamp in ascending order.
   */
  TIMESTAMP_ASCENDING: "TimestampAscending",
  /**
   * Order by timestamp in descending order.
   */
  TIMESTAMP_DESCENDING: "TimestampDescending",
} as const;

/**
 * @public
 */
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy];

/**
 * <p>The structure representing the listProfileTimesRequest.</p>
 * @public
 */
export interface ListProfileTimesRequest {
  /**
   * <p>The name of the profiling group.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>The start time of the time range from which to list the profiles.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end time of the time range from which to list the profiles.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>
   *          The aggregation period. This specifies the period during which an aggregation profile
   *          collects posted agent profiles for a profiling group. There are 3 valid values.
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>P1D</code> — 1 day
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PT1H</code> — 1 hour
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PT5M</code> — 5 minutes
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  period: AggregationPeriod | undefined;

  /**
   * <p>The order (ascending or descending by start time of the profile) to
   *         use when listing profiles. Defaults to <code>TIMESTAMP_DESCENDING</code>.
   *       </p>
   * @public
   */
  orderBy?: OrderBy | undefined;

  /**
   * <p>The maximum number of profile time results returned by <code>ListProfileTimes</code>
   *          in paginated output. When this parameter is used, <code>ListProfileTimes</code> only returns
   *          <code>maxResults</code> results in a single page with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListProfileTimes</code> request with the returned
   *          <code>nextToken</code> value.
   *       </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListProfileTimes</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>
 *          Contains the start time of a profile.
 *       </p>
 * @public
 */
export interface ProfileTime {
  /**
   * <p>The start time of a profile. It is specified using
   *          the ISO 8601 format. For example,
   *          2020-06-01T13:15:02.001Z  represents 1 millisecond past June 1, 2020 1:15:02 PM UTC.</p>
   * @public
   */
  start?: Date | undefined;
}

/**
 * <p>The structure representing the listProfileTimesResponse.</p>
 * @public
 */
export interface ListProfileTimesResponse {
  /**
   * <p>The list of start times of the available profiles for the aggregation
   *         period in the specified time range.
   *       </p>
   * @public
   */
  profileTimes: ProfileTime[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListProfileTimes</code> request.
   *          When the results of a <code>ListProfileTimes</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The structure representing the listProfilingGroupsRequest.</p>
 * @public
 */
export interface ListProfilingGroupsRequest {
  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListProfilingGroups</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of profiling groups results returned by <code>ListProfilingGroups</code>
   *          in paginated output. When this parameter is used, <code>ListProfilingGroups</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListProfilingGroups</code> request with the returned
   *          <code>nextToken</code> value.
   *       </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A <code>Boolean</code> value indicating whether to include a description. If <code>true</code>,
   *       then a list of
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
   *                <code>ProfilingGroupDescription</code>
   *             </a> objects
   *       that contain detailed information about profiling groups is returned. If <code>false</code>, then
   *       a list of profiling group names is returned.</p>
   * @public
   */
  includeDescription?: boolean | undefined;
}

/**
 * <p>The structure representing the listProfilingGroupsResponse.</p>
 * @public
 */
export interface ListProfilingGroupsResponse {
  /**
   * <p>
   *          A returned list of profiling group names. A list of the names is returned only if
   *          <code>includeDescription</code> is <code>false</code>, otherwise a list of
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
   *                <code>ProfilingGroupDescription</code>
   *             </a> objects
   *          is returned.
   *       </p>
   * @public
   */
  profilingGroupNames: string[] | undefined;

  /**
   * <p>
   *          A returned list
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
   *                <code>ProfilingGroupDescription</code>
   *             </a>
   *          objects. A list of
   *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
   *                <code>ProfilingGroupDescription</code>
   *             </a>
   *          objects is returned only if <code>includeDescription</code> is <code>true</code>, otherwise a list of profiling group names is returned.
   *       </p>
   * @public
   */
  profilingGroups?: ProfilingGroupDescription[] | undefined;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListProfilingGroups</code> request.
   *          When the results of a <code>ListProfilingGroups</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The structure representing the postAgentProfileRequest.</p>
 * @public
 */
export interface PostAgentProfileRequest {
  /**
   * <p>
   *          The name of the profiling group with the aggregated profile that receives the
   *          submitted profiling data.
   *       </p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>
   *          The submitted profiling data.
   *       </p>
   * @public
   */
  agentProfile: Uint8Array | undefined;

  /**
   * <p> Amazon CodeGuru Profiler uses this universally unique identifier (UUID) to prevent the
   *          accidental submission of duplicate profiling data if there are failures and retries. </p>
   * @public
   */
  profileToken?: string | undefined;

  /**
   * <p>
   *          The format of the submitted profiling data. The format maps to the
   *          <code>Accept</code> and <code>Content-Type</code> headers of the
   *          HTTP request. You can specify one of the following:
   *          or the default .
   *       </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>application/json</code> — standard JSON format
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>application/x-amzn-ion</code> — the Amazon Ion data format. For more information,
   *                see <a href="http://amzn.github.io/ion-docs/">Amazon Ion</a>.
   *             </p>
   *             </li>
   *          </ul>
   * @public
   */
  contentType: string | undefined;
}

/**
 * <p>The structure representing the postAgentProfileResponse.</p>
 * @public
 */
export interface PostAgentProfileResponse {}

/**
 * <p>The structure representing the <code>putPermissionRequest</code>.</p>
 * @public
 */
export interface PutPermissionRequest {
  /**
   * <p>The name of the profiling group to grant access to.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>
   *             Specifies an action group that contains permissions to add to
   *             a profiling group resource. One action group is supported, <code>agentPermissions</code>, which
   *             grants permission to perform actions required by the profiling agent, <code>ConfigureAgent</code>
   *             and <code>PostAgentProfile</code> permissions.
   *         </p>
   * @public
   */
  actionGroup: ActionGroup | undefined;

  /**
   * <p>
   *             A list ARNs for the roles and users you want to grant access to the profiling group.
   *             Wildcards are not are supported in the ARNs.
   *         </p>
   * @public
   */
  principals: string[] | undefined;

  /**
   * <p>
   *             A universally unique identifier (UUID) for the revision of the policy you
   *             are adding to the profiling group. Do not specify
   *             this when you add permissions to a profiling group for the first time. If a policy already exists on the
   *             profiling group, you must specify the <code>revisionId</code>.
   *         </p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * <p>The structure representing the <code>putPermissionResponse</code>.</p>
 * @public
 */
export interface PutPermissionResponse {
  /**
   * <p>
   *             The JSON-formatted resource-based policy on the profiling group that includes the
   *             added permissions.
   *         </p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p> A universally unique identifier (UUID) for the revision of the resource-based policy
   *             that includes the added permissions. The JSON-formatted policy is in the
   *                 <code>policy</code> element of the response. </p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * <p>The structure representing the RemoveNotificationChannelRequest.</p>
 * @public
 */
export interface RemoveNotificationChannelRequest {
  /**
   * <p>The name of the profiling group we want to change notification configuration for.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>The id of the channel that we want to stop receiving notifications.</p>
   * @public
   */
  channelId: string | undefined;
}

/**
 * <p>The structure representing the RemoveNotificationChannelResponse.</p>
 * @public
 */
export interface RemoveNotificationChannelResponse {
  /**
   * <p>The new notification configuration for this profiling group.</p>
   * @public
   */
  notificationConfiguration?: NotificationConfiguration | undefined;
}

/**
 * <p>
 *
 *             The structure representing the <code>removePermissionRequest</code>.</p>
 * @public
 */
export interface RemovePermissionRequest {
  /**
   * <p>The name of the profiling group.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>
   *             Specifies an action group that contains the permissions to remove from
   *             a profiling group's resource-based policy. One action group is supported, <code>agentPermissions</code>, which
   *             grants <code>ConfigureAgent</code> and <code>PostAgentProfile</code> permissions.
   *         </p>
   * @public
   */
  actionGroup: ActionGroup | undefined;

  /**
   * <p>
   *             A universally unique identifier (UUID) for the revision of the resource-based policy from which
   *             you want to remove permissions.
   *         </p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * <p>The structure representing the <code>removePermissionResponse</code>.</p>
 * @public
 */
export interface RemovePermissionResponse {
  /**
   * <p>
   *             The JSON-formatted resource-based policy on the profiling group after
   *             the specified permissions were removed.
   *         </p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p> A universally unique identifier (UUID) for the revision of the resource-based policy
   *             after the specified permissions were removed. The updated JSON-formatted policy is in the
   *                 <code>policy</code> element of the response. </p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * <p>The structure representing the SubmitFeedbackRequest.</p>
 * @public
 */
export interface SubmitFeedbackRequest {
  /**
   * <p>The name of the profiling group that is associated with the analysis data.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>The universally unique identifier (UUID) of the
   *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_AnomalyInstance.html">
   *                <code>AnomalyInstance</code>
   *             </a> object
   *             that is included in the analysis data.</p>
   * @public
   */
  anomalyInstanceId: string | undefined;

  /**
   * <p>
   *             The feedback tpye. Thee are two valid values, <code>Positive</code> and <code>Negative</code>.
   *         </p>
   * @public
   */
  type: FeedbackType | undefined;

  /**
   * <p>Optional feedback about this anomaly.</p>
   * @public
   */
  comment?: string | undefined;
}

/**
 * <p>The structure representing the SubmitFeedbackResponse.</p>
 * @public
 */
export interface SubmitFeedbackResponse {}

/**
 * <p>The structure representing the updateProfilingGroupRequest.</p>
 * @public
 */
export interface UpdateProfilingGroupRequest {
  /**
   * <p>The name of the profiling group to update.</p>
   * @public
   */
  profilingGroupName: string | undefined;

  /**
   * <p>
   *          Specifies whether profiling is enabled or disabled for a profiling group.
   *       </p>
   * @public
   */
  agentOrchestrationConfig: AgentOrchestrationConfig | undefined;
}

/**
 * <p>The structure representing the updateProfilingGroupResponse.</p>
 * @public
 */
export interface UpdateProfilingGroupResponse {
  /**
   * <p>
   *          A <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
   *                <code>ProfilingGroupDescription</code>
   *             </a>
   *          that contains information about the returned updated profiling group.
   *       </p>
   * @public
   */
  profilingGroup: ProfilingGroupDescription | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the resource that the tags are added to.
   *       </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *          The list of tags that are added to the specified resource.
   *       </p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>
   *          The Amazon Resource Name (ARN) of the resource that contains the tags to remove.
   *       </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>
   *          A list of tag keys. Existing tags of resources with keys in this list are removed from
   *          the specified resource.
   *       </p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
