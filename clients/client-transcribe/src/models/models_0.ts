// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { TranscribeServiceException as __BaseException } from "./TranscribeServiceException";

/**
 * <p>A time range, in milliseconds, between two points in your media file.</p>
 *          <p>You can use <code>StartTime</code> and <code>EndTime</code> to search a custom
 *             segment. For example, setting <code>StartTime</code> to 10000 and <code>EndTime</code>
 *             to 50000 only searches for your specified criteria in the audio contained between the
 *             10,000 millisecond mark and the 50,000 millisecond mark of your media file. You must use
 *                 <code>StartTime</code> and <code>EndTime</code> as a set; that is, if you include
 *             one, you must include both.</p>
 *          <p>You can use also <code>First</code> to search from the start of the audio until the
 *             time that  you specify, or <code>Last</code> to search from the time that you specify
 *             until the end of the audio. For example, setting <code>First</code> to 50000 only
 *             searches for your specified criteria in the audio contained between the start of the
 *             media file to the 50,000 millisecond mark. You can use <code>First</code> and
 *                 <code>Last</code> independently of each other.</p>
 *          <p>If you prefer to use percentage instead of milliseconds, see .</p>
 * @public
 */
export interface AbsoluteTimeRange {
  /**
   * <p>The time, in milliseconds, when Amazon Transcribe starts searching for the specified
   *             criteria in your audio. If you include <code>StartTime</code> in your request, you must
   *             also include <code>EndTime</code>.</p>
   * @public
   */
  StartTime?: number | undefined;

  /**
   * <p>The time, in milliseconds, when Amazon Transcribe stops searching for the specified
   *             criteria in your audio. If you include <code>EndTime</code> in your request, you must
   *             also include <code>StartTime</code>.</p>
   * @public
   */
  EndTime?: number | undefined;

  /**
   * <p>The time, in milliseconds, from the start of your media file until the specified value.
   *             Amazon Transcribe searches for your specified criteria in this time segment.</p>
   * @public
   */
  First?: number | undefined;

  /**
   * <p>The time, in milliseconds, from the specified value until the end of your media file.
   *             Amazon Transcribe searches for your specified criteria in this time segment.</p>
   * @public
   */
  Last?: number | undefined;
}

/**
 * <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const BaseModelName = {
  NARROW_BAND: "NarrowBand",
  WIDE_BAND: "WideBand",
} as const;

/**
 * @public
 */
export type BaseModelName = (typeof BaseModelName)[keyof typeof BaseModelName];

/**
 * @public
 * @enum
 */
export const CallAnalyticsFeature = {
  GENERATIVE_SUMMARIZATION: "GENERATIVE_SUMMARIZATION",
} as const;

/**
 * @public
 */
export type CallAnalyticsFeature = (typeof CallAnalyticsFeature)[keyof typeof CallAnalyticsFeature];

/**
 * @public
 * @enum
 */
export const CallAnalyticsSkippedReasonCode = {
  FAILED_SAFETY_GUIDELINES: "FAILED_SAFETY_GUIDELINES",
  INSUFFICIENT_CONVERSATION_CONTENT: "INSUFFICIENT_CONVERSATION_CONTENT",
} as const;

/**
 * @public
 */
export type CallAnalyticsSkippedReasonCode =
  (typeof CallAnalyticsSkippedReasonCode)[keyof typeof CallAnalyticsSkippedReasonCode];

/**
 * <p>Represents a skipped analytics feature during the analysis of a call analytics job.</p>
 *          <p>The <code>Feature</code> field indicates the type of analytics feature that was skipped.</p>
 *          <p>The <code>Message</code> field contains additional information or a message explaining why the analytics feature was skipped.</p>
 *          <p>The <code>ReasonCode</code> field provides a code indicating the reason why the analytics feature was skipped.</p>
 * @public
 */
export interface CallAnalyticsSkippedFeature {
  /**
   * <p>Indicates the type of analytics feature that was skipped during the analysis of a call analytics job.</p>
   * @public
   */
  Feature?: CallAnalyticsFeature | undefined;

  /**
   * <p>Provides a code indicating the reason why a specific analytics feature was skipped during the analysis of a call analytics job.</p>
   * @public
   */
  ReasonCode?: CallAnalyticsSkippedReasonCode | undefined;

  /**
   * <p>Contains additional information or a message explaining why a specific analytics feature was skipped during the analysis of a call analytics job.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>Contains details about a call analytics job, including information about skipped analytics features.</p>
 * @public
 */
export interface CallAnalyticsJobDetails {
  /**
   * <p>Contains information about any skipped analytics features during the analysis of a call analytics job.</p>
   *          <p>This array lists all the analytics features that were skipped, along with their corresponding reason code and message.</p>
   * @public
   */
  Skipped?: CallAnalyticsSkippedFeature[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CallAnalyticsJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
} as const;

/**
 * @public
 */
export type CallAnalyticsJobStatus = (typeof CallAnalyticsJobStatus)[keyof typeof CallAnalyticsJobStatus];

/**
 * @public
 * @enum
 */
export const ParticipantRole = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
} as const;

/**
 * @public
 */
export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole];

/**
 * <p>Makes it possible to specify which speaker is on which channel. For example, if your
 *             agent is the first participant to speak, you would set <code>ChannelId</code> to
 *                 <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to
 *                 <code>AGENT</code> (to indicate that it's the agent speaking).</p>
 * @public
 */
export interface ChannelDefinition {
  /**
   * <p>Specify the audio channel you want to define.</p>
   * @public
   */
  ChannelId?: number | undefined;

  /**
   * <p>Specify the speaker you want to define. Omitting this parameter is equivalent to
   *             specifying both participants.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;
}

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  AB_GE: "ab-GE",
  AF_ZA: "af-ZA",
  AR_AE: "ar-AE",
  AR_SA: "ar-SA",
  AST_ES: "ast-ES",
  AZ_AZ: "az-AZ",
  BA_RU: "ba-RU",
  BE_BY: "be-BY",
  BG_BG: "bg-BG",
  BN_IN: "bn-IN",
  BS_BA: "bs-BA",
  CA_ES: "ca-ES",
  CKB_IQ: "ckb-IQ",
  CKB_IR: "ckb-IR",
  CS_CZ: "cs-CZ",
  CY_WL: "cy-WL",
  DA_DK: "da-DK",
  DE_CH: "de-CH",
  DE_DE: "de-DE",
  EL_GR: "el-GR",
  EN_AB: "en-AB",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_IE: "en-IE",
  EN_IN: "en-IN",
  EN_NZ: "en-NZ",
  EN_US: "en-US",
  EN_WL: "en-WL",
  EN_ZA: "en-ZA",
  ES_ES: "es-ES",
  ES_US: "es-US",
  ET_EE: "et-EE",
  ET_ET: "et-ET",
  EU_ES: "eu-ES",
  FA_IR: "fa-IR",
  FI_FI: "fi-FI",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  GL_ES: "gl-ES",
  GU_IN: "gu-IN",
  HA_NG: "ha-NG",
  HE_IL: "he-IL",
  HI_IN: "hi-IN",
  HR_HR: "hr-HR",
  HU_HU: "hu-HU",
  HY_AM: "hy-AM",
  ID_ID: "id-ID",
  IS_IS: "is-IS",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KAB_DZ: "kab-DZ",
  KA_GE: "ka-GE",
  KK_KZ: "kk-KZ",
  KN_IN: "kn-IN",
  KO_KR: "ko-KR",
  KY_KG: "ky-KG",
  LG_IN: "lg-IN",
  LT_LT: "lt-LT",
  LV_LV: "lv-LV",
  MHR_RU: "mhr-RU",
  MI_NZ: "mi-NZ",
  MK_MK: "mk-MK",
  ML_IN: "ml-IN",
  MN_MN: "mn-MN",
  MR_IN: "mr-IN",
  MS_MY: "ms-MY",
  MT_MT: "mt-MT",
  NL_NL: "nl-NL",
  NO_NO: "no-NO",
  OR_IN: "or-IN",
  PA_IN: "pa-IN",
  PL_PL: "pl-PL",
  PS_AF: "ps-AF",
  PT_BR: "pt-BR",
  PT_PT: "pt-PT",
  RO_RO: "ro-RO",
  RU_RU: "ru-RU",
  RW_RW: "rw-RW",
  SI_LK: "si-LK",
  SK_SK: "sk-SK",
  SL_SI: "sl-SI",
  SO_SO: "so-SO",
  SR_RS: "sr-RS",
  SU_ID: "su-ID",
  SV_SE: "sv-SE",
  SW_BI: "sw-BI",
  SW_KE: "sw-KE",
  SW_RW: "sw-RW",
  SW_TZ: "sw-TZ",
  SW_UG: "sw-UG",
  TA_IN: "ta-IN",
  TE_IN: "te-IN",
  TH_TH: "th-TH",
  TL_PH: "tl-PH",
  TR_TR: "tr-TR",
  TT_RU: "tt-RU",
  UG_CN: "ug-CN",
  UK_UA: "uk-UA",
  UZ_UZ: "uz-UZ",
  VI_VN: "vi-VN",
  WO_SN: "wo-SN",
  ZH_CN: "zh-CN",
  ZH_HK: "zh-HK",
  ZH_TW: "zh-TW",
  ZU_ZA: "zu-ZA",
} as const;

/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * <p>Describes the Amazon S3 location of the media file you want to use in your
 *             request.</p>
 *          <p>For information on supported media formats, refer to the <code>MediaFormat</code>
 *             parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section
 *             in the Amazon S3 Developer Guide.</p>
 * @public
 */
export interface Media {
  /**
   * <p>The Amazon S3 location of the media file you want to transcribe. For
   *             example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>s3://DOC-EXAMPLE-BUCKET/my-media-file.flac</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Note that the Amazon S3 bucket that contains your input media must be located
   *             in the same Amazon Web Services Region where you're making your transcription
   *             request.</p>
   * @public
   */
  MediaFileUri?: string | undefined;

  /**
   * <p>The Amazon S3 location of the media file you want to redact. For
   *             example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>s3://DOC-EXAMPLE-BUCKET/my-media-file.flac</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3://DOC-EXAMPLE-BUCKET/media-files/my-media-file.flac</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Note that the Amazon S3 bucket that contains your input media must be located
   *             in the same Amazon Web Services Region where you're making your transcription
   *             request.</p>
   *          <important>
   *             <p>
   *                <code>RedactedMediaFileUri</code> produces a redacted audio file in addition to a
   *                 redacted transcript. It is only supported for Call Analytics
   *                 (<code>StartCallAnalyticsJob</code>) transcription requests.</p>
   *          </important>
   * @public
   */
  RedactedMediaFileUri?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MediaFormat = {
  AMR: "amr",
  FLAC: "flac",
  M4A: "m4a",
  MP3: "mp3",
  MP4: "mp4",
  OGG: "ogg",
  WAV: "wav",
  WEBM: "webm",
} as const;

/**
 * @public
 */
export type MediaFormat = (typeof MediaFormat)[keyof typeof MediaFormat];

/**
 * @public
 * @enum
 */
export const PiiEntityType = {
  ADDRESS: "ADDRESS",
  ALL: "ALL",
  BANK_ACCOUNT_NUMBER: "BANK_ACCOUNT_NUMBER",
  BANK_ROUTING: "BANK_ROUTING",
  CREDIT_DEBIT_CVV: "CREDIT_DEBIT_CVV",
  CREDIT_DEBIT_EXPIRY: "CREDIT_DEBIT_EXPIRY",
  CREDIT_DEBIT_NUMBER: "CREDIT_DEBIT_NUMBER",
  EMAIL: "EMAIL",
  NAME: "NAME",
  PHONE: "PHONE",
  PIN: "PIN",
  SSN: "SSN",
} as const;

/**
 * @public
 */
export type PiiEntityType = (typeof PiiEntityType)[keyof typeof PiiEntityType];

/**
 * @public
 * @enum
 */
export const RedactionOutput = {
  REDACTED: "redacted",
  REDACTED_AND_UNREDACTED: "redacted_and_unredacted",
} as const;

/**
 * @public
 */
export type RedactionOutput = (typeof RedactionOutput)[keyof typeof RedactionOutput];

/**
 * @public
 * @enum
 */
export const RedactionType = {
  PII: "PII",
} as const;

/**
 * @public
 */
export type RedactionType = (typeof RedactionType)[keyof typeof RedactionType];

/**
 * <p>Makes it possible to redact or flag specified personally identifiable information (PII) in
 *             your transcript. If you use <code>ContentRedaction</code>, you must also include the
 *             sub-parameters: <code>RedactionOutput</code> and <code>RedactionType</code>. You can
 *             optionally include <code>PiiEntityTypes</code> to choose which types of PII you want to
 *             redact.</p>
 * @public
 */
export interface ContentRedaction {
  /**
   * <p>Specify the category of information you want to redact; <code>PII</code> (personally
   *             identifiable information) is the only valid value. You can use <code>PiiEntityTypes</code> to
   *             choose which types of PII you want to redact. If you do not include <code>PiiEntityTypes</code> in
   *             your request, all PII is redacted.</p>
   * @public
   */
  RedactionType: RedactionType | undefined;

  /**
   * <p>Specify if you want only a redacted transcript, or if you want a redacted and an
   *             unredacted transcript.</p>
   *          <p>When you choose <code>redacted</code>
   *             Amazon Transcribe creates only a redacted transcript.</p>
   *          <p>When you choose <code>redacted_and_unredacted</code>
   *             Amazon Transcribe creates a redacted and an unredacted transcript (as two separate
   *             files).</p>
   * @public
   */
  RedactionOutput: RedactionOutput | undefined;

  /**
   * <p>Specify which types of personally identifiable information (PII) you want to redact in
   *             your transcript. You can include as many types as you'd like, or you can select
   *             <code>ALL</code>. If you do not include <code>PiiEntityTypes</code> in your request, all PII is
   *             redacted.</p>
   * @public
   */
  PiiEntityTypes?: PiiEntityType[] | undefined;
}

/**
 * <p>If using automatic language identification in your request and you want to apply a
 *             custom language model, a custom vocabulary, or a custom vocabulary filter, include
 *                 <code>LanguageIdSettings</code> with the relevant sub-parameters
 *                 (<code>VocabularyName</code>, <code>LanguageModelName</code>, and
 *                 <code>VocabularyFilterName</code>). Note that multi-language identification
 *                 (<code>IdentifyMultipleLanguages</code>) doesn't support custom language
 *             models.</p>
 *          <p>
 *             <code>LanguageIdSettings</code> supports two to five language codes. Each language
 *             code you include can have an associated custom language model, custom vocabulary, and
 *             custom vocabulary filter. The language codes that you specify must match the languages
 *             of the associated custom language models, custom vocabularies, and custom vocabulary
 *             filters.</p>
 *          <p>It's  recommended that you include <code>LanguageOptions</code> when using
 *                 <code>LanguageIdSettings</code> to ensure that the correct language dialect is
 *             identified. For example, if you specify a custom vocabulary that is in
 *                 <code>en-US</code> but Amazon Transcribe determines that the language spoken in
 *             your media is <code>en-AU</code>, your custom vocabulary <i>is not</i>
 *             applied to your transcription. If you include <code>LanguageOptions</code> and include
 *                 <code>en-US</code> as the only English language dialect, your custom vocabulary
 *                 <i>is</i> applied to your transcription.</p>
 *          <p>If you want to include a custom language model with your request but <b>do not</b> want to use automatic language identification, use
 *             instead the <code></code> parameter with the
 *                 <code>LanguageModelName</code> sub-parameter. If you want to include a custom
 *             vocabulary or a custom vocabulary filter (or both) with your request but <b>do not</b> want to use automatic language identification, use
 *             instead the <code></code> parameter with the
 *                 <code>VocabularyName</code> or <code>VocabularyFilterName</code> (or both)
 *             sub-parameter.</p>
 * @public
 */
export interface LanguageIdSettings {
  /**
   * <p>The name of the custom vocabulary you want to use when processing your transcription
   *             job. Custom vocabulary names are case sensitive.</p>
   *          <p>The language of the specified custom vocabulary must match the language code that you
   *             specify in your transcription request. If the languages do not match, the custom
   *             vocabulary isn't applied. There are no errors or warnings associated with a language
   *             mismatch.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The name of the custom vocabulary filter you want to use when processing your
   *             transcription job. Custom vocabulary filter names are case sensitive.</p>
   *          <p>The language of the specified custom vocabulary filter must match the language code
   *             that you specify in your transcription request. If the languages do not match, the custom
   *             vocabulary filter isn't applied. There are no errors or warnings associated with a
   *             language mismatch.</p>
   *          <p>Note that if you include <code>VocabularyFilterName</code> in your request, you must
   *             also include <code>VocabularyFilterMethod</code>.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>The name of the custom language model you want to use when processing your
   *             transcription job. Note that custom language model names are case sensitive.</p>
   *          <p>The language of the specified custom language model must match the language code that
   *             you specify in your transcription request. If the languages do not match, the custom
   *             language model isn't applied. There are no errors or warnings associated with a language
   *             mismatch.</p>
   * @public
   */
  LanguageModelName?: string | undefined;
}

/**
 * <p>Contains <code>GenerateAbstractiveSummary</code>, which is a required parameter if you
 * 	    want to enable Generative call summarization in your Call Analytics request.</p>
 * @public
 */
export interface Summarization {
  /**
   * <p>Enables Generative call summarization in your Call Analytics request</p>
   *          <p>Generative call summarization provides a summary of the transcript including important
   * 	    components discussed in the conversation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-enable-summarization.html">Enabling generative call
   * 	        summarization</a>.</p>
   * @public
   */
  GenerateAbstractiveSummary: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const VocabularyFilterMethod = {
  MASK: "mask",
  REMOVE: "remove",
  TAG: "tag",
} as const;

/**
 * @public
 */
export type VocabularyFilterMethod = (typeof VocabularyFilterMethod)[keyof typeof VocabularyFilterMethod];

/**
 * <p>Provides additional optional settings for your  request, including content redaction,
 *             automatic language identification; allows you to apply custom language models, custom
 *             vocabulary filters, and custom vocabularies.</p>
 * @public
 */
export interface CallAnalyticsJobSettings {
  /**
   * <p>The name of the custom vocabulary you want to include in your Call Analytics
   *             transcription request. Custom vocabulary names are case sensitive.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The name of the custom vocabulary filter you want to include in your Call Analytics
   *             transcription request. Custom vocabulary filter names are case sensitive.</p>
   *          <p>Note that if you include <code>VocabularyFilterName</code> in your request, you must
   *             also include <code>VocabularyFilterMethod</code>.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Specify how you want your custom vocabulary filter applied to your transcript.</p>
   *          <p>To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>.</p>
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * <p>The name of the custom language model you want to use when processing your Call
   *             Analytics job. Note that custom language model names are case sensitive.</p>
   *          <p>The language of the specified custom language model must match the language code that
   *             you specify in your transcription request. If the languages do not match, the custom
   *             language model isn't applied. There are no errors or warnings associated with a language
   *             mismatch.</p>
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * <p>Makes it possible to redact or flag specified personally identifiable information (PII) in
   *             your transcript. If you use <code>ContentRedaction</code>, you must also include the
   *             sub-parameters: <code>RedactionOutput</code> and <code>RedactionType</code>. You can
   *             optionally include <code>PiiEntityTypes</code> to choose which types of PII you want to
   *             redact.</p>
   * @public
   */
  ContentRedaction?: ContentRedaction | undefined;

  /**
   * <p>You can specify two or more language codes that represent the languages you think may
   *             be present in your media. Including more than five is not recommended. If you're unsure
   *             what languages are present, do not include this parameter.</p>
   *          <p>Including language options can improve the accuracy of language identification.</p>
   *          <p>For a list of languages supported with Call Analytics, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *                 languages</a> table.</p>
   *          <p>To transcribe speech in Modern Standard Arabic (<code>ar-SA</code>) in Amazon Web Services GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud (US) (US-East, us-gov-east-1), Canada (Calgary) ca-west-1 and Africa (Cape Town) af-south-1, your media file
   *             must be encoded at a sample rate of 16,000 Hz or higher.</p>
   * @public
   */
  LanguageOptions?: LanguageCode[] | undefined;

