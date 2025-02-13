import { Duration, DurationSDKType } from "../protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
export const protobufPackage = "google.rpc";
/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 * 
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 * 
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retries have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface RetryInfo {
  /** Clients should wait at least this long between retrying the same request. */
  retryDelay?: Duration;
}
export interface RetryInfoProtoMsg {
  typeUrl: "/google.rpc.RetryInfo";
  value: Uint8Array;
}
/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 * 
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 * 
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retries have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface RetryInfoSDKType {
  retry_delay?: DurationSDKType;
}
/** Describes additional debugging info. */
export interface DebugInfo {
  /** The stack trace entries indicating where the error occurred. */
  stackEntries: string[];
  /** Additional debugging information provided by the server. */
  detail: string;
}
export interface DebugInfoProtoMsg {
  typeUrl: "/google.rpc.DebugInfo";
  value: Uint8Array;
}
/** Describes additional debugging info. */
export interface DebugInfoSDKType {
  stack_entries: string[];
  detail: string;
}
/**
 * Describes how a quota check failed.
 * 
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 * 
 * Also see RetryInfo and Help types for other details about handling a
 * quota failure.
 */
export interface QuotaFailure {
  /** Describes all quota violations. */
  violations: QuotaFailure_Violation[];
}
export interface QuotaFailureProtoMsg {
  typeUrl: "/google.rpc.QuotaFailure";
  value: Uint8Array;
}
/**
 * Describes how a quota check failed.
 * 
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 * 
 * Also see RetryInfo and Help types for other details about handling a
 * quota failure.
 */
export interface QuotaFailureSDKType {
  violations: QuotaFailure_ViolationSDKType[];
}
/**
 * A message type used to describe a single quota violation.  For example, a
 * daily quota or a custom quota that was exceeded.
 */
export interface QuotaFailure_Violation {
  /**
   * The subject on which the quota check failed.
   * For example, "clientip:<ip address of client>" or "project:<Google
   * developer project id>".
   */
  subject: string;
  /**
   * A description of how the quota check failed. Clients can use this
   * description to find more about the quota configuration in the service's
   * public documentation, or find the relevant quota limit to adjust through
   * developer console.
   * 
   * For example: "Service disabled" or "Daily Limit for read operations
   * exceeded".
   */
  description: string;
}
export interface QuotaFailure_ViolationProtoMsg {
  typeUrl: "/google.rpc.Violation";
  value: Uint8Array;
}
/**
 * A message type used to describe a single quota violation.  For example, a
 * daily quota or a custom quota that was exceeded.
 */
export interface QuotaFailure_ViolationSDKType {
  subject: string;
  description: string;
}
export interface ErrorInfo_MetadataEntry {
  key: string;
  value: string;
}
export interface ErrorInfo_MetadataEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface ErrorInfo_MetadataEntrySDKType {
  key: string;
  value: string;
}
/**
 * Describes the cause of the error with structured details.
 * 
 * Example of an error when contacting the "pubsub.googleapis.com" API when it
 * is not enabled:
 * 
 *     { "reason": "API_DISABLED"
 *       "domain": "googleapis.com"
 *       "metadata": {
 *         "resource": "projects/123",
 *         "service": "pubsub.googleapis.com"
 *       }
 *     }
 * 
 * This response indicates that the pubsub.googleapis.com API is not enabled.
 * 
 * Example of an error that is returned when attempting to create a Spanner
 * instance in a region that is out of stock:
 * 
 *     { "reason": "STOCKOUT"
 *       "domain": "spanner.googleapis.com",
 *       "metadata": {
 *         "availableRegions": "us-central1,us-east2"
 *       }
 *     }
 */
