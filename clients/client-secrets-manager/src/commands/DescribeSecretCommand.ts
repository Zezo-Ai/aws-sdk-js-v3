// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSecretRequest, DescribeSecretResponse } from "../models/models_0";
import { de_DescribeSecretCommand, se_DescribeSecretCommand } from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecretCommand}.
 */
export interface DescribeSecretCommandInput extends DescribeSecretRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecretCommand}.
 */
export interface DescribeSecretCommandOutput extends DescribeSecretResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of a secret. It does not include the encrypted secret value. Secrets Manager
 *       only returns fields that have a value in the response. </p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:DescribeSecret</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, DescribeSecretCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, DescribeSecretCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const input = { // DescribeSecretRequest
 *   SecretId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSecretCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecretResponse
 * //   ARN: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   KmsKeyId: "STRING_VALUE",
 * //   RotationEnabled: true || false,
 * //   RotationLambdaARN: "STRING_VALUE",
 * //   RotationRules: { // RotationRulesType
 * //     AutomaticallyAfterDays: Number("long"),
 * //     Duration: "STRING_VALUE",
 * //     ScheduleExpression: "STRING_VALUE",
 * //   },
 * //   LastRotatedDate: new Date("TIMESTAMP"),
 * //   LastChangedDate: new Date("TIMESTAMP"),
 * //   LastAccessedDate: new Date("TIMESTAMP"),
 * //   DeletedDate: new Date("TIMESTAMP"),
 * //   NextRotationDate: new Date("TIMESTAMP"),
 * //   Tags: [ // TagListType
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   VersionIdsToStages: { // SecretVersionsToStagesMapType
 * //     "<keys>": [ // SecretVersionStagesType
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   OwningService: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   PrimaryRegion: "STRING_VALUE",
 * //   ReplicationStatus: [ // ReplicationStatusListType
 * //     { // ReplicationStatusType
 * //       Region: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       Status: "InSync" || "Failed" || "InProgress",
 * //       StatusMessage: "STRING_VALUE",
 * //       LastAccessedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSecretCommandInput - {@link DescribeSecretCommandInput}
 * @returns {@link DescribeSecretCommandOutput}
 * @see {@link DescribeSecretCommandInput} for command's `input` shape.
 * @see {@link DescribeSecretCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The parameter name or value is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Secrets Manager can't find the resource that you asked for.</p>
 *
 * @throws {@link SecretsManagerServiceException}
 * <p>Base exception class for all service exceptions from SecretsManager service.</p>
 *
 *
 * @public
 */
export class DescribeSecretCommand extends $Command
  .classBuilder<
    DescribeSecretCommandInput,
    DescribeSecretCommandOutput,
    SecretsManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecretsManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("secretsmanager", "DescribeSecret", {})
  .n("SecretsManagerClient", "DescribeSecretCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSecretCommand)
  .de(de_DescribeSecretCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecretRequest;
      output: DescribeSecretResponse;
    };
    sdk: {
      input: DescribeSecretCommandInput;
      output: DescribeSecretCommandOutput;
    };
  };
}
