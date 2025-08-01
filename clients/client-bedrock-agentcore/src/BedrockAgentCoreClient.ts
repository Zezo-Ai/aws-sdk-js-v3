// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  SdkStreamMixinInjector as __SdkStreamMixinInjector,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultBedrockAgentCoreHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateEventCommandInput, CreateEventCommandOutput } from "./commands/CreateEventCommand";
import { DeleteEventCommandInput, DeleteEventCommandOutput } from "./commands/DeleteEventCommand";
import { DeleteMemoryRecordCommandInput, DeleteMemoryRecordCommandOutput } from "./commands/DeleteMemoryRecordCommand";
import { GetBrowserSessionCommandInput, GetBrowserSessionCommandOutput } from "./commands/GetBrowserSessionCommand";
import {
  GetCodeInterpreterSessionCommandInput,
  GetCodeInterpreterSessionCommandOutput,
} from "./commands/GetCodeInterpreterSessionCommand";
import { GetEventCommandInput, GetEventCommandOutput } from "./commands/GetEventCommand";
import { GetMemoryRecordCommandInput, GetMemoryRecordCommandOutput } from "./commands/GetMemoryRecordCommand";
import { GetResourceApiKeyCommandInput, GetResourceApiKeyCommandOutput } from "./commands/GetResourceApiKeyCommand";
import {
  GetResourceOauth2TokenCommandInput,
  GetResourceOauth2TokenCommandOutput,
} from "./commands/GetResourceOauth2TokenCommand";
import {
  GetWorkloadAccessTokenCommandInput,
  GetWorkloadAccessTokenCommandOutput,
} from "./commands/GetWorkloadAccessTokenCommand";
import {
  GetWorkloadAccessTokenForJWTCommandInput,
  GetWorkloadAccessTokenForJWTCommandOutput,
} from "./commands/GetWorkloadAccessTokenForJWTCommand";
import {
  GetWorkloadAccessTokenForUserIdCommandInput,
  GetWorkloadAccessTokenForUserIdCommandOutput,
} from "./commands/GetWorkloadAccessTokenForUserIdCommand";
import { InvokeAgentRuntimeCommandInput, InvokeAgentRuntimeCommandOutput } from "./commands/InvokeAgentRuntimeCommand";
import {
  InvokeCodeInterpreterCommandInput,
  InvokeCodeInterpreterCommandOutput,
} from "./commands/InvokeCodeInterpreterCommand";
import { ListActorsCommandInput, ListActorsCommandOutput } from "./commands/ListActorsCommand";
import {
  ListBrowserSessionsCommandInput,
  ListBrowserSessionsCommandOutput,
} from "./commands/ListBrowserSessionsCommand";
import {
  ListCodeInterpreterSessionsCommandInput,
  ListCodeInterpreterSessionsCommandOutput,
} from "./commands/ListCodeInterpreterSessionsCommand";
import { ListEventsCommandInput, ListEventsCommandOutput } from "./commands/ListEventsCommand";
import { ListMemoryRecordsCommandInput, ListMemoryRecordsCommandOutput } from "./commands/ListMemoryRecordsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "./commands/ListSessionsCommand";
import {
  RetrieveMemoryRecordsCommandInput,
  RetrieveMemoryRecordsCommandOutput,
} from "./commands/RetrieveMemoryRecordsCommand";
import {
  StartBrowserSessionCommandInput,
  StartBrowserSessionCommandOutput,
} from "./commands/StartBrowserSessionCommand";
import {
  StartCodeInterpreterSessionCommandInput,
  StartCodeInterpreterSessionCommandOutput,
} from "./commands/StartCodeInterpreterSessionCommand";
import { StopBrowserSessionCommandInput, StopBrowserSessionCommandOutput } from "./commands/StopBrowserSessionCommand";
import {
  StopCodeInterpreterSessionCommandInput,
  StopCodeInterpreterSessionCommandOutput,
} from "./commands/StopCodeInterpreterSessionCommand";
import {
  UpdateBrowserStreamCommandInput,
  UpdateBrowserStreamCommandOutput,
} from "./commands/UpdateBrowserStreamCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateEventCommandInput
  | DeleteEventCommandInput
  | DeleteMemoryRecordCommandInput
  | GetBrowserSessionCommandInput
  | GetCodeInterpreterSessionCommandInput
  | GetEventCommandInput
  | GetMemoryRecordCommandInput
  | GetResourceApiKeyCommandInput
  | GetResourceOauth2TokenCommandInput
  | GetWorkloadAccessTokenCommandInput
  | GetWorkloadAccessTokenForJWTCommandInput
  | GetWorkloadAccessTokenForUserIdCommandInput
  | InvokeAgentRuntimeCommandInput
  | InvokeCodeInterpreterCommandInput
  | ListActorsCommandInput
  | ListBrowserSessionsCommandInput
  | ListCodeInterpreterSessionsCommandInput
  | ListEventsCommandInput
  | ListMemoryRecordsCommandInput
  | ListSessionsCommandInput
  | RetrieveMemoryRecordsCommandInput
  | StartBrowserSessionCommandInput
  | StartCodeInterpreterSessionCommandInput
  | StopBrowserSessionCommandInput
  | StopCodeInterpreterSessionCommandInput
  | UpdateBrowserStreamCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateEventCommandOutput
  | DeleteEventCommandOutput
  | DeleteMemoryRecordCommandOutput
  | GetBrowserSessionCommandOutput
  | GetCodeInterpreterSessionCommandOutput
  | GetEventCommandOutput
  | GetMemoryRecordCommandOutput
  | GetResourceApiKeyCommandOutput
  | GetResourceOauth2TokenCommandOutput
  | GetWorkloadAccessTokenCommandOutput
  | GetWorkloadAccessTokenForJWTCommandOutput
  | GetWorkloadAccessTokenForUserIdCommandOutput
  | InvokeAgentRuntimeCommandOutput
  | InvokeCodeInterpreterCommandOutput
  | ListActorsCommandOutput
  | ListBrowserSessionsCommandOutput
  | ListCodeInterpreterSessionsCommandOutput
  | ListEventsCommandOutput
  | ListMemoryRecordsCommandOutput
  | ListSessionsCommandOutput
  | RetrieveMemoryRecordsCommandOutput
  | StartBrowserSessionCommandOutput
  | StartCodeInterpreterSessionCommandOutput
  | StopBrowserSessionCommandOutput
  | StopCodeInterpreterSessionCommandOutput
  | UpdateBrowserStreamCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

  /**
   * The internal function that inject utilities to runtime-specific stream to help users consume the data
   * @internal
   */
  sdkStreamMixin?: __SdkStreamMixinInjector;
}

