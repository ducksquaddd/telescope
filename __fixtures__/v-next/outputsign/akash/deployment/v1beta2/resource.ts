import { ResourceUnits, ResourceUnitsSDKType } from "../../base/v1beta2/resourceunits";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "akash.deployment.v1beta2";
/** Resource stores unit, total count and price of resource */
export interface Resource {
  resources: ResourceUnits;
  count: number;
  price: DecCoin;
}
export interface ResourceProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.Resource";
  value: Uint8Array;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceSDKType {
  resources: ResourceUnitsSDKType;
  count: number;
  price: DecCoinSDKType;
}
function createBaseResource(): Resource {
  return {
    resources: ResourceUnits.fromPartial({}),
    count: 0,
    price: DecCoin.fromPartial({})
  };
}
export const Resource = {
  typeUrl: "/akash.deployment.v1beta2.Resource",
  encode(message: Resource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resources !== undefined) {
      ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Resource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = ResourceUnits.decode(reader, reader.uint32());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ResourceProtoMsg): Resource {
    return Resource.decode(message.value);
  },
  toProto(message: Resource): Uint8Array {
    return Resource.encode(message).finish();
  },
  toProtoMsg(message: Resource): ResourceProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.Resource",
      value: Resource.encode(message).finish()
    };
  }
};