export interface ErrorInfo {
  /**
   * The reason of the error. This is a constant value that identifies the
   * proximate cause of the error. Error reasons are unique within a particular
   * domain of errors. This should be at most 63 characters and match
   * /[A-Z0-9_]+/.
   */
  reason: string;
  /**
   * The logical grouping to which the "reason" belongs. The error domain
   * is typically the registered service name of the tool or product that
   * generates the error. Example: "pubsub.googleapis.com". If the error is
   * generated by some common infrastructure, the error domain must be a
   * globally unique value that identifies the infrastructure. For Google API
   * infrastructure, the error domain is "googleapis.com".
   */
  domain: string;
  /**
   * Additional structured details about this error.
   * 
   * Keys should match /[a-zA-Z0-9-_]/ and be limited to 64 characters in
   * length. When identifying the current value of an exceeded limit, the units
   * should be contained in the key, not the value.  For example, rather than
   * {"instanceLimit": "100/request"}, should be returned as,
   * {"instanceLimitPerRequest": "100"}, if the client exceeds the number of
   * instances that can be created in a single (batch) request.
   */
  metadata: {
    [key: string]: string;
  };
}
export interface ErrorInfoProtoMsg {
  typeUrl: "/google.rpc.ErrorInfo";
  value: Uint8Array;
}
/**
 * Describes the cause of the error with structured details.
 * 
 * Example of an error when contacting the "pubsub.googleapis.com" API when it
 * is not enabled:
 * 
 *     { "reason": "API_DISABLED"
 *       "domain": "googleapis.com"
 *       "metadata": {
 *         "resource": "projects/123",
 *         "service": "pubsub.googleapis.com"
 *       }
 *     }
 * 
 * This response indicates that the pubsub.googleapis.com API is not enabled.
 * 
 * Example of an error that is returned when attempting to create a Spanner
 * instance in a region that is out of stock:
 * 
 *     { "reason": "STOCKOUT"
 *       "domain": "spanner.googleapis.com",
 *       "metadata": {
 *         "availableRegions": "us-central1,us-east2"
 *       }
 *     }
 */
