// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAuthorizerRequest, CreateAuthorizerResponse } from "../models/models_0";
import { de_CreateAuthorizerCommand, se_CreateAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAuthorizerCommand}.
 */
export interface CreateAuthorizerCommandInput extends CreateAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link CreateAuthorizerCommand}.
 */
export interface CreateAuthorizerCommandOutput extends CreateAuthorizerResponse, __MetadataBearer {}

/**
 * <p>Creates an Authorizer for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateAuthorizerCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateAuthorizerCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateAuthorizerRequest
 *   ApiId: "STRING_VALUE", // required
 *   AuthorizerCredentialsArn: "STRING_VALUE",
 *   AuthorizerPayloadFormatVersion: "STRING_VALUE",
 *   AuthorizerResultTtlInSeconds: Number("int"),
 *   AuthorizerType: "REQUEST" || "JWT", // required
 *   AuthorizerUri: "STRING_VALUE",
 *   EnableSimpleResponses: true || false,
 *   IdentitySource: [ // IdentitySourceList // required
 *     "STRING_VALUE",
 *   ],
 *   IdentityValidationExpression: "STRING_VALUE",
 *   JwtConfiguration: { // JWTConfiguration
 *     Audience: [ // __listOf__string
 *       "STRING_VALUE",
 *     ],
 *     Issuer: "STRING_VALUE",
 *   },
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new CreateAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // CreateAuthorizerResponse
 * //   AuthorizerCredentialsArn: "STRING_VALUE",
 * //   AuthorizerId: "STRING_VALUE",
 * //   AuthorizerPayloadFormatVersion: "STRING_VALUE",
 * //   AuthorizerResultTtlInSeconds: Number("int"),
 * //   AuthorizerType: "REQUEST" || "JWT",
 * //   AuthorizerUri: "STRING_VALUE",
 * //   EnableSimpleResponses: true || false,
 * //   IdentitySource: [ // IdentitySourceList
 * //     "STRING_VALUE",
 * //   ],
 * //   IdentityValidationExpression: "STRING_VALUE",
 * //   JwtConfiguration: { // JWTConfiguration
 * //     Audience: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Issuer: "STRING_VALUE",
 * //   },
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAuthorizerCommandInput - {@link CreateAuthorizerCommandInput}
 * @returns {@link CreateAuthorizerCommandOutput}
 * @see {@link CreateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link CreateAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 *
 * @public
 */
export class CreateAuthorizerCommand extends $Command
  .classBuilder<
    CreateAuthorizerCommandInput,
    CreateAuthorizerCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "CreateAuthorizer", {})
  .n("ApiGatewayV2Client", "CreateAuthorizerCommand")
  .f(void 0, void 0)
  .ser(se_CreateAuthorizerCommand)
  .de(de_CreateAuthorizerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAuthorizerRequest;
      output: CreateAuthorizerResponse;
    };
    sdk: {
      input: CreateAuthorizerCommandInput;
      output: CreateAuthorizerCommandOutput;
    };
  };
}
