import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "tendermint.libs.bits";
export interface BitArray {
  bits: bigint;
  elems: bigint[];
}
export interface BitArrayProtoMsg {
  typeUrl: "/tendermint.libs.bits.BitArray";
  value: Uint8Array;
}
export interface BitArraySDKType {
  bits: bigint;
  elems: bigint[];
}
function createBaseBitArray(): BitArray {
  return {
    bits: BigInt(0),
    elems: []
  };
}
export const BitArray = {
  typeUrl: "/tendermint.libs.bits.BitArray",
  encode(message: BitArray, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bits !== BigInt(0)) {
      writer.uint32(8).int64(message.bits);
    }
    writer.uint32(18).fork();
    for (const v of message.elems) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BitArray {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bits = reader.int64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.elems.push(reader.uint64());
            }
          } else {
            message.elems.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: BitArrayProtoMsg): BitArray {
    return BitArray.decode(message.value);
  },
  toProto(message: BitArray): Uint8Array {
    return BitArray.encode(message).finish();
  },
  toProtoMsg(message: BitArray): BitArrayProtoMsg {
    return {
      typeUrl: "/tendermint.libs.bits.BitArray",
      value: BitArray.encode(message).finish()
    };
  }
};