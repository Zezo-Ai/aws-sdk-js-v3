// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcEndpointRequest, DeleteVpcEndpointResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_DeleteVpcEndpointCommand, se_DeleteVpcEndpointCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcEndpointCommand}.
 */
export interface DeleteVpcEndpointCommandInput extends DeleteVpcEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcEndpointCommand}.
 */
export interface DeleteVpcEndpointCommandOutput extends DeleteVpcEndpointResponse, __MetadataBearer {}

/**
 * <p>Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access
 *                 Amazon OpenSearch Serverless using an interface endpoint</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, DeleteVpcEndpointCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, DeleteVpcEndpointCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = { // DeleteVpcEndpointRequest
 *   id: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteVpcEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcEndpointResponse
 * //   deleteVpcEndpointDetail: { // DeleteVpcEndpointDetail
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVpcEndpointCommandInput - {@link DeleteVpcEndpointCommandInput}
 * @returns {@link DeleteVpcEndpointCommandOutput}
 * @see {@link DeleteVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>When creating a resource, thrown when a resource with the same name already exists or
 *             is being created. When deleting a resource, thrown when the resource is not in the
 *             ACTIVE or FAILED state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when accessing or deleting a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Thrown when the HTTP request contains invalid input or is missing required
 *             input.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class DeleteVpcEndpointCommand extends $Command
  .classBuilder<
    DeleteVpcEndpointCommandInput,
    DeleteVpcEndpointCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpenSearchServerless", "DeleteVpcEndpoint", {})
  .n("OpenSearchServerlessClient", "DeleteVpcEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVpcEndpointCommand)
  .de(de_DeleteVpcEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcEndpointRequest;
      output: DeleteVpcEndpointResponse;
    };
    sdk: {
      input: DeleteVpcEndpointCommandInput;
      output: DeleteVpcEndpointCommandOutput;
    };
  };
}
