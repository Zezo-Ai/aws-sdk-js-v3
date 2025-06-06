// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRegistrationFieldValuesRequest, DescribeRegistrationFieldValuesResult } from "../models/models_0";
import {
  PinpointSMSVoiceV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PinpointSMSVoiceV2Client";
import {
  de_DescribeRegistrationFieldValuesCommand,
  se_DescribeRegistrationFieldValuesCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistrationFieldValuesCommand}.
 */
export interface DescribeRegistrationFieldValuesCommandInput extends DescribeRegistrationFieldValuesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistrationFieldValuesCommand}.
 */
export interface DescribeRegistrationFieldValuesCommandOutput
  extends DescribeRegistrationFieldValuesResult,
    __MetadataBearer {}

/**
 * <p>Retrieves the specified registration field values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceV2Client, DescribeRegistrationFieldValuesCommand } from "@aws-sdk/client-pinpoint-sms-voice-v2"; // ES Modules import
 * // const { PinpointSMSVoiceV2Client, DescribeRegistrationFieldValuesCommand } = require("@aws-sdk/client-pinpoint-sms-voice-v2"); // CommonJS import
 * const client = new PinpointSMSVoiceV2Client(config);
 * const input = { // DescribeRegistrationFieldValuesRequest
 *   RegistrationId: "STRING_VALUE", // required
 *   VersionNumber: Number("long"),
 *   SectionPath: "STRING_VALUE",
 *   FieldPaths: [ // FieldPathList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRegistrationFieldValuesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistrationFieldValuesResult
 * //   RegistrationArn: "STRING_VALUE", // required
 * //   RegistrationId: "STRING_VALUE", // required
 * //   VersionNumber: Number("long"), // required
 * //   RegistrationFieldValues: [ // RegistrationFieldValueInformationList // required
 * //     { // RegistrationFieldValueInformation
 * //       FieldPath: "STRING_VALUE", // required
 * //       SelectChoices: [ // SelectChoiceList
 * //         "STRING_VALUE",
 * //       ],
 * //       TextValue: "STRING_VALUE",
 * //       RegistrationAttachmentId: "STRING_VALUE",
 * //       DeniedReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRegistrationFieldValuesCommandInput - {@link DescribeRegistrationFieldValuesCommandInput}
 * @returns {@link DescribeRegistrationFieldValuesCommandOutput}
 * @see {@link DescribeRegistrationFieldValuesCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistrationFieldValuesCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceV2ClientResolvedConfig | config} for PinpointSMSVoiceV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient permissions to access the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation exception for a field.</p>
 *
 * @throws {@link PinpointSMSVoiceV2ServiceException}
 * <p>Base exception class for all service exceptions from PinpointSMSVoiceV2 service.</p>
 *
 *
 * @public
 */
export class DescribeRegistrationFieldValuesCommand extends $Command
  .classBuilder<
    DescribeRegistrationFieldValuesCommandInput,
    DescribeRegistrationFieldValuesCommandOutput,
    PinpointSMSVoiceV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointSMSVoiceV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PinpointSMSVoiceV2", "DescribeRegistrationFieldValues", {})
  .n("PinpointSMSVoiceV2Client", "DescribeRegistrationFieldValuesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRegistrationFieldValuesCommand)
  .de(de_DescribeRegistrationFieldValuesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRegistrationFieldValuesRequest;
      output: DescribeRegistrationFieldValuesResult;
    };
    sdk: {
      input: DescribeRegistrationFieldValuesCommandInput;
      output: DescribeRegistrationFieldValuesCommandOutput;
    };
  };
}