  /**
   * <p>If using automatic language identification in your request and you want to apply a
   *             custom language model, a custom vocabulary, or a custom vocabulary filter, include
   *                 <code>LanguageIdSettings</code> with the relevant sub-parameters
   *                 (<code>VocabularyName</code>, <code>LanguageModelName</code>, and
   *                 <code>VocabularyFilterName</code>).</p>
   *          <p>
   *             <code>LanguageIdSettings</code> supports two to five language codes. Each language
   *             code you include can have an associated custom language model, custom vocabulary, and
   *             custom vocabulary filter. The language codes that you specify must match the languages
   *             of the associated custom language models, custom vocabularies, and custom vocabulary
   *             filters.</p>
   *          <p>It's recommended that you include <code>LanguageOptions</code> when using
   *                 <code>LanguageIdSettings</code> to ensure that the correct language dialect is
   *             identified. For example, if you specify a custom vocabulary that is in
   *                 <code>en-US</code> but Amazon Transcribe determines that the language spoken in
   *             your media is <code>en-AU</code>, your custom vocabulary <i>is not</i>
   *             applied to your transcription. If you include <code>LanguageOptions</code> and include
   *                 <code>en-US</code> as the only English language dialect, your custom vocabulary
   *                 <i>is</i> applied to your transcription.</p>
   *          <p>If you want to include a custom language model, custom vocabulary, or custom
   *             vocabulary filter with your request but <b>do not</b> want to
   *             use automatic language identification, use instead the <code></code> parameter with the
   *                 <code>LanguageModelName</code>, <code>VocabularyName</code>, or
   *                 <code>VocabularyFilterName</code> sub-parameters.</p>
   *          <p>For a list of languages supported with Call Analytics, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages and
   *             language-specific features</a>.</p>
   * @public
   */
  LanguageIdSettings?: Partial<Record<LanguageCode, LanguageIdSettings>> | undefined;

  /**
   * <p>Contains <code>GenerateAbstractiveSummary</code>, which is a required parameter if you
   * 	    want to enable Generative call summarization in your Call Analytics request.</p>
   * @public
   */
  Summarization?: Summarization | undefined;
}

/**
 * <p>Adds metadata, in the form of a key:value pair, to the specified resource.</p>
 *          <p>For example, you could add the tag <code>Department:Sales</code> to a resource to
 *             indicate that it pertains to your organization's sales department. You can also use tags
 *             for tag-based access control.</p>
 *          <p>To learn more about tagging, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging resources</a>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The first part of a key:value pair that forms a tag associated with a given resource.
   *             For example, in the tag <code>Department:Sales</code>, the key is 'Department'.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The second part of a key:value pair that forms a tag associated with a given resource.
   *             For example, in the tag <code>Department:Sales</code>, the value is 'Sales'.</p>
   *          <p>Note that you can set the value of a tag to an empty string, but you can't set the
   *             value of a tag to null. Omitting the tag value is the same as using an empty
   *             string.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Provides you with the Amazon S3 URI you can use to access your
 *             transcript.</p>
 * @public
 */
export interface Transcript {
  /**
   * <p>The Amazon S3 location of your transcript. You can use this URI to access or
   *             download your transcript.</p>
   *          <p>If you included <code>OutputBucketName</code> in your transcription job request, this
   *             is the URI of that bucket. If you also included <code>OutputKey</code> in your request,
   *             your output is located in the path you specified in your request.</p>
   *          <p>If you didn't include <code>OutputBucketName</code> in your transcription job request,
   *             your transcript is stored in a service-managed bucket, and
   *                 <code>TranscriptFileUri</code> provides you with a temporary URI you can use for
   *             secure access to your transcript.</p>
   *          <note>
   *             <p>Temporary URIs for service-managed Amazon S3 buckets are only valid for 15
   *                 minutes. If you get an <code>AccesDenied</code> error, you can get a new temporary
   *                 URI by running a <code>GetTranscriptionJob</code> or
   *                     <code>ListTranscriptionJob</code> request.</p>
   *          </note>
   * @public
   */
  TranscriptFileUri?: string | undefined;

  /**
   * <p>The Amazon S3 location of your redacted transcript. You can use this URI to
   *             access or download your transcript.</p>
   *          <p>If you included <code>OutputBucketName</code> in your transcription job request, this
   *             is the URI of that bucket. If you also included <code>OutputKey</code> in your request,
   *             your output is located in the path you specified in your request.</p>
   *          <p>If you didn't include <code>OutputBucketName</code> in your transcription job request,
   *             your transcript is stored in a service-managed bucket, and
   *                 <code>RedactedTranscriptFileUri</code> provides you with a temporary URI you can use
   *             for secure access to your transcript.</p>
   *          <note>
   *             <p>Temporary URIs for service-managed Amazon S3 buckets are only valid for 15
   *                 minutes. If you get an <code>AccesDenied</code> error, you can get a new temporary
   *                 URI by running a <code>GetTranscriptionJob</code> or
   *                     <code>ListTranscriptionJob</code> request.</p>
   *          </note>
   * @public
   */
  RedactedTranscriptFileUri?: string | undefined;
}

/**
 * <p>Provides detailed information about a Call Analytics job.</p>
 *          <p>To view the job's status, refer to <code>CallAnalyticsJobStatus</code>. If the status
 *             is <code>COMPLETED</code>, the job is finished. You can find your completed transcript
 *             at the URI specified in <code>TranscriptFileUri</code>. If the status is
 *                 <code>FAILED</code>, <code>FailureReason</code> provides details on why your
 *             transcription job failed.</p>
 *          <p>If you enabled personally identifiable information (PII) redaction, the redacted
 *             transcript appears at the location specified in
 *             <code>RedactedTranscriptFileUri</code>.</p>
 *          <p>If you chose to redact the audio in your media file, you can find your redacted media
 *             file at the location specified in the <code>RedactedMediaFileUri</code> field of your
 *             response.</p>
 * @public
 */
export interface CallAnalyticsJob {
  /**
   * <p>The name of the Call Analytics job. Job names are case sensitive and must be unique
   *             within an Amazon Web Services account.</p>
   * @public
   */
  CallAnalyticsJobName?: string | undefined;

  /**
   * <p>Provides the status of the specified Call Analytics job.</p>
   *          <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the
   *             results at the location specified in <code>TranscriptFileUri</code> (or
   *                 <code>RedactedTranscriptFileUri</code>, if you requested transcript redaction). If
   *             the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why
   *             your transcription job failed.</p>
   * @public
   */
  CallAnalyticsJobStatus?: CallAnalyticsJobStatus | undefined;

  /**
   * <p>Provides detailed information about a call analytics job, including information about skipped analytics features.</p>
   * @public
   */
  CallAnalyticsJobDetails?: CallAnalyticsJobDetails | undefined;

  /**
   * <p>The language code used to create your Call Analytics job. For a list of supported
   *             languages and their associated language codes, refer to the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a>
   *             table.</p>
   *          <p>If you do not know the language spoken in your media file, you can omit this field and
   *             let Amazon Transcribe automatically identify the language of your media. To improve the
   *             accuracy of language identification, you can include several language codes and Amazon Transcribe chooses the closest match for your transcription.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The sample rate, in hertz, of the audio track in your input media file.</p>
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * <p>The format of the input media file.</p>
   * @public
   */
  MediaFormat?: MediaFormat | undefined;

  /**
   * <p>Provides the Amazon S3 location of the media file you used in your Call
   *             Analytics request.</p>
   * @public
   */
  Media?: Media | undefined;

  /**
   * <p>Provides you with the Amazon S3 URI you can use to access your
   *             transcript.</p>
   * @public
   */
  Transcript?: Transcript | undefined;

  /**
   * <p>The date and time the specified Call Analytics job began processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time the specified Call Analytics job request was made.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time the specified Call Analytics job finished processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>If <code>CallAnalyticsJobStatus</code> is <code>FAILED</code>,
   *                 <code>FailureReason</code> contains information about why the Call Analytics job
   *             request failed.</p>
   *          <p>The <code>FailureReason</code> field contains one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Unsupported media format</code>.</p>
   *                <p>The media format specified in <code>MediaFormat</code> isn't valid. Refer to
   *                     refer to the <code>MediaFormat</code> parameter for a list of supported
   *                     formats.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>The media format provided does not match the detected media
   *                         format</code>.</p>
   *                <p>The media format specified in <code>MediaFormat</code> doesn't match the
   *                     format of the input file. Check the media format of your media file and correct
   *                     the specified value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid sample rate for audio file</code>.</p>
   *                <p>The sample rate specified in <code>MediaSampleRateHertz</code> isn't valid.
   *                     The sample rate must be between 8,000 and 48,000 hertz.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>The sample rate provided does not match the detected sample
   *                     rate</code>.</p>
   *                <p>The sample rate specified in <code>MediaSampleRateHertz</code> doesn't match
   *                     the sample rate detected in your input media file. Check the sample rate of your
   *                     media file and correct the specified value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid file size: file size too large</code>.</p>
   *                <p>The size of your media file is larger than what Amazon Transcribe can
   *                     process. For more information, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe">Service
   *                         quotas</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid number of channels: number of channels too large</code>.</p>
   *                <p>Your audio contains more channels than Amazon Transcribe is able to process.
   *                     For more information, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe">Service
   *                         quotas</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) you included in your request.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>The confidence score associated with the language identified in your media
   *             file.</p>
   *          <p>Confidence scores are values between 0 and 1; a larger value indicates a higher
   *             probability that the identified language correctly matches the language spoken in your
   *             media.</p>
   * @public
   */
  IdentifiedLanguageScore?: number | undefined;

  /**
   * <p>Provides information on any additional settings that were included in your request.
   *             Additional settings include content redaction and language identification
   *             settings.</p>
   * @public
   */
  Settings?: CallAnalyticsJobSettings | undefined;

  /**
   * <p>Indicates which speaker is on which channel.</p>
   * @public
   */
  ChannelDefinitions?: ChannelDefinition[] | undefined;

  /**
   * <p>The tags, each in the form of a key:value pair, assigned to the specified
   *             call analytics job.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Provides detailed information about a specific Call Analytics job.</p>
 * @public
 */
export interface CallAnalyticsJobSummary {
  /**
   * <p>The name of the Call Analytics job. Job names are case sensitive and must be unique
   *             within an Amazon Web Services account.</p>
   * @public
   */
  CallAnalyticsJobName?: string | undefined;

  /**
   * <p>The date and time the specified Call Analytics job request was made.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time your Call Analytics job began processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time the specified Call Analytics job finished processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>The language code used to create your Call Analytics transcription.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>Provides the status of your Call Analytics job.</p>
   *          <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the
   *             results at the location specified in <code>TranscriptFileUri</code> (or
   *                 <code>RedactedTranscriptFileUri</code>, if you requested transcript redaction). If
   *             the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why
   *             your transcription job failed.</p>
   * @public
   */
  CallAnalyticsJobStatus?: CallAnalyticsJobStatus | undefined;

  /**
   * <p>Provides detailed information about a call analytics job, including information about skipped analytics features.</p>
   * @public
   */
  CallAnalyticsJobDetails?: CallAnalyticsJobDetails | undefined;

  /**
   * <p>If <code>CallAnalyticsJobStatus</code> is <code>FAILED</code>,
   *                 <code>FailureReason</code> contains information about why the Call Analytics job
   *             failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InputType = {
  POST_CALL: "POST_CALL",
  REAL_TIME: "REAL_TIME",
} as const;

/**
 * @public
 */
export type InputType = (typeof InputType)[keyof typeof InputType];

/**
 * <p>A time range, in percentage, between two points in your media file.</p>
 *          <p>You can use <code>StartPercentage</code> and <code>EndPercentage</code> to search a
 *             custom segment. For example, setting <code>StartPercentage</code> to 10 and
 *                 <code>EndPercentage</code> to 50 only searches for your specified criteria in the
 *             audio contained between the 10 percent mark and the 50 percent mark of your media
 *             file.</p>
 *          <p>You can use also <code>First</code> to search from the start of the media file until
 *             the time that you specify. Or use <code>Last</code> to search from the time that you
 *             specify until the end of the media file. For example, setting <code>First</code> to 10
 *             only searches for your specified criteria in the audio contained in the first 10 percent
 *             of the media file.</p>
 *          <p>If you prefer to use milliseconds instead of percentage, see .</p>
 * @public
 */
export interface RelativeTimeRange {
  /**
   * <p>The time, in percentage, when Amazon Transcribe starts searching for the specified
   *             criteria in your media file. If you include <code>StartPercentage</code> in your
   *             request, you must also include <code>EndPercentage</code>.</p>
   * @public
   */
  StartPercentage?: number | undefined;

  /**
   * <p>The time, in percentage, when Amazon Transcribe stops searching for the specified
   *             criteria in your media file. If you include <code>EndPercentage</code> in your request,
   *             you must also include <code>StartPercentage</code>.</p>
   * @public
   */
  EndPercentage?: number | undefined;

  /**
   * <p>The time, in percentage, from the start of your media file until the specified value.
   *             Amazon Transcribe searches for your specified criteria in this time segment.</p>
   * @public
   */
  First?: number | undefined;

  /**
   * <p>The time, in percentage, from the specified value until the end of your media file.
   *             Amazon Transcribe searches for your specified criteria in this time segment.</p>
   * @public
   */
  Last?: number | undefined;
}

/**
 * <p>Flag the presence or absence of interruptions in your Call Analytics transcription
 *             output.</p>
 *          <p>Rules using <code>InterruptionFilter</code> are designed to match:</p>
 *          <ul>
 *             <li>
 *                <p>Instances where an agent interrupts a customer</p>
 *             </li>
 *             <li>
 *                <p>Instances where a customer interrupts an agent</p>
 *             </li>
 *             <li>
 *                <p>Either participant interrupting the other</p>
 *             </li>
 *             <li>
 *                <p>A lack of interruptions</p>
 *             </li>
 *          </ul>
 *          <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call
 *             categories</a> for usage examples.</p>
 * @public
 */
export interface InterruptionFilter {
  /**
   * <p>Specify the duration of the interruptions in milliseconds. For example, you can flag
   *             speech that contains more than 10,000 milliseconds of interruptions.</p>
   * @public
   */
  Threshold?: number | undefined;

  /**
   * <p>Specify the interrupter that you want to flag. Omitting this parameter is equivalent
   *             to specifying both participants.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * <p>Makes it possible to specify a time range (in milliseconds) in your audio, during
   *             which you want to search for an interruption. See  for more detail.</p>
   * @public
   */
  AbsoluteTimeRange?: AbsoluteTimeRange | undefined;

  /**
   * <p>Makes it possible to specify a time range (in percentage) in your media file, during
   *             which you want to search for an interruption. See  for more detail.</p>
   * @public
   */
  RelativeTimeRange?: RelativeTimeRange | undefined;

  /**
   * <p>Set to <code>TRUE</code> to flag speech that does not contain interruptions. Set to
   *                 <code>FALSE</code> to flag speech that contains interruptions.</p>
   * @public
   */
  Negate?: boolean | undefined;
}

/**
 * <p>Flag the presence or absence of periods of silence in your Call Analytics
 *             transcription output.</p>
 *          <p>Rules using <code>NonTalkTimeFilter</code> are designed to match:</p>
 *          <ul>
 *             <li>
 *                <p>The presence of silence at specified periods throughout the call</p>
 *             </li>
 *             <li>
 *                <p>The presence of speech at specified periods throughout the call</p>
 *             </li>
 *          </ul>
 *          <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call
 *             categories</a> for usage examples.</p>
 * @public
 */
export interface NonTalkTimeFilter {
  /**
   * <p>Specify the duration, in milliseconds, of the period of silence that you want to flag.
   *             For example, you can flag a silent period that lasts 30,000 milliseconds.</p>
   * @public
   */
  Threshold?: number | undefined;

  /**
   * <p>Makes it possible to specify a time range (in milliseconds) in your audio, during
   *             which you want to search for a period of silence. See  for more detail.</p>
   * @public
   */
  AbsoluteTimeRange?: AbsoluteTimeRange | undefined;

  /**
   * <p>Makes it possible to specify a time range (in percentage) in your media file, during
   *             which you want to search for a period of silence. See  for more detail.</p>
   * @public
   */
  RelativeTimeRange?: RelativeTimeRange | undefined;

  /**
   * <p>Set to <code>TRUE</code> to flag periods of speech. Set to <code>FALSE</code> to flag
   *             periods of silence</p>
   * @public
   */
  Negate?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const SentimentValue = {
  MIXED: "MIXED",
  NEGATIVE: "NEGATIVE",
  NEUTRAL: "NEUTRAL",
  POSITIVE: "POSITIVE",
} as const;

/**
 * @public
 */
export type SentimentValue = (typeof SentimentValue)[keyof typeof SentimentValue];

/**
 * <p>Flag the presence or absence of specific sentiments detected in your Call Analytics
 *             transcription output.</p>
 *          <p>Rules using <code>SentimentFilter</code> are designed to match:</p>
 *          <ul>
 *             <li>
 *                <p>The presence or absence of a positive sentiment felt by the customer, agent,
 *                     or both at specified points in the call</p>
 *             </li>
 *             <li>
 *                <p>The presence or absence of a negative sentiment felt by the customer, agent,
 *                     or both at specified points in the call</p>
 *             </li>
 *             <li>
 *                <p>The presence or absence of a neutral sentiment felt by the customer, agent, or
 *                     both at specified points in the call</p>
 *             </li>
 *             <li>
 *                <p>The presence or absence of a mixed sentiment felt by the customer, the agent,
 *                     or both at specified points in the call</p>
 *             </li>
 *          </ul>
 *          <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call
 *             categories</a> for usage examples.</p>
 * @public
 */
export interface SentimentFilter {
  /**
   * <p>Specify the sentiments that you want to flag.</p>
   * @public
   */
  Sentiments: SentimentValue[] | undefined;

  /**
   * <p>Makes it possible to specify a time range (in milliseconds) in your audio, during
   *             which you want to search for the specified sentiments. See  for more detail.</p>
   * @public
   */
  AbsoluteTimeRange?: AbsoluteTimeRange | undefined;

  /**
   * <p>Makes it possible to specify a time range (in percentage) in your media file, during
   *             which you want to search for the specified sentiments. See  for more detail.</p>
   * @public
   */
  RelativeTimeRange?: RelativeTimeRange | undefined;

  /**
   * <p>Specify the participant that you want to flag. Omitting this parameter is equivalent
   *             to specifying both participants.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * <p>Set to <code>TRUE</code> to flag the sentiments that you didn't include in your
   *             request. Set to <code>FALSE</code> to flag the sentiments that you specified in your
   *             request.</p>
   * @public
   */
  Negate?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const TranscriptFilterType = {
  EXACT: "EXACT",
} as const;

/**
 * @public
 */
export type TranscriptFilterType = (typeof TranscriptFilterType)[keyof typeof TranscriptFilterType];

/**
 * <p>Flag the presence or absence of specific words or phrases detected in your Call
 *             Analytics transcription output.</p>
 *          <p>Rules using <code>TranscriptFilter</code> are designed to match:</p>
 *          <ul>
 *             <li>
 *                <p>Custom words or phrases spoken by the agent, the customer, or both</p>
 *             </li>
 *             <li>
 *                <p>Custom words or phrases <b>not</b> spoken by the
 *                     agent, the customer, or either</p>
 *             </li>
 *             <li>
 *                <p>Custom words or phrases that occur at a specific time frame</p>
 *             </li>
 *          </ul>
 *          <p>See <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html#tca-rules-batch">Rule criteria for post-call
 *             categories</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html#tca-rules-stream">Rule criteria for
 *                 streaming categories</a> for usage examples.</p>
 * @public
 */
export interface TranscriptFilter {
  /**
   * <p>Flag the presence or absence of an exact match to the phrases that you specify. For
   *             example, if you specify the phrase "speak to a manager" as your <code>Targets</code>
   *             value, only that exact phrase is flagged.</p>
   *          <p>Note that semantic matching is not supported. For example, if your customer says
   *             "speak to <i>the</i> manager", instead of "speak to <i>a</i>
   *             manager", your content is not flagged.</p>
   * @public
   */
  TranscriptFilterType: TranscriptFilterType | undefined;

  /**
   * <p>Makes it possible to specify a time range (in milliseconds) in your audio, during
   *             which you want to search for the specified key words or phrases. See  for more detail.</p>
   * @public
   */
  AbsoluteTimeRange?: AbsoluteTimeRange | undefined;

  /**
   * <p>Makes it possible to specify a time range (in percentage) in your media file, during
   *             which you want to search for the specified key words or phrases. See  for more detail.</p>
   * @public
   */
  RelativeTimeRange?: RelativeTimeRange | undefined;

  /**
   * <p>Specify the participant that you want to flag. Omitting this parameter is equivalent
   *             to specifying both participants.</p>
   * @public
   */
  ParticipantRole?: ParticipantRole | undefined;

  /**
   * <p>Set to <code>TRUE</code> to flag the absence of the phrase that you specified in your
   *             request. Set to <code>FALSE</code> to flag the presence of the phrase that you specified
   *             in your request.</p>
   * @public
   */
  Negate?: boolean | undefined;