export interface ErrorInfoSDKType {
  reason: string;
  domain: string;
  metadata: {
    [key: string]: string;
  };
}
/**
 * Describes what preconditions have failed.
 * 
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface PreconditionFailure {
  /** Describes all precondition violations. */
  violations: PreconditionFailure_Violation[];
}
export interface PreconditionFailureProtoMsg {
  typeUrl: "/google.rpc.PreconditionFailure";
  value: Uint8Array;
}
/**
 * Describes what preconditions have failed.
 * 
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface PreconditionFailureSDKType {
  violations: PreconditionFailure_ViolationSDKType[];
}
/** A message type used to describe a single precondition failure. */
export interface PreconditionFailure_Violation {
  /**
   * The type of PreconditionFailure. We recommend using a service-specific
   * enum type to define the supported precondition violation subjects. For
   * example, "TOS" for "Terms of Service violation".
   */
  type: string;
  /**
   * The subject, relative to the type, that failed.
   * For example, "google.com/cloud" relative to the "TOS" type would indicate
   * which terms of service is being referenced.
   */
  subject: string;
  /**
   * A description of how the precondition failed. Developers can use this
   * description to understand how to fix the failure.
   * 
   * For example: "Terms of service not accepted".
   */
  description: string;
}
export interface PreconditionFailure_ViolationProtoMsg {
  typeUrl: "/google.rpc.Violation";
  value: Uint8Array;
}
/** A message type used to describe a single precondition failure. */
export interface PreconditionFailure_ViolationSDKType {
  type: string;
  subject: string;
  description: string;
}
/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface BadRequest {
  /** Describes all violations in a client request. */
  fieldViolations: BadRequest_FieldViolation[];
}
export interface BadRequestProtoMsg {
  typeUrl: "/google.rpc.BadRequest";
  value: Uint8Array;
}
/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface BadRequestSDKType {
  field_violations: BadRequest_FieldViolationSDKType[];
}
/** A message type used to describe a single bad request field. */
export interface BadRequest_FieldViolation {
  /**
   * A path leading to a field in the request body. The value will be a
   * sequence of dot-separated identifiers that identify a protocol buffer
   * field. E.g., "field_violations.field" would identify this field.
   */
  field: string;
  /** A description of why the request element is bad. */
  description: string;
}
export interface BadRequest_FieldViolationProtoMsg {
  typeUrl: "/google.rpc.FieldViolation";
  value: Uint8Array;
}
/** A message type used to describe a single bad request field. */
export interface BadRequest_FieldViolationSDKType {
  field: string;
  description: string;
}
/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface RequestInfo {
  /**
   * An opaque string that should only be interpreted by the service generating
   * it. For example, it can be used to identify requests in the service's logs.
   */
  requestId: string;
  /**
   * Any data that was used to serve this request. For example, an encrypted
   * stack trace that can be sent back to the service provider for debugging.
   */
  servingData: string;
}
export interface RequestInfoProtoMsg {
  typeUrl: "/google.rpc.RequestInfo";
  value: Uint8Array;
}
/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface RequestInfoSDKType {
  request_id: string;
  serving_data: string;
}
/** Describes the resource that is being accessed. */
export interface ResourceInfo {
  /**
   * A name for the type of resource being accessed, e.g. "sql table",
   * "cloud storage bucket", "file", "Google calendar"; or the type URL
   * of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic".
   */
  resourceType: string;
  /**
   * The name of the resource being accessed.  For example, a shared calendar
   * name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current
   * error is [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
   */
  resourceName: string;
  /**
   * The owner of the resource (optional).
   * For example, "user:<owner email>" or "project:<Google developer project
   * id>".
   */
  owner: string;
  /**
   * Describes what error is encountered when accessing this resource.
   * For example, updating a cloud project may require the `writer` permission
   * on the developer console project.
   */
  description: string;
}
export interface ResourceInfoProtoMsg {
  typeUrl: "/google.rpc.ResourceInfo";
  value: Uint8Array;
}
/** Describes the resource that is being accessed. */
export interface ResourceInfoSDKType {
  resource_type: string;
  resource_name: string;
  owner: string;
  description: string;
}
/**
 * Provides links to documentation or for performing an out of band action.
 * 
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface Help {
  /** URL(s) pointing to additional information on handling the current error. */
  links: Help_Link[];
}
export interface HelpProtoMsg {
  typeUrl: "/google.rpc.Help";
  value: Uint8Array;
}
/**
 * Provides links to documentation or for performing an out of band action.
 * 
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface HelpSDKType {
  links: Help_LinkSDKType[];
}
/** Describes a URL link. */
export interface Help_Link {
  /** Describes what the link offers. */
  description: string;
  /** The URL of the link. */
  url: string;
}
export interface Help_LinkProtoMsg {
  typeUrl: "/google.rpc.Link";
  value: Uint8Array;
}
/** Describes a URL link. */
export interface Help_LinkSDKType {
  description: string;
  url: string;
}
/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface LocalizedMessage {
  /**
   * The locale used following the specification defined at
   * http://www.rfc-editor.org/rfc/bcp/bcp47.txt.
   * Examples are: "en-US", "fr-CH", "es-MX"
   */
  locale: string;
  /** The localized error message in the above locale. */
  message: string;
}
export interface LocalizedMessageProtoMsg {
  typeUrl: "/google.rpc.LocalizedMessage";
  value: Uint8Array;
}
/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface LocalizedMessageSDKType {
  locale: string;
  message: string;
}
function createBaseRetryInfo(): RetryInfo {
  return {
    retryDelay: undefined
  };
}
export const RetryInfo = {
  typeUrl: "/google.rpc.RetryInfo",
  encode(message: RetryInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.retryDelay !== undefined) {
      Duration.encode(message.retryDelay, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RetryInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetryInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retryDelay = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: RetryInfoProtoMsg): RetryInfo {
    return RetryInfo.decode(message.value);
  },
  toProto(message: RetryInfo): Uint8Array {
    return RetryInfo.encode(message).finish();
  },
  toProtoMsg(message: RetryInfo): RetryInfoProtoMsg {
    return {
      typeUrl: "/google.rpc.RetryInfo",
      value: RetryInfo.encode(message).finish()
    };
  }
};
function createBaseDebugInfo(): DebugInfo {
  return {
    stackEntries: [],
    detail: ""
  };
}
export const DebugInfo = {
  typeUrl: "/google.rpc.DebugInfo",
  encode(message: DebugInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stackEntries) {
      writer.uint32(10).string(v!);
    }
    if (message.detail !== "") {
      writer.uint32(18).string(message.detail);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DebugInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stackEntries.push(reader.string());
          break;
        case 2:
          message.detail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: DebugInfoProtoMsg): DebugInfo {
    return DebugInfo.decode(message.value);
  },
  toProto(message: DebugInfo): Uint8Array {
    return DebugInfo.encode(message).finish();
  },
  toProtoMsg(message: DebugInfo): DebugInfoProtoMsg {
    return {
      typeUrl: "/google.rpc.DebugInfo",
      value: DebugInfo.encode(message).finish()
    };
  }
};
function createBaseQuotaFailure(): QuotaFailure {
  return {
    violations: []
  };
}
export const QuotaFailure = {
  typeUrl: "/google.rpc.QuotaFailure",
  encode(message: QuotaFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.violations) {
      QuotaFailure_Violation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.violations.push(QuotaFailure_Violation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QuotaFailureProtoMsg): QuotaFailure {
    return QuotaFailure.decode(message.value);
  },
  toProto(message: QuotaFailure): Uint8Array {
    return QuotaFailure.encode(message).finish();
  },
  toProtoMsg(message: QuotaFailure): QuotaFailureProtoMsg {
    return {
      typeUrl: "/google.rpc.QuotaFailure",
      value: QuotaFailure.encode(message).finish()
    };
  }
};
function createBaseQuotaFailure_Violation(): QuotaFailure_Violation {
  return {
    subject: "",
    description: ""
  };
}
export const QuotaFailure_Violation = {
  typeUrl: "/google.rpc.Violation",
  encode(message: QuotaFailure_Violation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subject !== "") {
      writer.uint32(10).string(message.subject);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaFailure_Violation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaFailure_Violation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QuotaFailure_ViolationProtoMsg): QuotaFailure_Violation {
    return QuotaFailure_Violation.decode(message.value);
  },
  toProto(message: QuotaFailure_Violation): Uint8Array {
    return QuotaFailure_Violation.encode(message).finish();
  },
  toProtoMsg(message: QuotaFailure_Violation): QuotaFailure_ViolationProtoMsg {
    return {
      typeUrl: "/google.rpc.Violation",
      value: QuotaFailure_Violation.encode(message).finish()
    };
  }
};
function createBaseErrorInfo_MetadataEntry(): ErrorInfo_MetadataEntry {
  return {
    key: "",
    value: ""
  };
}
export const ErrorInfo_MetadataEntry = {
  encode(message: ErrorInfo_MetadataEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ErrorInfo_MetadataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorInfo_MetadataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ErrorInfo_MetadataEntryProtoMsg): ErrorInfo_MetadataEntry {
    return ErrorInfo_MetadataEntry.decode(message.value);
  },
  toProto(message: ErrorInfo_MetadataEntry): Uint8Array {
    return ErrorInfo_MetadataEntry.encode(message).finish();
  }
};
function createBaseErrorInfo(): ErrorInfo {
  return {
    reason: "",
    domain: "",
    metadata: {}
  };
}
export const ErrorInfo = {
  typeUrl: "/google.rpc.ErrorInfo",
  encode(message: ErrorInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }
    if (message.domain !== "") {
      writer.uint32(18).string(message.domain);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      ErrorInfo_MetadataEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ErrorInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reason = reader.string();
          break;
        case 2:
          message.domain = reader.string();
          break;
        case 3:
          const entry3 = ErrorInfo_MetadataEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ErrorInfoProtoMsg): ErrorInfo {
    return ErrorInfo.decode(message.value);
  },
  toProto(message: ErrorInfo): Uint8Array {
    return ErrorInfo.encode(message).finish();
  },
  toProtoMsg(message: ErrorInfo): ErrorInfoProtoMsg {
    return {
      typeUrl: "/google.rpc.ErrorInfo",
      value: ErrorInfo.encode(message).finish()
    };
  }
};
function createBasePreconditionFailure(): PreconditionFailure {
  return {
    violations: []
  };
}
export const PreconditionFailure = {
  typeUrl: "/google.rpc.PreconditionFailure",
  encode(message: PreconditionFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.violations) {
      PreconditionFailure_Violation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PreconditionFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreconditionFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.violations.push(PreconditionFailure_Violation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: PreconditionFailureProtoMsg): PreconditionFailure {
    return PreconditionFailure.decode(message.value);
  },
  toProto(message: PreconditionFailure): Uint8Array {
    return PreconditionFailure.encode(message).finish();
  },
  toProtoMsg(message: PreconditionFailure): PreconditionFailureProtoMsg {
    return {
      typeUrl: "/google.rpc.PreconditionFailure",
      value: PreconditionFailure.encode(message).finish()
    };
  }
};
function createBasePreconditionFailure_Violation(): PreconditionFailure_Violation {
  return {
    type: "",
    subject: "",
    description: ""
  };
}
export const PreconditionFailure_Violation = {
  typeUrl: "/google.rpc.Violation",
  encode(message: PreconditionFailure_Violation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.subject !== "") {
      writer.uint32(18).string(message.subject);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PreconditionFailure_Violation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreconditionFailure_Violation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.subject = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: PreconditionFailure_ViolationProtoMsg): PreconditionFailure_Violation {
    return PreconditionFailure_Violation.decode(message.value);
  },
  toProto(message: PreconditionFailure_Violation): Uint8Array {
    return PreconditionFailure_Violation.encode(message).finish();
  },
  toProtoMsg(message: PreconditionFailure_Violation): PreconditionFailure_ViolationProtoMsg {
    return {
      typeUrl: "/google.rpc.Violation",
      value: PreconditionFailure_Violation.encode(message).finish()
    };
  }
};
function createBaseBadRequest(): BadRequest {
  return {
    fieldViolations: []
  };
}
export const BadRequest = {
  typeUrl: "/google.rpc.BadRequest",
  encode(message: BadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fieldViolations) {
      BadRequest_FieldViolation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldViolations.push(BadRequest_FieldViolation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: BadRequestProtoMsg): BadRequest {
    return BadRequest.decode(message.value);
  },
  toProto(message: BadRequest): Uint8Array {
    return BadRequest.encode(message).finish();
  },
  toProtoMsg(message: BadRequest): BadRequestProtoMsg {
    return {
      typeUrl: "/google.rpc.BadRequest",
      value: BadRequest.encode(message).finish()
    };
  }
};
function createBaseBadRequest_FieldViolation(): BadRequest_FieldViolation {
  return {
    field: "",
    description: ""
  };
}
export const BadRequest_FieldViolation = {
  typeUrl: "/google.rpc.FieldViolation",
  encode(message: BadRequest_FieldViolation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BadRequest_FieldViolation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadRequest_FieldViolation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: BadRequest_FieldViolationProtoMsg): BadRequest_FieldViolation {
    return BadRequest_FieldViolation.decode(message.value);
  },
  toProto(message: BadRequest_FieldViolation): Uint8Array {
    return BadRequest_FieldViolation.encode(message).finish();
  },
  toProtoMsg(message: BadRequest_FieldViolation): BadRequest_FieldViolationProtoMsg {
    return {
      typeUrl: "/google.rpc.FieldViolation",
      value: BadRequest_FieldViolation.encode(message).finish()
    };
  }
};
function createBaseRequestInfo(): RequestInfo {
  return {
    requestId: "",
    servingData: ""
  };
}
export const RequestInfo = {
  typeUrl: "/google.rpc.RequestInfo",
  encode(message: RequestInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.servingData !== "") {
      writer.uint32(18).string(message.servingData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.servingData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: RequestInfoProtoMsg): RequestInfo {
    return RequestInfo.decode(message.value);
  },
  toProto(message: RequestInfo): Uint8Array {
    return RequestInfo.encode(message).finish();
  },
  toProtoMsg(message: RequestInfo): RequestInfoProtoMsg {
    return {
      typeUrl: "/google.rpc.RequestInfo",
      value: RequestInfo.encode(message).finish()
    };
  }
};
function createBaseResourceInfo(): ResourceInfo {
  return {
    resourceType: "",
    resourceName: "",
    owner: "",
    description: ""
  };
}
export const ResourceInfo = {
  typeUrl: "/google.rpc.ResourceInfo",
  encode(message: ResourceInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resourceType !== "") {
      writer.uint32(10).string(message.resourceType);
    }
    if (message.resourceName !== "") {
      writer.uint32(18).string(message.resourceName);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceType = reader.string();
          break;
        case 2:
          message.resourceName = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ResourceInfoProtoMsg): ResourceInfo {
    return ResourceInfo.decode(message.value);
  },
  toProto(message: ResourceInfo): Uint8Array {
    return ResourceInfo.encode(message).finish();
  },
  toProtoMsg(message: ResourceInfo): ResourceInfoProtoMsg {
    return {
      typeUrl: "/google.rpc.ResourceInfo",
      value: ResourceInfo.encode(message).finish()
    };
  }
};
function createBaseHelp(): Help {
  return {
    links: []
  };
}
export const Help = {
  typeUrl: "/google.rpc.Help",
  encode(message: Help, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.links) {
      Help_Link.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Help {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.links.push(Help_Link.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: HelpProtoMsg): Help {
    return Help.decode(message.value);
  },
  toProto(message: Help): Uint8Array {
    return Help.encode(message).finish();
  },
  toProtoMsg(message: Help): HelpProtoMsg {
    return {
      typeUrl: "/google.rpc.Help",
      value: Help.encode(message).finish()
    };
  }
};
function createBaseHelp_Link(): Help_Link {
  return {
    description: "",
    url: ""
  };
}
export const Help_Link = {
  typeUrl: "/google.rpc.Link",
  encode(message: Help_Link, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Help_Link {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelp_Link();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: Help_LinkProtoMsg): Help_Link {
    return Help_Link.decode(message.value);
  },
  toProto(message: Help_Link): Uint8Array {
    return Help_Link.encode(message).finish();
  },
  toProtoMsg(message: Help_Link): Help_LinkProtoMsg {
    return {
      typeUrl: "/google.rpc.Link",
      value: Help_Link.encode(message).finish()
    };
  }
};
function createBaseLocalizedMessage(): LocalizedMessage {
  return {
    locale: "",
    message: ""
  };
}
export const LocalizedMessage = {
  typeUrl: "/google.rpc.LocalizedMessage",
  encode(message: LocalizedMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.locale !== "") {
      writer.uint32(10).string(message.locale);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LocalizedMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalizedMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locale = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: LocalizedMessageProtoMsg): LocalizedMessage {
    return LocalizedMessage.decode(message.value);
  },
  toProto(message: LocalizedMessage): Uint8Array {
    return LocalizedMessage.encode(message).finish();
  },
  toProtoMsg(message: LocalizedMessage): LocalizedMessageProtoMsg {
    return {
      typeUrl: "/google.rpc.LocalizedMessage",
      value: LocalizedMessage.encode(message).finish()
    };
  }
};