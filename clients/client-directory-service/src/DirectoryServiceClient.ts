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
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultDirectoryServiceHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptSharedDirectoryCommandInput,
  AcceptSharedDirectoryCommandOutput,
} from "./commands/AcceptSharedDirectoryCommand";
import { AddIpRoutesCommandInput, AddIpRoutesCommandOutput } from "./commands/AddIpRoutesCommand";
import { AddRegionCommandInput, AddRegionCommandOutput } from "./commands/AddRegionCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import {
  CancelSchemaExtensionCommandInput,
  CancelSchemaExtensionCommandOutput,
} from "./commands/CancelSchemaExtensionCommand";
import { ConnectDirectoryCommandInput, ConnectDirectoryCommandOutput } from "./commands/ConnectDirectoryCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateComputerCommandInput, CreateComputerCommandOutput } from "./commands/CreateComputerCommand";
import {
  CreateConditionalForwarderCommandInput,
  CreateConditionalForwarderCommandOutput,
} from "./commands/CreateConditionalForwarderCommand";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "./commands/CreateDirectoryCommand";
import { CreateHybridADCommandInput, CreateHybridADCommandOutput } from "./commands/CreateHybridADCommand";
import {
  CreateLogSubscriptionCommandInput,
  CreateLogSubscriptionCommandOutput,
} from "./commands/CreateLogSubscriptionCommand";
import { CreateMicrosoftADCommandInput, CreateMicrosoftADCommandOutput } from "./commands/CreateMicrosoftADCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateTrustCommandInput, CreateTrustCommandOutput } from "./commands/CreateTrustCommand";
import { DeleteADAssessmentCommandInput, DeleteADAssessmentCommandOutput } from "./commands/DeleteADAssessmentCommand";
import {
  DeleteConditionalForwarderCommandInput,
  DeleteConditionalForwarderCommandOutput,
} from "./commands/DeleteConditionalForwarderCommand";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "./commands/DeleteDirectoryCommand";
import {
  DeleteLogSubscriptionCommandInput,
  DeleteLogSubscriptionCommandOutput,
} from "./commands/DeleteLogSubscriptionCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import { DeleteTrustCommandInput, DeleteTrustCommandOutput } from "./commands/DeleteTrustCommand";
import {
  DeregisterCertificateCommandInput,
  DeregisterCertificateCommandOutput,
} from "./commands/DeregisterCertificateCommand";
import {
  DeregisterEventTopicCommandInput,
  DeregisterEventTopicCommandOutput,
} from "./commands/DeregisterEventTopicCommand";
import {
  DescribeADAssessmentCommandInput,
  DescribeADAssessmentCommandOutput,
} from "./commands/DescribeADAssessmentCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "./commands/DescribeCertificateCommand";
import {
  DescribeClientAuthenticationSettingsCommandInput,
  DescribeClientAuthenticationSettingsCommandOutput,
} from "./commands/DescribeClientAuthenticationSettingsCommand";
import {
  DescribeConditionalForwardersCommandInput,
  DescribeConditionalForwardersCommandOutput,
} from "./commands/DescribeConditionalForwardersCommand";
import {
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
} from "./commands/DescribeDirectoriesCommand";
import {
  DescribeDirectoryDataAccessCommandInput,
  DescribeDirectoryDataAccessCommandOutput,
} from "./commands/DescribeDirectoryDataAccessCommand";
import {
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
} from "./commands/DescribeDomainControllersCommand";
import {
  DescribeEventTopicsCommandInput,
  DescribeEventTopicsCommandOutput,
} from "./commands/DescribeEventTopicsCommand";
import {
  DescribeHybridADUpdateCommandInput,
  DescribeHybridADUpdateCommandOutput,
} from "./commands/DescribeHybridADUpdateCommand";
import {
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
} from "./commands/DescribeLDAPSSettingsCommand";
import { DescribeRegionsCommandInput, DescribeRegionsCommandOutput } from "./commands/DescribeRegionsCommand";
import { DescribeSettingsCommandInput, DescribeSettingsCommandOutput } from "./commands/DescribeSettingsCommand";
import {
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "./commands/DescribeSharedDirectoriesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "./commands/DescribeSnapshotsCommand";
import { DescribeTrustsCommandInput, DescribeTrustsCommandOutput } from "./commands/DescribeTrustsCommand";
import {
  DescribeUpdateDirectoryCommandInput,
  DescribeUpdateDirectoryCommandOutput,
} from "./commands/DescribeUpdateDirectoryCommand";
import {
  DisableClientAuthenticationCommandInput,
  DisableClientAuthenticationCommandOutput,
} from "./commands/DisableClientAuthenticationCommand";
import {
  DisableDirectoryDataAccessCommandInput,
  DisableDirectoryDataAccessCommandOutput,
} from "./commands/DisableDirectoryDataAccessCommand";
import { DisableLDAPSCommandInput, DisableLDAPSCommandOutput } from "./commands/DisableLDAPSCommand";
import { DisableRadiusCommandInput, DisableRadiusCommandOutput } from "./commands/DisableRadiusCommand";
import { DisableSsoCommandInput, DisableSsoCommandOutput } from "./commands/DisableSsoCommand";
import {
  EnableClientAuthenticationCommandInput,
  EnableClientAuthenticationCommandOutput,
} from "./commands/EnableClientAuthenticationCommand";
import {
  EnableDirectoryDataAccessCommandInput,
  EnableDirectoryDataAccessCommandOutput,
} from "./commands/EnableDirectoryDataAccessCommand";
import { EnableLDAPSCommandInput, EnableLDAPSCommandOutput } from "./commands/EnableLDAPSCommand";
import { EnableRadiusCommandInput, EnableRadiusCommandOutput } from "./commands/EnableRadiusCommand";
import { EnableSsoCommandInput, EnableSsoCommandOutput } from "./commands/EnableSsoCommand";
import { GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput } from "./commands/GetDirectoryLimitsCommand";
import { GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput } from "./commands/GetSnapshotLimitsCommand";
import { ListADAssessmentsCommandInput, ListADAssessmentsCommandOutput } from "./commands/ListADAssessmentsCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "./commands/ListCertificatesCommand";
import { ListIpRoutesCommandInput, ListIpRoutesCommandOutput } from "./commands/ListIpRoutesCommand";
import {
  ListLogSubscriptionsCommandInput,
  ListLogSubscriptionsCommandOutput,
} from "./commands/ListLogSubscriptionsCommand";
import {
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
} from "./commands/ListSchemaExtensionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "./commands/RegisterCertificateCommand";
import { RegisterEventTopicCommandInput, RegisterEventTopicCommandOutput } from "./commands/RegisterEventTopicCommand";
import {
  RejectSharedDirectoryCommandInput,
  RejectSharedDirectoryCommandOutput,
} from "./commands/RejectSharedDirectoryCommand";
import { RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput } from "./commands/RemoveIpRoutesCommand";
import { RemoveRegionCommandInput, RemoveRegionCommandOutput } from "./commands/RemoveRegionCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import { ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput } from "./commands/ResetUserPasswordCommand";
import {
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "./commands/RestoreFromSnapshotCommand";
import { ShareDirectoryCommandInput, ShareDirectoryCommandOutput } from "./commands/ShareDirectoryCommand";
import { StartADAssessmentCommandInput, StartADAssessmentCommandOutput } from "./commands/StartADAssessmentCommand";
import {
  StartSchemaExtensionCommandInput,
  StartSchemaExtensionCommandOutput,
} from "./commands/StartSchemaExtensionCommand";
import { UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput } from "./commands/UnshareDirectoryCommand";
import {
  UpdateConditionalForwarderCommandInput,
  UpdateConditionalForwarderCommandOutput,
} from "./commands/UpdateConditionalForwarderCommand";
import {
  UpdateDirectorySetupCommandInput,
  UpdateDirectorySetupCommandOutput,
} from "./commands/UpdateDirectorySetupCommand";
import { UpdateHybridADCommandInput, UpdateHybridADCommandOutput } from "./commands/UpdateHybridADCommand";
import {
  UpdateNumberOfDomainControllersCommandInput,
  UpdateNumberOfDomainControllersCommandOutput,
} from "./commands/UpdateNumberOfDomainControllersCommand";
import { UpdateRadiusCommandInput, UpdateRadiusCommandOutput } from "./commands/UpdateRadiusCommand";
import { UpdateSettingsCommandInput, UpdateSettingsCommandOutput } from "./commands/UpdateSettingsCommand";
import { UpdateTrustCommandInput, UpdateTrustCommandOutput } from "./commands/UpdateTrustCommand";
import { VerifyTrustCommandInput, VerifyTrustCommandOutput } from "./commands/VerifyTrustCommand";
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
  | AcceptSharedDirectoryCommandInput
  | AddIpRoutesCommandInput
  | AddRegionCommandInput
  | AddTagsToResourceCommandInput
  | CancelSchemaExtensionCommandInput
  | ConnectDirectoryCommandInput
  | CreateAliasCommandInput
  | CreateComputerCommandInput
  | CreateConditionalForwarderCommandInput
  | CreateDirectoryCommandInput
  | CreateHybridADCommandInput
  | CreateLogSubscriptionCommandInput
  | CreateMicrosoftADCommandInput
  | CreateSnapshotCommandInput
  | CreateTrustCommandInput
  | DeleteADAssessmentCommandInput
  | DeleteConditionalForwarderCommandInput
  | DeleteDirectoryCommandInput
  | DeleteLogSubscriptionCommandInput
  | DeleteSnapshotCommandInput
  | DeleteTrustCommandInput
  | DeregisterCertificateCommandInput
  | DeregisterEventTopicCommandInput
  | DescribeADAssessmentCommandInput
  | DescribeCertificateCommandInput
  | DescribeClientAuthenticationSettingsCommandInput
  | DescribeConditionalForwardersCommandInput
  | DescribeDirectoriesCommandInput
  | DescribeDirectoryDataAccessCommandInput
  | DescribeDomainControllersCommandInput
  | DescribeEventTopicsCommandInput
  | DescribeHybridADUpdateCommandInput
  | DescribeLDAPSSettingsCommandInput
  | DescribeRegionsCommandInput
  | DescribeSettingsCommandInput
  | DescribeSharedDirectoriesCommandInput
  | DescribeSnapshotsCommandInput
  | DescribeTrustsCommandInput
  | DescribeUpdateDirectoryCommandInput
  | DisableClientAuthenticationCommandInput
  | DisableDirectoryDataAccessCommandInput
  | DisableLDAPSCommandInput
  | DisableRadiusCommandInput
  | DisableSsoCommandInput
  | EnableClientAuthenticationCommandInput
  | EnableDirectoryDataAccessCommandInput
  | EnableLDAPSCommandInput
  | EnableRadiusCommandInput
  | EnableSsoCommandInput
  | GetDirectoryLimitsCommandInput
  | GetSnapshotLimitsCommandInput
  | ListADAssessmentsCommandInput
  | ListCertificatesCommandInput
  | ListIpRoutesCommandInput
  | ListLogSubscriptionsCommandInput
  | ListSchemaExtensionsCommandInput
  | ListTagsForResourceCommandInput
  | RegisterCertificateCommandInput
  | RegisterEventTopicCommandInput
  | RejectSharedDirectoryCommandInput
  | RemoveIpRoutesCommandInput
  | RemoveRegionCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetUserPasswordCommandInput
  | RestoreFromSnapshotCommandInput
  | ShareDirectoryCommandInput
  | StartADAssessmentCommandInput
  | StartSchemaExtensionCommandInput
  | UnshareDirectoryCommandInput
  | UpdateConditionalForwarderCommandInput
  | UpdateDirectorySetupCommandInput
  | UpdateHybridADCommandInput
  | UpdateNumberOfDomainControllersCommandInput
  | UpdateRadiusCommandInput
  | UpdateSettingsCommandInput
  | UpdateTrustCommandInput
  | VerifyTrustCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptSharedDirectoryCommandOutput
  | AddIpRoutesCommandOutput
  | AddRegionCommandOutput
  | AddTagsToResourceCommandOutput
  | CancelSchemaExtensionCommandOutput
  | ConnectDirectoryCommandOutput
  | CreateAliasCommandOutput
  | CreateComputerCommandOutput
  | CreateConditionalForwarderCommandOutput
  | CreateDirectoryCommandOutput
  | CreateHybridADCommandOutput
  | CreateLogSubscriptionCommandOutput
  | CreateMicrosoftADCommandOutput
  | CreateSnapshotCommandOutput
  | CreateTrustCommandOutput
  | DeleteADAssessmentCommandOutput
  | DeleteConditionalForwarderCommandOutput
  | DeleteDirectoryCommandOutput
  | DeleteLogSubscriptionCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteTrustCommandOutput
  | DeregisterCertificateCommandOutput
  | DeregisterEventTopicCommandOutput
  | DescribeADAssessmentCommandOutput
  | DescribeCertificateCommandOutput
  | DescribeClientAuthenticationSettingsCommandOutput
  | DescribeConditionalForwardersCommandOutput
  | DescribeDirectoriesCommandOutput
  | DescribeDirectoryDataAccessCommandOutput
  | DescribeDomainControllersCommandOutput
  | DescribeEventTopicsCommandOutput
  | DescribeHybridADUpdateCommandOutput
  | DescribeLDAPSSettingsCommandOutput
  | DescribeRegionsCommandOutput
  | DescribeSettingsCommandOutput
  | DescribeSharedDirectoriesCommandOutput
  | DescribeSnapshotsCommandOutput
  | DescribeTrustsCommandOutput
  | DescribeUpdateDirectoryCommandOutput
  | DisableClientAuthenticationCommandOutput
  | DisableDirectoryDataAccessCommandOutput
  | DisableLDAPSCommandOutput
  | DisableRadiusCommandOutput
  | DisableSsoCommandOutput
  | EnableClientAuthenticationCommandOutput
  | EnableDirectoryDataAccessCommandOutput
  | EnableLDAPSCommandOutput
  | EnableRadiusCommandOutput
  | EnableSsoCommandOutput
  | GetDirectoryLimitsCommandOutput
  | GetSnapshotLimitsCommandOutput
  | ListADAssessmentsCommandOutput
  | ListCertificatesCommandOutput
  | ListIpRoutesCommandOutput
  | ListLogSubscriptionsCommandOutput
  | ListSchemaExtensionsCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterCertificateCommandOutput
  | RegisterEventTopicCommandOutput
  | RejectSharedDirectoryCommandOutput
  | RemoveIpRoutesCommandOutput
  | RemoveRegionCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetUserPasswordCommandOutput
  | RestoreFromSnapshotCommandOutput
  | ShareDirectoryCommandOutput
  | StartADAssessmentCommandOutput
  | StartSchemaExtensionCommandOutput
  | UnshareDirectoryCommandOutput
  | UpdateConditionalForwarderCommandOutput
  | UpdateDirectorySetupCommandOutput
  | UpdateHybridADCommandOutput
  | UpdateNumberOfDomainControllersCommandOutput
  | UpdateRadiusCommandOutput
  | UpdateSettingsCommandOutput
  | UpdateTrustCommandOutput
  | VerifyTrustCommandOutput;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type DirectoryServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of DirectoryServiceClient class constructor that set the region, credentials and other options.
 */
export interface DirectoryServiceClientConfig extends DirectoryServiceClientConfigType {}

/**
 * @public
 */
export type DirectoryServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of DirectoryServiceClient class. This is resolved and normalized from the {@link DirectoryServiceClientConfig | constructor configuration interface}.
 */
export interface DirectoryServiceClientResolvedConfig extends DirectoryServiceClientResolvedConfigType {}

/**
 * <fullname>Directory Service</fullname>
 *          <p>Directory Service is a web service that makes it easy for you to setup and run directories in the
 *          Amazon Web Services cloud, or connect your Amazon Web Services resources with an existing self-managed Microsoft Active
 *          Directory. This guide provides detailed information about Directory Service operations, data types,
 *          parameters, and errors. For information about Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">Directory Service
 *             Administration Guide</a>.</p>
 *          <note>
 *             <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various
 *             programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs
 *             provide a convenient way to create programmatic access to Directory Service and other Amazon Web Services
 *             services. For more information about the Amazon Web Services SDKs, including how to download and
 *             install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *                Services</a>.</p>
 *          </note>
 * @public
 */
export class DirectoryServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DirectoryServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of DirectoryServiceClient class. This is resolved and normalized from the {@link DirectoryServiceClientConfig | constructor configuration interface}.
   */
  readonly config: DirectoryServiceClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DirectoryServiceClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultDirectoryServiceHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DirectoryServiceClientResolvedConfig) =>
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
