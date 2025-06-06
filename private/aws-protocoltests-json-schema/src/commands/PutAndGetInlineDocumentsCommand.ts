// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { JsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../JsonProtocolClient";
import { PutAndGetInlineDocumentsInputOutput } from "../models/models_0";
import { PutAndGetInlineDocuments } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAndGetInlineDocumentsCommand}.
 */
export interface PutAndGetInlineDocumentsCommandInput extends PutAndGetInlineDocumentsInputOutput {}
/**
 * @public
 *
 * The output of {@link PutAndGetInlineDocumentsCommand}.
 */
export interface PutAndGetInlineDocumentsCommandOutput extends PutAndGetInlineDocumentsInputOutput, __MetadataBearer {}

/**
 * This example serializes an inline document as part of the payload.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { JsonProtocolClient, PutAndGetInlineDocumentsCommand } from "@aws-sdk/aws-protocoltests-json-schema"; // ES Modules import
 * // const { JsonProtocolClient, PutAndGetInlineDocumentsCommand } = require("@aws-sdk/aws-protocoltests-json-schema"); // CommonJS import
 * const client = new JsonProtocolClient(config);
 * const input = { // PutAndGetInlineDocumentsInputOutput
 *   inlineDocument: "DOCUMENT_VALUE",
 * };
 * const command = new PutAndGetInlineDocumentsCommand(input);
 * const response = await client.send(command);
 * // { // PutAndGetInlineDocumentsInputOutput
 * //   inlineDocument: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param PutAndGetInlineDocumentsCommandInput - {@link PutAndGetInlineDocumentsCommandInput}
 * @returns {@link PutAndGetInlineDocumentsCommandOutput}
 * @see {@link PutAndGetInlineDocumentsCommandInput} for command's `input` shape.
 * @see {@link PutAndGetInlineDocumentsCommandOutput} for command's `response` shape.
 * @see {@link JsonProtocolClientResolvedConfig | config} for JsonProtocolClient's `config` shape.
 *
 * @throws {@link JsonProtocolServiceException}
 * <p>Base exception class for all service exceptions from JsonProtocol service.</p>
 *
 *
 * @public
 */
export class PutAndGetInlineDocumentsCommand extends $Command
  .classBuilder<
    PutAndGetInlineDocumentsCommandInput,
    PutAndGetInlineDocumentsCommandOutput,
    JsonProtocolClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: JsonProtocolClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("JsonProtocol", "PutAndGetInlineDocuments", {})
  .n("JsonProtocolClient", "PutAndGetInlineDocumentsCommand")
  .f(void 0, void 0)
  .sc(PutAndGetInlineDocuments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAndGetInlineDocumentsInputOutput;
      output: PutAndGetInlineDocumentsInputOutput;
    };
    sdk: {
      input: PutAndGetInlineDocumentsCommandInput;
      output: PutAndGetInlineDocumentsCommandOutput;
    };
  };
}
