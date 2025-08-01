// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ControlCatalogServiceException as __BaseException } from "./ControlCatalogServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A summary of the domain that a common control or an objective belongs to.</p>
 * @public
 */
export interface AssociatedDomainSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the related domain.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the related domain.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>A summary of the objective that a common control supports.</p>
 * @public
 */
export interface AssociatedObjectiveSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the related objective.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the related objective.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The objective resource that's being used as a filter.</p>
 * @public
 */
export interface ObjectiveResourceFilter {
  /**
   * <p>The Amazon Resource Name (ARN) of the objective.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>An optional filter that narrows the results to a specific objective.</p>
 * @public
 */
export interface CommonControlFilter {
  /**
   * <p>The objective that's used as filter criteria.</p> <p>You can use this parameter to specify one objective ARN at a time. Passing multiple ARNs in the <code>CommonControlFilter</code> isn’t supported.</p>
   * @public
   */
  Objectives?: ObjectiveResourceFilter[] | undefined;
}

/**
 * <p>A structure that contains details about a common control mapping. In particular, it returns the Amazon Resource Name (ARN) of the common control.</p>
 * @public
 */
export interface CommonControlMappingDetails {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the common control in the mapping.</p>
   * @public
   */
  CommonControlArn: string | undefined;
}

/**
 * <p>An internal service error occurred during the processing of your request. Try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message?: string | undefined;
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
  }
}

/**
 * @public
 */
export interface ListCommonControlsRequest {
  /**
   * <p>The maximum number of results on a page or for an API request call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional filter that narrows the results to a specific objective.</p> <p>This filter allows you to specify one objective ARN at a time. Passing multiple ARNs in the <code>CommonControlFilter</code> isn’t supported.</p>
   * @public
   */
  CommonControlFilter?: CommonControlFilter | undefined;
}

/**
 * <p>A summary of metadata for a common control.</p>
 * @public
 */
export interface CommonControlSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the common control.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the common control.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the common control.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The domain that the common control belongs to.</p>
   * @public
   */
  Domain: AssociatedDomainSummary | undefined;

  /**
   * <p>The objective that the common control belongs to.</p>
   * @public
   */
  Objective: AssociatedObjectiveSummary | undefined;

  /**
   * <p>The time when the common control was created.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>The time when the common control was most recently updated.</p>
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListCommonControlsResponse {
  /**
   * <p>The list of common controls that the <code>ListCommonControls</code> API returns.</p>
   * @public
   */
  CommonControls: CommonControlSummary[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  Message?: string | undefined;
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
  }
}

/**
 * <p>The request has invalid or missing parameters.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
  }
}

/**
 * @public
 * @enum
 */
export const ControlBehavior = {
  DETECTIVE: "DETECTIVE",
  PREVENTIVE: "PREVENTIVE",
  PROACTIVE: "PROACTIVE",
} as const;

/**
 * @public
 */
export type ControlBehavior = (typeof ControlBehavior)[keyof typeof ControlBehavior];

/**
 * @public
 */
export interface GetControlRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control. It has one of the following formats:</p> <p> <i>Global format</i> </p> <p> <code>arn:\{PARTITION\}:controlcatalog:::control/\{CONTROL_CATALOG_OPAQUE_ID\}</code> </p> <p> <i>Or Regional format</i> </p> <p> <code>arn:\{PARTITION\}:controltower:\{REGION\}::control/\{CONTROL_TOWER_OPAQUE_ID\}</code> </p> <p>Here is a more general pattern that covers Amazon Web Services Control Tower and Control Catalog ARNs:</p> <p> <code>^arn:(aws(?:[-a-z]*)?):(controlcatalog|controltower):[a-zA-Z0-9-]*::control/[0-9a-zA-Z_\\-]+$</code> </p>
   * @public
   */
  ControlArn: string | undefined;
}

/**
 * <p>An object that describes the implementation type for a control.</p> <p>Our <code>ImplementationDetails</code> <code>Type</code> format has three required segments:</p> <ul> <li> <p> <code>SERVICE-PROVIDER::SERVICE-NAME::RESOURCE-NAME</code> </p> </li> </ul> <p>For example, <code>AWS::Config::ConfigRule</code> <b>or</b> <code>AWS::SecurityHub::SecurityControl</code> resources have the format with three required segments.</p> <p>Our <code>ImplementationDetails</code> <code>Type</code> format has an optional fourth segment, which is present for applicable implementation types. The format is as follows: </p> <ul> <li> <p> <code>SERVICE-PROVIDER::SERVICE-NAME::RESOURCE-NAME::RESOURCE-TYPE-DESCRIPTION</code> </p> </li> </ul> <p>For example, <code>AWS::Organizations::Policy::SERVICE_CONTROL_POLICY</code> <b>or</b> <code>AWS::CloudFormation::Type::HOOK</code> have the format with four segments.</p> <p>Although the format is similar, the values for the <code>Type</code> field do not match any Amazon Web Services CloudFormation values.</p>
 * @public
 */