  /**
   * <p>Specify the phrases that you want to flag.</p>
   * @public
   */
  Targets: string[] | undefined;
}

/**
 * <p>A rule is a set of criteria that you can specify to flag an attribute in your Call
 *             Analytics output. Rules define a Call Analytics category.</p>
 *          <p>Rules can include these parameters: , , , and .</p>
 *          <p>To learn more about Call Analytics rules and categories, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-batch.html">Creating categories for post-call
 *             transcriptions</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tca-categories-stream.html">Creating categories for
 *                 real-time transcriptions</a>.</p>
 *          <p>To learn more about Call Analytics, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/call-analytics.html">Analyzing call center audio with Call
 *                 Analytics</a>.</p>
 * @public
 */
export type Rule =
  | Rule.InterruptionFilterMember
  | Rule.NonTalkTimeFilterMember
  | Rule.SentimentFilterMember
  | Rule.TranscriptFilterMember
  | Rule.$UnknownMember;

/**
 * @public
 */
export namespace Rule {
  /**
   * <p>Flag the presence or absence of periods of silence in your Call Analytics
   *             transcription output. Refer to  for more
   *             detail.</p>
   * @public
   */
  export interface NonTalkTimeFilterMember {
    NonTalkTimeFilter: NonTalkTimeFilter;
    InterruptionFilter?: never;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Flag the presence or absence of interruptions in your Call Analytics transcription
   *             output. Refer to  for more detail.</p>
   * @public
   */
  export interface InterruptionFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter: InterruptionFilter;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Flag the presence or absence of specific words or phrases in your Call Analytics
   *             transcription output. Refer to  for more
   *             detail.</p>
   * @public
   */
  export interface TranscriptFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter?: never;
    TranscriptFilter: TranscriptFilter;
    SentimentFilter?: never;
    $unknown?: never;
  }

  /**
   * <p>Flag the presence or absence of specific sentiments in your Call Analytics
   *             transcription output. Refer to  for more
   *             detail.</p>
   * @public
   */
  export interface SentimentFilterMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter?: never;
    TranscriptFilter?: never;
    SentimentFilter: SentimentFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    NonTalkTimeFilter?: never;
    InterruptionFilter?: never;
    TranscriptFilter?: never;
    SentimentFilter?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    NonTalkTimeFilter: (value: NonTalkTimeFilter) => T;
    InterruptionFilter: (value: InterruptionFilter) => T;
    TranscriptFilter: (value: TranscriptFilter) => T;
    SentimentFilter: (value: SentimentFilter) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Rule, visitor: Visitor<T>): T => {
    if (value.NonTalkTimeFilter !== undefined) return visitor.NonTalkTimeFilter(value.NonTalkTimeFilter);
    if (value.InterruptionFilter !== undefined) return visitor.InterruptionFilter(value.InterruptionFilter);
    if (value.TranscriptFilter !== undefined) return visitor.TranscriptFilter(value.TranscriptFilter);
    if (value.SentimentFilter !== undefined) return visitor.SentimentFilter(value.SentimentFilter);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Provides you with the properties of the Call Analytics category you specified in your
 *             request. This includes the list of rules that define the specified category.</p>
 * @public
 */
export interface CategoryProperties {
  /**
   * <p>The name of the Call Analytics category. Category names are case sensitive and must be
   *             unique within an Amazon Web Services account.</p>
   * @public
   */
  CategoryName?: string | undefined;

  /**
   * <p>The rules used to define a Call Analytics category. Each category can have between 1
   *             and 20 rules.</p>
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * <p>The date and time the specified Call Analytics category was created.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The date and time the specified Call Analytics category was last updated.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-05T12:45:32.691000-07:00</code> represents 12:45 PM UTC-7 on May
   *             5, 2022.</p>
   * @public
   */
  LastUpdateTime?: Date | undefined;

  /**
   * <p>The tags, each in the form of a key:value pair, assigned to the specified
   *             call analytics category.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The input type associated with the specified category. <code>POST_CALL</code>
   *             refers to a category that is applied to batch transcriptions; <code>REAL_TIME</code>
   *             refers to a category that is applied to streaming transcriptions.</p>
   * @public
   */
  InputType?: InputType | undefined;
}

/**
 * @public
 * @enum
 */
export const MedicalScribeNoteTemplate = {
  BEHAVIORAL_SOAP: "BEHAVIORAL_SOAP",
  BIRP: "BIRP",
  DAP: "DAP",
  GIRPP: "GIRPP",
  HISTORY_AND_PHYSICAL: "HISTORY_AND_PHYSICAL",
  PHYSICAL_SOAP: "PHYSICAL_SOAP",
  SIRP: "SIRP",
} as const;

/**
 * @public
 */
export type MedicalScribeNoteTemplate = (typeof MedicalScribeNoteTemplate)[keyof typeof MedicalScribeNoteTemplate];

/**
 * <p>The output configuration for clinical note generation.</p>
 * @public
 */
export interface ClinicalNoteGenerationSettings {
  /**
   * <p>Specify one of the following templates to use for the clinical note summary. The default is <code>HISTORY_AND_PHYSICAL</code>.</p>
   *          <ul>
   *             <li>
   *                <p>HISTORY_AND_PHYSICAL: Provides summaries for key sections of the clinical documentation. Examples of sections include Chief Complaint, History of Present Illness, Review of Systems, Past Medical History, Assessment, and Plan.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>GIRPP: Provides summaries based on the patients progress toward goals. Examples of sections include Goal, Intervention,
   *                     Response, Progress, and Plan.</p>
   *             </li>
   *             <li>
   *                <p>BIRP: Focuses on the patient's behavioral patterns and responses. Examples of sections include Behavior, Intervention, Response, and Plan.</p>
   *             </li>
   *             <li>
   *                <p>SIRP: Emphasizes the situational context of therapy. Examples of sections include Situation, Intervention, Response, and Plan.</p>
   *             </li>
   *             <li>
   *                <p>DAP: Provides a simplified format for clinical documentation. Examples of sections include Data, Assessment, and Plan.</p>
   *             </li>
   *             <li>
   *                <p>BEHAVIORAL_SOAP: Behavioral health focused documentation format. Examples of sections include Subjective, Objective, Assessment, and Plan.</p>
   *             </li>
   *             <li>
   *                <p>PHYSICAL_SOAP: Physical health focused documentation format. Examples of sections include Subjective, Objective, Assessment, and Plan.</p>
   *             </li>
   *          </ul>
   * @public
   */
  NoteTemplate?: MedicalScribeNoteTemplate | undefined;
}

/**
 * @public
 * @enum
 */
export const CLMLanguageCode = {
  DE_DE: "de-DE",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_US: "en-US",
  ES_US: "es-US",
  HI_IN: "hi-IN",
  JA_JP: "ja-JP",
} as const;

/**
 * @public
 */
export type CLMLanguageCode = (typeof CLMLanguageCode)[keyof typeof CLMLanguageCode];

/**
 * <p>A resource already exists with this name. Resource names must be unique within an
 *                 Amazon Web Services account.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateCallAnalyticsCategoryRequest {
  /**
   * <p>A unique name, chosen by you, for your Call Analytics category. It's helpful to use a
   *             detailed naming system that will make sense to you in the future. For example, it's
   *             better to use <code>sentiment-positive-last30seconds</code> for a category over a
   *             generic name like <code>test-category</code>.</p>
   *          <p>Category names are case sensitive.</p>
   * @public
   */
  CategoryName: string | undefined;

  /**
   * <p>Rules define a Call Analytics category. When creating a new category, you must create
   *             between 1 and 20 rules for that category. For each rule, you specify a filter you want
   *             applied to the attributes of a call. For example, you can choose a sentiment filter that
   *             detects if a customer's sentiment was positive during the last 30 seconds of the call.</p>
   * @public
   */
  Rules: Rule[] | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new
   *             call analytics category at the time you start this new job.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *             resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Choose whether you want to create a real-time or a post-call category for your Call
   *             Analytics transcription.</p>
   *          <p>Specifying <code>POST_CALL</code> assigns your category to post-call transcriptions;
   *             categories with this input type cannot be applied to streaming (real-time)
   *             transcriptions.</p>
   *          <p>Specifying <code>REAL_TIME</code> assigns your category to streaming transcriptions;
   *             categories with this input type cannot be applied to post-call transcriptions.</p>
   *          <p>If you do not include <code>InputType</code>, your category is created as a post-call
   *             category by default.</p>
   * @public
   */
  InputType?: InputType | undefined;
}

/**
 * @public
 */
export interface CreateCallAnalyticsCategoryResponse {
  /**
   * <p>Provides you with the properties of your new category, including its associated
   *             rules.</p>
   * @public
   */
  CategoryProperties?: CategoryProperties | undefined;
}

/**
 * <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains the Amazon S3 location of the training data you want to use to create
 *             a new custom language model, and permissions to access this location.</p>
 *          <p>When using <code>InputDataConfig</code>, you must include these sub-parameters:
 *                 <code>S3Uri</code> and <code>DataAccessRoleArn</code>. You can optionally include
 *                 <code>TuningDataS3Uri</code>.</p>
 * @public
 */
export interface InputDataConfig {
  /**
   * <p>The Amazon S3 location (URI) of the text files you want to use to train your
   *             custom language model.</p>
   *          <p>Here's an example URI path:
   *                 <code>s3://DOC-EXAMPLE-BUCKET/my-model-training-data/</code>
   *          </p>
   * @public
   */
  S3Uri: string | undefined;

