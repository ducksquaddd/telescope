import { BinaryReader, BinaryWriter } from "../../binary";
export const protobufPackage = "google.api";
/** Supported data type of the property values */
export enum Property_PropertyType {
  /** UNSPECIFIED - The type is unspecified, and will result in an error. */
  UNSPECIFIED = 0,
  /** INT64 - The type is `int64`. */
  INT64 = 1,
  /** BOOL - The type is `bool`. */
  BOOL = 2,
  /** STRING - The type is `string`. */
  STRING = 3,
  /** DOUBLE - The type is 'double'. */
  DOUBLE = 4,
  UNRECOGNIZED = -1,
}
export const Property_PropertyTypeSDKType = Property_PropertyType;
export function property_PropertyTypeFromJSON(object: any): Property_PropertyType {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return Property_PropertyType.UNSPECIFIED;
    case 1:
    case "INT64":
      return Property_PropertyType.INT64;
    case 2:
    case "BOOL":
      return Property_PropertyType.BOOL;
    case 3:
    case "STRING":
      return Property_PropertyType.STRING;
    case 4:
    case "DOUBLE":
      return Property_PropertyType.DOUBLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Property_PropertyType.UNRECOGNIZED;
  }
}
export function property_PropertyTypeToJSON(object: Property_PropertyType): string {
  switch (object) {
    case Property_PropertyType.UNSPECIFIED:
      return "UNSPECIFIED";
    case Property_PropertyType.INT64:
      return "INT64";
    case Property_PropertyType.BOOL:
      return "BOOL";
    case Property_PropertyType.STRING:
      return "STRING";
    case Property_PropertyType.DOUBLE:
      return "DOUBLE";
    case Property_PropertyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * A descriptor for defining project properties for a service. One service may
 * have many consumer projects, and the service may want to behave differently
 * depending on some properties on the project. For example, a project may be
 * associated with a school, or a business, or a government agency, a business
 * type property on the project may affect how a service responds to the client.
 * This descriptor defines which properties are allowed to be set on a project.
 * 
 * Example:
 * 
 *    project_properties:
 *      properties:
 *      - name: NO_WATERMARK
 *        type: BOOL
 *        description: Allows usage of the API without watermarks.
 *      - name: EXTENDED_TILE_CACHE_PERIOD
 *        type: INT64
 */
export interface ProjectProperties {
  /** List of per consumer project-specific properties. */
  properties: Property[];
}
export interface ProjectPropertiesProtoMsg {
  typeUrl: "/google.api.ProjectProperties";
  value: Uint8Array;
}
/**
 * A descriptor for defining project properties for a service. One service may
 * have many consumer projects, and the service may want to behave differently
 * depending on some properties on the project. For example, a project may be
 * associated with a school, or a business, or a government agency, a business
 * type property on the project may affect how a service responds to the client.
 * This descriptor defines which properties are allowed to be set on a project.
 * 
 * Example:
 * 
 *    project_properties:
 *      properties:
 *      - name: NO_WATERMARK
 *        type: BOOL
 *        description: Allows usage of the API without watermarks.
 *      - name: EXTENDED_TILE_CACHE_PERIOD
 *        type: INT64
 */
export interface ProjectPropertiesSDKType {
  properties: PropertySDKType[];
}
/**
 * Defines project properties.
 * 
 * API services can define properties that can be assigned to consumer projects
 * so that backends can perform response customization without having to make
 * additional calls or maintain additional storage. For example, Maps API
 * defines properties that controls map tile cache period, or whether to embed a
 * watermark in a result.
 * 
 * These values can be set via API producer console. Only API providers can
 * define and set these properties.
 */
export interface Property {
  /** The name of the property (a.k.a key). */
  name: string;
  /** The type of this property. */
  type: Property_PropertyType;
  /** The description of the property */
  description: string;
}
export interface PropertyProtoMsg {
  typeUrl: "/google.api.Property";
  value: Uint8Array;
}
/**
 * Defines project properties.
 * 
 * API services can define properties that can be assigned to consumer projects
 * so that backends can perform response customization without having to make
 * additional calls or maintain additional storage. For example, Maps API
 * defines properties that controls map tile cache period, or whether to embed a
 * watermark in a result.
 * 
 * These values can be set via API producer console. Only API providers can
 * define and set these properties.
 */
export interface PropertySDKType {
  name: string;
  type: Property_PropertyType;
  description: string;
}
function createBaseProjectProperties(): ProjectProperties {
  return {
    properties: []
  };
}
export const ProjectProperties = {
  typeUrl: "/google.api.ProjectProperties",
  encode(message: ProjectProperties, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.properties) {
      Property.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProjectProperties {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProjectProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.properties.push(Property.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ProjectPropertiesProtoMsg): ProjectProperties {
    return ProjectProperties.decode(message.value);
  },
  toProto(message: ProjectProperties): Uint8Array {
    return ProjectProperties.encode(message).finish();
  },
  toProtoMsg(message: ProjectProperties): ProjectPropertiesProtoMsg {
    return {
      typeUrl: "/google.api.ProjectProperties",
      value: ProjectProperties.encode(message).finish()
    };
  }
};
function createBaseProperty(): Property {
  return {
    name: "",
    type: 0,
    description: ""
  };
}
export const Property = {
  typeUrl: "/google.api.Property",
  encode(message: Property, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Property {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = (reader.int32() as any);
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
  fromProtoMsg(message: PropertyProtoMsg): Property {
    return Property.decode(message.value);
  },
  toProto(message: Property): Uint8Array {
    return Property.encode(message).finish();
  },
  toProtoMsg(message: Property): PropertyProtoMsg {
    return {
      typeUrl: "/google.api.Property",
      value: Property.encode(message).finish()
    };
  }
};