export interface ImplementationDetails {
  /**
   * <p>A string that describes a control's implementation type.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>A service-specific identifier for the control, assigned by the service that implemented the control. For example, this identifier could be an Amazon Web Services Config Rule ID or a Security Hub Control ID.</p>
   * @public
   */
  Identifier?: string | undefined;
}

/**
 * <p>Five types of control parameters are supported.</p> <ul> <li> <p> <b>AllowedRegions</b>: List of Amazon Web Services Regions exempted from the control. Each string is expected to be an Amazon Web Services Region code. This parameter is mandatory for the <b>OU Region deny</b> control, <b>CT.MULTISERVICE.PV.1</b>.</p> <p>Example: <code>["us-east-1","us-west-2"]</code> </p> </li> <li> <p> <b>ExemptedActions</b>: List of Amazon Web Services IAM actions exempted from the control. Each string is expected to be an IAM action.</p> <p>Example: <code>["logs:DescribeLogGroups","logs:StartQuery","logs:GetQueryResults"]</code> </p> </li> <li> <p> <b>ExemptedPrincipalArns</b>: List of Amazon Web Services IAM principal ARNs exempted from the control. Each string is expected to be an IAM principal that follows the pattern <code>^arn:(aws|aws-us-gov):(iam|sts)::.+:.+$</code> </p> <p>Example: <code>["arn:aws:iam::*:role/ReadOnly","arn:aws:sts::*:assumed-role/ReadOnly/*"]</code> </p> </li> <li> <p> <b>ExemptedResourceArns</b>: List of resource ARNs exempted from the control. Each string is expected to be a resource ARN.</p> <p>Example: <code>["arn:aws:s3:::my-bucket-name"]</code> </p> </li> <li> <p> <b>ExemptAssumeRoot</b>: A parameter that lets you choose whether to exempt requests made with <code>AssumeRoot</code> from this control, for this OU. For member accounts, the <code>AssumeRoot</code> property is included in requests initiated by IAM centralized root access. This parameter applies only to the <code>AWS-GR_RESTRICT_ROOT_USER</code> control. If you add the parameter when enabling the control, the <code>AssumeRoot</code> exemption is allowed. If you omit the parameter, the <code>AssumeRoot</code> exception is not permitted. The parameter does not accept <code>False</code> as a value.</p> <p> <i>Example: Enabling the control and allowing <code>AssumeRoot</code> </i> </p> <p> <code>\{ "controlIdentifier": "arn:aws:controlcatalog:::control/5kvme4m5d2b4d7if2fs5yg2ui", "parameters": [ \{ "key": "ExemptAssumeRoot", "value": true \} ], "targetIdentifier": "arn:aws:organizations::8633900XXXXX:ou/o-6jmn81636m/ou-qsah-jtiihcla" \}</code> </p> </li> </ul>
 * @public
 */
export interface ControlParameter {
  /**
   * <p>The parameter name. This name is the parameter <code>key</code> when you call <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_EnableControl.html"> <code>EnableControl</code> </a> or <a href="https://docs.aws.amazon.com/controltower/latest/APIReference/API_UpdateEnabledControl.html"> <code>UpdateEnabledControl</code> </a>.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ControlScope = {
  GLOBAL: "GLOBAL",
  REGIONAL: "REGIONAL",
} as const;

/**
 * @public
 */
export type ControlScope = (typeof ControlScope)[keyof typeof ControlScope];

/**
 * <p>Returns information about the control, including the scope of the control, if enabled, and the Regions in which the control is available for deployment. For more information about scope, see <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/global-services.html">Global services</a>.</p> <p>If you are applying controls through an Amazon Web Services Control Tower landing zone environment, remember that the values returned in the <code>RegionConfiguration</code> API operation are not related to the governed Regions in your landing zone. For example, if you are governing Regions <code>A</code>,<code>B</code>,and <code>C</code> while the control is available in Regions <code>A</code>, <code>B</code>, C<code>,</code> and <code>D</code>, you'd see a response with <code>DeployableRegions</code> of <code>A</code>, <code>B</code>, <code>C</code>, and <code>D</code> for a control with <code>REGIONAL</code> scope, even though you may not intend to deploy the control in Region <code>D</code>, because you do not govern it through your landing zone.</p>
 * @public
 */
export interface RegionConfiguration {
  /**
   * <p>The coverage of the control, if deployed. Scope is an enumerated type, with value <code>Regional</code>, or <code>Global</code>. A control with Global scope is effective in all Amazon Web Services Regions, regardless of the Region from which it is enabled, or to which it is deployed. A control implemented by an SCP is usually Global in scope. A control with Regional scope has operations that are restricted specifically to the Region from which it is enabled and to which it is deployed. Controls implemented by Config rules and CloudFormation hooks usually are Regional in scope. Security Hub controls usually are Regional in scope.</p>
   * @public
   */
  Scope: ControlScope | undefined;

