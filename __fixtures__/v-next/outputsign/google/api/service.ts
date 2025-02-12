import { Api, ApiSDKType } from "../protobuf/api";
import { Type, TypeSDKType, Enum, EnumSDKType } from "../protobuf/type";
import { Documentation, DocumentationSDKType } from "./documentation";
import { Backend, BackendSDKType } from "./backend";
import { Http, HttpSDKType } from "./http";
import { Quota, QuotaSDKType } from "./quota";
import { Authentication, AuthenticationSDKType } from "./auth";
import { Context, ContextSDKType } from "./context";
import { Usage, UsageSDKType } from "./usage";
import { Endpoint, EndpointSDKType } from "./endpoint";
import { Control, ControlSDKType } from "./control";
import { LogDescriptor, LogDescriptorSDKType } from "./log";
import { MetricDescriptor, MetricDescriptorSDKType } from "./metric";
import { MonitoredResourceDescriptor, MonitoredResourceDescriptorSDKType } from "./monitored_resource";
import { Billing, BillingSDKType } from "./billing";
import { Logging, LoggingSDKType } from "./logging";
import { Monitoring, MonitoringSDKType } from "./monitoring";
import { SystemParameters, SystemParametersSDKType } from "./system_parameter";
import { SourceInfo, SourceInfoSDKType } from "./source_info";
import { UInt32Value, UInt32ValueSDKType } from "../protobuf/wrappers";
import { BinaryReader, BinaryWriter } from "../../binary";
export const protobufPackage = "google.api";
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 * 
 * Example:
 * 
 *     type: google.api.Service
 *     name: calendar.googleapis.com
 *     title: Google Calendar API
 *     apis:
 *     - name: google.calendar.v3.Calendar
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 */
export interface Service {
  /**
   * The service name, which is a DNS-like logical identifier for the
   * service, such as `calendar.googleapis.com`. The service name
   * typically goes through DNS verification to make sure the owner
   * of the service also owns the DNS name.
   */
  name: string;
  /** The product title for this service. */
  title: string;
  /** The Google project that owns this service. */
  producerProjectId: string;
  /**
   * A unique ID for a specific instance of this message, typically assigned
   * by the client for tracking purpose. Must be no longer than 63 characters
   * and only lower case letters, digits, '.', '_' and '-' are allowed. If
   * empty, the server may choose to generate one instead.
   */
  id: string;
  /**
   * A list of API interfaces exported by this service. Only the `name` field
   * of the [google.protobuf.Api][google.protobuf.Api] needs to be provided by the configuration
   * author, as the remaining fields will be derived from the IDL during the
   * normalization process. It is an error to specify an API interface here
   * which cannot be resolved against the associated IDL files.
   */
  apis: Api[];
  /**
   * A list of all proto message types included in this API service.
   * Types referenced directly or indirectly by the `apis` are
   * automatically included.  Messages which are not referenced but
   * shall be included, such as types used by the `google.protobuf.Any` type,
   * should be listed here by name. Example:
   * 
   *     types:
   *     - name: google.protobuf.Int32
   */
  types: Type[];
  /**
   * A list of all enum types included in this API service.  Enums
   * referenced directly or indirectly by the `apis` are automatically
   * included.  Enums which are not referenced but shall be included
   * should be listed here by name. Example:
   * 
   *     enums:
   *     - name: google.someapi.v1.SomeEnum
   */
  enums: Enum[];
  /** Additional API documentation. */
  documentation?: Documentation;
  /** API backend configuration. */
  backend?: Backend;
  /** HTTP configuration. */
  http?: Http;
  /** Quota configuration. */
  quota?: Quota;
  /** Auth configuration. */
  authentication?: Authentication;
  /** Context configuration. */
  context?: Context;
  /** Configuration controlling usage of this service. */
  usage?: Usage;
  /**
   * Configuration for network endpoints.  If this is empty, then an endpoint
   * with the same name as the service is automatically generated to service all
   * defined APIs.
   */
  endpoints: Endpoint[];
  /** Configuration for the service control plane. */
  control?: Control;
  /** Defines the logs used by this service. */
  logs: LogDescriptor[];
  /** Defines the metrics used by this service. */
  metrics: MetricDescriptor[];
  /**
   * Defines the monitored resources used by this service. This is required
   * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
   */
  monitoredResources: MonitoredResourceDescriptor[];
  /** Billing configuration. */
  billing?: Billing;
  /** Logging configuration. */
  logging?: Logging;
  /** Monitoring configuration. */
  monitoring?: Monitoring;
  /** System parameter configuration. */
  systemParameters?: SystemParameters;
  /** Output only. The source information for this configuration if available. */
  sourceInfo?: SourceInfo;
  /**
   * Obsolete. Do not use.
   * 
   * This field has no semantic meaning. The service config compiler always
   * sets this field to `3`.
   */
  /** @deprecated */
  configVersion?: UInt32Value;
}
export interface ServiceProtoMsg {
  typeUrl: "/google.api.Service";
  value: Uint8Array;
}
/**
 * `Service` is the root object of Google service configuration schema. It
 * describes basic information about a service, such as the name and the
 * title, and delegates other aspects to sub-sections. Each sub-section is
 * either a proto message or a repeated proto message that configures a
 * specific aspect, such as auth. See each proto message definition for details.
 * 
 * Example:
 * 
 *     type: google.api.Service
 *     name: calendar.googleapis.com
 *     title: Google Calendar API
 *     apis:
 *     - name: google.calendar.v3.Calendar
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 */
export interface ServiceSDKType {
  name: string;
  title: string;
  producer_project_id: string;
  id: string;
  apis: ApiSDKType[];
  types: TypeSDKType[];
  enums: EnumSDKType[];
  documentation?: DocumentationSDKType;
  backend?: BackendSDKType;
  http?: HttpSDKType;
  quota?: QuotaSDKType;
  authentication?: AuthenticationSDKType;
  context?: ContextSDKType;
  usage?: UsageSDKType;
  endpoints: EndpointSDKType[];
  control?: ControlSDKType;
  logs: LogDescriptorSDKType[];
  metrics: MetricDescriptorSDKType[];
  monitored_resources: MonitoredResourceDescriptorSDKType[];
  billing?: BillingSDKType;
  logging?: LoggingSDKType;
  monitoring?: MonitoringSDKType;
  system_parameters?: SystemParametersSDKType;
  source_info?: SourceInfoSDKType;
  /** @deprecated */
  config_version?: UInt32ValueSDKType;
}
function createBaseService(): Service {
  return {
    name: "",
    title: "",
    producerProjectId: "",
    id: "",
    apis: [],
    types: [],
    enums: [],
    documentation: undefined,
    backend: undefined,
    http: undefined,
    quota: undefined,
    authentication: undefined,
    context: undefined,
    usage: undefined,
    endpoints: [],
    control: undefined,
    logs: [],
    metrics: [],
    monitoredResources: [],
    billing: undefined,
    logging: undefined,
    monitoring: undefined,
    systemParameters: undefined,
    sourceInfo: undefined,
    configVersion: undefined
  };
}
export const Service = {
  typeUrl: "/google.api.Service",
  encode(message: Service, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.producerProjectId !== "") {
      writer.uint32(178).string(message.producerProjectId);
    }
    if (message.id !== "") {
      writer.uint32(266).string(message.id);
    }
    for (const v of message.apis) {
      Api.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.types) {
      Type.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enums) {
      Enum.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.documentation !== undefined) {
      Documentation.encode(message.documentation, writer.uint32(50).fork()).ldelim();
    }
    if (message.backend !== undefined) {
      Backend.encode(message.backend, writer.uint32(66).fork()).ldelim();
    }
    if (message.http !== undefined) {
      Http.encode(message.http, writer.uint32(74).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(82).fork()).ldelim();
    }
    if (message.authentication !== undefined) {
      Authentication.encode(message.authentication, writer.uint32(90).fork()).ldelim();
    }
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(98).fork()).ldelim();
    }
    if (message.usage !== undefined) {
      Usage.encode(message.usage, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    if (message.control !== undefined) {
      Control.encode(message.control, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.logs) {
      LogDescriptor.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    for (const v of message.metrics) {
      MetricDescriptor.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    for (const v of message.monitoredResources) {
      MonitoredResourceDescriptor.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.billing !== undefined) {
      Billing.encode(message.billing, writer.uint32(210).fork()).ldelim();
    }
    if (message.logging !== undefined) {
      Logging.encode(message.logging, writer.uint32(218).fork()).ldelim();
    }
    if (message.monitoring !== undefined) {
      Monitoring.encode(message.monitoring, writer.uint32(226).fork()).ldelim();
    }
    if (message.systemParameters !== undefined) {
      SystemParameters.encode(message.systemParameters, writer.uint32(234).fork()).ldelim();
    }
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(298).fork()).ldelim();
    }
    if (message.configVersion !== undefined) {
      UInt32Value.encode(message.configVersion, writer.uint32(162).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Service {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 22:
          message.producerProjectId = reader.string();
          break;
        case 33:
          message.id = reader.string();
          break;
        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;
        case 4:
          message.types.push(Type.decode(reader, reader.uint32()));
          break;
        case 5:
          message.enums.push(Enum.decode(reader, reader.uint32()));
          break;
        case 6:
          message.documentation = Documentation.decode(reader, reader.uint32());
          break;
        case 8:
          message.backend = Backend.decode(reader, reader.uint32());
          break;
        case 9:
          message.http = Http.decode(reader, reader.uint32());
          break;
        case 10:
          message.quota = Quota.decode(reader, reader.uint32());
          break;
        case 11:
          message.authentication = Authentication.decode(reader, reader.uint32());
          break;
        case 12:
          message.context = Context.decode(reader, reader.uint32());
          break;
        case 15:
          message.usage = Usage.decode(reader, reader.uint32());
          break;
        case 18:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 21:
          message.control = Control.decode(reader, reader.uint32());
          break;
        case 23:
          message.logs.push(LogDescriptor.decode(reader, reader.uint32()));
          break;
        case 24:
          message.metrics.push(MetricDescriptor.decode(reader, reader.uint32()));
          break;
        case 25:
          message.monitoredResources.push(MonitoredResourceDescriptor.decode(reader, reader.uint32()));
          break;
        case 26:
          message.billing = Billing.decode(reader, reader.uint32());
          break;
        case 27:
          message.logging = Logging.decode(reader, reader.uint32());
          break;
        case 28:
          message.monitoring = Monitoring.decode(reader, reader.uint32());
          break;
        case 29:
          message.systemParameters = SystemParameters.decode(reader, reader.uint32());
          break;
        case 37:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        case 20:
          message.configVersion = UInt32Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ServiceProtoMsg): Service {
    return Service.decode(message.value);
  },
  toProto(message: Service): Uint8Array {
    return Service.encode(message).finish();
  },
  toProtoMsg(message: Service): ServiceProtoMsg {
    return {
      typeUrl: "/google.api.Service",
      value: Service.encode(message).finish()
    };
  }
};