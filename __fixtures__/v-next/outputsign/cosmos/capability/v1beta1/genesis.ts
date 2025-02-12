import { CapabilityOwners, CapabilityOwnersSDKType } from "./capability";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "cosmos.capability.v1beta1";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
  /** index is the index of the capability owner. */
  index: bigint;
  /** index_owners are the owners at the given index. */
  indexOwners: CapabilityOwners;
}
export interface GenesisOwnersProtoMsg {
  typeUrl: "/cosmos.capability.v1beta1.GenesisOwners";
  value: Uint8Array;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersSDKType {
  index: bigint;
  index_owners: CapabilityOwnersSDKType;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** index is the capability global index. */
  index: bigint;
  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners: GenesisOwners[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.capability.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
  index: bigint;
  owners: GenesisOwnersSDKType[];
}
function createBaseGenesisOwners(): GenesisOwners {
  return {
    index: BigInt(0),
    indexOwners: CapabilityOwners.fromPartial({})
  };
}
export const GenesisOwners = {
  typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
  encode(message: GenesisOwners, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.indexOwners !== undefined) {
      CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisOwners {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.indexOwners = CapabilityOwners.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GenesisOwnersProtoMsg): GenesisOwners {
    return GenesisOwners.decode(message.value);
  },
  toProto(message: GenesisOwners): Uint8Array {
    return GenesisOwners.encode(message).finish();
  },
  toProtoMsg(message: GenesisOwners): GenesisOwnersProtoMsg {
    return {
      typeUrl: "/cosmos.capability.v1beta1.GenesisOwners",
      value: GenesisOwners.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    index: BigInt(0),
    owners: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.capability.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.capability.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};