  /**
   * <p>Regions in which the control is available to be deployed.</p>
   * @public
   */
  DeployableRegions?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ControlSeverity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type ControlSeverity = (typeof ControlSeverity)[keyof typeof ControlSeverity];

/**
 * @public
 */
export interface GetControlResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the control.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of alternative identifiers for the control. These are human-readable designators, such as <code>SH.S3.1</code>. Several aliases can refer to the same control across different Amazon Web Services services or compliance frameworks.</p>
   * @public
   */
  Aliases?: string[] | undefined;

  /**
   * <p>The display name of the control.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of what the control does.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A term that identifies the control's functional behavior. One of <code>Preventive</code>, <code>Detective</code>, <code>Proactive</code> </p>
   * @public
   */
  Behavior: ControlBehavior | undefined;

  /**
   * <p>An enumerated type, with the following possible values:</p>
   * @public
   */
  Severity?: ControlSeverity | undefined;

  /**
   * <p>Returns information about the control, including the scope of the control, if enabled, and the Regions in which the control is available for deployment. For more information about scope, see <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/global-services.html">Global services</a>.</p> <p>If you are applying controls through an Amazon Web Services Control Tower landing zone environment, remember that the values returned in the <code>RegionConfiguration</code> API operation are not related to the governed Regions in your landing zone. For example, if you are governing Regions <code>A</code>,<code>B</code>,and <code>C</code> while the control is available in Regions <code>A</code>, <code>B</code>, C<code>,</code> and <code>D</code>, you'd see a response with <code>DeployableRegions</code> of <code>A</code>, <code>B</code>, <code>C</code>, and <code>D</code> for a control with <code>REGIONAL</code> scope, even though you may not intend to deploy the control in Region <code>D</code>, because you do not govern it through your landing zone.</p>
   * @public
   */
  RegionConfiguration: RegionConfiguration | undefined;

  /**
   * <p>Returns information about the control, as an <code>ImplementationDetails</code> object that shows the underlying implementation type for a control.</p>
   * @public
   */
  Implementation?: ImplementationDetails | undefined;

  /**
   * <p>Returns an array of <code>ControlParameter</code> objects that specify the parameters a control supports. An empty list is returned for controls that don’t support parameters. </p>
   * @public
   */
  Parameters?: ControlParameter[] | undefined;

  /**
   * <p>A timestamp that notes the time when the control was released (start of its life) as a governance capability in Amazon Web Services.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>A list of Amazon Web Services resource types that are governed by this control. This information helps you understand which controls can govern certain types of resources, and conversely, which resources are affected when the control is implemented. The resources are represented as Amazon Web Services CloudFormation resource types. If <code>GovernedResources</code> cannot be represented by available CloudFormation resource types, it’s returned as an empty list.</p>
   * @public
   */
  GovernedResources?: string[] | undefined;
}

/**
 * <p>The requested resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A structure that defines filtering criteria for control implementations. You can use this filter to find controls that are implemented by specific Amazon Web Services services or with specific service identifiers.</p>
 * @public
 */
export interface ImplementationFilter {
  /**
   * <p>A list of implementation types that can serve as filters. For example, you can filter for controls implemented as Amazon Web Services Config Rules by specifying AWS::Config::ConfigRule as a type.</p>
   * @public
   */
  Types?: string[] | undefined;

