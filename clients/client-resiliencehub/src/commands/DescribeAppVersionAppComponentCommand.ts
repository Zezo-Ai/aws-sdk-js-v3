// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAppVersionAppComponentRequest, DescribeAppVersionAppComponentResponse } from "../models/models_0";
import {
  de_DescribeAppVersionAppComponentCommand,
  se_DescribeAppVersionAppComponentCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppVersionAppComponentCommand}.
 */
export interface DescribeAppVersionAppComponentCommandInput extends DescribeAppVersionAppComponentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppVersionAppComponentCommand}.
 */
export interface DescribeAppVersionAppComponentCommandOutput
  extends DescribeAppVersionAppComponentResponse,
    __MetadataBearer {}

/**
 * <p>Describes an Application Component in the Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeAppVersionAppComponentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeAppVersionAppComponentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeAppVersionAppComponentRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppVersionAppComponentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppVersionAppComponentResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   appComponent: { // AppComponent
 * //     name: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     id: "STRING_VALUE",
 * //     additionalInfo: { // AdditionalInfoMap
 * //       "<keys>": [ // AdditionalInfoValueList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppVersionAppComponentCommandInput - {@link DescribeAppVersionAppComponentCommandInput}
 * @returns {@link DescribeAppVersionAppComponentCommandOutput}
 * @see {@link DescribeAppVersionAppComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeAppVersionAppComponentCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class DescribeAppVersionAppComponentCommand extends $Command
  .classBuilder<
    DescribeAppVersionAppComponentCommandInput,
    DescribeAppVersionAppComponentCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "DescribeAppVersionAppComponent", {})
  .n("ResiliencehubClient", "DescribeAppVersionAppComponentCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAppVersionAppComponentCommand)
  .de(de_DescribeAppVersionAppComponentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppVersionAppComponentRequest;
      output: DescribeAppVersionAppComponentResponse;
    };
    sdk: {
      input: DescribeAppVersionAppComponentCommandInput;
      output: DescribeAppVersionAppComponentCommandOutput;
    };
  };
}
