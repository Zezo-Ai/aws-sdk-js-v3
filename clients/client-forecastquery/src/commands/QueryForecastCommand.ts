// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastqueryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastqueryClient";
import { QueryForecastRequest, QueryForecastResponse } from "../models/models_0";
import { de_QueryForecastCommand, se_QueryForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QueryForecastCommand}.
 */
export interface QueryForecastCommandInput extends QueryForecastRequest {}
/**
 * @public
 *
 * The output of {@link QueryForecastCommand}.
 */
export interface QueryForecastCommandOutput extends QueryForecastResponse, __MetadataBearer {}

/**
 * <p>Retrieves a forecast for a single item, filtered by the supplied criteria.</p>
 *          <p>The criteria is a key-value pair. The key is either <code>item_id</code> (or the
 *       equivalent non-timestamp, non-target field) from the <code>TARGET_TIME_SERIES</code> dataset,
 *       or one of the forecast dimensions specified as part of the <code>FeaturizationConfig</code>
 *       object.</p>
 *          <p>By default, <code>QueryForecast</code> returns the complete date range for the filtered
 *       forecast. You can request a specific date range.</p>
 *          <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p>
 *          <note>
 *             <p>The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was
 *         used to create the predictor.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastqueryClient, QueryForecastCommand } from "@aws-sdk/client-forecastquery"; // ES Modules import
 * // const { ForecastqueryClient, QueryForecastCommand } = require("@aws-sdk/client-forecastquery"); // CommonJS import
 * const client = new ForecastqueryClient(config);
 * const input = { // QueryForecastRequest
 *   ForecastArn: "STRING_VALUE", // required
 *   StartDate: "STRING_VALUE",
 *   EndDate: "STRING_VALUE",
 *   Filters: { // Filters // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new QueryForecastCommand(input);
 * const response = await client.send(command);
 * // { // QueryForecastResponse
 * //   Forecast: { // Forecast
 * //     Predictions: { // Predictions
 * //       "<keys>": [ // TimeSeries
 * //         { // DataPoint
 * //           Timestamp: "STRING_VALUE",
 * //           Value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param QueryForecastCommandInput - {@link QueryForecastCommandInput}
 * @returns {@link QueryForecastCommandOutput}
 * @see {@link QueryForecastCommandInput} for command's `input` shape.
 * @see {@link QueryForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastqueryClientResolvedConfig | config} for ForecastqueryClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The value is invalid or is too long.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find that resource. Check the information that you've provided and try
 *       again.</p>
 *
 * @throws {@link ForecastqueryServiceException}
 * <p>Base exception class for all service exceptions from Forecastquery service.</p>
 *
 *
 * @public
 */
export class QueryForecastCommand extends $Command
  .classBuilder<
    QueryForecastCommandInput,
    QueryForecastCommandOutput,
    ForecastqueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastqueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecastRuntime", "QueryForecast", {})
  .n("ForecastqueryClient", "QueryForecastCommand")
  .f(void 0, void 0)
  .ser(se_QueryForecastCommand)
  .de(de_QueryForecastCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QueryForecastRequest;
      output: QueryForecastResponse;
    };
    sdk: {
      input: QueryForecastCommandInput;
      output: QueryForecastCommandOutput;
    };
  };
}