  /**
   * <p>A list of service-specific identifiers that can serve as filters. For example, you can filter for controls with specific Amazon Web Services Config Rule IDs or Security Hub Control IDs.</p>
   * @public
   */
  Identifiers?: string[] | undefined;
}

/**
 * <p>A structure that defines filtering criteria for the ListControls operation. You can use this filter to narrow down the list of controls based on their implementation details.</p>
 * @public
 */
export interface ControlFilter {
  /**
   * <p>A filter that narrows the results to controls with specific implementation types or identifiers. This field allows you to find controls that are implemented by specific Amazon Web Services services or with specific service identifiers.</p>
   * @public
   */
  Implementations?: ImplementationFilter | undefined;
}

/**
 * @public
 */
export interface ListControlsRequest {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results on a page or for an API request call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional filter that narrows the results to controls with specific implementation types or identifiers. If you don't provide a filter, the operation returns all available controls.</p>
   * @public
   */
  Filter?: ControlFilter | undefined;
}

/**
 * <p>A summary of how the control is implemented, including the Amazon Web Services service that enforces the control and its service-specific identifier. For example, the value of this field could indicate that the control is implemented as an Amazon Web Services Config Rule or an Amazon Web Services Security Hub control.</p>
 * @public
 */
export interface ImplementationSummary {
  /**
   * <p>A string that represents the Amazon Web Services service that implements this control. For example, a value of <code>AWS::Config::ConfigRule</code> indicates that the control is implemented by Amazon Web Services Config, and <code>AWS::SecurityHub::SecurityControl</code> indicates implementation by Amazon Web Services Security Hub.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The identifier originally assigned by the Amazon Web Services service that implements the control. For example, <code>CODEPIPELINE_DEPLOYMENT_COUNT_CHECK</code>.</p>
   * @public
   */
  Identifier?: string | undefined;
}

/**
 * <p>Overview of information about a control.</p>
 * @public
 */
export interface ControlSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the control.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of alternative identifiers for the control. These are human-readable designators, such as <code>SH.S3.1</code>. Several aliases can refer to the same control across different Amazon Web Services services or compliance frameworks.</p>
   * @public
   */
  Aliases?: string[] | undefined;

  /**
   * <p>The display name of the control.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the control, as it may appear in the console. Describes the functionality of the control.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>An enumerated type, with the following possible values:</p>
   * @public
   */
  Behavior?: ControlBehavior | undefined;

  /**
   * <p>An enumerated type, with the following possible values:</p>
   * @public
   */
  Severity?: ControlSeverity | undefined;

  /**
   * <p>An object of type <code>ImplementationSummary</code> that describes how the control is implemented.</p>
   * @public
   */
  Implementation?: ImplementationSummary | undefined;

  /**
   * <p>A timestamp that notes the time when the control was released (start of its life) as a governance capability in Amazon Web Services.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>A list of Amazon Web Services resource types that are governed by this control. This information helps you understand which controls can govern certain types of resources, and conversely, which resources are affected when the control is implemented. The resources are represented as Amazon Web Services CloudFormation resource types. If <code>GovernedResources</code> cannot be represented by available CloudFormation resource types, it’s returned as an empty list.</p>
   * @public
   */
  GovernedResources?: string[] | undefined;
}

/**
 * @public
 */