  /**
   * <p>The Amazon S3 location (URI) of the text files you want to use to tune your
   *             custom language model.</p>
   *          <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-model-tuning-data/</code>
   *          </p>
   * @public
   */
  TuningDataS3Uri?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files. If the role that you
   *             specify doesn’t have the appropriate permissions to access the specified Amazon S3
   *             location, your request fails.</p>
   *          <p>IAM role ARNs have the format
   *                 <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *                 <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM
   *                 ARNs</a>.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateLanguageModelRequest {
  /**
   * <p>The language code that represents the language of your model. Each custom language
   *             model must contain terms in only one language, and the language you select for your
   *             custom language model must match the language of your training and tuning data.</p>
   *          <p>For a list of supported languages and their associated language codes, refer to the
   *                 <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. Note that US English (<code>en-US</code>) is the
   *             only language supported with Amazon Transcribe Medical.</p>
   *          <p>A custom language model can only be used to transcribe files in the same language as
   *             the model. For example, if you create a custom language model using US English
   *                 (<code>en-US</code>), you can only apply this model to files that contain English
   *             audio.</p>
   * @public
   */
  LanguageCode: CLMLanguageCode | undefined;

  /**
   * <p>The Amazon Transcribe standard language model, or base model, used to create your
   *             custom language model. Amazon Transcribe offers two options for base models: Wideband
   *             and Narrowband.</p>
   *          <p>If the audio you want to transcribe has a sample rate of 16,000 Hz or greater, choose
   *                 <code>WideBand</code>. To transcribe audio with a sample rate less than 16,000 Hz,
   *             choose <code>NarrowBand</code>.</p>
   * @public
   */
  BaseModelName: BaseModelName | undefined;

  /**
   * <p>A unique name, chosen by you, for your custom language model.</p>
   *          <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *                 Amazon Web Services account. If you try to create a new custom language model with
   *             the same name as an existing custom language model, you get a
   *                 <code>ConflictException</code> error.</p>
   * @public
   */
  ModelName: string | undefined;

  /**
   * <p>Contains the Amazon S3 location of the training data you want to use to create
   *             a new custom language model, and permissions to access this location.</p>
   *          <p>When using <code>InputDataConfig</code>, you must include these sub-parameters:
   *                 <code>S3Uri</code>, which is the Amazon S3 location of your training data,
   *             and <code>DataAccessRoleArn</code>, which is the Amazon Resource Name (ARN) of the role
   *             that has permission to access your specified Amazon S3 location. You can
   *             optionally include <code>TuningDataS3Uri</code>, which is the Amazon S3 location
   *             of your tuning data. If you specify different Amazon S3 locations for training
   *             and tuning data, the ARN you use must have permissions to access both locations.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new custom
   *             language model at the time you create this new model.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

/**
 * @public
 */
export interface CreateLanguageModelResponse {
  /**
   * <p>The language code you selected for your custom language model.</p>
   * @public
   */
  LanguageCode?: CLMLanguageCode | undefined;

  /**
   * <p>The Amazon Transcribe standard language model, or base model, you specified when
   *             creating your custom language model.</p>
   * @public
   */
  BaseModelName?: BaseModelName | undefined;

  /**
   * <p>The name of your custom language model.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>Lists your data access role ARN (Amazon Resource Name) and the Amazon S3
   *             locations you provided for your training (<code>S3Uri</code>) and tuning
   *                 (<code>TuningDataS3Uri</code>) data.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The status of your custom language model. When the status displays as
   *                 <code>COMPLETED</code>, your model is ready to use.</p>
   * @public
   */
  ModelStatus?: ModelStatus | undefined;
}

/**
 * @public
 */
export interface CreateMedicalVocabularyRequest {
  /**
   * <p>A unique name, chosen by you, for your new custom medical vocabulary.</p>
   *          <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *                 Amazon Web Services account. If you try to create a new custom medical vocabulary
   *             with the same name as an existing custom medical vocabulary, you get a
   *                 <code>ConflictException</code> error.</p>
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in your custom
   *             vocabulary. US English (<code>en-US</code>) is the only language supported with Amazon Transcribe Medical.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>The Amazon S3 location (URI) of the text file that contains your custom
   *             medical vocabulary. The URI must be in the same Amazon Web Services Region as the
   *             resource you're calling.</p>
   *          <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt</code>
   *          </p>
   * @public
   */
  VocabularyFileUri: string | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new custom
   *             medical vocabulary at the time you create this new custom vocabulary.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const VocabularyState = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  READY: "READY",
} as const;

/**
 * @public
 */
export type VocabularyState = (typeof VocabularyState)[keyof typeof VocabularyState];

/**
 * @public
 */
export interface CreateMedicalVocabularyResponse {
  /**
   * <p>The name you chose for your custom medical vocabulary.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The language code you selected for your custom medical vocabulary. US English
   *                 (<code>en-US</code>) is the only language supported with Amazon Transcribe
   *             Medical.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The processing state of your custom medical vocabulary. If the state is
   *                 <code>READY</code>, you can use the custom vocabulary in a
   *                 <code>StartMedicalTranscriptionJob</code> request.</p>
   * @public
   */
  VocabularyState?: VocabularyState | undefined;

  /**
   * <p>The date and time you created your custom medical vocabulary.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>If <code>VocabularyState</code> is <code>FAILED</code>, <code>FailureReason</code>
   *             contains information about why the medical transcription job request failed. See also:
   *                 <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyRequest {
  /**
   * <p>A unique name, chosen by you, for your new custom vocabulary.</p>
   *          <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *                 Amazon Web Services account. If you try to create a new custom vocabulary with the
   *             same name as an existing custom vocabulary, you get a <code>ConflictException</code>
   *             error.</p>
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in your custom
   *             vocabulary. Each custom vocabulary must contain terms in only one language.</p>
   *          <p>A custom vocabulary can only be used to transcribe files in the same language as the
   *             custom vocabulary. For example, if you create a custom vocabulary using US English
   *                 (<code>en-US</code>), you can only apply this custom vocabulary to files that
   *             contain English audio.</p>
   *          <p>For a list of supported languages and their associated language codes, refer to the
   *                 <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>Use this parameter if you want to create your custom vocabulary by including all
   *             desired terms, as comma-separated values, within your request. The other option for
   *             creating your custom vocabulary is to save your entries in a text file and upload them
   *             to an Amazon S3 bucket, then specify the location of your file using the
   *                 <code>VocabularyFileUri</code> parameter.</p>
   *          <p>Note that if you include <code>Phrases</code> in your request, you cannot use
   *                 <code>VocabularyFileUri</code>; you must choose one or the other.</p>
   *          <p>Each language has a character set that contains all allowed characters for that
   *             specific language. If you use unsupported characters, your custom vocabulary filter
   *             request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom
   *                 Vocabularies</a> to get the character set for your language.</p>
   * @public
   */
  Phrases?: string[] | undefined;

  /**
   * <p>The Amazon S3 location of the text file that contains your custom vocabulary.
   *             The URI must be located in the same Amazon Web Services Region as the resource you're
   *             calling.</p>
   *          <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt</code>
   *          </p>
   *          <p>Note that if you include <code>VocabularyFileUri</code> in your request, you cannot
   *             use the <code>Phrases</code> flag; you must choose one or the other.</p>
   * @public
   */
  VocabularyFileUri?: string | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new custom
   *             vocabulary at the time you create this new custom vocabulary.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files (in this case, your custom
   *             vocabulary). If the role that you specify doesn’t have the appropriate permissions to access
   *             the specified Amazon S3 location, your request fails.</p>
   *          <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM
   *             ARNs</a>.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyResponse {
  /**
   * <p>The name you chose for your custom vocabulary.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The language code you selected for your custom vocabulary.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The processing state of your custom vocabulary. If the state is <code>READY</code>,
   *             you can use the custom vocabulary in a <code>StartTranscriptionJob</code>
   *             request.</p>
   * @public
   */
  VocabularyState?: VocabularyState | undefined;

  /**
   * <p>The date and time you created your custom vocabulary.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>If <code>VocabularyState</code> is <code>FAILED</code>, <code>FailureReason</code>
   *             contains information about why the custom vocabulary request failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common
   *                 Errors</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyFilterRequest {
  /**
   * <p>A unique name, chosen by you, for your new custom vocabulary filter.</p>
   *          <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *                 Amazon Web Services account. If you try to create a new custom vocabulary filter with
   *             the same name as an existing custom vocabulary filter, you get a
   *                 <code>ConflictException</code> error.</p>
   * @public
   */
  VocabularyFilterName: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in your vocabulary
   *             filter. Each custom vocabulary filter must contain terms in only one language.</p>
   *          <p>A custom vocabulary filter can only be used to transcribe files in the same language
   *             as the filter. For example, if you create a custom vocabulary filter using US English
   *                 (<code>en-US</code>), you can only apply this filter to files that contain English
   *             audio.</p>
   *          <p>For a list of supported languages and their associated language codes, refer to the
   *                 <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>Use this parameter if you want to create your custom vocabulary filter by including
   *             all desired terms, as comma-separated values, within your request. The other option for
   *             creating your vocabulary filter is to save your entries in a text file and upload them
   *             to an Amazon S3 bucket, then specify the location of your file using the
   *                 <code>VocabularyFilterFileUri</code> parameter.</p>
   *          <p>Note that if you include <code>Words</code> in your request, you cannot use
   *                 <code>VocabularyFilterFileUri</code>; you must choose one or the other.</p>
   *          <p>Each language has a character set that contains all allowed characters for that
   *             specific language. If you use unsupported characters, your custom vocabulary filter
   *             request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom
   *                 Vocabularies</a> to get the character set for your language.</p>
   * @public
   */
  Words?: string[] | undefined;

  /**
   * <p>The Amazon S3 location of the text file that contains your custom vocabulary
   *             filter terms. The URI must be located in the same Amazon Web Services Region as the
   *             resource you're calling.</p>
   *          <p>Here's an example URI path:
   *                 <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt</code>
   *          </p>
   *          <p>Note that if you include <code>VocabularyFilterFileUri</code> in your request, you
   *             cannot use <code>Words</code>; you must choose one or the other.</p>
   * @public
   */
  VocabularyFilterFileUri?: string | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new custom
   *             vocabulary filter at the time you create this new vocabulary filter.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files (in this case, your custom
   *             vocabulary filter). If the role that you specify doesn’t have the appropriate permissions to access
   *             the specified Amazon S3 location, your request fails.</p>
   *          <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM
   *             ARNs</a>.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyFilterResponse {
  /**
   * <p>The name you chose for your custom vocabulary filter.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>The language code you selected for your custom vocabulary filter.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The date and time you created your custom vocabulary filter.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteCallAnalyticsCategoryRequest {
  /**
   * <p>The name of the Call Analytics category you want to delete. Category names are case
   *             sensitive.</p>
   * @public
   */
  CategoryName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCallAnalyticsCategoryResponse {}

/**
 * <p>We can't find the requested resource. Check that the specified name is correct and try
 *             your request again.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteCallAnalyticsJobRequest {
  /**
   * <p>The name of the Call Analytics job you want to delete. Job names are case
   *             sensitive.</p>
   * @public
   */
  CallAnalyticsJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCallAnalyticsJobResponse {}

/**
 * @public
 */
export interface DeleteLanguageModelRequest {
  /**
   * <p>The name of the custom language model you want to delete. Model names are case
   *             sensitive.</p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMedicalScribeJobRequest {
  /**
   * <p>The name of the Medical Scribe job you want to delete. Job names are case
   *             sensitive.</p>
   * @public
   */
  MedicalScribeJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMedicalTranscriptionJobRequest {
  /**
   * <p>The name of the medical transcription job you want to delete. Job names are case
   *             sensitive.</p>
   * @public
   */
  MedicalTranscriptionJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMedicalVocabularyRequest {
  /**
   * <p>The name of the custom medical vocabulary you want to delete. Custom medical
   *             vocabulary names are case sensitive.</p>
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTranscriptionJobRequest {
  /**
   * <p>The name of the transcription job you want to delete. Job names are case
   *             sensitive.</p>
   * @public
   */
  TranscriptionJobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVocabularyRequest {
  /**
   * <p>The name of the custom vocabulary you want to delete. Custom vocabulary names are case
   *             sensitive.</p>
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVocabularyFilterRequest {
  /**
   * <p>The name of the custom vocabulary filter you want to delete. Custom vocabulary filter
   *             names are case sensitive.</p>
   * @public
   */
  VocabularyFilterName: string | undefined;
}

/**
 * @public
 */
export interface DescribeLanguageModelRequest {
  /**
   * <p>The name of the custom language model you want information about. Model names are case
   *             sensitive.</p>
   * @public
   */
  ModelName: string | undefined;
}

/**
 * <p>Provides information about a custom language model, including:</p>
 *          <ul>
 *             <li>
 *                <p>The base model name</p>
 *             </li>
 *             <li>
 *                <p>When the model was created</p>
 *             </li>
 *             <li>
 *                <p>The location of the files used to train the model</p>
 *             </li>
 *             <li>
 *                <p>When the model was last modified</p>
 *             </li>
 *             <li>
 *                <p>The name you chose for the model</p>
 *             </li>
 *             <li>
 *                <p>The model's language</p>
 *             </li>
 *             <li>
 *                <p>The model's  processing state</p>
 *             </li>
 *             <li>
 *                <p>Any available upgrades for the base model</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface LanguageModel {
  /**
   * <p>A unique name, chosen by you, for your custom language model.</p>
   *          <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *                 Amazon Web Services account.</p>
   * @public
   */
  ModelName?: string | undefined;

  /**
   * <p>The date and time the specified custom language model was created.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  CreateTime?: Date | undefined;

  /**
   * <p>The date and time the specified custom language model was last modified.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The language code used to create your custom language model. Each custom language
   *             model must contain terms in only one language, and the language you select for your
   *             custom language model must match the language of your training and tuning data.</p>
   *          <p>For a list of supported languages and their associated language codes, refer to the
   *                 <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table. Note that US English (<code>en-US</code>) is
   *             the only language supported with Amazon Transcribe Medical.</p>
   * @public
   */
  LanguageCode?: CLMLanguageCode | undefined;

  /**
   * <p>The Amazon Transcribe standard language model, or base model, used to create your
   *             custom language model.</p>
   * @public
   */
  BaseModelName?: BaseModelName | undefined;

  /**
   * <p>The status of the specified custom language model. When the status displays as
   *                 <code>COMPLETED</code> the model is ready for use.</p>
   * @public
   */
  ModelStatus?: ModelStatus | undefined;

  /**
   * <p>Shows if a more current base model is available for use with the specified custom
   *             language model.</p>
   *          <p>If <code>false</code>, your custom language model is using the most up-to-date base
   *             model.</p>
   *          <p>If <code>true</code>, there is a newer base model available than the one your language
   *             model is using.</p>
   *          <p>Note that to update a base model, you must recreate the custom language model using
   *             the new base model. Base model upgrades for existing custom language models are not
   *             supported.</p>
   * @public
   */
  UpgradeAvailability?: boolean | undefined;

  /**
   * <p>If <code>ModelStatus</code> is <code>FAILED</code>, <code>FailureReason</code>
   *             contains information about why the custom language model request failed. See also:
   *                 <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The Amazon S3 location of the input files used to train and tune your custom
   *             language model, in addition to the data access role ARN (Amazon Resource Name) that has
   *             permissions to access these data.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;
}

/**
 * @public
 */
export interface DescribeLanguageModelResponse {
  /**
   * <p>Provides information about the specified custom language model.</p>
   *          <p>This parameter also shows if the base language model you used to create your custom
   *             language model has been updated. If Amazon Transcribe has updated the base model, you
   *             can create a new custom language model using the updated base model.</p>
   *          <p>If you tried to create a new custom language model and the request wasn't successful,
   *             you can use this <code>DescribeLanguageModel</code> to help identify the reason for this
   *             failure.</p>
   * @public
   */
  LanguageModel?: LanguageModel | undefined;
}

/**
 * @public
 */
export interface GetCallAnalyticsCategoryRequest {
  /**
   * <p>The name of the Call Analytics category you want information about. Category names are
   *             case sensitive.</p>
   * @public
   */
  CategoryName: string | undefined;
}

/**
 * @public
 */
export interface GetCallAnalyticsCategoryResponse {
  /**
   * <p>Provides you with the properties of the Call Analytics category you specified in your
   *                 <code>GetCallAnalyticsCategory</code> request.</p>
   * @public
   */
  CategoryProperties?: CategoryProperties | undefined;
}

/**
 * @public
 */
export interface GetCallAnalyticsJobRequest {
  /**
   * <p>The name of the Call Analytics job you want information about. Job names are case
   *             sensitive.</p>
   * @public
   */
  CallAnalyticsJobName: string | undefined;
}

/**
 * @public
 */
export interface GetCallAnalyticsJobResponse {
  /**
   * <p>Provides detailed information about the specified Call Analytics job, including job
   *             status and, if applicable, failure reason.</p>
   * @public
   */
  CallAnalyticsJob?: CallAnalyticsJob | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeJobRequest {
  /**
   * <p>The name of the Medical Scribe job you want information about. Job names are
   *             case sensitive.</p>
   * @public
   */
  MedicalScribeJobName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MedicalScribeParticipantRole = {
  CLINICIAN: "CLINICIAN",
  PATIENT: "PATIENT",
} as const;

/**
 * @public
 */
export type MedicalScribeParticipantRole =
  (typeof MedicalScribeParticipantRole)[keyof typeof MedicalScribeParticipantRole];

/**
 * <p>Indicates which speaker is on which channel. The options are
 *       <code>CLINICIAN</code> and <code>PATIENT</code>
 *          </p>
 * @public
 */
export interface MedicalScribeChannelDefinition {
  /**
   * <p>Specify the audio channel you want to define.</p>
   * @public
   */
  ChannelId: number | undefined;

  /**
   * <p>Specify the participant that you want to flag.
   *       The options are <code>CLINICIAN</code> and <code>PATIENT</code>
   *          </p>
   * @public
   */
  ParticipantRole: MedicalScribeParticipantRole | undefined;
}

/**
 * @public
 * @enum
 */
export const MedicalScribeLanguageCode = {
  EN_US: "en-US",
} as const;

/**
 * @public
 */
export type MedicalScribeLanguageCode = (typeof MedicalScribeLanguageCode)[keyof typeof MedicalScribeLanguageCode];

/**
 * @public
 * @enum
 */
export const MedicalScribeJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
} as const;

/**
 * @public
 */
export type MedicalScribeJobStatus = (typeof MedicalScribeJobStatus)[keyof typeof MedicalScribeJobStatus];

/**
 * <p>The location of the output of your Medical Scribe job.
 *       <code>ClinicalDocumentUri</code> holds the Amazon S3 URI for the Clinical Document
 *       and <code>TranscriptFileUri</code> holds the Amazon S3 URI for the Transcript.</p>
 * @public
 */
export interface MedicalScribeOutput {
  /**
   * <p>Holds the Amazon S3 URI for the Transcript.</p>
   * @public
   */
  TranscriptFileUri: string | undefined;

  /**
   * <p>Holds the Amazon S3 URI for the Clinical Document.</p>
   * @public
   */
  ClinicalDocumentUri: string | undefined;
}

/**
 * <p>Makes it possible to control how your Medical Scribe job is processed using a
 *             <code>MedicalScribeSettings</code> object. Specify <code>ChannelIdentification</code> if
 *             <code>ChannelDefinitions</code> are set. Enabled <code>ShowSpeakerLabels</code> if <code>ChannelIdentification</code>
 *             and <code>ChannelDefinitions</code> are not set. One and only one of <code>ChannelIdentification</code> and <code>ShowSpeakerLabels</code>
 *             must be set. If <code>ShowSpeakerLabels</code> is set, <code>MaxSpeakerLabels</code> must also be set. Use <code>Settings</code>
 *             to specify a vocabulary or vocabulary filter or both using <code>VocabularyName</code>, <code>VocabularyFilterName</code>.
 *             <code>VocabularyFilterMethod</code> must be specified if <code>VocabularyFilterName</code> is set.
 *         </p>
 * @public
 */
export interface MedicalScribeSettings {
  /**
   * <p>Enables speaker partitioning (diarization) in your Medical Scribe output. Speaker
   *             partitioning labels the speech from individual speakers in your media file.</p>
   *          <p>If you enable <code>ShowSpeakerLabels</code> in your request, you must also include
   *                 <code>MaxSpeakerLabels</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Partitioning speakers
   *                 (diarization)</a>.</p>
   * @public
   */
  ShowSpeakerLabels?: boolean | undefined;

  /**
   * <p>Specify the maximum number of speakers you want to partition in your media.</p>
   *          <p>Note that if your media contains more speakers than the specified number, multiple
   *             speakers are treated as a single speaker.</p>
   *          <p>If you specify the <code>MaxSpeakerLabels</code> field, you must set the
   *                 <code>ShowSpeakerLabels</code> field to true.</p>
   * @public
   */
  MaxSpeakerLabels?: number | undefined;

  /**
   * <p>Enables channel identification in multi-channel audio.</p>
   *          <p>Channel identification transcribes the audio on each channel independently, then
   *             appends the output for each channel into one transcript.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html">Transcribing multi-channel
   *             audio</a>.</p>
   * @public
   */
  ChannelIdentification?: boolean | undefined;

  /**
   * <p>The name of the custom vocabulary you want to include in your Medical Scribe
   *             request. Custom vocabulary names are case sensitive.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The name of the custom vocabulary filter you want to include in your Medical Scribe
   *             request. Custom vocabulary filter names are case sensitive.</p>
   *          <p>Note that if you include <code>VocabularyFilterName</code> in your request, you must
   *             also include <code>VocabularyFilterMethod</code>.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Specify how you want your custom vocabulary filter applied to your transcript.</p>
   *          <p>To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>.</p>
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;

  /**
   * <p>Specify settings for the clinical note generation.</p>
   * @public
   */
  ClinicalNoteGenerationSettings?: ClinicalNoteGenerationSettings | undefined;
}

/**
 * <p>Provides detailed information about a Medical Scribe job.</p>
 *          <p>To view the status of the specified Medical Scribe job, check the
 *                 <code>MedicalScribeJobStatus</code> field. If the status is <code>COMPLETED</code>,
 *             the job is finished and you can find the results at the locations specified in
 *                 <code>MedicalScribeOutput</code>. If the status is <code>FAILED</code>,
 *                 <code>FailureReason</code> provides details on why your Medical Scribe job
 *             failed.</p>
 * @public
 */
export interface MedicalScribeJob {
  /**
   * <p>The name of the Medical Scribe job. Job names are case sensitive and must be
   *             unique within an Amazon Web Services account.</p>
   * @public
   */
  MedicalScribeJobName?: string | undefined;

  /**
   * <p>Provides the status of the specified Medical Scribe job.</p>
   *          <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the
   *             results at the location specified in <code>MedicalScribeOutput</code> If
   *             the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why
   *             your Medical Scribe job failed.</p>
   * @public
   */
  MedicalScribeJobStatus?: MedicalScribeJobStatus | undefined;

  /**
   * <p>The language code used to create your Medical Scribe job. US English
   *                 (<code>en-US</code>) is the only supported language for Medical Scribe jobs. </p>
   * @public
   */
  LanguageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   *          <p>For information on supported media formats, refer to the <code>MediaFormat</code>
   *             parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section
   *             in the Amazon S3 Developer Guide.</p>
   * @public
   */
  Media?: Media | undefined;

  /**
   * <p>The location of the output of your Medical Scribe job.
   *       <code>ClinicalDocumentUri</code> holds the Amazon S3 URI for the Clinical Document
   *       and <code>TranscriptFileUri</code> holds the Amazon S3 URI for the Transcript.</p>
   * @public
   */
  MedicalScribeOutput?: MedicalScribeOutput | undefined;

  /**
   * <p>The date and time your Medical Scribe job began processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a Medical Scribe job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time the specified Medical Scribe job request was made.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a Medical Scribe job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time the specified Medical Scribe job finished processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a Medical Scribe job
   *             that finished processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>If <code>MedicalScribeJobStatus</code> is <code>FAILED</code>,
   *                 <code>FailureReason</code> contains information about why the transcription job
   *             failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Makes it possible to control how your Medical Scribe job is processed using a
   *             <code>MedicalScribeSettings</code> object. Specify <code>ChannelIdentification</code> if
   *             <code>ChannelDefinitions</code> are set. Enabled <code>ShowSpeakerLabels</code> if <code>ChannelIdentification</code>
   *             and <code>ChannelDefinitions</code> are not set. One and only one of <code>ChannelIdentification</code> and <code>ShowSpeakerLabels</code>
   *             must be set. If <code>ShowSpeakerLabels</code> is set, <code>MaxSpeakerLabels</code> must also be set. Use <code>Settings</code>
   *             to specify a vocabulary or vocabulary filter or both using <code>VocabularyName</code>, <code>VocabularyFilterName</code>.
   *             <code>VocabularyFilterMethod</code> must be specified if <code>VocabularyFilterName</code> is set.
   *         </p>
   * @public
   */
  Settings?: MedicalScribeSettings | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files,
   *             write to the output bucket, and use your KMS key if supplied.
   *              If the role that you specify doesn’t have the appropriate permissions your request fails.</p>
   *          <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM
   *             ARNs</a>.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>Makes it possible to specify which speaker is on which channel. For example, if the clinician
   *             is the first participant to speak, you would set <code>ChannelId</code> of the first <code>ChannelDefinition</code>
   *             in the list to <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to
   *             <code>CLINICIAN</code> (to indicate that it's the clinician speaking).
   *             Then you would set the <code>ChannelId</code> of the second <code>ChannelDefinition</code> in the list to
   *             <code>1</code> (to indicate the second channel) and <code>ParticipantRole</code> to
   *             <code>PATIENT</code> (to indicate that it's the patient speaking).
   *         </p>
   * @public
   */
  ChannelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to the Medica Scribe job.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetMedicalScribeJobResponse {
  /**
   * <p>Provides detailed information about the specified Medical Scribe job, including
   *             job status and, if applicable, failure reason</p>
   * @public
   */
  MedicalScribeJob?: MedicalScribeJob | undefined;
}

/**
 * @public
 */
export interface GetMedicalTranscriptionJobRequest {
  /**
   * <p>The name of the medical transcription job you want information about. Job names are
   *             case sensitive.</p>
   * @public
   */
  MedicalTranscriptionJobName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MedicalContentIdentificationType = {
  PHI: "PHI",
} as const;

/**
 * @public
 */
export type MedicalContentIdentificationType =
  (typeof MedicalContentIdentificationType)[keyof typeof MedicalContentIdentificationType];

/**
 * <p>Allows additional optional settings in your  request, including channel
 *             identification, alternative transcriptions, and speaker partitioning. You can use that to
 *             apply custom vocabularies to your medical transcription job.</p>
 * @public
 */
export interface MedicalTranscriptionSetting {
  /**
   * <p>Enables speaker partitioning (diarization) in your transcription output. Speaker
   *             partitioning labels the speech from individual speakers in your media file.</p>
   *          <p>If you enable <code>ShowSpeakerLabels</code> in your request, you must also include
   *                 <code>MaxSpeakerLabels</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Partitioning speakers
   *                 (diarization)</a>.</p>
   * @public
   */
  ShowSpeakerLabels?: boolean | undefined;

  /**
   * <p>Specify the maximum number of speakers you want to partition in your media.</p>
   *          <p>Note that if your media contains more speakers than the specified number, multiple
   *             speakers are treated as a single speaker.</p>
   *          <p>If you specify the <code>MaxSpeakerLabels</code> field, you must set the
   *                 <code>ShowSpeakerLabels</code> field to true.</p>
   * @public
   */
  MaxSpeakerLabels?: number | undefined;

  /**
   * <p>Enables channel identification in multi-channel audio.</p>
   *          <p>Channel identification transcribes the audio on each channel independently, then
   *             appends the output for each channel into one transcript.</p>
   *          <p>If you have multi-channel audio and do not enable channel identification, your audio
   *             is transcribed in a continuous manner and your transcript does not separate the speech
   *             by channel.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html">Transcribing multi-channel
   *             audio</a>.</p>
   * @public
   */
  ChannelIdentification?: boolean | undefined;

  /**
   * <p>To include alternative transcriptions within your transcription output, include
   *                 <code>ShowAlternatives</code> in your transcription request.</p>
   *          <p>If you include <code>ShowAlternatives</code>, you must also include
   *                 <code>MaxAlternatives</code>, which is the maximum number of alternative
   *             transcriptions you want Amazon Transcribe Medical to generate.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html">Alternative
   *             transcriptions</a>.</p>
   * @public
   */
  ShowAlternatives?: boolean | undefined;

  /**
   * <p>Indicate the maximum number of alternative transcriptions you want Amazon Transcribe
   *             Medical to include in your transcript.</p>
   *          <p>If you select a number greater than the number of alternative transcriptions generated
   *             by Amazon Transcribe Medical, only the actual number of alternative transcriptions are
   *             included.</p>
   *          <p>If you include <code>MaxAlternatives</code> in your request, you must also include
   *                 <code>ShowAlternatives</code> with a value of <code>true</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html">Alternative
   *             transcriptions</a>.</p>
   * @public
   */
  MaxAlternatives?: number | undefined;

  /**
   * <p>The name of the custom vocabulary you want to use when processing your medical
   *             transcription job. Custom vocabulary names are case sensitive.</p>
   *          <p>The language of the specified custom vocabulary must match the language code that you
   *             specify in your transcription request. If the languages do not match, the custom
   *             vocabulary isn't applied. There are no errors or warnings associated with a language
   *             mismatch. US English (<code>en-US</code>) is the only valid language for Amazon Transcribe Medical.</p>
   * @public
   */
  VocabularyName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Specialty = {
  PRIMARYCARE: "PRIMARYCARE",
} as const;

/**
 * @public
 */
export type Specialty = (typeof Specialty)[keyof typeof Specialty];

/**
 * <p>Provides you with the Amazon S3 URI you can use to access your
 *             transcript.</p>
 * @public
 */
export interface MedicalTranscript {
  /**
   * <p>The Amazon S3 location of your transcript. You can use this URI to access or
   *             download your transcript.</p>
   *          <p>Note that this is the Amazon S3 location you specified in your request using the
   *             <code>OutputBucketName</code> parameter.</p>
   * @public
   */
  TranscriptFileUri?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TranscriptionJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
} as const;

/**
 * @public
 */
export type TranscriptionJobStatus = (typeof TranscriptionJobStatus)[keyof typeof TranscriptionJobStatus];

/**
 * @public
 * @enum
 */
export const Type = {
  CONVERSATION: "CONVERSATION",
  DICTATION: "DICTATION",
} as const;

/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * <p>Provides detailed information about a medical transcription job.</p>
 *          <p>To view the status of the specified medical transcription job, check the
 *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
 *             the job is finished and you can find the results at the location specified in
 *                 <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>,
 *                 <code>FailureReason</code> provides details on why your transcription job
 *             failed.</p>
 * @public
 */
export interface MedicalTranscriptionJob {
  /**
   * <p>The name of the medical transcription job. Job names are case sensitive and must be
   *             unique within an Amazon Web Services account.</p>
   * @public
   */
  MedicalTranscriptionJobName?: string | undefined;

  /**
   * <p>Provides the status of the specified medical transcription job.</p>
   *          <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the
   *             results at the location specified in <code>TranscriptFileUri</code>. If the status is
   *                 <code>FAILED</code>, <code>FailureReason</code> provides details on why your
   *             transcription job failed.</p>
   * @public
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | undefined;

  /**
   * <p>The language code used to create your medical transcription job. US English
   *                 (<code>en-US</code>) is the only supported language for medical
   *             transcriptions.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The sample rate, in hertz, of the audio track in your input media file.</p>
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * <p>The format of the input media file.</p>
   * @public
   */
  MediaFormat?: MediaFormat | undefined;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   *          <p>For information on supported media formats, refer to the <code>MediaFormat</code>
   *             parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section
   *             in the Amazon S3 Developer Guide.</p>
   * @public
   */
  Media?: Media | undefined;

  /**
   * <p>Provides you with the Amazon S3 URI you can use to access your
   *             transcript.</p>
   * @public
   */
  Transcript?: MedicalTranscript | undefined;

  /**
   * <p>The date and time the specified medical transcription job began processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time the specified medical transcription job request was made.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time the specified medical transcription job finished processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>If <code>TranscriptionJobStatus</code> is <code>FAILED</code>,
   *                 <code>FailureReason</code> contains information about why the transcription job
   *             request failed.</p>
   *          <p>The <code>FailureReason</code> field contains one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Unsupported media format</code>.</p>
   *                <p>The media format specified in <code>MediaFormat</code> isn't valid. Refer to
   *                     refer to the <code>MediaFormat</code> parameter for a list of supported
   *                     formats.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>The media format provided does not match the detected media
   *                         format</code>.</p>
   *                <p>The media format specified in <code>MediaFormat</code> doesn't match the
   *                     format of the input file. Check the media format of your media file and correct
   *                     the specified value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid sample rate for audio file</code>.</p>
   *                <p>The sample rate specified in <code>MediaSampleRateHertz</code> isn't valid.
   *                     The sample rate must be between 16,000 and 48,000 hertz.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>The sample rate provided does not match the detected sample
   *                     rate</code>.</p>
   *                <p>The sample rate specified in <code>MediaSampleRateHertz</code> doesn't match
   *                     the sample rate detected in your input media file. Check the sample rate of your
   *                     media file and correct the specified value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid file size: file size too large</code>.</p>
   *                <p>The size of your media file is larger than what Amazon Transcribe can
   *                     process. For more information, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe">Service
   *                         quotas</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid number of channels: number of channels too large</code>.</p>
   *                <p>Your audio contains more channels than Amazon Transcribe is able to process.
   *                     For more information, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe">Service
   *                         quotas</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Provides information on any additional settings that were included in your request.
   *             Additional settings include channel identification, alternative transcriptions, speaker
   *             partitioning, custom vocabularies, and custom vocabulary filters.</p>
   * @public
   */
  Settings?: MedicalTranscriptionSetting | undefined;

  /**
   * <p>Indicates whether content identification was enabled for your transcription
   *             request.</p>
   * @public
   */
  ContentIdentificationType?: MedicalContentIdentificationType | undefined;

  /**
   * <p>Describes the medical specialty represented in your media.</p>
   * @public
   */
  Specialty?: Specialty | undefined;

  /**
   * <p>Indicates whether the input media is a dictation or a conversation, as specified in
   *             the <code>StartMedicalTranscriptionJob</code> request.</p>
   * @public
   */
  Type?: Type | undefined;

  /**
   * <p>The tags, each in the form of a key:value pair, assigned to the specified medical
   *             transcription job.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetMedicalTranscriptionJobResponse {
  /**
   * <p>Provides detailed information about the specified medical transcription job, including
   *             job status and, if applicable, failure reason.</p>
   * @public
   */
  MedicalTranscriptionJob?: MedicalTranscriptionJob | undefined;
}

/**
 * @public
 */
export interface GetMedicalVocabularyRequest {
  /**
   * <p>The name of the custom medical vocabulary you want information about. Custom medical
   *             vocabulary names are case sensitive.</p>
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface GetMedicalVocabularyResponse {
  /**
   * <p>The name of the custom medical vocabulary you requested information about.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The language code you selected for your custom medical vocabulary. US English
   *                 (<code>en-US</code>) is the only language supported with Amazon Transcribe
   *             Medical.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The processing state of your custom medical vocabulary. If the state is
   *                 <code>READY</code>, you can use the custom vocabulary in a
   *                 <code>StartMedicalTranscriptionJob</code> request.</p>
   * @public
   */
  VocabularyState?: VocabularyState | undefined;

  /**
   * <p>The date and time the specified custom medical vocabulary was last modified.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>If <code>VocabularyState</code> is <code>FAILED</code>, <code>FailureReason</code>
   *             contains information about why the custom medical vocabulary request failed. See also:
   *                 <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The Amazon S3 location where the specified custom medical vocabulary is stored; use this URI
   *             to view or download the custom vocabulary.</p>
   * @public
   */
  DownloadUri?: string | undefined;
}

/**
 * @public
 */
export interface GetTranscriptionJobRequest {
  /**
   * <p>The name of the transcription job you want information about. Job names are case
   *             sensitive.</p>
   * @public
   */
  TranscriptionJobName: string | undefined;
}

/**
 * <p>Makes it possible to control how your transcription job is processed. Currently, the
 *             only <code>JobExecutionSettings</code> modification you can choose is enabling job
 *             queueing using the <code>AllowDeferredExecution</code> sub-parameter.</p>
 *          <p>If you include <code>JobExecutionSettings</code> in your request, you must also
 *             include the sub-parameters: <code>AllowDeferredExecution</code> and
 *                 <code>DataAccessRoleArn</code>.</p>
 * @public
 */
export interface JobExecutionSettings {
  /**
   * <p>Makes it possible to enable job queuing when your concurrent request limit is
   *             exceeded. When <code>AllowDeferredExecution</code> is set to <code>true</code>,
   *             transcription job requests are placed in a queue until the number of jobs falls below
   *             the concurrent request limit. If <code>AllowDeferredExecution</code> is set to
   *                 <code>false</code> and the number of transcription job requests exceed the
   *             concurrent request limit, you get a <code>LimitExceededException</code> error.</p>
   *          <p>If you include <code>AllowDeferredExecution</code> in your request, you must also
   *             include <code>DataAccessRoleArn</code>.</p>
   * @public
   */
  AllowDeferredExecution?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files. If the role that you
   *             specify doesn’t have the appropriate permissions to access the specified Amazon S3
   *             location, your request fails.</p>
   *          <p>IAM role ARNs have the format
   *                 <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *                 <code>arn:aws:iam::111122223333:role/Admin</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM
   *                 ARNs</a>.</p>
   *          <p>Note that if you include <code>DataAccessRoleArn</code> in your request, you must also
   *             include <code>AllowDeferredExecution</code>.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;
}

/**
 * <p>Provides information on the speech contained in a discreet utterance when
 *             multi-language identification is enabled in your request. This utterance represents a
 *             block of speech consisting of one language, preceded or followed by a block of speech in
 *             a different language.</p>
 * @public
 */
export interface LanguageCodeItem {
  /**
   * <p>Provides the language code for each language identified in your media.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>Provides the total time, in seconds, each identified language is spoken in your
   *             media.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;
}

/**
 * <p>Provides the name of the custom language model that was included in the specified
 *             transcription job.</p>
 *          <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code>
 *             sub-parameter if you're <b>not</b> using automatic language
 *             identification (<code></code>). If using
 *                 <code>LanguageIdSettings</code> in your request, this parameter contains a
 *                 <code>LanguageModelName</code> sub-parameter.</p>
 * @public
 */
export interface ModelSettings {
  /**
   * <p>The name of the custom language model you want to use when processing your
   *             transcription job. Note that custom language model names are case sensitive.</p>
   *          <p>The language of the specified custom language model must match the language code that
   *             you specify in your transcription request. If the languages do not match, the custom
   *             language model isn't applied. There are no errors or warnings associated with a language
   *             mismatch.</p>
   * @public
   */
  LanguageModelName?: string | undefined;
}

/**
 * <p>Allows additional optional settings in your
 *             request, including channel identification, alternative transcriptions, and speaker
 *             partitioning. You can use that to apply custom vocabularies to your transcription
 *             job.</p>
 * @public
 */
export interface Settings {
  /**
   * <p>The name of the custom vocabulary you want to use in your transcription job request.
   *             This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>Enables speaker partitioning (diarization) in your transcription output. Speaker
   *             partitioning labels the speech from individual speakers in your media file.</p>
   *          <p>If you enable <code>ShowSpeakerLabels</code> in your request, you must also include
   *                 <code>MaxSpeakerLabels</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/diarization.html">Partitioning speakers
   *                 (diarization)</a>.</p>
   * @public
   */
  ShowSpeakerLabels?: boolean | undefined;

  /**
   * <p>Specify the maximum number of speakers you want to partition in your media.</p>
   *          <p>Note that if your media contains more speakers than the specified number, multiple
   *             speakers are treated as a single speaker.</p>
   *          <p>If you specify the <code>MaxSpeakerLabels</code> field, you must set the
   *                 <code>ShowSpeakerLabels</code> field to true.</p>
   * @public
   */
  MaxSpeakerLabels?: number | undefined;

  /**
   * <p>Enables channel identification in multi-channel audio.</p>
   *          <p>Channel identification transcribes the audio on each channel independently, then
   *             appends the output for each channel into one transcript.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/channel-id.html">Transcribing multi-channel
   *             audio</a>.</p>
   * @public
   */
  ChannelIdentification?: boolean | undefined;

  /**
   * <p>To include alternative transcriptions within your transcription output, include
   *                 <code>ShowAlternatives</code> in your transcription request.</p>
   *          <p>If you have multi-channel audio and do not enable channel identification, your audio
   *             is transcribed in a continuous manner and your transcript does not separate the speech
   *             by channel.</p>
   *          <p>If you include <code>ShowAlternatives</code>, you must also include
   *                 <code>MaxAlternatives</code>, which is the maximum number of alternative
   *             transcriptions you want Amazon Transcribe to generate.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html">Alternative
   *             transcriptions</a>.</p>
   * @public
   */
  ShowAlternatives?: boolean | undefined;

  /**
   * <p>Indicate the maximum number of alternative transcriptions you want Amazon Transcribe
   *             to include in your transcript.</p>
   *          <p>If you select a number greater than the number of alternative transcriptions generated
   *             by Amazon Transcribe, only the actual number of alternative transcriptions are
   *             included.</p>
   *          <p>If you include <code>MaxAlternatives</code> in your request, you must also include
   *                 <code>ShowAlternatives</code> with a value of <code>true</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-alternatives.html">Alternative
   *             transcriptions</a>.</p>
   * @public
   */
  MaxAlternatives?: number | undefined;

  /**
   * <p>The name of the custom vocabulary filter you want to use in your transcription job
   *             request. This name is case sensitive, cannot contain spaces, and must be unique within
   *             an Amazon Web Services account.</p>
   *          <p>Note that if you include <code>VocabularyFilterName</code> in your request, you must
   *             also include <code>VocabularyFilterMethod</code>.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Specify how you want your custom vocabulary filter applied to your transcript.</p>
   *          <p>To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>.</p>
   * @public
   */
  VocabularyFilterMethod?: VocabularyFilterMethod | undefined;
}

/**
 * @public
 * @enum
 */
export const SubtitleFormat = {
  SRT: "srt",
  VTT: "vtt",
} as const;

/**
 * @public
 */
export type SubtitleFormat = (typeof SubtitleFormat)[keyof typeof SubtitleFormat];

/**
 * <p>Provides information about your subtitle file, including format, start index, and
 *                 Amazon S3 location.</p>
 * @public
 */
export interface SubtitlesOutput {
  /**
   * <p>Provides the format of your subtitle files. If your request included both WebVTT
   *                 (<code>vtt</code>) and SubRip (<code>srt</code>) formats, both formats are
   *             shown.</p>
   * @public
   */
  Formats?: SubtitleFormat[] | undefined;

  /**
   * <p>The Amazon S3 location of your transcript. You can use this URI to access or
   *             download your subtitle file. Your subtitle file is stored in the same location as your
   *             transcript. If you specified both WebVTT and SubRip subtitle formats, two URIs are
   *             provided.</p>
   *          <p>If you included <code>OutputBucketName</code> in your transcription job request, this
   *             is the URI of that bucket. If you also included <code>OutputKey</code> in your request,
   *             your output is located in the path you specified in your request.</p>
   *          <p>If you didn't include <code>OutputBucketName</code> in your transcription job request,
   *             your subtitle file is stored in a service-managed bucket, and
   *                 <code>TranscriptFileUri</code> provides you with a temporary URI you can use for
   *             secure access to your subtitle file.</p>
   *          <note>
   *             <p>Temporary URIs for service-managed Amazon S3 buckets are only valid for 15
   *                 minutes. If you get an <code>AccesDenied</code> error, you can get a new temporary
   *                 URI by running a <code>GetTranscriptionJob</code> or
   *                     <code>ListTranscriptionJob</code> request.</p>
   *          </note>
   * @public
   */
  SubtitleFileUris?: string[] | undefined;

  /**
   * <p>Provides the start index value for your subtitle files. If you did not specify a value
   *             in your request, the default value of <code>0</code> is used.</p>
   * @public
   */
  OutputStartIndex?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ToxicityCategory = {
  ALL: "ALL",
} as const;

/**
 * @public
 */
export type ToxicityCategory = (typeof ToxicityCategory)[keyof typeof ToxicityCategory];

/**
 * <p>Contains <code>ToxicityCategories</code>, which is a required parameter if you
 *             want to enable toxicity detection (<code>ToxicityDetection</code>) in your transcription
 *             request.</p>
 * @public
 */
export interface ToxicityDetectionSettings {
  /**
   * <p> If you include <code>ToxicityDetection</code> in your transcription request, you
   *             must also include <code>ToxicityCategories</code>. The only accepted value for this
   *             parameter is <code>ALL</code>.</p>
   * @public
   */
  ToxicityCategories: ToxicityCategory[] | undefined;
}

/**
 * <p>Provides detailed information about a transcription job.</p>
 *          <p>To view the status of the specified transcription job, check the
 *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
 *             the job is finished and you can find the results at the location specified in
 *                 <code>TranscriptFileUri</code>. If the status is <code>FAILED</code>,
 *                 <code>FailureReason</code> provides details on why your transcription job
 *             failed.</p>
 *          <p>If you enabled content redaction, the redacted transcript can be found at the location
 *             specified in <code>RedactedTranscriptFileUri</code>.</p>
 * @public
 */
export interface TranscriptionJob {
  /**
   * <p>The name of the transcription job. Job names are case sensitive and must be unique
   *             within an Amazon Web Services account.</p>
   * @public
   */
  TranscriptionJobName?: string | undefined;

  /**
   * <p>Provides the status of the specified transcription job.</p>
   *          <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the
   *             results at the location specified in <code>TranscriptFileUri</code> (or
   *                 <code>RedactedTranscriptFileUri</code>, if you requested transcript redaction). If
   *             the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why
   *             your transcription job failed.</p>
   * @public
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | undefined;

  /**
   * <p>The language code used to create your transcription job. This parameter is used with
   *             single-language identification. For multi-language identification requests, refer to the
   *             plural version of this parameter, <code>LanguageCodes</code>.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The sample rate, in hertz, of the audio track in your input media file.</p>
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * <p>The format of the input media file.</p>
   * @public
   */
  MediaFormat?: MediaFormat | undefined;

  /**
   * <p>Provides the Amazon S3 location of the media file you used in your
   *             request.</p>
   * @public
   */
  Media?: Media | undefined;

  /**
   * <p>Provides you with the Amazon S3 URI you can use to access your
   *             transcript.</p>
   * @public
   */
  Transcript?: Transcript | undefined;

  /**
   * <p>The date and time the specified transcription job began processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time the specified transcription job request was made.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time the specified transcription job finished processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>If <code>TranscriptionJobStatus</code> is <code>FAILED</code>,
   *                 <code>FailureReason</code> contains information about why the transcription job
   *             request failed.</p>
   *          <p>The <code>FailureReason</code> field contains one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Unsupported media format</code>.</p>
   *                <p>The media format specified in <code>MediaFormat</code> isn't valid. Refer to
   *                     refer to the <code>MediaFormat</code> parameter for a list of supported
   *                     formats.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>The media format provided does not match the detected media
   *                         format</code>.</p>
   *                <p>The media format specified in <code>MediaFormat</code> doesn't match the
   *                     format of the input file. Check the media format of your media file and correct
   *                     the specified value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid sample rate for audio file</code>.</p>
   *                <p>The sample rate specified in <code>MediaSampleRateHertz</code> isn't valid.
   *                     The sample rate must be between 8,000 and 48,000 hertz.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>The sample rate provided does not match the detected sample
   *                     rate</code>.</p>
   *                <p>The sample rate specified in <code>MediaSampleRateHertz</code> doesn't match
   *                     the sample rate detected in your input media file. Check the sample rate of your
   *                     media file and correct the specified value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid file size: file size too large</code>.</p>
   *                <p>The size of your media file is larger than what Amazon Transcribe can
   *                     process. For more information, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe">Service
   *                         quotas</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Invalid number of channels: number of channels too large</code>.</p>
   *                <p>Your audio contains more channels than Amazon Transcribe is able to process.
   *                     For more information, refer to <a href="https://docs.aws.amazon.com/general/latest/gr/transcribe.html#limits-amazon-transcribe">Service
   *                         quotas</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Provides information on any additional settings that were included in your request.
   *             Additional settings include channel identification, alternative transcriptions, speaker
   *             partitioning, custom vocabularies, and custom vocabulary filters.</p>
   * @public
   */
  Settings?: Settings | undefined;

  /**
   * <p>Provides information on the custom language model you included in your request.</p>
   * @public
   */
  ModelSettings?: ModelSettings | undefined;

  /**
   * <p>Provides information about how your transcription job was processed. This parameter
   *             shows if your request was queued and what data access role was used.</p>
   * @public
   */
  JobExecutionSettings?: JobExecutionSettings | undefined;

  /**
   * <p>Indicates whether redaction was enabled in your transcript.</p>
   * @public
   */
  ContentRedaction?: ContentRedaction | undefined;

  /**
   * <p>Indicates whether automatic language identification was enabled (<code>TRUE</code>)
   *             for the specified transcription job.</p>
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * <p>Indicates whether automatic multi-language identification was enabled
   *                 (<code>TRUE</code>) for the specified transcription job.</p>
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * <p>Provides the language codes you specified in your request.</p>
   * @public
   */
  LanguageOptions?: LanguageCode[] | undefined;

  /**
   * <p>The confidence score associated with the language identified in your media
   *             file.</p>
   *          <p>Confidence scores are values between 0 and 1; a larger value indicates a higher
   *             probability that the identified language correctly matches the language spoken in your
   *             media.</p>
   * @public
   */
  IdentifiedLanguageScore?: number | undefined;

  /**
   * <p>The language codes used to create your transcription job. This parameter is used with
   *             multi-language identification. For single-language identification requests, refer to the
   *             singular version of this parameter, <code>LanguageCode</code>.</p>
   * @public
   */
  LanguageCodes?: LanguageCodeItem[] | undefined;

  /**
   * <p>The tags, each in the form of a key:value pair, assigned to the specified
   *             transcription job.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Indicates whether subtitles were generated with your transcription.</p>
   * @public
   */
  Subtitles?: SubtitlesOutput | undefined;

  /**
   * <p>Provides the name and language of all custom language models, custom vocabularies, and
   *             custom vocabulary filters that you included in your request.</p>
   * @public
   */
  LanguageIdSettings?: Partial<Record<LanguageCode, LanguageIdSettings>> | undefined;

  /**
   * <p>Provides information about the toxicity detection settings applied to your transcription.</p>
   * @public
   */
  ToxicityDetection?: ToxicityDetectionSettings[] | undefined;
}

/**
 * @public
 */
export interface GetTranscriptionJobResponse {
  /**
   * <p>Provides detailed information about the specified transcription job, including job
   *             status and, if applicable, failure reason.</p>
   * @public
   */
  TranscriptionJob?: TranscriptionJob | undefined;
}

/**
 * @public
 */
export interface GetVocabularyRequest {
  /**
   * <p>The name of the custom vocabulary you want information about. Custom vocabulary names
   *             are case sensitive.</p>
   * @public
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface GetVocabularyResponse {
  /**
   * <p>The name of the custom vocabulary you requested information about.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The language code you selected for your custom vocabulary.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The processing state of your custom vocabulary. If the state is <code>READY</code>,
   *             you can use the custom vocabulary in a <code>StartTranscriptionJob</code>
   *             request.</p>
   * @public
   */
  VocabularyState?: VocabularyState | undefined;

  /**
   * <p>The date and time the specified custom vocabulary was last modified.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>If <code>VocabularyState</code> is <code>FAILED</code>, <code>FailureReason</code>
   *             contains information about why the custom vocabulary request failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common
   *                 Errors</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The Amazon S3 location where the custom vocabulary is stored; use this URI to view or
   *             download the custom vocabulary.</p>
   * @public
   */
  DownloadUri?: string | undefined;
}

/**
 * @public
 */
export interface GetVocabularyFilterRequest {
  /**
   * <p>The name of the custom vocabulary filter you want information about. Custom vocabulary
   *             filter names are case sensitive.</p>
   * @public
   */
  VocabularyFilterName: string | undefined;
}

/**
 * @public
 */
export interface GetVocabularyFilterResponse {
  /**
   * <p>The name of the custom vocabulary filter you requested information about.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>The language code you selected for your custom vocabulary filter.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The date and time the specified custom vocabulary filter was last modified.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon S3 location where the custom vocabulary filter is stored; use this
   *             URI to view or download the custom vocabulary filter.</p>
   * @public
   */
  DownloadUri?: string | undefined;
}

/**
 * @public
 */
export interface ListCallAnalyticsCategoriesRequest {
  /**
   * <p>If your <code>ListCallAnalyticsCategories</code> request returns more results than can
   *             be displayed, <code>NextToken</code> is displayed in the response with an associated
   *             string. To get the next page of results, copy this string and repeat your request,
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of Call Analytics categories to return in each page of results. If
   *             there are fewer results than the value that you specify, only the actual results are
   *             returned. If you do not specify a value, a default of 5 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCallAnalyticsCategoriesResponse {
  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all
   *             results are displayed. To view the next set of results, copy the string associated with
   *             the <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides detailed information about your Call Analytics categories, including all the
   *             rules associated with each category.</p>
   * @public
   */
  Categories?: CategoryProperties[] | undefined;
}

/**
 * @public
 */
export interface ListCallAnalyticsJobsRequest {
  /**
   * <p>Returns only Call Analytics jobs with the specified status. Jobs are ordered by
   *             creation date, with the newest job first. If you do not include <code>Status</code>, all
   *             Call Analytics jobs are returned.</p>
   * @public
   */
  Status?: CallAnalyticsJobStatus | undefined;

  /**
   * <p>Returns only the Call Analytics jobs that contain the specified string. The search is
   *             not case sensitive.</p>
   * @public
   */
  JobNameContains?: string | undefined;

  /**
   * <p>If your <code>ListCallAnalyticsJobs</code> request returns more results than can be
   *             displayed, <code>NextToken</code> is displayed in the response with an associated
   *             string. To get the next page of results, copy this string and repeat your request,
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of Call Analytics jobs to return in each page of results. If there
   *             are fewer results than the value that you specify, only the actual results are returned.
   *             If you do not specify a value, a default of 5 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCallAnalyticsJobsResponse {
  /**
   * <p>Lists all Call Analytics jobs that have the status specified in your request. Jobs are
   *             ordered by creation date, with the newest job first.</p>
   * @public
   */
  Status?: CallAnalyticsJobStatus | undefined;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all
   *             results are displayed. To view the next set of results, copy the string associated with
   *             the <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides a summary of information about each result.</p>
   * @public
   */
  CallAnalyticsJobSummaries?: CallAnalyticsJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListLanguageModelsRequest {
  /**
   * <p>Returns only custom language models with the specified status. Language models are
   *             ordered by creation date, with the newest model first. If you do not include
   *                 <code>StatusEquals</code>, all custom language models are returned.</p>
   * @public
   */
  StatusEquals?: ModelStatus | undefined;

  /**
   * <p>Returns only the custom language models that contain the specified string. The search
   *             is not case sensitive.</p>
   * @public
   */
  NameContains?: string | undefined;

  /**
   * <p>If your <code>ListLanguageModels</code> request returns more results than can be
   *             displayed, <code>NextToken</code> is displayed in the response with an associated
   *             string. To get the next page of results, copy this string and repeat your request,
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of custom language models to return in each page of results. If
   *             there are fewer results than the value that you specify, only the actual results are
   *             returned. If you do not specify a value, a default of 5 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListLanguageModelsResponse {
  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all
   *             results are displayed. To view the next set of results, copy the string associated with
   *             the <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides information about the custom language models that match the criteria
   *             specified in your request.</p>
   * @public
   */
  Models?: LanguageModel[] | undefined;
}

/**
 * @public
 */
export interface ListMedicalScribeJobsRequest {
  /**
   * <p>Returns only Medical Scribe jobs with the specified status. Jobs are ordered by
   *             creation date, with the newest job first. If you do not include <code>Status</code>, all
   *             Medical Scribe jobs are returned.</p>
   * @public
   */
  Status?: MedicalScribeJobStatus | undefined;

  /**
   * <p>Returns only the Medical Scribe jobs that contain the specified string. The
   *             search is not case sensitive.</p>
   * @public
   */
  JobNameContains?: string | undefined;

  /**
   * <p>If your <code>ListMedicalScribeJobs</code> request returns more results than
   *             can be displayed, <code>NextToken</code> is displayed in the response with an associated
   *             string. To get the next page of results, copy this string and repeat your request,
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of Medical Scribe jobs to return in each page of results. If
   *             there are fewer results than the value that you specify, only the actual results are
   *             returned. If you do not specify a value, a default of 5 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides detailed information about a specific Medical Scribe job.</p>
 * @public
 */
export interface MedicalScribeJobSummary {
  /**
   * <p>The name of the Medical Scribe job. Job names are case sensitive and must be
   *             unique within an Amazon Web Services account.</p>
   * @public
   */
  MedicalScribeJobName?: string | undefined;

  /**
   * <p>The date and time the specified Medical Scribe job request was made.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a Medical Scribe job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time your Medical Scribe job began processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a Medical Scribe job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time the specified Medical Scribe job finished processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a Medical Scribe job
   *             that finished processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>The language code used to create your Medical Scribe job. US English
   *                 (<code>en-US</code>) is the only supported language for Medical Scribe jobs. </p>
   * @public
   */
  LanguageCode?: MedicalScribeLanguageCode | undefined;

  /**
   * <p>Provides the status of the specified Medical Scribe job.</p>
   *          <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the
   *             results at the location specified in <code>MedicalScribeOutput</code> If
   *             the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why
   *             your Medical Scribe job failed.</p>
   * @public
   */
  MedicalScribeJobStatus?: MedicalScribeJobStatus | undefined;

  /**
   * <p>If <code>MedicalScribeJobStatus</code> is <code>FAILED</code>,
   *             <code>FailureReason</code> contains information about why the transcription job
   *             failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListMedicalScribeJobsResponse {
  /**
   * <p>Lists all Medical Scribe jobs that have the status specified in your request.
   *             Jobs are ordered by creation date, with the newest job first.</p>
   * @public
   */
  Status?: MedicalScribeJobStatus | undefined;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all
   *             results are displayed. To view the next set of results, copy the string associated with
   *             the <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides a summary of information about each result.</p>
   * @public
   */
  MedicalScribeJobSummaries?: MedicalScribeJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMedicalTranscriptionJobsRequest {
  /**
   * <p>Returns only medical transcription jobs with the specified status. Jobs are ordered by
   *             creation date, with the newest job first. If you do not include <code>Status</code>, all
   *             medical transcription jobs are returned.</p>
   * @public
   */
  Status?: TranscriptionJobStatus | undefined;

  /**
   * <p>Returns only the medical transcription jobs that contain the specified string. The
   *             search is not case sensitive.</p>
   * @public
   */
  JobNameContains?: string | undefined;

  /**
   * <p>If your <code>ListMedicalTranscriptionJobs</code> request returns more results than
   *             can be displayed, <code>NextToken</code> is displayed in the response with an associated
   *             string. To get the next page of results, copy this string and repeat your request,
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of medical transcription jobs to return in each page of results. If
   *             there are fewer results than the value that you specify, only the actual results are
   *             returned. If you do not specify a value, a default of 5 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const OutputLocationType = {
  CUSTOMER_BUCKET: "CUSTOMER_BUCKET",
  SERVICE_BUCKET: "SERVICE_BUCKET",
} as const;

/**
 * @public
 */
export type OutputLocationType = (typeof OutputLocationType)[keyof typeof OutputLocationType];

/**
 * <p>Provides detailed information about a specific medical transcription job.</p>
 * @public
 */
export interface MedicalTranscriptionJobSummary {
  /**
   * <p>The name of the medical transcription job. Job names are case sensitive and must be
   *             unique within an Amazon Web Services account.</p>
   * @public
   */
  MedicalTranscriptionJobName?: string | undefined;

  /**
   * <p>The date and time the specified medical transcription job request was made.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time your medical transcription job began processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time the specified medical transcription job finished processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>The language code used to create your medical transcription. US English
   *                 (<code>en-US</code>) is the only supported language for medical
   *             transcriptions.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>Provides the status of your medical transcription job.</p>
   *          <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the
   *             results at the location specified in <code>TranscriptFileUri</code>. If the status is
   *                 <code>FAILED</code>, <code>FailureReason</code> provides details on why your
   *             transcription job failed.</p>
   * @public
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | undefined;

  /**
   * <p>If <code>TranscriptionJobStatus</code> is <code>FAILED</code>,
   *                 <code>FailureReason</code> contains information about why the transcription job
   *             failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Indicates where the specified medical transcription output is stored.</p>
   *          <p>If the value is <code>CUSTOMER_BUCKET</code>, the location is the Amazon S3
   *             bucket you specified using the <code>OutputBucketName</code> parameter in your  request. If you also included
   *                 <code>OutputKey</code> in your request, your output is located in the path you
   *             specified in your request.</p>
   *          <p>If the value is <code>SERVICE_BUCKET</code>, the location is a service-managed Amazon S3 bucket. To access a transcript stored in a service-managed bucket, use the
   *             URI shown in the <code>TranscriptFileUri</code> field.</p>
   * @public
   */
  OutputLocationType?: OutputLocationType | undefined;

  /**
   * <p>Provides the medical specialty represented in your media.</p>
   * @public
   */
  Specialty?: Specialty | undefined;

  /**
   * <p>Labels all personal health information (PHI) identified in your transcript. For more
   *             information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/phi-id.html">Identifying personal health information (PHI) in a transcription</a>.</p>
   * @public
   */
  ContentIdentificationType?: MedicalContentIdentificationType | undefined;

  /**
   * <p>Indicates whether the input media is a dictation or a conversation, as specified in
   *             the <code>StartMedicalTranscriptionJob</code> request.</p>
   * @public
   */
  Type?: Type | undefined;
}

/**
 * @public
 */
export interface ListMedicalTranscriptionJobsResponse {
  /**
   * <p>Lists all medical transcription jobs that have the status specified in your request.
   *             Jobs are ordered by creation date, with the newest job first.</p>
   * @public
   */
  Status?: TranscriptionJobStatus | undefined;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all
   *             results are displayed. To view the next set of results, copy the string associated with
   *             the <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides a summary of information about each result.</p>
   * @public
   */
  MedicalTranscriptionJobSummaries?: MedicalTranscriptionJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMedicalVocabulariesRequest {
  /**
   * <p>If your <code>ListMedicalVocabularies</code> request returns more results than can be
   *             displayed, <code>NextToken</code> is displayed in the response with an associated
   *             string. To get the next page of results, copy this string and repeat your request,
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of custom medical vocabularies to return in each page of results.
   *             If there are fewer results than the value that you specify, only the actual results are
   *             returned. If you do not specify a value, a default of 5 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Returns only custom medical vocabularies with the specified state. Custom vocabularies
   *             are ordered by creation date, with the newest vocabulary first. If you do not include
   *                 <code>StateEquals</code>, all custom medical vocabularies are returned.</p>
   * @public
   */
  StateEquals?: VocabularyState | undefined;

  /**
   * <p>Returns only the custom medical vocabularies that contain the specified string. The
   *             search is not case sensitive.</p>
   * @public
   */
  NameContains?: string | undefined;
}

/**
 * <p>Provides information about a custom vocabulary, including the language of the custom
 *             vocabulary, when it was last modified, its name, and the processing state.</p>
 * @public
 */
export interface VocabularyInfo {
  /**
   * <p>A unique name, chosen by you, for your custom vocabulary. This name is case sensitive,
   *             cannot contain spaces, and must be unique within an Amazon Web Services account.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The language code used to create your custom vocabulary. Each custom vocabulary must
   *             contain terms in only one language.</p>
   *          <p>A custom vocabulary can only be used to transcribe files in the same language as the
   *             custom vocabulary. For example, if you create a custom vocabulary using US English
   *                 (<code>en-US</code>), you can only apply this custom vocabulary to files that
   *             contain English audio.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The date and time the specified custom vocabulary was last modified.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The processing state of your custom vocabulary. If the state is <code>READY</code>,
   *             you can use the custom vocabulary in a <code>StartTranscriptionJob</code>
   *             request.</p>
   * @public
   */
  VocabularyState?: VocabularyState | undefined;
}

/**
 * @public
 */
export interface ListMedicalVocabulariesResponse {
  /**
   * <p>Lists all custom medical vocabularies that have the status specified in your request.
   *             Custom vocabularies are ordered by creation date, with the newest vocabulary
   *             first.</p>
   * @public
   */
  Status?: VocabularyState | undefined;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all
   *             results are displayed. To view the next set of results, copy the string associated with
   *             the <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides information about the custom medical vocabularies that match the criteria
   *             specified in your request.</p>
   * @public
   */
  Vocabularies?: VocabularyInfo[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Returns a list of all tags associated with the specified Amazon Resource Name (ARN).
   *             ARNs have the format
   *                 <code>arn:partition:service:region:account-id:resource-type/resource-id</code>.</p>
   *          <p>For example,
   *                 <code>arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name</code>.</p>
   *          <p>Valid values for <code>resource-type</code> are: <code>transcription-job</code>,
   *                 <code>medical-transcription-job</code>, <code>vocabulary</code>,
   *                 <code>medical-vocabulary</code>, <code>vocabulary-filter</code>, and
   *                 <code>language-model</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) specified in your request.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>Lists all tags associated with the given transcription job, vocabulary, model, or
   *             resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTranscriptionJobsRequest {
  /**
   * <p>Returns only transcription jobs with the specified status. Jobs are ordered by
   *             creation date, with the newest job first. If you do not include <code>Status</code>, all
   *             transcription jobs are returned.</p>
   * @public
   */
  Status?: TranscriptionJobStatus | undefined;

  /**
   * <p>Returns only the transcription jobs that contain the specified string. The search is
   *             not case sensitive.</p>
   * @public
   */
  JobNameContains?: string | undefined;

  /**
   * <p>If your <code>ListTranscriptionJobs</code> request returns more results than can be
   *             displayed, <code>NextToken</code> is displayed in the response with an associated
   *             string. To get the next page of results, copy this string and repeat your request,
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of transcription jobs to return in each page of results. If there
   *             are fewer results than the value that you specify, only the actual results are returned.
   *             If you do not specify a value, a default of 5 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides detailed information about a specific transcription job.</p>
 * @public
 */
export interface TranscriptionJobSummary {
  /**
   * <p>The name of the transcription job. Job names are case sensitive and must be unique
   *             within an Amazon Web Services account.</p>
   * @public
   */
  TranscriptionJobName?: string | undefined;

  /**
   * <p>The date and time the specified transcription job request was made.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time your transcription job began processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.789000-07:00</code> represents a transcription job
   *             that started processing at 12:32 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time the specified transcription job finished processing.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:33:13.922000-07:00</code> represents a transcription job
   *             that started processing at 12:33 PM UTC-7 on May 4, 2022.</p>
   * @public
   */
  CompletionTime?: Date | undefined;

  /**
   * <p>The language code used to create your transcription.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>Provides the status of your transcription job.</p>
   *          <p>If the status is <code>COMPLETED</code>, the job is finished and you can find the
   *             results at the location specified in <code>TranscriptFileUri</code> (or
   *                 <code>RedactedTranscriptFileUri</code>, if you requested transcript redaction). If
   *             the status is <code>FAILED</code>, <code>FailureReason</code> provides details on why
   *             your transcription job failed.</p>
   * @public
   */
  TranscriptionJobStatus?: TranscriptionJobStatus | undefined;

  /**
   * <p>If <code>TranscriptionJobStatus</code> is <code>FAILED</code>,
   *                 <code>FailureReason</code> contains information about why the transcription job
   *             failed. See also: <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>Indicates where the specified transcription output is stored.</p>
   *          <p>If the value is <code>CUSTOMER_BUCKET</code>, the location is the Amazon S3
   *             bucket you specified using the <code>OutputBucketName</code> parameter in your  request. If you also included
   *                 <code>OutputKey</code> in your request, your output is located in the path you
   *             specified in your request.</p>
   *          <p>If the value is <code>SERVICE_BUCKET</code>, the location is a service-managed Amazon S3 bucket. To access a transcript stored in a service-managed bucket, use the
   *             URI shown in the <code>TranscriptFileUri</code> or
   *                 <code>RedactedTranscriptFileUri</code> field.</p>
   * @public
   */
  OutputLocationType?: OutputLocationType | undefined;

  /**
   * <p>The content redaction settings of the transcription job.</p>
   * @public
   */
  ContentRedaction?: ContentRedaction | undefined;

  /**
   * <p>Provides the name of the custom language model that was included in the specified
   *             transcription job.</p>
   *          <p>Only use <code>ModelSettings</code> with the <code>LanguageModelName</code>
   *             sub-parameter if you're <b>not</b> using automatic language
   *             identification (<code></code>). If using
   *                 <code>LanguageIdSettings</code> in your request, this parameter contains a
   *                 <code>LanguageModelName</code> sub-parameter.</p>
   * @public
   */
  ModelSettings?: ModelSettings | undefined;

  /**
   * <p>Indicates whether automatic language identification was enabled (<code>TRUE</code>)
   *             for the specified transcription job.</p>
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * <p>Indicates whether automatic multi-language identification was enabled
   *                 (<code>TRUE</code>) for the specified transcription job.</p>
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * <p>The confidence score associated with the language identified in your media
   *             file.</p>
   *          <p>Confidence scores are values between 0 and 1; a larger value indicates a higher
   *             probability that the identified language correctly matches the language spoken in your
   *             media.</p>
   * @public
   */
  IdentifiedLanguageScore?: number | undefined;

  /**
   * <p>The language codes used to create your transcription job. This parameter is used with
   *             multi-language identification. For single-language identification, the singular version
   *             of this parameter, <code>LanguageCode</code>, is present.</p>
   * @public
   */
  LanguageCodes?: LanguageCodeItem[] | undefined;

  /**
   * <p>Indicates whether toxicity detection was enabled for the specified transcription
   *             job.</p>
   * @public
   */
  ToxicityDetection?: ToxicityDetectionSettings[] | undefined;
}

/**
 * @public
 */
export interface ListTranscriptionJobsResponse {
  /**
   * <p>Lists all transcription jobs that have the status specified in your request. Jobs are
   *             ordered by creation date, with the newest job first.</p>
   * @public
   */
  Status?: TranscriptionJobStatus | undefined;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all
   *             results are displayed. To view the next set of results, copy the string associated with
   *             the <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides a summary of information about each result.</p>
   * @public
   */
  TranscriptionJobSummaries?: TranscriptionJobSummary[] | undefined;
}

/**
 * @public
 */
export interface ListVocabulariesRequest {
  /**
   * <p>If your <code>ListVocabularies</code> request returns more results than can be
   *             displayed, <code>NextToken</code> is displayed in the response with an associated
   *             string. To get the next page of results, copy this string and repeat your request,
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of custom vocabularies to return in each page of results. If there
   *             are fewer results than the value that you specify, only the actual results are returned.
   *             If you do not specify a value, a default of 5 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Returns only custom vocabularies with the specified state. Vocabularies are ordered by
   *             creation date, with the newest vocabulary first. If you do not include
   *                 <code>StateEquals</code>, all custom medical vocabularies are returned.</p>
   * @public
   */
  StateEquals?: VocabularyState | undefined;

  /**
   * <p>Returns only the custom vocabularies that contain the specified string. The search is
   *             not case sensitive.</p>
   * @public
   */
  NameContains?: string | undefined;
}

/**
 * @public
 */
export interface ListVocabulariesResponse {
  /**
   * <p>Lists all custom vocabularies that have the status specified in your request.
   *             Vocabularies are ordered by creation date, with the newest vocabulary first.</p>
   * @public
   */
  Status?: VocabularyState | undefined;

  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all
   *             results are displayed. To view the next set of results, copy the string associated with
   *             the <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides information about the custom vocabularies that match the criteria specified
   *             in your request.</p>
   * @public
   */
  Vocabularies?: VocabularyInfo[] | undefined;
}

/**
 * @public
 */
export interface ListVocabularyFiltersRequest {
  /**
   * <p>If your <code>ListVocabularyFilters</code> request returns more results than can be
   *             displayed, <code>NextToken</code> is displayed in the response with an associated
   *             string. To get the next page of results, copy this string and repeat your request,
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of custom vocabulary filters to return in each page of results. If
   *             there are fewer results than the value that you specify, only the actual results are
   *             returned. If you do not specify a value, a default of 5 is used.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Returns only the custom vocabulary filters that contain the specified string. The
   *             search is not case sensitive.</p>
   * @public
   */
  NameContains?: string | undefined;
}

/**
 * <p>Provides information about a custom vocabulary filter, including the language of the
 *             filter, when it was last modified, and its name.</p>
 * @public
 */
export interface VocabularyFilterInfo {
  /**
   * <p>A unique name, chosen by you, for your custom vocabulary filter. This name is case
   *             sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in your vocabulary
   *             filter. Each custom vocabulary filter must contain terms in only one language.</p>
   *          <p>A custom vocabulary filter can only be used to transcribe files in the same language
   *             as the filter. For example, if you create a custom vocabulary filter using US English
   *                 (<code>en-US</code>), you can only apply this filter to files that contain English
   *             audio.</p>
   *          <p>For a list of supported languages and their associated language codes, refer to the
   *                 <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The date and time the specified custom vocabulary filter was last modified.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListVocabularyFiltersResponse {
  /**
   * <p>If <code>NextToken</code> is present in your response, it indicates that not all
   *             results are displayed. To view the next set of results, copy the string associated with
   *             the <code>NextToken</code> parameter in your results output, then run your request again
   *             including <code>NextToken</code> with the value of the copied string. Repeat as needed
   *             to view all your results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Provides information about the custom vocabulary filters that match the criteria
   *             specified in your request.</p>
   * @public
   */
  VocabularyFilters?: VocabularyFilterInfo[] | undefined;
}

/**
 * @public
 */
export interface StartCallAnalyticsJobRequest {
  /**
   * <p>A unique name, chosen by you, for your Call Analytics job.</p>
   *          <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *                 Amazon Web Services account. If you try to create a new job with the same name as an
   *             existing job, you get a <code>ConflictException</code> error.</p>
   * @public
   */
  CallAnalyticsJobName: string | undefined;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             Call Analytics request.</p>
   * @public
   */
  Media: Media | undefined;

  /**
   * <p>The Amazon S3 location where you want your Call Analytics transcription output
   *             stored. You can use any of the following formats to specify the output location:</p>
   *          <ol>
   *             <li>
   *                <p>s3://DOC-EXAMPLE-BUCKET</p>
   *             </li>
   *             <li>
   *                <p>s3://DOC-EXAMPLE-BUCKET/my-output-folder/</p>
   *             </li>
   *             <li>
   *                <p>s3://DOC-EXAMPLE-BUCKET/my-output-folder/my-call-analytics-job.json</p>
   *             </li>
   *          </ol>
   *          <p>Unless you specify a file name (option 3), the name of your output file has a default
   *             value that matches the name you specified for your transcription job using the
   *                 <code>CallAnalyticsJobName</code> parameter.</p>
   *          <p>You can specify a KMS key to encrypt your output using the
   *                 <code>OutputEncryptionKMSKeyId</code> parameter. If you do not specify a KMS key, Amazon Transcribe uses the default Amazon S3 key for
   *             server-side encryption.</p>
   *          <p>If you do not specify <code>OutputLocation</code>, your transcript is placed in a
   *             service-managed Amazon S3 bucket and you are provided with a URI to access your
   *             transcript.</p>
   * @public
   */
  OutputLocation?: string | undefined;

  /**
   * <p>The KMS key you want to use to encrypt your Call Analytics
   *             output.</p>
   *          <p>If using a key located in the <b>current</b>
   *             Amazon Web Services account, you can specify your KMS key in one of four
   *             ways:</p>
   *          <ol>
   *             <li>
   *                <p>Use the KMS key ID itself. For example,
   *                         <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use an alias for the KMS key ID. For example,
   *                         <code>alias/ExampleAlias</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the Amazon Resource Name (ARN) for the KMS key ID. For
   *                     example,
   *                         <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *                         <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *          <p>If using a key located in a <b>different</b>
   *             Amazon Web Services account than the current Amazon Web Services account, you can specify
   *             your KMS key in one of two ways:</p>
   *          <ol>
   *             <li>
   *                <p>Use the ARN for the KMS key ID. For example,
   *                         <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *                         <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *          <p>If you do not specify an encryption key, your output is encrypted with the default
   *                 Amazon S3 key (SSE-S3).</p>
   *          <p>If you specify a KMS key to encrypt your output, you must also specify
   *             an output location using the <code>OutputLocation</code> parameter.</p>
   *          <p>Note that the role making the  request must
   *             have permission to use the specified KMS key.</p>
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files. If the role that you
   *             specify doesn’t have the appropriate permissions to access the specified Amazon S3 location, your request fails.</p>
   *          <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM
   *             ARNs</a>.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;

  /**
   * <p>Specify additional optional settings in your  request, including content redaction; allows you to apply custom language models,
   *             vocabulary filters, and custom vocabularies to your Call Analytics job.</p>
   * @public
   */
  Settings?: CallAnalyticsJobSettings | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new
   *             call analytics job at the time you start this new job.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *             resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Makes it possible to specify which speaker is on which channel. For example, if your
   *             agent is the first participant to speak, you would set <code>ChannelId</code> to
   *                 <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to
   *                 <code>AGENT</code> (to indicate that it's the agent speaking).</p>
   * @public
   */
  ChannelDefinitions?: ChannelDefinition[] | undefined;
}

/**
 * @public
 */
export interface StartCallAnalyticsJobResponse {
  /**
   * <p>Provides detailed information about the current Call Analytics job, including job
   *             status and, if applicable, failure reason.</p>
   * @public
   */
  CallAnalyticsJob?: CallAnalyticsJob | undefined;
}

/**
 * @public
 */
export interface StartMedicalScribeJobRequest {
  /**
   * <p>A unique name, chosen by you, for your Medical Scribe job.</p>
   *          <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *                 Amazon Web Services account. If you try to create a new job with the same name as an
   *             existing job, you get a <code>ConflictException</code> error.</p>
   * @public
   */
  MedicalScribeJobName: string | undefined;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   *          <p>For information on supported media formats, refer to the <code>MediaFormat</code>
   *             parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section
   *             in the Amazon S3 Developer Guide.</p>
   * @public
   */
  Media: Media | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where you want your Medical Scribe
   *             output stored. Do not include the <code>S3://</code> prefix of the specified
   *             bucket.</p>
   *          <p>Note that the role specified in the <code>DataAccessRoleArn</code> request parameter
   *             must have permission to use the specified location. You
   *             can change Amazon S3 permissions using the <a href="https://console.aws.amazon.com/s3">Amazon Web Services Management Console</a>. See also <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions Required for IAM User Roles</a>.</p>
   * @public
   */
  OutputBucketName: string | undefined;

  /**
   * <p>The KMS key you want to use to encrypt your Medical Scribe
   *             output.</p>
   *          <p>If using a key located in the <b>current</b>
   *             Amazon Web Services account, you can specify your KMS key in one of four
   *             ways:</p>
   *          <ol>
   *             <li>
   *                <p>Use the KMS key ID itself. For example,
   *                         <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use an alias for the KMS key ID. For example,
   *                         <code>alias/ExampleAlias</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the Amazon Resource Name (ARN) for the KMS key ID. For
   *                     example,
   *                         <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *                         <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *          <p>If using a key located in a <b>different</b>
   *             Amazon Web Services account than the current Amazon Web Services account, you can specify
   *             your KMS key in one of two ways:</p>
   *          <ol>
   *             <li>
   *                <p>Use the ARN for the KMS key ID. For example,
   *                         <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *                         <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *          <p>If you do not specify an encryption key, your output is encrypted with the default
   *                 Amazon S3 key (SSE-S3).</p>
   *          <p>Note that the role specified in the <code>DataAccessRoleArn</code> request parameter
   *             must have permission to use the specified KMS key.</p>
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;

  /**
   * <p>A map of plain text, non-secret key:value pairs, known as encryption context pairs,
   *             that provide an added layer of security for your data. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context">KMS encryption context</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/symmetric-asymmetric.html">Asymmetric keys in KMS</a>.</p>
   * @public
   */
  KMSEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files,
   *             write to the output bucket, and use your KMS key if supplied.
   *              If the role that you specify doesn’t have the appropriate permissions your request fails.</p>
   *          <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM
   *             ARNs</a>.</p>
   * @public
   */
  DataAccessRoleArn: string | undefined;

  /**
   * <p>Makes it possible to control how your Medical Scribe job is processed using a
   *             <code>MedicalScribeSettings</code> object. Specify <code>ChannelIdentification</code> if
   *             <code>ChannelDefinitions</code> are set. Enabled <code>ShowSpeakerLabels</code> if <code>ChannelIdentification</code>
   *             and <code>ChannelDefinitions</code> are not set. One and only one of <code>ChannelIdentification</code> and <code>ShowSpeakerLabels</code>
   *             must be set. If <code>ShowSpeakerLabels</code> is set, <code>MaxSpeakerLabels</code> must also be set. Use <code>Settings</code>
   *             to specify a vocabulary or vocabulary filter or both using <code>VocabularyName</code>, <code>VocabularyFilterName</code>.
   *             <code>VocabularyFilterMethod</code> must be specified if <code>VocabularyFilterName</code> is set.
   *         </p>
   * @public
   */
  Settings: MedicalScribeSettings | undefined;

  /**
   * <p>Makes it possible to specify which speaker is on which channel. For example, if the clinician
   *              is the first participant to speak, you would set <code>ChannelId</code> of the first <code>ChannelDefinition</code>
   *              in the list to <code>0</code> (to indicate the first channel) and <code>ParticipantRole</code> to
   *                 <code>CLINICIAN</code> (to indicate that it's the clinician speaking).
   *                 Then you would set the <code>ChannelId</code> of the second <code>ChannelDefinition</code> in the list to
   *                 <code>1</code> (to indicate the second channel) and <code>ParticipantRole</code> to
   *                 <code>PATIENT</code> (to indicate that it's the patient speaking).
   *                 </p>
   * @public
   */
  ChannelDefinitions?: MedicalScribeChannelDefinition[] | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to the Medica Scribe job.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartMedicalScribeJobResponse {
  /**
   * <p>Provides detailed information about the current Medical Scribe job, including
   *             job status and, if applicable, failure reason.</p>
   * @public
   */
  MedicalScribeJob?: MedicalScribeJob | undefined;
}

/**
 * @public
 */
export interface StartMedicalTranscriptionJobRequest {
  /**
   * <p>A unique name, chosen by you, for your medical transcription job. The name that you
   *             specify is also used as the default name of your transcription output file. If you want
   *             to specify a different name for your transcription output, use the
   *                 <code>OutputKey</code> parameter.</p>
   *          <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *                 Amazon Web Services account. If you try to create a new job with the same name as an
   *             existing job, you get a <code>ConflictException</code> error.</p>
   * @public
   */
  MedicalTranscriptionJobName: string | undefined;

  /**
   * <p>The language code that represents the language spoken in the input media file. US
   *             English (<code>en-US</code>) is the only valid value for medical transcription jobs. Any
   *             other value you enter for language code results in a <code>BadRequestException</code>
   *             error.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>The sample rate, in hertz, of the audio track in your input media file.</p>
   *          <p>If you do not specify the media sample rate, Amazon Transcribe Medical determines it
   *             for you. If you specify the sample rate, it must match the rate detected by Amazon Transcribe Medical; if there's a mismatch between the value that you specify and the
   *             value detected, your job fails. Therefore, in most cases, it's advised to omit
   *                 <code>MediaSampleRateHertz</code> and let Amazon Transcribe Medical determine the
   *             sample rate.</p>
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * <p>Specify the format of your input media file.</p>
   * @public
   */
  MediaFormat?: MediaFormat | undefined;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   *          <p>For information on supported media formats, refer to the <code>MediaFormat</code>
   *             parameter or the <a href="https://docs.aws.amazon.com/transcribe/latest/dg/how-input.html#how-input-audio">Media formats</a> section
   *             in the Amazon S3 Developer Guide.</p>
   * @public
   */
  Media: Media | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where you want your medical transcription
   *             output stored. Do not include the <code>S3://</code> prefix of the specified
   *             bucket.</p>
   *          <p>If you want your output to go to a sub-folder of this bucket, specify it using the
   *                 <code>OutputKey</code> parameter; <code>OutputBucketName</code> only accepts the
   *             name of a bucket.</p>
   *          <p>For example, if you want your output stored in <code>S3://DOC-EXAMPLE-BUCKET</code>,
   *             set <code>OutputBucketName</code> to <code>DOC-EXAMPLE-BUCKET</code>. However, if you
   *             want your output stored in <code>S3://DOC-EXAMPLE-BUCKET/test-files/</code>, set
   *                 <code>OutputBucketName</code> to <code>DOC-EXAMPLE-BUCKET</code> and
   *                 <code>OutputKey</code> to <code>test-files/</code>.</p>
   *          <p>Note that Amazon Transcribe must have permission to use the specified location. You
   *             can change Amazon S3 permissions using the <a href="https://console.aws.amazon.com/s3">Amazon Web Services Management Console</a>. See also <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions Required for IAM User Roles</a>.</p>
   * @public
   */
  OutputBucketName: string | undefined;

  /**
   * <p>Use in combination with <code>OutputBucketName</code> to specify the output location
   *             of your transcript and, optionally, a unique name for your output file. The default name
   *             for your transcription output is the same as the name you specified for your medical
   *             transcription job (<code>MedicalTranscriptionJobName</code>).</p>
   *          <p>Here are some examples of how you can use <code>OutputKey</code>:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify 'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code> and
   *                     'my-transcript.json' as the <code>OutputKey</code>, your transcription output
   *                     path is <code>s3://DOC-EXAMPLE-BUCKET/my-transcript.json</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify 'my-first-transcription' as the
   *                         <code>MedicalTranscriptionJobName</code>, 'DOC-EXAMPLE-BUCKET' as the
   *                         <code>OutputBucketName</code>, and 'my-transcript' as the
   *                         <code>OutputKey</code>, your transcription output path is
   *                         <code>s3://DOC-EXAMPLE-BUCKET/my-transcript/my-first-transcription.json</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify 'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code> and
   *                     'test-files/my-transcript.json' as the <code>OutputKey</code>, your
   *                     transcription output path is
   *                         <code>s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript.json</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify 'my-first-transcription' as the
   *                         <code>MedicalTranscriptionJobName</code>, 'DOC-EXAMPLE-BUCKET' as the
   *                         <code>OutputBucketName</code>, and 'test-files/my-transcript' as the
   *                         <code>OutputKey</code>, your transcription output path is
   *                         <code>s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript/my-first-transcription.json</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify the name of an Amazon S3 bucket sub-folder that doesn't exist,
   *             one is created for you.</p>
   * @public
   */
  OutputKey?: string | undefined;

  /**
   * <p>The KMS key you want to use to encrypt your medical transcription
   *             output.</p>
   *          <p>If using a key located in the <b>current</b>
   *             Amazon Web Services account, you can specify your KMS key in one of four
   *             ways:</p>
   *          <ol>
   *             <li>
   *                <p>Use the KMS key ID itself. For example,
   *                         <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use an alias for the KMS key ID. For example,
   *                         <code>alias/ExampleAlias</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the Amazon Resource Name (ARN) for the KMS key ID. For
   *                     example,
   *                         <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *                         <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *          <p>If using a key located in a <b>different</b>
   *             Amazon Web Services account than the current Amazon Web Services account, you can specify
   *             your KMS key in one of two ways:</p>
   *          <ol>
   *             <li>
   *                <p>Use the ARN for the KMS key ID. For example,
   *                         <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *                         <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *          <p>If you do not specify an encryption key, your output is encrypted with the default
   *                 Amazon S3 key (SSE-S3).</p>
   *          <p>If you specify a KMS key to encrypt your output, you must also specify
   *             an output location using the <code>OutputLocation</code> parameter.</p>
   *          <p>Note that the role making the  request must
   *             have permission to use the specified KMS key.</p>
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;

  /**
   * <p>A map of plain text, non-secret key:value pairs, known as encryption context pairs,
   *             that provide an added layer of security for your data. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context">KMS encryption context</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/symmetric-asymmetric.html">Asymmetric keys in KMS</a>.</p>
   * @public
   */
  KMSEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>Specify additional optional settings in your  request, including channel
   *             identification, alternative transcriptions, and speaker partitioning. You can use that to
   *             apply custom vocabularies to your transcription job.</p>
   * @public
   */
  Settings?: MedicalTranscriptionSetting | undefined;

  /**
   * <p>Labels all personal health information (PHI) identified in your transcript. For more
   *             information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/phi-id.html">Identifying personal health information (PHI) in a transcription</a>.</p>
   * @public
   */
  ContentIdentificationType?: MedicalContentIdentificationType | undefined;

  /**
   * <p>Specify the predominant medical specialty represented in your media. For batch
   *             transcriptions, <code>PRIMARYCARE</code> is the only valid value. If you require
   *             additional specialties, refer to .</p>
   * @public
   */
  Specialty: Specialty | undefined;

  /**
   * <p>Specify whether your input media contains only one person (<code>DICTATION</code>) or
   *             contains a conversation between two people (<code>CONVERSATION</code>).</p>
   *          <p>For example, <code>DICTATION</code> could be used for a medical professional wanting
   *             to transcribe voice memos; <code>CONVERSATION</code> could be used for transcribing the
   *             doctor-patient dialogue during the patient's office visit.</p>
   * @public
   */
  Type: Type | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new medical
   *             transcription job at the time you start this new job.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartMedicalTranscriptionJobResponse {
  /**
   * <p>Provides detailed information about the current medical transcription job, including
   *             job status and, if applicable, failure reason.</p>
   * @public
   */
  MedicalTranscriptionJob?: MedicalTranscriptionJob | undefined;
}

/**
 * <p>Generate subtitles for your media file with your transcription request.</p>
 *          <p>You can choose a start index of 0 or 1, and you can specify either WebVTT or SubRip
 *             (or both) as your output format.</p>
 *          <p>Note that your subtitle files are placed in the same location as your transcription
 *             output.</p>
 * @public
 */
export interface Subtitles {
  /**
   * <p>Specify the output format for your subtitle file; if you select both WebVTT
   *                 (<code>vtt</code>) and SubRip (<code>srt</code>) formats, two output files are
   *             generated.</p>
   * @public
   */
  Formats?: SubtitleFormat[] | undefined;

  /**
   * <p>Specify the starting value that is assigned to the first subtitle segment.</p>
   *          <p>The default start index for Amazon Transcribe is <code>0</code>, which differs from
   *             the more widely used standard of <code>1</code>. If you're uncertain which value to use,
   *             we recommend choosing <code>1</code>, as this may improve compatibility with other
   *             services.</p>
   * @public
   */
  OutputStartIndex?: number | undefined;
}

/**
 * @public
 */
export interface StartTranscriptionJobRequest {
  /**
   * <p>A unique name, chosen by you, for your transcription job. The name that you specify is
   *             also used as the default name of your transcription output file. If you want to specify
   *             a different name for your transcription output, use the <code>OutputKey</code>
   *             parameter.</p>
   *          <p>This name is case sensitive, cannot contain spaces, and must be unique within an
   *                 Amazon Web Services account. If you try to create a new job with the same name as an
   *             existing job, you get a <code>ConflictException</code> error.</p>
   * @public
   */
  TranscriptionJobName: string | undefined;

  /**
   * <p>The language code that represents the language spoken in the input media file.</p>
   *          <p>If you're unsure of the language spoken in your media file, consider using
   *                 <code>IdentifyLanguage</code> or <code>IdentifyMultipleLanguages</code> to enable
   *             automatic language identification.</p>
   *          <p>Note that you must include one of <code>LanguageCode</code>,
   *                 <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code> in your
   *             request. If you include more than one of these parameters, your transcription job
   *             fails.</p>
   *          <p>For a list of supported languages and their associated language codes, refer to the
   *                 <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table.</p>
   *          <note>
   *             <p>To transcribe speech in Modern Standard Arabic (<code>ar-SA</code>) in Amazon Web Services GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud (US) (US-East, us-gov-east-1), Canada (Calgary, ca-west-1) and Africa (Cape Town, af-south-1), your media
   *                 file must be encoded at a sample rate of 16,000 Hz or higher.</p>
   *          </note>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The sample rate, in hertz, of the audio track in your input media file.</p>
   *          <p>If you do not specify the media sample rate, Amazon Transcribe determines it for you.
   *             If you specify the sample rate, it must match the rate detected by Amazon Transcribe.
   *             If there's a mismatch between the value that you specify and the value detected, your
   *             job fails. In most cases, you can omit <code>MediaSampleRateHertz</code> and let Amazon Transcribe determine the sample rate.</p>
   * @public
   */
  MediaSampleRateHertz?: number | undefined;

  /**
   * <p>Specify the format of your input media file.</p>
   * @public
   */
  MediaFormat?: MediaFormat | undefined;

  /**
   * <p>Describes the Amazon S3 location of the media file you want to use in your
   *             request.</p>
   * @public
   */
  Media: Media | undefined;

  /**
   * <p>The name of the Amazon S3 bucket where you want your transcription output
   *             stored. Do not include the <code>S3://</code> prefix of the specified bucket.</p>
   *          <p>If you want your output to go to a sub-folder of this bucket, specify it using the
   *                 <code>OutputKey</code> parameter; <code>OutputBucketName</code> only accepts the
   *             name of a bucket.</p>
   *          <p>For example, if you want your output stored in <code>S3://DOC-EXAMPLE-BUCKET</code>,
   *             set <code>OutputBucketName</code> to <code>DOC-EXAMPLE-BUCKET</code>. However, if you
   *             want your output stored in <code>S3://DOC-EXAMPLE-BUCKET/test-files/</code>, set
   *                 <code>OutputBucketName</code> to <code>DOC-EXAMPLE-BUCKET</code> and
   *                 <code>OutputKey</code> to <code>test-files/</code>.</p>
   *          <p>Note that Amazon Transcribe must have permission to use the specified location. You
   *             can change Amazon S3 permissions using the <a href="https://console.aws.amazon.com/s3">Amazon Web Services Management Console</a>. See also <a href="https://docs.aws.amazon.com/transcribe/latest/dg/security_iam_id-based-policy-examples.html#auth-role-iam-user">Permissions Required for IAM User Roles</a>.</p>
   *          <p>If you do not specify <code>OutputBucketName</code>, your transcript is placed in a
   *             service-managed Amazon S3 bucket and you are provided with a URI to access your
   *             transcript.</p>
   * @public
   */
  OutputBucketName?: string | undefined;

  /**
   * <p>Use in combination with <code>OutputBucketName</code> to specify the output location
   *             of your transcript and, optionally, a unique name for your output file. The default name
   *             for your transcription output is the same as the name you specified for your
   *             transcription job (<code>TranscriptionJobName</code>).</p>
   *          <p>Here are some examples of how you can use <code>OutputKey</code>:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify 'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code> and
   *                     'my-transcript.json' as the <code>OutputKey</code>, your transcription output
   *                     path is <code>s3://DOC-EXAMPLE-BUCKET/my-transcript.json</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify 'my-first-transcription' as the
   *                         <code>TranscriptionJobName</code>, 'DOC-EXAMPLE-BUCKET' as the
   *                         <code>OutputBucketName</code>, and 'my-transcript' as the
   *                         <code>OutputKey</code>, your transcription output path is
   *                         <code>s3://DOC-EXAMPLE-BUCKET/my-transcript/my-first-transcription.json</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify 'DOC-EXAMPLE-BUCKET' as the <code>OutputBucketName</code> and
   *                     'test-files/my-transcript.json' as the <code>OutputKey</code>, your
   *                     transcription output path is
   *                         <code>s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript.json</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you specify 'my-first-transcription' as the
   *                         <code>TranscriptionJobName</code>, 'DOC-EXAMPLE-BUCKET' as the
   *                         <code>OutputBucketName</code>, and 'test-files/my-transcript' as the
   *                         <code>OutputKey</code>, your transcription output path is
   *                         <code>s3://DOC-EXAMPLE-BUCKET/test-files/my-transcript/my-first-transcription.json</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify the name of an Amazon S3 bucket sub-folder that doesn't exist,
   *             one is created for you.</p>
   * @public
   */
  OutputKey?: string | undefined;

  /**
   * <p>The KMS key you want to use to encrypt your transcription
   *             output.</p>
   *          <p>If using a key located in the <b>current</b>
   *             Amazon Web Services account, you can specify your KMS key in one of four
   *             ways:</p>
   *          <ol>
   *             <li>
   *                <p>Use the KMS key ID itself. For example,
   *                         <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use an alias for the KMS key ID. For example,
   *                         <code>alias/ExampleAlias</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the Amazon Resource Name (ARN) for the KMS key ID. For
   *                     example,
   *                         <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *                         <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *          <p>If using a key located in a <b>different</b>
   *             Amazon Web Services account than the current Amazon Web Services account, you can specify
   *             your KMS key in one of two ways:</p>
   *          <ol>
   *             <li>
   *                <p>Use the ARN for the KMS key ID. For example,
   *                         <code>arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>.</p>
   *             </li>
   *             <li>
   *                <p>Use the ARN for the KMS key alias. For example,
   *                         <code>arn:aws:kms:region:account-ID:alias/ExampleAlias</code>.</p>
   *             </li>
   *          </ol>
   *          <p>If you do not specify an encryption key, your output is encrypted with the default
   *                 Amazon S3 key (SSE-S3).</p>
   *          <p>If you specify a KMS key to encrypt your output, you must also specify
   *             an output location using the <code>OutputLocation</code> parameter.</p>
   *          <p>Note that the role making the  request must
   *             have permission to use the specified KMS key.</p>
   * @public
   */
  OutputEncryptionKMSKeyId?: string | undefined;

  /**
   * <p>A map of plain text, non-secret key:value pairs, known as encryption context pairs,
   *             that provide an added layer of security for your data. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/key-management.html#kms-context">KMS encryption context</a> and <a href="https://docs.aws.amazon.com/transcribe/latest/dg/symmetric-asymmetric.html">Asymmetric keys in KMS</a>.</p>
   * @public
   */
  KMSEncryptionContext?: Record<string, string> | undefined;

  /**
   * <p>Specify additional optional settings in your
   *             request, including channel identification, alternative transcriptions, speaker
   *             partitioning. You can use that to apply custom vocabularies and vocabulary filters.</p>
   *          <p>If you want to include a custom vocabulary or a custom vocabulary filter (or both)
   *             with your request but <b>do not</b> want to use automatic
   *             language identification, use <code>Settings</code> with the <code>VocabularyName</code>
   *             or <code>VocabularyFilterName</code> (or both) sub-parameter.</p>
   *          <p>If you're using automatic language identification with your request and want to
   *             include a custom language model, a custom vocabulary, or a custom vocabulary filter, use
   *             instead the <code></code> parameter with the
   *                 <code>LanguageModelName</code>, <code>VocabularyName</code> or
   *                 <code>VocabularyFilterName</code> sub-parameters.</p>
   * @public
   */
  Settings?: Settings | undefined;

  /**
   * <p>Specify the custom language model you want to include with your transcription job. If
   *             you include <code>ModelSettings</code> in your request, you must include the
   *                 <code>LanguageModelName</code> sub-parameter.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-language-models.html">Custom language
   *                 models</a>.</p>
   * @public
   */
  ModelSettings?: ModelSettings | undefined;

  /**
   * <p>Makes it possible to control how your transcription job is processed. Currently, the
   *             only <code>JobExecutionSettings</code> modification you can choose is enabling job
   *             queueing using the <code>AllowDeferredExecution</code> sub-parameter.</p>
   *          <p>If you include <code>JobExecutionSettings</code> in your request, you must also
   *             include the sub-parameters: <code>AllowDeferredExecution</code> and
   *                 <code>DataAccessRoleArn</code>.</p>
   * @public
   */
  JobExecutionSettings?: JobExecutionSettings | undefined;

  /**
   * <p>Makes it possible to redact or flag specified personally identifiable information (PII) in
   *             your transcript. If you use <code>ContentRedaction</code>, you must also include the
   *             sub-parameters: <code>RedactionOutput</code> and <code>RedactionType</code>. You can
   *             optionally include <code>PiiEntityTypes</code> to choose which types of PII you want to redact.
   *             If you do not include <code>PiiEntityTypes</code> in your request, all PII is redacted.</p>
   * @public
   */
  ContentRedaction?: ContentRedaction | undefined;

  /**
   * <p>Enables automatic language identification in your transcription job request. Use this
   *             parameter if your media file contains only one language. If your media contains multiple
   *             languages, use <code>IdentifyMultipleLanguages</code> instead.</p>
   *          <p>If you include <code>IdentifyLanguage</code>, you can optionally include a list of
   *             language codes, using <code>LanguageOptions</code>, that you think may be present in
   *             your media file. Including <code>LanguageOptions</code> restricts
   *                 <code>IdentifyLanguage</code> to only the language options that you specify, which
   *             can improve transcription accuracy.</p>
   *          <p>If you want to apply a custom language model, a custom vocabulary, or a custom
   *             vocabulary filter to your automatic language identification request, include
   *                 <code>LanguageIdSettings</code> with the relevant sub-parameters
   *                 (<code>VocabularyName</code>, <code>LanguageModelName</code>, and
   *                 <code>VocabularyFilterName</code>). If you include <code>LanguageIdSettings</code>,
   *             also include <code>LanguageOptions</code>.</p>
   *          <p>Note that you must include one of <code>LanguageCode</code>,
   *                 <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code> in your
   *             request. If you include more than one of these parameters, your transcription job
   *             fails.</p>
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * <p>Enables automatic multi-language identification in your transcription job request. Use
   *             this parameter if your media file contains more than one language. If your media
   *             contains only one language, use <code>IdentifyLanguage</code> instead.</p>
   *          <p>If you include <code>IdentifyMultipleLanguages</code>, you can optionally include a
   *             list of language codes, using <code>LanguageOptions</code>, that you think may be
   *             present in your media file. Including <code>LanguageOptions</code> restricts
   *                 <code>IdentifyLanguage</code> to only the language options that you specify, which
   *             can improve transcription accuracy.</p>
   *          <p>If you want to apply a custom vocabulary or a custom vocabulary filter to your
   *             automatic language identification request, include <code>LanguageIdSettings</code> with
   *             the relevant sub-parameters (<code>VocabularyName</code> and
   *                 <code>VocabularyFilterName</code>). If you include <code>LanguageIdSettings</code>,
   *             also include <code>LanguageOptions</code>.</p>
   *          <p>Note that you must include one of <code>LanguageCode</code>,
   *                 <code>IdentifyLanguage</code>, or <code>IdentifyMultipleLanguages</code> in your
   *             request. If you include more than one of these parameters, your transcription job
   *             fails.</p>
   * @public
   */
  IdentifyMultipleLanguages?: boolean | undefined;

  /**
   * <p>You can specify two or more language codes that represent the languages you think may
   *             be present in your media. Including more than five is not recommended. If you're unsure
   *             what languages are present, do not include this parameter.</p>
   *          <p>If you include <code>LanguageOptions</code> in your request, you must also include
   *                 <code>IdentifyLanguage</code>.</p>
   *          <p>For more information, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported
   *             languages</a>.</p>
   *          <p>To transcribe speech in Modern Standard Arabic (<code>ar-SA</code>)in Amazon Web Services GovCloud (US) (US-West, us-gov-west-1), Amazon Web Services GovCloud (US) (US-East, us-gov-east-1), in Canada (Calgary) ca-west-1 and Africa (Cape Town) af-south-1, your media file
   *             must be encoded at a sample rate of 16,000 Hz or higher.</p>
   * @public
   */
  LanguageOptions?: LanguageCode[] | undefined;

  /**
   * <p>Produces subtitle files for your input media. You can specify WebVTT (*.vtt) and
   *             SubRip (*.srt) formats.</p>
   * @public
   */
  Subtitles?: Subtitles | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to a new
   *             transcription job at the time you start this new job.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>If using automatic language identification in your request and you want to apply a
   *             custom language model, a custom vocabulary, or a custom vocabulary filter, include
   *                 <code>LanguageIdSettings</code> with the relevant sub-parameters
   *                 (<code>VocabularyName</code>, <code>LanguageModelName</code>, and
   *                 <code>VocabularyFilterName</code>). Note that multi-language identification
   *                 (<code>IdentifyMultipleLanguages</code>) doesn't support custom language
   *             models.</p>
   *          <p>
   *             <code>LanguageIdSettings</code> supports two to five language codes. Each language
   *             code you include can have an associated custom language model, custom vocabulary, and
   *             custom vocabulary filter. The language codes that you specify must match the languages
   *             of the associated custom language models, custom vocabularies, and custom vocabulary
   *             filters.</p>
   *          <p>It's recommended that you include <code>LanguageOptions</code> when using
   *                 <code>LanguageIdSettings</code> to ensure that the correct language dialect is
   *             identified. For example, if you specify a custom vocabulary that is in
   *                 <code>en-US</code> but Amazon Transcribe determines that the language spoken in
   *             your media is <code>en-AU</code>, your custom vocabulary <i>is not</i>
   *             applied to your transcription. If you include <code>LanguageOptions</code> and include
   *                 <code>en-US</code> as the only English language dialect, your custom vocabulary
   *                 <i>is</i> applied to your transcription.</p>
   *          <p>If you want to include a custom language model with your request but <b>do not</b> want to use automatic language identification, use
   *             instead the <code></code> parameter with the
   *                 <code>LanguageModelName</code> sub-parameter. If you want to include a custom
   *             vocabulary or a custom vocabulary filter (or both) with your request but <b>do not</b> want to use automatic language identification, use
   *             instead the <code></code> parameter with the
   *                 <code>VocabularyName</code> or <code>VocabularyFilterName</code> (or both)
   *             sub-parameter.</p>
   * @public
   */
  LanguageIdSettings?: Partial<Record<LanguageCode, LanguageIdSettings>> | undefined;

  /**
   * <p>Enables toxic speech detection in your transcript. If you include
   *             <code>ToxicityDetection</code> in your request, you must also include
   *             <code>ToxicityCategories</code>.</p>
   *          <p>For information on the types of toxic speech Amazon Transcribe can detect, see
   *             <a href="https://docs.aws.amazon.com/transcribe/latest/dg/toxic-language.html">Detecting toxic
   *                 speech</a>.</p>
   * @public
   */
  ToxicityDetection?: ToxicityDetectionSettings[] | undefined;
}

/**
 * @public
 */
export interface StartTranscriptionJobResponse {
  /**
   * <p>Provides detailed information about the current transcription job, including job
   *             status and, if applicable, failure reason.</p>
   * @public
   */
  TranscriptionJob?: TranscriptionJob | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you want to tag. ARNs have the format
   *                 <code>arn:partition:service:region:account-id:resource-type/resource-id</code>.</p>
   *          <p>For example,
   *                 <code>arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name</code>.</p>
   *          <p>Valid values for <code>resource-type</code> are: <code>transcription-job</code>,
   *                 <code>medical-transcription-job</code>, <code>vocabulary</code>,
   *                 <code>medical-vocabulary</code>, <code>vocabulary-filter</code>, and
   *                 <code>language-model</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Adds one or more custom tags, each in the form of a key:value pair, to the specified
   *             resource.</p>
   *          <p>To learn more about using tags with Amazon Transcribe, refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/tagging.html">Tagging
   *                 resources</a>.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Transcribe resource you want to remove
   *             tags from. ARNs have the format
   *                 <code>arn:partition:service:region:account-id:resource-type/resource-id</code>.</p>
   *          <p>For example,
   *                 <code>arn:aws:transcribe:us-west-2:111122223333:transcription-job/transcription-job-name</code>.</p>
   *          <p>Valid values for <code>resource-type</code> are: <code>transcription-job</code>,
   *                 <code>medical-transcription-job</code>, <code>vocabulary</code>,
   *                 <code>medical-vocabulary</code>, <code>vocabulary-filter</code>, and
   *                 <code>language-model</code>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Removes the specified tag keys from the specified Amazon Transcribe resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateCallAnalyticsCategoryRequest {
  /**
   * <p>The name of the Call Analytics category you want to update. Category names are case
   *             sensitive.</p>
   * @public
   */
  CategoryName: string | undefined;

  /**
   * <p>The rules used for the updated Call Analytics category. The rules you provide in this
   *             field replace the ones that are currently being used in the specified category.</p>
   * @public
   */
  Rules: Rule[] | undefined;

  /**
   * <p>Choose whether you want to update a real-time or a post-call category. The
   *             input type you specify must match the input type specified when the category was created. For
   *             example, if you created a category with the <code>POST_CALL</code> input type, you must
   *             use <code>POST_CALL</code> as the input type when updating this category.</p>
   * @public
   */
  InputType?: InputType | undefined;
}

/**
 * @public
 */
export interface UpdateCallAnalyticsCategoryResponse {
  /**
   * <p>Provides you with the properties of the Call Analytics category you specified in your
   *                 <code>UpdateCallAnalyticsCategory</code> request.</p>
   * @public
   */
  CategoryProperties?: CategoryProperties | undefined;
}

/**
 * @public
 */
export interface UpdateMedicalVocabularyRequest {
  /**
   * <p>The name of the custom medical vocabulary you want to update. Custom medical
   *             vocabulary names are case sensitive.</p>
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in the custom vocabulary
   *             you want to update. US English (<code>en-US</code>) is the only language supported with
   *                 Amazon Transcribe Medical.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>The Amazon S3 location of the text file that contains your custom medical
   *             vocabulary. The URI must be located in the same Amazon Web Services Region as the
   *             resource you're calling.</p>
   *          <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt</code>
   *          </p>
   * @public
   */
  VocabularyFileUri: string | undefined;
}

/**
 * @public
 */
export interface UpdateMedicalVocabularyResponse {
  /**
   * <p>The name of the updated custom medical vocabulary.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The language code you selected for your custom medical vocabulary. US English
   *                 (<code>en-US</code>) is the only language supported with Amazon Transcribe
   *             Medical.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The date and time the specified custom medical vocabulary was last updated.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The processing state of your custom medical vocabulary. If the state is
   *                 <code>READY</code>, you can use the custom vocabulary in a
   *                 <code>StartMedicalTranscriptionJob</code> request.</p>
   * @public
   */
  VocabularyState?: VocabularyState | undefined;
}

/**
 * @public
 */
export interface UpdateVocabularyRequest {
  /**
   * <p>The name of the custom vocabulary you want to update. Custom vocabulary names are case
   *             sensitive.</p>
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code that represents the language of the entries in the custom vocabulary
   *             you want to update. Each custom vocabulary must contain terms in only one
   *             language.</p>
   *          <p>A custom vocabulary can only be used to transcribe files in the same language as the
   *             custom vocabulary. For example, if you create a custom vocabulary using US English
   *                 (<code>en-US</code>), you can only apply this custom vocabulary to files that
   *             contain English audio.</p>
   *          <p>For a list of supported languages and their associated language codes, refer to the
   *                 <a href="https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html">Supported languages</a> table.</p>
   * @public
   */
  LanguageCode: LanguageCode | undefined;

  /**
   * <p>Use this parameter if you want to update your custom vocabulary by including all
   *             desired terms, as comma-separated values, within your request. The other option for
   *             updating your custom vocabulary is to save your entries in a text file and upload them
   *             to an Amazon S3 bucket, then specify the location of your file using the
   *                 <code>VocabularyFileUri</code> parameter.</p>
   *          <p>Note that if you include <code>Phrases</code> in your request, you cannot use
   *                 <code>VocabularyFileUri</code>; you must choose one or the other.</p>
   *          <p>Each language has a character set that contains all allowed characters for that
   *             specific language. If you use unsupported characters, your custom vocabulary filter
   *             request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom
   *                 Vocabularies</a> to get the character set for your language.</p>
   * @public
   */
  Phrases?: string[] | undefined;

  /**
   * <p>The Amazon S3 location of the text file that contains your custom vocabulary.
   *             The URI must be located in the same Amazon Web Services Region as the resource you're
   *             calling.</p>
   *          <p>Here's an example URI path:
   *             <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt</code>
   *          </p>
   *          <p>Note that if you include <code>VocabularyFileUri</code> in your request, you cannot
   *             use the <code>Phrases</code> flag; you must choose one or the other.</p>
   * @public
   */
  VocabularyFileUri?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files (in this case, your custom
   *             vocabulary). If the role that you specify doesn’t have the appropriate permissions to access
   *             the specified Amazon S3 location, your request fails.</p>
   *          <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM
   *             ARNs</a>.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVocabularyResponse {
  /**
   * <p>The name of the updated custom vocabulary.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The language code you selected for your custom vocabulary.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The date and time the specified custom vocabulary was last updated.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The processing state of your custom vocabulary. If the state is <code>READY</code>,
   *             you can use the custom vocabulary in a <code>StartTranscriptionJob</code>
   *             request.</p>
   * @public
   */
  VocabularyState?: VocabularyState | undefined;
}

/**
 * @public
 */
export interface UpdateVocabularyFilterRequest {
  /**
   * <p>The name of the custom vocabulary filter you want to update. Custom vocabulary filter
   *             names are case sensitive.</p>
   * @public
   */
  VocabularyFilterName: string | undefined;

  /**
   * <p>Use this parameter if you want to update your custom vocabulary filter by including
   *             all desired terms, as comma-separated values, within your request. The other option for
   *             updating your vocabulary filter is to save your entries in a text file and upload them
   *             to an Amazon S3 bucket, then specify the location of your file using the
   *                 <code>VocabularyFilterFileUri</code> parameter.</p>
   *          <p>Note that if you include <code>Words</code> in your request, you cannot use
   *                 <code>VocabularyFilterFileUri</code>; you must choose one or the other.</p>
   *          <p>Each language has a character set that contains all allowed characters for that
   *             specific language. If you use unsupported characters, your custom vocabulary filter
   *             request fails. Refer to <a href="https://docs.aws.amazon.com/transcribe/latest/dg/charsets.html">Character Sets for Custom
   *                 Vocabularies</a> to get the character set for your language.</p>
   * @public
   */
  Words?: string[] | undefined;

  /**
   * <p>The Amazon S3 location of the text file that contains your custom vocabulary
   *             filter terms. The URI must be located in the same Amazon Web Services Region as the
   *             resource you're calling.</p>
   *          <p>Here's an example URI path:
   *                 <code>s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt</code>
   *          </p>
   *          <p>Note that if you include <code>VocabularyFilterFileUri</code> in your request, you
   *             cannot use <code>Words</code>; you must choose one or the other.</p>
   * @public
   */
  VocabularyFilterFileUri?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions to
   *             access the Amazon S3 bucket that contains your input files (in this case, your custom
   *             vocabulary filter). If the role that you specify doesn’t have the appropriate permissions to access
   *             the specified Amazon S3 location, your request fails.</p>
   *          <p>IAM role ARNs have the format
   *             <code>arn:partition:iam::account:role/role-name-with-path</code>. For example:
   *             <code>arn:aws:iam::111122223333:role/Admin</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns">IAM
   *             ARNs</a>.</p>
   * @public
   */
  DataAccessRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateVocabularyFilterResponse {
  /**
   * <p>The name of the updated custom vocabulary filter.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>The language code you selected for your custom vocabulary filter.</p>
   * @public
   */
  LanguageCode?: LanguageCode | undefined;

  /**
   * <p>The date and time the specified custom vocabulary filter was last updated.</p>
   *          <p>Timestamps are in the format <code>YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC</code>. For
   *             example, <code>2022-05-04T12:32:58.761000-07:00</code> represents 12:32 PM UTC-7 on May
   *             4, 2022.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}
