import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "cosmos.base.v1beta1";
/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface Coin {
  denom: string;
  amount: string;
}
export interface CoinProtoMsg {
  typeUrl: "/cosmos.base.v1beta1.Coin";
  value: Uint8Array;
}
/**
 * Coin defines a token with a denomination and an amount.
 * 
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface CoinSDKType {
  denom: string;
  amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoin {
  denom: string;
  amount: string;
}
export interface DecCoinProtoMsg {
  typeUrl: "/cosmos.base.v1beta1.DecCoin";
  value: Uint8Array;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 * 
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoinSDKType {
  denom: string;
  amount: string;
}
/** IntProto defines a Protobuf wrapper around an Int object. */
export interface IntProto {
  int: string;
}
export interface IntProtoProtoMsg {
  typeUrl: "/cosmos.base.v1beta1.IntProto";
  value: Uint8Array;
}
/** IntProto defines a Protobuf wrapper around an Int object. */
export interface IntProtoSDKType {
  int: string;
}
/** DecProto defines a Protobuf wrapper around a Dec object. */
export interface DecProto {
  dec: string;
}
export interface DecProtoProtoMsg {
  typeUrl: "/cosmos.base.v1beta1.DecProto";
  value: Uint8Array;
}
/** DecProto defines a Protobuf wrapper around a Dec object. */
export interface DecProtoSDKType {
  dec: string;
}
function createBaseCoin(): Coin {
  return {
    denom: "",
    amount: ""
  };
}
export const Coin = {
  typeUrl: "/cosmos.base.v1beta1.Coin",
  encode(message: Coin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Coin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: CoinProtoMsg): Coin {
    return Coin.decode(message.value);
  },
  toProto(message: Coin): Uint8Array {
    return Coin.encode(message).finish();
  },
  toProtoMsg(message: Coin): CoinProtoMsg {
    return {
      typeUrl: "/cosmos.base.v1beta1.Coin",
      value: Coin.encode(message).finish()
    };
  }
};
function createBaseDecCoin(): DecCoin {
  return {
    denom: "",
    amount: ""
  };
}
export const DecCoin = {
  typeUrl: "/cosmos.base.v1beta1.DecCoin",
  encode(message: DecCoin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DecCoin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: DecCoinProtoMsg): DecCoin {
    return DecCoin.decode(message.value);
  },
  toProto(message: DecCoin): Uint8Array {
    return DecCoin.encode(message).finish();
  },
  toProtoMsg(message: DecCoin): DecCoinProtoMsg {
    return {
      typeUrl: "/cosmos.base.v1beta1.DecCoin",
      value: DecCoin.encode(message).finish()
    };
  }
};
function createBaseIntProto(): IntProto {
  return {
    int: ""
  };
}
export const IntProto = {
  typeUrl: "/cosmos.base.v1beta1.IntProto",
  encode(message: IntProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.int !== "") {
      writer.uint32(10).string(message.int);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IntProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.int = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: IntProtoProtoMsg): IntProto {
    return IntProto.decode(message.value);
  },
  toProto(message: IntProto): Uint8Array {
    return IntProto.encode(message).finish();
  },
  toProtoMsg(message: IntProto): IntProtoProtoMsg {
    return {
      typeUrl: "/cosmos.base.v1beta1.IntProto",
      value: IntProto.encode(message).finish()
    };
  }
};
function createBaseDecProto(): DecProto {
  return {
    dec: ""
  };
}
export const DecProto = {
  typeUrl: "/cosmos.base.v1beta1.DecProto",
  encode(message: DecProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dec !== "") {
      writer.uint32(10).string(message.dec);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DecProto {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dec = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: DecProtoProtoMsg): DecProto {
    return DecProto.decode(message.value);
  },
  toProto(message: DecProto): Uint8Array {
    return DecProto.encode(message).finish();
  },
  toProtoMsg(message: DecProto): DecProtoProtoMsg {
    return {
      typeUrl: "/cosmos.base.v1beta1.DecProto",
      value: DecProto.encode(message).finish()
    };
  }
};