export interface ListControlsResponse {
  /**
   * <p>Returns a list of controls, given as structures of type <i>controlSummary</i>.</p>
   * @public
   */
  Controls: ControlSummary[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDomainsRequest {
  /**
   * <p>The maximum number of results on a page or for an API request call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of metadata for a domain.</p>
 * @public
 */
export interface DomainSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the domain.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the domain.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the domain.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The time when the domain was created.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>The time when the domain was most recently updated.</p>
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListDomainsResponse {
  /**
   * <p>The list of domains that the <code>ListDomains</code> API returns.</p>
   * @public
   */
  Domains: DomainSummary[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MappingType = {
  COMMON_CONTROL: "COMMON_CONTROL",
  FRAMEWORK: "FRAMEWORK",
} as const;

/**
 * @public
 */
export type MappingType = (typeof MappingType)[keyof typeof MappingType];

/**
 * <p>A structure that defines filtering criteria for the ListControlMappings operation. You can use this filter to narrow down the list of control mappings based on control ARNs, common control ARNs, or mapping types.</p>
 * @public
 */
export interface ControlMappingFilter {
  /**
   * <p>A list of control ARNs to filter the mappings. When specified, only mappings associated with these controls are returned.</p>
   * @public
   */
  ControlArns?: string[] | undefined;

  /**
   * <p>A list of common control ARNs to filter the mappings. When specified, only mappings associated with these common controls are returned.</p>
   * @public
   */
  CommonControlArns?: string[] | undefined;

  /**
   * <p>A list of mapping types to filter the mappings. When specified, only mappings of these types are returned.</p>
   * @public
   */
  MappingTypes?: MappingType[] | undefined;
}

/**
 * @public
 */
export interface ListControlMappingsRequest {
  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results on a page or for an API request call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional filter that narrows the results to specific control mappings based on control ARNs, common control ARNs, or mapping types.</p>
   * @public
   */
  Filter?: ControlMappingFilter | undefined;
}

/**
 * <p>A structure that contains details about a framework mapping, including the framework name and specific item within the framework that the control maps to.</p>
 * @public
 */
export interface FrameworkMappingDetails {
  /**
   * <p>The name of the compliance framework that the control maps to.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The specific item or requirement within the framework that the control maps to.</p>
   * @public
   */
  Item: string | undefined;
}

/**
 * <p>A structure that contains the details of a mapping relationship, which can be either to a framework or to a common control.</p>
 * @public
 */
export type Mapping = Mapping.CommonControlMember | Mapping.FrameworkMember | Mapping.$UnknownMember;

/**
 * @public
 */
export namespace Mapping {
  /**
   * <p>The framework mapping details when the mapping type relates to a compliance framework.</p>
   * @public
   */
  export interface FrameworkMember {
    Framework: FrameworkMappingDetails;
    CommonControl?: never;
    $unknown?: never;
  }

  /**
   * <p>The common control mapping details when the mapping type relates to a common control.</p>
   * @public
   */
  export interface CommonControlMember {
    Framework?: never;
    CommonControl: CommonControlMappingDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Framework?: never;
    CommonControl?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Framework: (value: FrameworkMappingDetails) => T;
    CommonControl: (value: CommonControlMappingDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Mapping, visitor: Visitor<T>): T => {
    if (value.Framework !== undefined) return visitor.Framework(value.Framework);
    if (value.CommonControl !== undefined) return visitor.CommonControl(value.CommonControl);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>A structure that contains information about a control mapping, including the control ARN, mapping type, and mapping details.</p>
 * @public
 */
export interface ControlMapping {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the control in the mapping.</p>
   * @public
   */
  ControlArn: string | undefined;

  /**
   * <p>The type of mapping relationship between the control and other entities. Indicates whether the mapping is to a framework or common control.</p>
   * @public
   */
  MappingType: MappingType | undefined;

  /**
   * <p>The details of the mapping relationship, containing either framework or common control information.</p>
   * @public
   */
  Mapping: Mapping | undefined;
}

/**
 * @public
 */
export interface ListControlMappingsResponse {
  /**
   * <p>The list of control mappings that the ListControlMappings API returns.</p>
   * @public
   */
  ControlMappings: ControlMapping[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The domain resource that's being used as a filter.</p>
 * @public
 */
export interface DomainResourceFilter {
  /**
   * <p>The Amazon Resource Name (ARN) of the domain.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>An optional filter that narrows the list of objectives to a specific domain.</p>
 * @public
 */
export interface ObjectiveFilter {
  /**
   * <p>The domain that's used as filter criteria.</p> <p>You can use this parameter to specify one domain ARN at a time. Passing multiple ARNs in the <code>ObjectiveFilter</code> isn’t supported.</p>
   * @public
   */
  Domains?: DomainResourceFilter[] | undefined;
}

/**
 * @public
 */
export interface ListObjectivesRequest {
  /**
   * <p>The maximum number of results on a page or for an API request call.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional filter that narrows the results to a specific domain.</p> <p>This filter allows you to specify one domain ARN at a time. Passing multiple ARNs in the <code>ObjectiveFilter</code> isn’t supported.</p>
   * @public
   */
  ObjectiveFilter?: ObjectiveFilter | undefined;
}

/**
 * <p>A summary of metadata for an objective.</p>
 * @public
 */
export interface ObjectiveSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the objective.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the objective.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the objective.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The domain that the objective belongs to.</p>
   * @public
   */
  Domain: AssociatedDomainSummary | undefined;

  /**
   * <p>The time when the objective was created.</p>
   * @public
   */
  CreateTime: Date | undefined;

  /**
   * <p>The time when the objective was most recently updated.</p>
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListObjectivesResponse {
  /**
   * <p>The list of objectives that the <code>ListObjectives</code> API returns.</p>
   * @public
   */
  Objectives: ObjectiveSummary[] | undefined;

  /**
   * <p>The pagination token that's used to fetch the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}
