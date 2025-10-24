// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingsV2Request, GetFindingsV2Response } from "../models/models_3";
import { de_GetFindingsV2Command, se_GetFindingsV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsV2Command}.
 */
export interface GetFindingsV2CommandInput extends GetFindingsV2Request {}
/**
 * @public
 *
 * The output of {@link GetFindingsV2Command}.
 */
export interface GetFindingsV2CommandOutput extends GetFindingsV2Response, __MetadataBearer {}

/**
 * <p>Return a list of findings that match the specified criteria.
 *       <code>GetFindings</code> and <code>GetFindingsV2</code> both use <code>securityhub:GetFindings</code> in the <code>Action</code> element of an IAM policy statement.
 *          You must have permission to perform the <code>securityhub:GetFindings</code> action. This API is in public preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetFindingsV2Request
 *   Filters: { // OcsfFindingFilters
 *     CompositeFilters: [ // CompositeFilterList
 *       { // CompositeFilter
 *         StringFilters: [ // OcsfStringFilterList
 *           { // OcsfStringFilter
 *             FieldName: "metadata.uid" || "activity_name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.category" || "compliance.assessments.name" || "compliance.control" || "compliance.status" || "compliance.standards" || "finding_info.desc" || "finding_info.src_url" || "finding_info.title" || "finding_info.types" || "finding_info.uid" || "finding_info.related_events.uid" || "finding_info.related_events.product.uid" || "finding_info.related_events.title" || "metadata.product.name" || "metadata.product.uid" || "metadata.product.vendor_name" || "remediation.desc" || "remediation.references" || "resources.cloud_partition" || "resources.region" || "resources.type" || "resources.uid" || "severity" || "status" || "comment" || "vulnerabilities.fix_coverage" || "class_name" || "databucket.encryption_details.algorithm" || "databucket.encryption_details.key_uid" || "databucket.file.data_classifications.classifier_details.type" || "evidences.actor.user.account.uid" || "evidences.api.operation" || "evidences.api.response.error_message" || "evidences.api.service.name" || "evidences.connection_info.direction" || "evidences.connection_info.protocol_name" || "evidences.dst_endpoint.autonomous_system.name" || "evidences.dst_endpoint.location.city" || "evidences.dst_endpoint.location.country" || "evidences.src_endpoint.autonomous_system.name" || "evidences.src_endpoint.hostname" || "evidences.src_endpoint.location.city" || "evidences.src_endpoint.location.country" || "finding_info.analytic.name" || "malware.name" || "malware_scan_info.uid" || "malware.severity" || "resources.cloud_function.layers.uid_alt" || "resources.cloud_function.runtime" || "resources.cloud_function.user.uid" || "resources.device.encryption_details.key_uid" || "resources.device.image.uid" || "resources.image.architecture" || "resources.image.registry_uid" || "resources.image.repository_name" || "resources.image.uid" || "resources.subnet_info.uid" || "resources.vpc_uid" || "vulnerabilities.affected_code.file.path" || "vulnerabilities.affected_packages.name" || "vulnerabilities.cve.epss.score" || "vulnerabilities.cve.uid" || "vulnerabilities.related_vulnerabilities" || "cloud.account.name",
 *             Filter: { // StringFilter
 *               Value: "STRING_VALUE",
 *               Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *             },
 *           },
 *         ],
 *         DateFilters: [ // OcsfDateFilterList
 *           { // OcsfDateFilter
 *             FieldName: "finding_info.created_time_dt" || "finding_info.first_seen_time_dt" || "finding_info.last_seen_time_dt" || "finding_info.modified_time_dt" || "resources.image.created_time_dt" || "resources.image.last_used_time_dt" || "resources.modified_time_dt",
 *             Filter: { // DateFilter
 *               Start: "STRING_VALUE",
 *               End: "STRING_VALUE",
 *               DateRange: { // DateRange
 *                 Value: Number("int"),
 *                 Unit: "DAYS",
 *               },
 *             },
 *           },
 *         ],
 *         BooleanFilters: [ // OcsfBooleanFilterList
 *           { // OcsfBooleanFilter
 *             FieldName: "compliance.assessments.meets_criteria" || "vulnerabilities.is_exploit_available" || "vulnerabilities.is_fix_available",
 *             Filter: { // BooleanFilter
 *               Value: true || false,
 *             },
 *           },
 *         ],
 *         NumberFilters: [ // OcsfNumberFilterList
 *           { // OcsfNumberFilter
 *             FieldName: "activity_id" || "compliance.status_id" || "confidence_score" || "severity_id" || "status_id" || "finding_info.related_events_count" || "evidences.api.response.code" || "evidences.dst_endpoint.autonomous_system.number" || "evidences.dst_endpoint.port" || "evidences.src_endpoint.autonomous_system.number" || "evidences.src_endpoint.port" || "resources.image.in_use_count",
 *             Filter: { // NumberFilter
 *               Gte: Number("double"),
 *               Lte: Number("double"),
 *               Eq: Number("double"),
 *               Gt: Number("double"),
 *               Lt: Number("double"),
 *             },
 *           },
 *         ],
 *         MapFilters: [ // OcsfMapFilterList
 *           { // OcsfMapFilter
 *             FieldName: "resources.tags" || "compliance.control_parameters" || "databucket.tags" || "finding_info.tags",
 *             Filter: { // MapFilter
 *               Key: "STRING_VALUE",
 *               Value: "STRING_VALUE",
 *               Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *             },
 *           },
 *         ],
 *         IpFilters: [ // OcsfIpFilterList
 *           { // OcsfIpFilter
 *             FieldName: "evidences.dst_endpoint.ip" || "evidences.src_endpoint.ip",
 *             Filter: { // IpFilter
 *               Cidr: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         NestedCompositeFilters: [
 *           {
 *             StringFilters: [
 *               {
 *                 FieldName: "metadata.uid" || "activity_name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.category" || "compliance.assessments.name" || "compliance.control" || "compliance.status" || "compliance.standards" || "finding_info.desc" || "finding_info.src_url" || "finding_info.title" || "finding_info.types" || "finding_info.uid" || "finding_info.related_events.uid" || "finding_info.related_events.product.uid" || "finding_info.related_events.title" || "metadata.product.name" || "metadata.product.uid" || "metadata.product.vendor_name" || "remediation.desc" || "remediation.references" || "resources.cloud_partition" || "resources.region" || "resources.type" || "resources.uid" || "severity" || "status" || "comment" || "vulnerabilities.fix_coverage" || "class_name" || "databucket.encryption_details.algorithm" || "databucket.encryption_details.key_uid" || "databucket.file.data_classifications.classifier_details.type" || "evidences.actor.user.account.uid" || "evidences.api.operation" || "evidences.api.response.error_message" || "evidences.api.service.name" || "evidences.connection_info.direction" || "evidences.connection_info.protocol_name" || "evidences.dst_endpoint.autonomous_system.name" || "evidences.dst_endpoint.location.city" || "evidences.dst_endpoint.location.country" || "evidences.src_endpoint.autonomous_system.name" || "evidences.src_endpoint.hostname" || "evidences.src_endpoint.location.city" || "evidences.src_endpoint.location.country" || "finding_info.analytic.name" || "malware.name" || "malware_scan_info.uid" || "malware.severity" || "resources.cloud_function.layers.uid_alt" || "resources.cloud_function.runtime" || "resources.cloud_function.user.uid" || "resources.device.encryption_details.key_uid" || "resources.device.image.uid" || "resources.image.architecture" || "resources.image.registry_uid" || "resources.image.repository_name" || "resources.image.uid" || "resources.subnet_info.uid" || "resources.vpc_uid" || "vulnerabilities.affected_code.file.path" || "vulnerabilities.affected_packages.name" || "vulnerabilities.cve.epss.score" || "vulnerabilities.cve.uid" || "vulnerabilities.related_vulnerabilities" || "cloud.account.name",
 *                 Filter: {
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                 },
 *               },
 *             ],
 *             DateFilters: [
 *               {
 *                 FieldName: "finding_info.created_time_dt" || "finding_info.first_seen_time_dt" || "finding_info.last_seen_time_dt" || "finding_info.modified_time_dt" || "resources.image.created_time_dt" || "resources.image.last_used_time_dt" || "resources.modified_time_dt",
 *                 Filter: {
 *                   Start: "STRING_VALUE",
 *                   End: "STRING_VALUE",
 *                   DateRange: {
 *                     Value: Number("int"),
 *                     Unit: "DAYS",
 *                   },
 *                 },
 *               },
 *             ],
 *             BooleanFilters: [
 *               {
 *                 FieldName: "compliance.assessments.meets_criteria" || "vulnerabilities.is_exploit_available" || "vulnerabilities.is_fix_available",
 *                 Filter: {
 *                   Value: true || false,
 *                 },
 *               },
 *             ],
 *             NumberFilters: [
 *               {
 *                 FieldName: "activity_id" || "compliance.status_id" || "confidence_score" || "severity_id" || "status_id" || "finding_info.related_events_count" || "evidences.api.response.code" || "evidences.dst_endpoint.autonomous_system.number" || "evidences.dst_endpoint.port" || "evidences.src_endpoint.autonomous_system.number" || "evidences.src_endpoint.port" || "resources.image.in_use_count",
 *                 Filter: {
 *                   Gte: Number("double"),
 *                   Lte: Number("double"),
 *                   Eq: Number("double"),
 *                   Gt: Number("double"),
 *                   Lt: Number("double"),
 *                 },
 *               },
 *             ],
 *             MapFilters: [
 *               {
 *                 FieldName: "resources.tags" || "compliance.control_parameters" || "databucket.tags" || "finding_info.tags",
 *                 Filter: {
 *                   Key: "STRING_VALUE",
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *                 },
 *               },
 *             ],
 *             IpFilters: [
 *               {
 *                 FieldName: "evidences.dst_endpoint.ip" || "evidences.src_endpoint.ip",
 *                 Filter: {
 *                   Cidr: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *             NestedCompositeFilters: "<CompositeFilterList>",
 *             Operator: "AND" || "OR",
 *           },
 *         ],
 *         Operator: "AND" || "OR",
 *       },
 *     ],
 *     CompositeOperator: "AND" || "OR",
 *   },
 *   SortCriteria: [ // SortCriteria
 *     { // SortCriterion
 *       Field: "STRING_VALUE",
 *       SortOrder: "asc" || "desc",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetFindingsV2Command(input);
 * const response = await client.send(command);
 * // { // GetFindingsV2Response
 * //   Findings: [ // OcsfFindingsList
 * //     "DOCUMENT_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFindingsV2CommandInput - {@link GetFindingsV2CommandInput}
 * @returns {@link GetFindingsV2CommandOutput}
 * @see {@link GetFindingsV2CommandInput} for command's `input` shape.
 * @see {@link GetFindingsV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class GetFindingsV2Command extends $Command
  .classBuilder<
    GetFindingsV2CommandInput,
    GetFindingsV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "GetFindingsV2", {})
  .n("SecurityHubClient", "GetFindingsV2Command")
  .f(void 0, void 0)
  .ser(se_GetFindingsV2Command)
  .de(de_GetFindingsV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingsV2Request;
      output: GetFindingsV2Response;
    };
    sdk: {
      input: GetFindingsV2CommandInput;
      output: GetFindingsV2CommandOutput;
    };
  };
}