/**
 * @public
 */
export type BedrockAgentCoreClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  EventStreamSerdeInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of BedrockAgentCoreClient class constructor that set the region, credentials and other options.
 */
export interface BedrockAgentCoreClientConfig extends BedrockAgentCoreClientConfigType {}

/**
 * @public
 */
export type BedrockAgentCoreClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  EventStreamSerdeResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of BedrockAgentCoreClient class. This is resolved and normalized from the {@link BedrockAgentCoreClientConfig | constructor configuration interface}.
 */
export interface BedrockAgentCoreClientResolvedConfig extends BedrockAgentCoreClientResolvedConfigType {}

/**
 * <note> <p>Amazon Bedrock AgentCore is in preview release and is subject to change.</p> </note> <p>Data plane operations for Amazon Bedrock AgentCore.</p>
 * @public
 */
export class BedrockAgentCoreClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BedrockAgentCoreClientResolvedConfig
> {
  /**
   * The resolved configuration of BedrockAgentCoreClient class. This is resolved and normalized from the {@link BedrockAgentCoreClientConfig | constructor configuration interface}.
   */
  readonly config: BedrockAgentCoreClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BedrockAgentCoreClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveEventStreamSerdeConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    this.config = _config_9;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultBedrockAgentCoreHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BedrockAgentCoreClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
