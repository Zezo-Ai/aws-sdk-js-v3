// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateBackendAuthRequest,
  CreateBackendAuthRequestFilterSensitiveLog,
  CreateBackendAuthResponse,
} from "../models/models_0";
import { de_CreateBackendAuthCommand, se_CreateBackendAuthCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBackendAuthCommand}.
 */
export interface CreateBackendAuthCommandInput extends CreateBackendAuthRequest {}
/**
 * @public
 *
 * The output of {@link CreateBackendAuthCommand}.
 */
export interface CreateBackendAuthCommandOutput extends CreateBackendAuthResponse, __MetadataBearer {}

/**
 * <p>Creates a new backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // CreateBackendAuthRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceConfig: { // CreateBackendAuthResourceConfig
 *     AuthResources: "USER_POOL_ONLY" || "IDENTITY_POOL_AND_USER_POOL", // required
 *     IdentityPoolConfigs: { // CreateBackendAuthIdentityPoolConfig
 *       IdentityPoolName: "STRING_VALUE", // required
 *       UnauthenticatedLogin: true || false, // required
 *     },
 *     Service: "COGNITO", // required
 *     UserPoolConfigs: { // CreateBackendAuthUserPoolConfig
 *       ForgotPassword: { // CreateBackendAuthForgotPasswordConfig
 *         DeliveryMethod: "EMAIL" || "SMS", // required
 *         EmailSettings: { // EmailSettings
 *           EmailMessage: "STRING_VALUE",
 *           EmailSubject: "STRING_VALUE",
 *         },
 *         SmsSettings: { // SmsSettings
 *           SmsMessage: "STRING_VALUE",
 *         },
 *       },
 *       Mfa: { // CreateBackendAuthMFAConfig
 *         MFAMode: "ON" || "OFF" || "OPTIONAL", // required
 *         Settings: { // Settings
 *           MfaTypes: [ // ListOfMfaTypesElement
 *             "SMS" || "TOTP",
 *           ],
 *           SmsMessage: "STRING_VALUE",
 *         },
 *       },
 *       OAuth: { // CreateBackendAuthOAuthConfig
 *         DomainPrefix: "STRING_VALUE",
 *         OAuthGrantType: "CODE" || "IMPLICIT", // required
 *         OAuthScopes: [ // ListOfOAuthScopesElement // required
 *           "PHONE" || "EMAIL" || "OPENID" || "PROFILE" || "AWS_COGNITO_SIGNIN_USER_ADMIN",
 *         ],
 *         RedirectSignInURIs: [ // ListOf__string // required
 *           "STRING_VALUE",
 *         ],
 *         RedirectSignOutURIs: [ // required
 *           "STRING_VALUE",
 *         ],
 *         SocialProviderSettings: { // SocialProviderSettings
 *           Facebook: { // BackendAuthSocialProviderConfig
 *             ClientId: "STRING_VALUE",
 *             ClientSecret: "STRING_VALUE",
 *           },
 *           Google: {
 *             ClientId: "STRING_VALUE",
 *             ClientSecret: "STRING_VALUE",
 *           },
 *           LoginWithAmazon: {
 *             ClientId: "STRING_VALUE",
 *             ClientSecret: "STRING_VALUE",
 *           },
 *           SignInWithApple: { // BackendAuthAppleProviderConfig
 *             ClientId: "STRING_VALUE",
 *             KeyId: "STRING_VALUE",
 *             PrivateKey: "STRING_VALUE",
 *             TeamId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       PasswordPolicy: { // CreateBackendAuthPasswordPolicyConfig
 *         AdditionalConstraints: [ // ListOfAdditionalConstraintsElement
 *           "REQUIRE_DIGIT" || "REQUIRE_LOWERCASE" || "REQUIRE_SYMBOL" || "REQUIRE_UPPERCASE",
 *         ],
 *         MinimumLength: Number("double"), // required
 *       },
 *       RequiredSignUpAttributes: [ // ListOfRequiredSignUpAttributesElement // required
 *         "ADDRESS" || "BIRTHDATE" || "EMAIL" || "FAMILY_NAME" || "GENDER" || "GIVEN_NAME" || "LOCALE" || "MIDDLE_NAME" || "NAME" || "NICKNAME" || "PHONE_NUMBER" || "PICTURE" || "PREFERRED_USERNAME" || "PROFILE" || "UPDATED_AT" || "WEBSITE" || "ZONE_INFO",
 *       ],
 *       SignInMethod: "EMAIL" || "EMAIL_AND_PHONE_NUMBER" || "PHONE_NUMBER" || "USERNAME", // required
 *       UserPoolName: "STRING_VALUE", // required
 *       VerificationMessage: { // CreateBackendAuthVerificationMessageConfig
 *         DeliveryMethod: "EMAIL" || "SMS", // required
 *         EmailSettings: {
 *           EmailMessage: "STRING_VALUE",
 *           EmailSubject: "STRING_VALUE",
 *         },
 *         SmsSettings: {
 *           SmsMessage: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new CreateBackendAuthCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackendAuthResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Operation: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBackendAuthCommandInput - {@link CreateBackendAuthCommandInput}
 * @returns {@link CreateBackendAuthCommandOutput}
 * @see {@link CreateBackendAuthCommandInput} for command's `input` shape.
 * @see {@link CreateBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 *
 * @public
 */
export class CreateBackendAuthCommand extends $Command
  .classBuilder<
    CreateBackendAuthCommandInput,
    CreateBackendAuthCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyBackend", "CreateBackendAuth", {})
  .n("AmplifyBackendClient", "CreateBackendAuthCommand")
  .f(CreateBackendAuthRequestFilterSensitiveLog, void 0)
  .ser(se_CreateBackendAuthCommand)
  .de(de_CreateBackendAuthCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBackendAuthRequest;
      output: CreateBackendAuthResponse;
    };
    sdk: {
      input: CreateBackendAuthCommandInput;
      output: CreateBackendAuthCommandOutput;
    };
  };
}
