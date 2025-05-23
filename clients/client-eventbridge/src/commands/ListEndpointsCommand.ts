// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListEndpointsRequest, ListEndpointsResponse } from "../models/models_0";
import { de_ListEndpointsCommand, se_ListEndpointsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEndpointsCommand}.
 */
export interface ListEndpointsCommandInput extends ListEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListEndpointsCommand}.
 */
export interface ListEndpointsCommandOutput extends ListEndpointsResponse, __MetadataBearer {}

/**
 * <p>List the global endpoints associated with this account. For more information about global
 *       endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications
 *         Regional-fault tolerant with global endpoints and event replication</a> in the
 *         <i>
 *                <i>Amazon EventBridge User Guide</i>
 *             </i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListEndpointsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListEndpointsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // ListEndpointsRequest
 *   NamePrefix: "STRING_VALUE",
 *   HomeRegion: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListEndpointsResponse
 * //   Endpoints: [ // EndpointList
 * //     { // Endpoint
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       RoutingConfig: { // RoutingConfig
 * //         FailoverConfig: { // FailoverConfig
 * //           Primary: { // Primary
 * //             HealthCheck: "STRING_VALUE", // required
 * //           },
 * //           Secondary: { // Secondary
 * //             Route: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       ReplicationConfig: { // ReplicationConfig
 * //         State: "ENABLED" || "DISABLED",
 * //       },
 * //       EventBuses: [ // EndpointEventBusList
 * //         { // EndpointEventBus
 * //           EventBusArn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       RoleArn: "STRING_VALUE",
 * //       EndpointId: "STRING_VALUE",
 * //       EndpointUrl: "STRING_VALUE",
 * //       State: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED",
 * //       StateReason: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEndpointsCommandInput - {@link ListEndpointsCommandInput}
 * @returns {@link ListEndpointsCommandOutput}
 * @see {@link ListEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 *
 * @public
 */
export class ListEndpointsCommand extends $Command
  .classBuilder<
    ListEndpointsCommandInput,
    ListEndpointsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "ListEndpoints", {})
  .n("EventBridgeClient", "ListEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_ListEndpointsCommand)
  .de(de_ListEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEndpointsRequest;
      output: ListEndpointsResponse;
    };
    sdk: {
      input: ListEndpointsCommandInput;
      output: ListEndpointsCommandOutput;
    };
  };
}
