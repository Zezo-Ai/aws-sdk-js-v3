// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput } from "../commands/AnalyzeDocumentCommand";
import { AnalyzeExpenseCommandInput, AnalyzeExpenseCommandOutput } from "../commands/AnalyzeExpenseCommand";
import { AnalyzeIDCommandInput, AnalyzeIDCommandOutput } from "../commands/AnalyzeIDCommand";
import { CreateAdapterCommandInput, CreateAdapterCommandOutput } from "../commands/CreateAdapterCommand";
import {
  CreateAdapterVersionCommandInput,
  CreateAdapterVersionCommandOutput,
} from "../commands/CreateAdapterVersionCommand";
import { DeleteAdapterCommandInput, DeleteAdapterCommandOutput } from "../commands/DeleteAdapterCommand";
import {
  DeleteAdapterVersionCommandInput,
  DeleteAdapterVersionCommandOutput,
} from "../commands/DeleteAdapterVersionCommand";
import { DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput } from "../commands/DetectDocumentTextCommand";
import { GetAdapterCommandInput, GetAdapterCommandOutput } from "../commands/GetAdapterCommand";
import { GetAdapterVersionCommandInput, GetAdapterVersionCommandOutput } from "../commands/GetAdapterVersionCommand";
import {
  GetDocumentAnalysisCommandInput,
  GetDocumentAnalysisCommandOutput,
} from "../commands/GetDocumentAnalysisCommand";
import {
  GetDocumentTextDetectionCommandInput,
  GetDocumentTextDetectionCommandOutput,
} from "../commands/GetDocumentTextDetectionCommand";
import { GetExpenseAnalysisCommandInput, GetExpenseAnalysisCommandOutput } from "../commands/GetExpenseAnalysisCommand";
import { GetLendingAnalysisCommandInput, GetLendingAnalysisCommandOutput } from "../commands/GetLendingAnalysisCommand";
import {
  GetLendingAnalysisSummaryCommandInput,
  GetLendingAnalysisSummaryCommandOutput,
} from "../commands/GetLendingAnalysisSummaryCommand";
import { ListAdaptersCommandInput, ListAdaptersCommandOutput } from "../commands/ListAdaptersCommand";
import {
  ListAdapterVersionsCommandInput,
  ListAdapterVersionsCommandOutput,
} from "../commands/ListAdapterVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartDocumentAnalysisCommandInput,
  StartDocumentAnalysisCommandOutput,
} from "../commands/StartDocumentAnalysisCommand";
import {
  StartDocumentTextDetectionCommandInput,
  StartDocumentTextDetectionCommandOutput,
} from "../commands/StartDocumentTextDetectionCommand";
import {
  StartExpenseAnalysisCommandInput,
  StartExpenseAnalysisCommandOutput,
} from "../commands/StartExpenseAnalysisCommand";
import {
  StartLendingAnalysisCommandInput,
  StartLendingAnalysisCommandOutput,
} from "../commands/StartLendingAnalysisCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAdapterCommandInput, UpdateAdapterCommandOutput } from "../commands/UpdateAdapterCommand";
import {
  AccessDeniedException,
  Adapter,
  AdapterOverview,
  AdaptersConfig,
  AdapterVersionDatasetConfig,
  AdapterVersionEvaluationMetric,
  AdapterVersionOverview,
  AnalyzeDocumentRequest,
  AnalyzeDocumentResponse,
  AnalyzeExpenseRequest,
  AnalyzeExpenseResponse,
  AnalyzeIDDetections,
  AnalyzeIDRequest,
  AnalyzeIDResponse,
  BadDocumentException,
  Block,
  BoundingBox,
  ConflictException,
  ContentClassifier,
  CreateAdapterRequest,
  CreateAdapterVersionRequest,
  DeleteAdapterRequest,
  DeleteAdapterVersionRequest,
  DetectDocumentTextRequest,
  DetectDocumentTextResponse,
  Document,
  DocumentLocation,
  DocumentTooLargeException,
  EvaluationMetric,
  ExpenseCurrency,
  ExpenseDetection,
  ExpenseDocument,
  ExpenseField,
  ExpenseType,
  Extraction,
  FeatureType,
  Geometry,
  GetAdapterRequest,
  GetAdapterResponse,
  GetAdapterVersionRequest,
  GetAdapterVersionResponse,
  GetDocumentAnalysisRequest,
  GetDocumentAnalysisResponse,
  GetDocumentTextDetectionRequest,
  GetDocumentTextDetectionResponse,
  GetExpenseAnalysisRequest,
  GetExpenseAnalysisResponse,
  GetLendingAnalysisRequest,
  GetLendingAnalysisResponse,
  GetLendingAnalysisSummaryRequest,
  HumanLoopActivationOutput,
  HumanLoopConfig,
  HumanLoopDataAttributes,
  HumanLoopQuotaExceededException,
  IdempotentParameterMismatchException,
  IdentityDocument,
  IdentityDocumentField,
  InternalServerError,
  InvalidJobIdException,
  InvalidKMSKeyException,
  InvalidParameterException,
  InvalidS3ObjectException,
  LendingDetection,
  LendingDocument,
  LendingField,
  LendingResult,
  LimitExceededException,
  LineItemFields,
  LineItemGroup,
  ListAdaptersRequest,
  ListAdaptersResponse,
  ListAdapterVersionsRequest,
  ListAdapterVersionsResponse,
  ListTagsForResourceRequest,
  NotificationChannel,
  OutputConfig,
  PageClassification,
  Point,
  Prediction,
  ProvisionedThroughputExceededException,
  QueriesConfig,
  Query,
  ResourceNotFoundException,
  S3Object,
  ServiceQuotaExceededException,
  SignatureDetection,
  StartDocumentAnalysisRequest,
  StartDocumentTextDetectionRequest,
  StartExpenseAnalysisRequest,
  StartLendingAnalysisRequest,
  TagResourceRequest,
  ThrottlingException,
  UnsupportedDocumentException,
  UntagResourceRequest,
  UpdateAdapterRequest,
  UpdateAdapterResponse,
  ValidationException,
} from "../models/models_0";
import { TextractServiceException as __BaseException } from "../models/TextractServiceException";

