// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DeleteQuerySuggestionsBlockListRequest } from "../models/models_0";
import {
  de_DeleteQuerySuggestionsBlockListCommand,
  se_DeleteQuerySuggestionsBlockListCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQuerySuggestionsBlockListCommand}.
 */
export interface DeleteQuerySuggestionsBlockListCommandInput extends DeleteQuerySuggestionsBlockListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQuerySuggestionsBlockListCommand}.
 */
export interface DeleteQuerySuggestionsBlockListCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a block list used for query suggestions for an index.</p>
 *          <p>A deleted block list might not take effect right away. Amazon Kendra
 *             needs to refresh the entire suggestions list to add back the
 *             queries that were previously blocked.</p>
 *          <p>
 *             <code>DeleteQuerySuggestionsBlockList</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DeleteQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DeleteQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // DeleteQuerySuggestionsBlockListRequest
 *   IndexId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQuerySuggestionsBlockListCommandInput - {@link DeleteQuerySuggestionsBlockListCommandInput}
 * @returns {@link DeleteQuerySuggestionsBlockListCommandOutput}
 * @see {@link DeleteQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link DeleteQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 *
 * @public
 */
export class DeleteQuerySuggestionsBlockListCommand extends $Command
  .classBuilder<
    DeleteQuerySuggestionsBlockListCommandInput,
    DeleteQuerySuggestionsBlockListCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "DeleteQuerySuggestionsBlockList", {})
  .n("KendraClient", "DeleteQuerySuggestionsBlockListCommand")
  .f(void 0, void 0)
  .ser(se_DeleteQuerySuggestionsBlockListCommand)
  .de(de_DeleteQuerySuggestionsBlockListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQuerySuggestionsBlockListRequest;
      output: {};
    };
    sdk: {
      input: DeleteQuerySuggestionsBlockListCommandInput;
      output: DeleteQuerySuggestionsBlockListCommandOutput;
    };
  };
}