/**
 * serializeAws_json1_1AnalyzeDocumentCommand
 */
export const se_AnalyzeDocumentCommand = async (
  input: AnalyzeDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AnalyzeDocument");
  let body: any;
  body = JSON.stringify(se_AnalyzeDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AnalyzeExpenseCommand
 */
export const se_AnalyzeExpenseCommand = async (
  input: AnalyzeExpenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AnalyzeExpense");
  let body: any;
  body = JSON.stringify(se_AnalyzeExpenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AnalyzeIDCommand
 */
export const se_AnalyzeIDCommand = async (
  input: AnalyzeIDCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AnalyzeID");
  let body: any;
  body = JSON.stringify(se_AnalyzeIDRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAdapterCommand
 */
export const se_CreateAdapterCommand = async (
  input: CreateAdapterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAdapter");
  let body: any;
  body = JSON.stringify(se_CreateAdapterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAdapterVersionCommand
 */
export const se_CreateAdapterVersionCommand = async (
  input: CreateAdapterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAdapterVersion");
  let body: any;
  body = JSON.stringify(se_CreateAdapterVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAdapterCommand
 */
export const se_DeleteAdapterCommand = async (
  input: DeleteAdapterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAdapter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAdapterVersionCommand
 */
export const se_DeleteAdapterVersionCommand = async (
  input: DeleteAdapterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAdapterVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectDocumentTextCommand
 */
export const se_DetectDocumentTextCommand = async (
  input: DetectDocumentTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectDocumentText");
  let body: any;
  body = JSON.stringify(se_DetectDocumentTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAdapterCommand
 */
export const se_GetAdapterCommand = async (
  input: GetAdapterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAdapter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAdapterVersionCommand
 */
export const se_GetAdapterVersionCommand = async (
  input: GetAdapterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAdapterVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDocumentAnalysisCommand
 */
export const se_GetDocumentAnalysisCommand = async (
  input: GetDocumentAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDocumentAnalysis");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDocumentTextDetectionCommand
 */
export const se_GetDocumentTextDetectionCommand = async (
  input: GetDocumentTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDocumentTextDetection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetExpenseAnalysisCommand
 */
export const se_GetExpenseAnalysisCommand = async (
  input: GetExpenseAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetExpenseAnalysis");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLendingAnalysisCommand
 */
export const se_GetLendingAnalysisCommand = async (
  input: GetLendingAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLendingAnalysis");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLendingAnalysisSummaryCommand
 */
export const se_GetLendingAnalysisSummaryCommand = async (
  input: GetLendingAnalysisSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLendingAnalysisSummary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAdaptersCommand
 */
export const se_ListAdaptersCommand = async (
  input: ListAdaptersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAdapters");
  let body: any;
  body = JSON.stringify(se_ListAdaptersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAdapterVersionsCommand
 */
export const se_ListAdapterVersionsCommand = async (
  input: ListAdapterVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAdapterVersions");
  let body: any;
  body = JSON.stringify(se_ListAdapterVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDocumentAnalysisCommand
 */
export const se_StartDocumentAnalysisCommand = async (
  input: StartDocumentAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDocumentAnalysis");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDocumentTextDetectionCommand
 */
export const se_StartDocumentTextDetectionCommand = async (
  input: StartDocumentTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDocumentTextDetection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartExpenseAnalysisCommand
 */
export const se_StartExpenseAnalysisCommand = async (
  input: StartExpenseAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartExpenseAnalysis");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartLendingAnalysisCommand
 */
export const se_StartLendingAnalysisCommand = async (
  input: StartLendingAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartLendingAnalysis");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAdapterCommand
 */
export const se_UpdateAdapterCommand = async (
  input: UpdateAdapterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAdapter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AnalyzeDocumentCommand
 */
export const de_AnalyzeDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AnalyzeDocumentResponse(data, context);
  const response: AnalyzeDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AnalyzeExpenseCommand
 */
export const de_AnalyzeExpenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeExpenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AnalyzeExpenseResponse(data, context);
  const response: AnalyzeExpenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AnalyzeIDCommand
 */
export const de_AnalyzeIDCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeIDCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AnalyzeIDResponse(data, context);
  const response: AnalyzeIDCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAdapterCommand
 */
export const de_CreateAdapterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAdapterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAdapterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAdapterVersionCommand
 */
export const de_CreateAdapterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAdapterVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAdapterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAdapterCommand
 */
export const de_DeleteAdapterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAdapterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAdapterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAdapterVersionCommand
 */
export const de_DeleteAdapterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAdapterVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAdapterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetectDocumentTextCommand
 */
export const de_DetectDocumentTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDocumentTextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectDocumentTextResponse(data, context);
  const response: DetectDocumentTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetAdapterCommand
 */
export const de_GetAdapterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdapterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAdapterResponse(data, context);
  const response: GetAdapterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetAdapterVersionCommand
 */
export const de_GetAdapterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdapterVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAdapterVersionResponse(data, context);
  const response: GetAdapterVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDocumentAnalysisCommand
 */
export const de_GetDocumentAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDocumentAnalysisResponse(data, context);
  const response: GetDocumentAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDocumentTextDetectionCommand
 */
export const de_GetDocumentTextDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentTextDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDocumentTextDetectionResponse(data, context);
  const response: GetDocumentTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetExpenseAnalysisCommand
 */
export const de_GetExpenseAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExpenseAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetExpenseAnalysisResponse(data, context);
  const response: GetExpenseAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetLendingAnalysisCommand
 */
export const de_GetLendingAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLendingAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLendingAnalysisResponse(data, context);
  const response: GetLendingAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetLendingAnalysisSummaryCommand
 */
export const de_GetLendingAnalysisSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLendingAnalysisSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetLendingAnalysisSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAdaptersCommand
 */
export const de_ListAdaptersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAdaptersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAdaptersResponse(data, context);
  const response: ListAdaptersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAdapterVersionsCommand
 */
export const de_ListAdapterVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAdapterVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAdapterVersionsResponse(data, context);
  const response: ListAdapterVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDocumentAnalysisCommand
 */
export const de_StartDocumentAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDocumentAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDocumentTextDetectionCommand
 */
export const de_StartDocumentTextDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentTextDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDocumentTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartExpenseAnalysisCommand
 */
export const de_StartExpenseAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExpenseAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartExpenseAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartLendingAnalysisCommand
 */
export const de_StartLendingAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLendingAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartLendingAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAdapterCommand
 */
export const de_UpdateAdapterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAdapterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAdapterResponse(data, context);
  const response: UpdateAdapterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await de_BadDocumentExceptionRes(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await de_DocumentTooLargeExceptionRes(parsedOutput, context);
    case "HumanLoopQuotaExceededException":
    case "com.amazonaws.textract#HumanLoopQuotaExceededException":
      throw await de_HumanLoopQuotaExceededExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await de_UnsupportedDocumentExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.textract#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.textract#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.textract#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await de_InvalidKMSKeyExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.textract#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      throw await de_InvalidJobIdExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BadDocumentExceptionRes
 */
const de_BadDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BadDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DocumentTooLargeExceptionRes
 */
const de_DocumentTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DocumentTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1HumanLoopQuotaExceededExceptionRes
 */
const de_HumanLoopQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HumanLoopQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new HumanLoopQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchExceptionRes
 */
const de_IdempotentParameterMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidJobIdExceptionRes
 */
const de_InvalidJobIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidJobIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidKMSKeyExceptionRes
 */
const de_InvalidKMSKeyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidKMSKeyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidS3ObjectExceptionRes
 */
const de_InvalidS3ObjectExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3ObjectException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidS3ObjectException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ProvisionedThroughputExceededExceptionRes
 */
const de_ProvisionedThroughputExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedDocumentExceptionRes
 */
const de_UnsupportedDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_Adapter omitted.

// se_AdapterPages omitted.

// se_Adapters omitted.

// se_AdaptersConfig omitted.

// se_AdapterVersionDatasetConfig omitted.

/**
 * serializeAws_json1_1AnalyzeDocumentRequest
 */
const se_AnalyzeDocumentRequest = (input: AnalyzeDocumentRequest, context: __SerdeContext): any => {
  return take(input, {
    AdaptersConfig: _json,
    Document: (_) => se_Document(_, context),
    FeatureTypes: _json,
    HumanLoopConfig: _json,
    QueriesConfig: _json,
  });
};

/**
 * serializeAws_json1_1AnalyzeExpenseRequest
 */
const se_AnalyzeExpenseRequest = (input: AnalyzeExpenseRequest, context: __SerdeContext): any => {
  return take(input, {
    Document: (_) => se_Document(_, context),
  });
};

/**
 * serializeAws_json1_1AnalyzeIDRequest
 */
const se_AnalyzeIDRequest = (input: AnalyzeIDRequest, context: __SerdeContext): any => {
  return take(input, {
    DocumentPages: (_) => se_DocumentPages(_, context),
  });
};

// se_ContentClassifiers omitted.

/**
 * serializeAws_json1_1CreateAdapterRequest
 */
const se_CreateAdapterRequest = (input: CreateAdapterRequest, context: __SerdeContext): any => {
  return take(input, {
    AdapterName: [],
    AutoUpdate: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    FeatureTypes: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateAdapterVersionRequest
 */
const se_CreateAdapterVersionRequest = (input: CreateAdapterVersionRequest, context: __SerdeContext): any => {
  return take(input, {
    AdapterId: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DatasetConfig: _json,
    KMSKeyId: [],
    OutputConfig: _json,
    Tags: _json,
  });
};

// se_DeleteAdapterRequest omitted.

// se_DeleteAdapterVersionRequest omitted.

/**
 * serializeAws_json1_1DetectDocumentTextRequest
 */
const se_DetectDocumentTextRequest = (input: DetectDocumentTextRequest, context: __SerdeContext): any => {
  return take(input, {
    Document: (_) => se_Document(_, context),
  });
};

/**
 * serializeAws_json1_1Document
 */
const se_Document = (input: Document, context: __SerdeContext): any => {
  return take(input, {
    Bytes: context.base64Encoder,
    S3Object: _json,
  });
};

// se_DocumentLocation omitted.

/**
 * serializeAws_json1_1DocumentPages
 */
const se_DocumentPages = (input: Document[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Document(entry, context);
    });
};

// se_FeatureTypes omitted.

// se_GetAdapterRequest omitted.

// se_GetAdapterVersionRequest omitted.

// se_GetDocumentAnalysisRequest omitted.

// se_GetDocumentTextDetectionRequest omitted.

// se_GetExpenseAnalysisRequest omitted.

// se_GetLendingAnalysisRequest omitted.

// se_GetLendingAnalysisSummaryRequest omitted.

// se_HumanLoopConfig omitted.

// se_HumanLoopDataAttributes omitted.

/**
 * serializeAws_json1_1ListAdaptersRequest
 */
const se_ListAdaptersRequest = (input: ListAdaptersRequest, context: __SerdeContext): any => {
  return take(input, {
    AfterCreationTime: (_) => _.getTime() / 1_000,
    BeforeCreationTime: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
  });
};

/**
 * serializeAws_json1_1ListAdapterVersionsRequest
 */
const se_ListAdapterVersionsRequest = (input: ListAdapterVersionsRequest, context: __SerdeContext): any => {
  return take(input, {
    AdapterId: [],
    AfterCreationTime: (_) => _.getTime() / 1_000,
    BeforeCreationTime: (_) => _.getTime() / 1_000,
    MaxResults: [],
    NextToken: [],
  });
};

// se_ListTagsForResourceRequest omitted.

// se_NotificationChannel omitted.

// se_OutputConfig omitted.

// se_Queries omitted.

// se_QueriesConfig omitted.

// se_Query omitted.

// se_QueryPages omitted.

// se_S3Object omitted.

// se_StartDocumentAnalysisRequest omitted.

// se_StartDocumentTextDetectionRequest omitted.

// se_StartExpenseAnalysisRequest omitted.

// se_StartLendingAnalysisRequest omitted.

// se_TagKeyList omitted.

// se_TagMap omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAdapterRequest omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_1AdapterList
 */
const de_AdapterList = (output: any, context: __SerdeContext): AdapterOverview[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AdapterOverview(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AdapterOverview
 */
const de_AdapterOverview = (output: any, context: __SerdeContext): AdapterOverview => {
  return take(output, {
    AdapterId: __expectString,
    AdapterName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FeatureTypes: _json,
  }) as any;
};

// de_AdapterVersionDatasetConfig omitted.

/**
 * deserializeAws_json1_1AdapterVersionEvaluationMetric
 */
const de_AdapterVersionEvaluationMetric = (output: any, context: __SerdeContext): AdapterVersionEvaluationMetric => {
  return take(output, {
    AdapterVersion: (_: any) => de_EvaluationMetric(_, context),
    Baseline: (_: any) => de_EvaluationMetric(_, context),
    FeatureType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AdapterVersionEvaluationMetrics
 */
const de_AdapterVersionEvaluationMetrics = (output: any, context: __SerdeContext): AdapterVersionEvaluationMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AdapterVersionEvaluationMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AdapterVersionList
 */
const de_AdapterVersionList = (output: any, context: __SerdeContext): AdapterVersionOverview[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AdapterVersionOverview(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AdapterVersionOverview
 */
const de_AdapterVersionOverview = (output: any, context: __SerdeContext): AdapterVersionOverview => {
  return take(output, {
    AdapterId: __expectString,
    AdapterVersion: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FeatureTypes: _json,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AnalyzeDocumentResponse
 */
const de_AnalyzeDocumentResponse = (output: any, context: __SerdeContext): AnalyzeDocumentResponse => {
  return take(output, {
    AnalyzeDocumentModelVersion: __expectString,
    Blocks: (_: any) => de_BlockList(_, context),
    DocumentMetadata: _json,
    HumanLoopActivationOutput: (_: any) => de_HumanLoopActivationOutput(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AnalyzeExpenseResponse
 */
const de_AnalyzeExpenseResponse = (output: any, context: __SerdeContext): AnalyzeExpenseResponse => {
  return take(output, {
    DocumentMetadata: _json,
    ExpenseDocuments: (_: any) => de_ExpenseDocumentList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AnalyzeIDDetections
 */
const de_AnalyzeIDDetections = (output: any, context: __SerdeContext): AnalyzeIDDetections => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    NormalizedValue: _json,
    Text: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AnalyzeIDResponse
 */
const de_AnalyzeIDResponse = (output: any, context: __SerdeContext): AnalyzeIDResponse => {
  return take(output, {
    AnalyzeIDModelVersion: __expectString,
    DocumentMetadata: _json,
    IdentityDocuments: (_: any) => de_IdentityDocumentList(_, context),
  }) as any;
};

// de_BadDocumentException omitted.

/**
 * deserializeAws_json1_1Block
 */
const de_Block = (output: any, context: __SerdeContext): Block => {
  return take(output, {
    BlockType: __expectString,
    ColumnIndex: __expectInt32,
    ColumnSpan: __expectInt32,
    Confidence: __limitedParseFloat32,
    EntityTypes: _json,
    Geometry: (_: any) => de_Geometry(_, context),
    Id: __expectString,
    Page: __expectInt32,
    Query: _json,
    Relationships: _json,
    RowIndex: __expectInt32,
    RowSpan: __expectInt32,
    SelectionStatus: __expectString,
    Text: __expectString,
    TextType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BlockList
 */
const de_BlockList = (output: any, context: __SerdeContext): Block[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Block(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BoundingBox
 */
const de_BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return take(output, {
    Height: __limitedParseFloat32,
    Left: __limitedParseFloat32,
    Top: __limitedParseFloat32,
    Width: __limitedParseFloat32,
  }) as any;
};

// de_ConflictException omitted.

// de_CreateAdapterResponse omitted.

// de_CreateAdapterVersionResponse omitted.

// de_DeleteAdapterResponse omitted.

// de_DeleteAdapterVersionResponse omitted.

/**
 * deserializeAws_json1_1DetectDocumentTextResponse
 */
const de_DetectDocumentTextResponse = (output: any, context: __SerdeContext): DetectDocumentTextResponse => {
  return take(output, {
    Blocks: (_: any) => de_BlockList(_, context),
    DetectDocumentTextModelVersion: __expectString,
    DocumentMetadata: _json,
  }) as any;
};

// de_DetectedSignature omitted.

// de_DetectedSignatureList omitted.

// de_DocumentGroup omitted.

// de_DocumentGroupList omitted.

// de_DocumentMetadata omitted.

// de_DocumentTooLargeException omitted.

// de_EntityTypes omitted.

/**
 * deserializeAws_json1_1EvaluationMetric
 */
const de_EvaluationMetric = (output: any, context: __SerdeContext): EvaluationMetric => {
  return take(output, {
    F1Score: __limitedParseFloat32,
    Precision: __limitedParseFloat32,
    Recall: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1ExpenseCurrency
 */
const de_ExpenseCurrency = (output: any, context: __SerdeContext): ExpenseCurrency => {
  return take(output, {
    Code: __expectString,
    Confidence: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1ExpenseDetection
 */
const de_ExpenseDetection = (output: any, context: __SerdeContext): ExpenseDetection => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Geometry: (_: any) => de_Geometry(_, context),
    Text: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ExpenseDocument
 */
const de_ExpenseDocument = (output: any, context: __SerdeContext): ExpenseDocument => {
  return take(output, {
    Blocks: (_: any) => de_BlockList(_, context),
    ExpenseIndex: __expectInt32,
    LineItemGroups: (_: any) => de_LineItemGroupList(_, context),
    SummaryFields: (_: any) => de_ExpenseFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ExpenseDocumentList
 */
const de_ExpenseDocumentList = (output: any, context: __SerdeContext): ExpenseDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExpenseDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExpenseField
 */
const de_ExpenseField = (output: any, context: __SerdeContext): ExpenseField => {
  return take(output, {
    Currency: (_: any) => de_ExpenseCurrency(_, context),
    GroupProperties: _json,
    LabelDetection: (_: any) => de_ExpenseDetection(_, context),
    PageNumber: __expectInt32,
    Type: (_: any) => de_ExpenseType(_, context),
    ValueDetection: (_: any) => de_ExpenseDetection(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ExpenseFieldList
 */
const de_ExpenseFieldList = (output: any, context: __SerdeContext): ExpenseField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExpenseField(entry, context);
    });
  return retVal;
};

// de_ExpenseGroupProperty omitted.

// de_ExpenseGroupPropertyList omitted.

/**
 * deserializeAws_json1_1ExpenseType
 */
const de_ExpenseType = (output: any, context: __SerdeContext): ExpenseType => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Text: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Extraction
 */
const de_Extraction = (output: any, context: __SerdeContext): Extraction => {
  return take(output, {
    ExpenseDocument: (_: any) => de_ExpenseDocument(_, context),
    IdentityDocument: (_: any) => de_IdentityDocument(_, context),
    LendingDocument: (_: any) => de_LendingDocument(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ExtractionList
 */
const de_ExtractionList = (output: any, context: __SerdeContext): Extraction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Extraction(entry, context);
    });
  return retVal;
};

// de_FeatureTypes omitted.

/**
 * deserializeAws_json1_1Geometry
 */
const de_Geometry = (output: any, context: __SerdeContext): Geometry => {
  return take(output, {
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Polygon: (_: any) => de_Polygon(_, context),
    RotationAngle: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1GetAdapterResponse
 */
const de_GetAdapterResponse = (output: any, context: __SerdeContext): GetAdapterResponse => {
  return take(output, {
    AdapterId: __expectString,
    AdapterName: __expectString,
    AutoUpdate: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    FeatureTypes: _json,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetAdapterVersionResponse
 */
const de_GetAdapterVersionResponse = (output: any, context: __SerdeContext): GetAdapterVersionResponse => {
  return take(output, {
    AdapterId: __expectString,
    AdapterVersion: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetConfig: _json,
    EvaluationMetrics: (_: any) => de_AdapterVersionEvaluationMetrics(_, context),
    FeatureTypes: _json,
    KMSKeyId: __expectString,
    OutputConfig: _json,
    Status: __expectString,
    StatusMessage: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDocumentAnalysisResponse
 */
const de_GetDocumentAnalysisResponse = (output: any, context: __SerdeContext): GetDocumentAnalysisResponse => {
  return take(output, {
    AnalyzeDocumentModelVersion: __expectString,
    Blocks: (_: any) => de_BlockList(_, context),
    DocumentMetadata: _json,
    JobStatus: __expectString,
    NextToken: __expectString,
    StatusMessage: __expectString,
    Warnings: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDocumentTextDetectionResponse
 */
const de_GetDocumentTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetDocumentTextDetectionResponse => {
  return take(output, {
    Blocks: (_: any) => de_BlockList(_, context),
    DetectDocumentTextModelVersion: __expectString,
    DocumentMetadata: _json,
    JobStatus: __expectString,
    NextToken: __expectString,
    StatusMessage: __expectString,
    Warnings: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetExpenseAnalysisResponse
 */
const de_GetExpenseAnalysisResponse = (output: any, context: __SerdeContext): GetExpenseAnalysisResponse => {
  return take(output, {
    AnalyzeExpenseModelVersion: __expectString,
    DocumentMetadata: _json,
    ExpenseDocuments: (_: any) => de_ExpenseDocumentList(_, context),
    JobStatus: __expectString,
    NextToken: __expectString,
    StatusMessage: __expectString,
    Warnings: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetLendingAnalysisResponse
 */
const de_GetLendingAnalysisResponse = (output: any, context: __SerdeContext): GetLendingAnalysisResponse => {
  return take(output, {
    AnalyzeLendingModelVersion: __expectString,
    DocumentMetadata: _json,
    JobStatus: __expectString,
    NextToken: __expectString,
    Results: (_: any) => de_LendingResultList(_, context),
    StatusMessage: __expectString,
    Warnings: _json,
  }) as any;
};

// de_GetLendingAnalysisSummaryResponse omitted.

/**
 * deserializeAws_json1_1HumanLoopActivationOutput
 */
const de_HumanLoopActivationOutput = (output: any, context: __SerdeContext): HumanLoopActivationOutput => {
  return take(output, {
    HumanLoopActivationConditionsEvaluationResults: __LazyJsonString.from,
    HumanLoopActivationReasons: _json,
    HumanLoopArn: __expectString,
  }) as any;
};

// de_HumanLoopActivationReasons omitted.

// de_HumanLoopQuotaExceededException omitted.

// de_IdempotentParameterMismatchException omitted.

/**
 * deserializeAws_json1_1IdentityDocument
 */
const de_IdentityDocument = (output: any, context: __SerdeContext): IdentityDocument => {
  return take(output, {
    Blocks: (_: any) => de_BlockList(_, context),
    DocumentIndex: __expectInt32,
    IdentityDocumentFields: (_: any) => de_IdentityDocumentFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1IdentityDocumentField
 */
const de_IdentityDocumentField = (output: any, context: __SerdeContext): IdentityDocumentField => {
  return take(output, {
    Type: (_: any) => de_AnalyzeIDDetections(_, context),
    ValueDetection: (_: any) => de_AnalyzeIDDetections(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1IdentityDocumentFieldList
 */
const de_IdentityDocumentFieldList = (output: any, context: __SerdeContext): IdentityDocumentField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdentityDocumentField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IdentityDocumentList
 */
const de_IdentityDocumentList = (output: any, context: __SerdeContext): IdentityDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdentityDocument(entry, context);
    });
  return retVal;
};

// de_IdList omitted.

// de_InternalServerError omitted.

// de_InvalidJobIdException omitted.

// de_InvalidKMSKeyException omitted.

// de_InvalidParameterException omitted.

// de_InvalidS3ObjectException omitted.

/**
 * deserializeAws_json1_1LendingDetection
 */
const de_LendingDetection = (output: any, context: __SerdeContext): LendingDetection => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Geometry: (_: any) => de_Geometry(_, context),
    SelectionStatus: __expectString,
    Text: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LendingDetectionList
 */
const de_LendingDetectionList = (output: any, context: __SerdeContext): LendingDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LendingDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LendingDocument
 */
const de_LendingDocument = (output: any, context: __SerdeContext): LendingDocument => {
  return take(output, {
    LendingFields: (_: any) => de_LendingFieldList(_, context),
    SignatureDetections: (_: any) => de_SignatureDetectionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LendingField
 */
const de_LendingField = (output: any, context: __SerdeContext): LendingField => {
  return take(output, {
    KeyDetection: (_: any) => de_LendingDetection(_, context),
    Type: __expectString,
    ValueDetections: (_: any) => de_LendingDetectionList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LendingFieldList
 */
const de_LendingFieldList = (output: any, context: __SerdeContext): LendingField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LendingField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LendingResult
 */
const de_LendingResult = (output: any, context: __SerdeContext): LendingResult => {
  return take(output, {
    Extractions: (_: any) => de_ExtractionList(_, context),
    Page: __expectInt32,
    PageClassification: (_: any) => de_PageClassification(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LendingResultList
 */
const de_LendingResultList = (output: any, context: __SerdeContext): LendingResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LendingResult(entry, context);
    });
  return retVal;
};

// de_LendingSummary omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1LineItemFields
 */
const de_LineItemFields = (output: any, context: __SerdeContext): LineItemFields => {
  return take(output, {
    LineItemExpenseFields: (_: any) => de_ExpenseFieldList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LineItemGroup
 */
const de_LineItemGroup = (output: any, context: __SerdeContext): LineItemGroup => {
  return take(output, {
    LineItemGroupIndex: __expectInt32,
    LineItems: (_: any) => de_LineItemList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1LineItemGroupList
 */
const de_LineItemGroupList = (output: any, context: __SerdeContext): LineItemGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LineItemGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LineItemList
 */
const de_LineItemList = (output: any, context: __SerdeContext): LineItemFields[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LineItemFields(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListAdaptersResponse
 */
const de_ListAdaptersResponse = (output: any, context: __SerdeContext): ListAdaptersResponse => {
  return take(output, {
    Adapters: (_: any) => de_AdapterList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAdapterVersionsResponse
 */
const de_ListAdapterVersionsResponse = (output: any, context: __SerdeContext): ListAdapterVersionsResponse => {
  return take(output, {
    AdapterVersions: (_: any) => de_AdapterVersionList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_NormalizedValue omitted.

// de_OutputConfig omitted.

/**
 * deserializeAws_json1_1PageClassification
 */
const de_PageClassification = (output: any, context: __SerdeContext): PageClassification => {
  return take(output, {
    PageNumber: (_: any) => de_PredictionList(_, context),
    PageType: (_: any) => de_PredictionList(_, context),
  }) as any;
};

// de_PageList omitted.

// de_Pages omitted.

/**
 * deserializeAws_json1_1Point
 */
const de_Point = (output: any, context: __SerdeContext): Point => {
  return take(output, {
    X: __limitedParseFloat32,
    Y: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1Polygon
 */
const de_Polygon = (output: any, context: __SerdeContext): Point[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Point(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Prediction
 */
const de_Prediction = (output: any, context: __SerdeContext): Prediction => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PredictionList
 */
const de_PredictionList = (output: any, context: __SerdeContext): Prediction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Prediction(entry, context);
    });
  return retVal;
};

// de_ProvisionedThroughputExceededException omitted.

// de_Query omitted.

// de_QueryPages omitted.

// de_Relationship omitted.

// de_RelationshipList omitted.

// de_ResourceNotFoundException omitted.

// de_S3Object omitted.

// de_ServiceQuotaExceededException omitted.

/**
 * deserializeAws_json1_1SignatureDetection
 */
const de_SignatureDetection = (output: any, context: __SerdeContext): SignatureDetection => {
  return take(output, {
    Confidence: __limitedParseFloat32,
    Geometry: (_: any) => de_Geometry(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SignatureDetectionList
 */
const de_SignatureDetectionList = (output: any, context: __SerdeContext): SignatureDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SignatureDetection(entry, context);
    });
  return retVal;
};

// de_SplitDocument omitted.

// de_SplitDocumentList omitted.

// de_StartDocumentAnalysisResponse omitted.

// de_StartDocumentTextDetectionResponse omitted.

// de_StartExpenseAnalysisResponse omitted.

// de_StartLendingAnalysisResponse omitted.

// de_StringList omitted.

// de_TagMap omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_UndetectedDocumentTypeList omitted.

// de_UndetectedSignature omitted.

// de_UndetectedSignatureList omitted.

// de_UnsupportedDocumentException omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_1UpdateAdapterResponse
 */
const de_UpdateAdapterResponse = (output: any, context: __SerdeContext): UpdateAdapterResponse => {
  return take(output, {
    AdapterId: __expectString,
    AdapterName: __expectString,
    AutoUpdate: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    FeatureTypes: _json,
  }) as any;
};

// de_ValidationException omitted.

// de_Warning omitted.

// de_Warnings omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `Textract.${operation}`,
  };
}
