import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "osmosis.lockup";
export interface MsgLockTokens {
  owner: string;
  duration: Duration;
  coins: Coin[];
}
export interface MsgLockTokensProtoMsg {
  typeUrl: "/osmosis.lockup.MsgLockTokens";
  value: Uint8Array;
}
export interface MsgLockTokensAmino {
  owner: string;
  duration?: DurationAmino;
  coins: CoinAmino[];
}
export interface MsgLockTokensSDKType {
  owner: string;
  duration: DurationSDKType;
  coins: CoinSDKType[];
}
export interface MsgLockTokensResponse {
  ID: bigint;
}
export interface MsgLockTokensResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgLockTokensResponse";
  value: Uint8Array;
}
export interface MsgLockTokensResponseAmino {
  ID: string;
}
export interface MsgLockTokensResponseSDKType {
  ID: bigint;
}
export interface MsgBeginUnlockingAll {
  owner: string;
}
export interface MsgBeginUnlockingAllProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAllAmino {
  owner: string;
}
export interface MsgBeginUnlockingAllSDKType {
  owner: string;
}
export interface MsgBeginUnlockingAllResponse {
  unlocks: PeriodLock[];
}
export interface MsgBeginUnlockingAllResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAllResponseAmino {
  unlocks: PeriodLockAmino[];
}
export interface MsgBeginUnlockingAllResponseSDKType {
  unlocks: PeriodLockSDKType[];
}
export interface MsgBeginUnlocking {
  owner: string;
  ID: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgBeginUnlockingProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlocking";
  value: Uint8Array;
}
export interface MsgBeginUnlockingAmino {
  owner: string;
  ID: string;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: CoinAmino[];
}
export interface MsgBeginUnlockingSDKType {
  owner: string;
  ID: bigint;
  coins: CoinSDKType[];
}
export interface MsgBeginUnlockingResponse {
  success: boolean;
}
export interface MsgBeginUnlockingResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse";
  value: Uint8Array;
}
export interface MsgBeginUnlockingResponseAmino {
  success: boolean;
}
export interface MsgBeginUnlockingResponseSDKType {
  success: boolean;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockup {
  owner: string;
  ID: bigint;
  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   */
  duration: Duration;
}
export interface MsgExtendLockupProtoMsg {
  typeUrl: "/osmosis.lockup.MsgExtendLockup";
  value: Uint8Array;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupAmino {
  owner: string;
  ID: string;
  /**
   * duration to be set. fails if lower than the current duration, or is
   * unlocking
   */
  duration?: DurationAmino;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupSDKType {
  owner: string;
  ID: bigint;
  duration: DurationSDKType;
}
export interface MsgExtendLockupResponse {
  success: boolean;
}
export interface MsgExtendLockupResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgExtendLockupResponse";
  value: Uint8Array;
}
export interface MsgExtendLockupResponseAmino {
  success: boolean;
}
export interface MsgExtendLockupResponseSDKType {
  success: boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
  owner: string;
  ID: bigint;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: Coin[];
}
export interface MsgForceUnlockProtoMsg {
  typeUrl: "/osmosis.lockup.MsgForceUnlock";
  value: Uint8Array;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockAmino {
  owner: string;
  ID: string;
  /** Amount of unlocking coins. Unlock all if not set. */
  coins: CoinAmino[];
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockSDKType {
  owner: string;
  ID: bigint;
  coins: CoinSDKType[];
}
export interface MsgForceUnlockResponse {
  success: boolean;
}
export interface MsgForceUnlockResponseProtoMsg {
  typeUrl: "/osmosis.lockup.MsgForceUnlockResponse";
  value: Uint8Array;
}
export interface MsgForceUnlockResponseAmino {
  success: boolean;
}
export interface MsgForceUnlockResponseSDKType {
  success: boolean;
}
function createBaseMsgLockTokens(): MsgLockTokens {
  return {
    owner: "",
    duration: Duration.fromPartial({}),
    coins: []
  };
}
export const MsgLockTokens = {
  typeUrl: "/osmosis.lockup.MsgLockTokens",
  aminoType: "osmosis/lockup/lock-tokens",
  encode(message: MsgLockTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockTokens {
    const obj = createBaseMsgLockTokens();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgLockTokens): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLockTokens>): MsgLockTokens {
    const message = createBaseMsgLockTokens();
    message.owner = object.owner ?? "";
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgLockTokensSDKType): MsgLockTokens {
    return {
      owner: object?.owner,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgLockTokens): MsgLockTokensSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: MsgLockTokensAmino): MsgLockTokens {
    return {
      owner: object.owner,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgLockTokens): MsgLockTokensAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromProtoMsg(message: MsgLockTokensProtoMsg): MsgLockTokens {
    return MsgLockTokens.decode(message.value);
  },
  toProto(message: MsgLockTokens): Uint8Array {
    return MsgLockTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgLockTokens): MsgLockTokensProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgLockTokens",
      value: MsgLockTokens.encode(message).finish()
    };
  }
};
function createBaseMsgLockTokensResponse(): MsgLockTokensResponse {
  return {
    ID: BigInt(0)
  };
}
export const MsgLockTokensResponse = {
  typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
  aminoType: "osmosis/lockup/lock-tokens-response",
  encode(message: MsgLockTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ID !== BigInt(0)) {
      writer.uint32(8).uint64(message.ID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLockTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLockTokensResponse {
    const obj = createBaseMsgLockTokensResponse();
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    return obj;
  },
  toJSON(message: MsgLockTokensResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLockTokensResponse>): MsgLockTokensResponse {
    const message = createBaseMsgLockTokensResponse();
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
    return message;
  },
  fromSDK(object: MsgLockTokensResponseSDKType): MsgLockTokensResponse {
    return {
      ID: object?.ID
    };
  },
  toSDK(message: MsgLockTokensResponse): MsgLockTokensResponseSDKType {
    const obj: any = {};
    obj.ID = message.ID;
    return obj;
  },
  fromAmino(object: MsgLockTokensResponseAmino): MsgLockTokensResponse {
    return {
      ID: BigInt(object.ID)
    };
  },
  toAmino(message: MsgLockTokensResponse): MsgLockTokensResponseAmino {
    const obj: any = {};
    obj.ID = message.ID ? message.ID.toString() : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgLockTokensResponseProtoMsg): MsgLockTokensResponse {
    return MsgLockTokensResponse.decode(message.value);
  },
  toProto(message: MsgLockTokensResponse): Uint8Array {
    return MsgLockTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
      value: MsgLockTokensResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlockingAll(): MsgBeginUnlockingAll {
  return {
    owner: ""
  };
}
export const MsgBeginUnlockingAll = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
  aminoType: "osmosis/lockup/begin-unlock-tokens",
  encode(message: MsgBeginUnlockingAll, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAll {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAll();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingAll {
    const obj = createBaseMsgBeginUnlockingAll();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: MsgBeginUnlockingAll): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlockingAll>): MsgBeginUnlockingAll {
    const message = createBaseMsgBeginUnlockingAll();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: MsgBeginUnlockingAllSDKType): MsgBeginUnlockingAll {
    return {
      owner: object?.owner
    };
  },
  toSDK(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: MsgBeginUnlockingAllAmino): MsgBeginUnlockingAll {
    return {
      owner: object.owner
    };
  },
  toAmino(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromProtoMsg(message: MsgBeginUnlockingAllProtoMsg): MsgBeginUnlockingAll {
    return MsgBeginUnlockingAll.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingAll): Uint8Array {
    return MsgBeginUnlockingAll.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
      value: MsgBeginUnlockingAll.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlockingAllResponse(): MsgBeginUnlockingAllResponse {
  return {
    unlocks: []
  };
}
export const MsgBeginUnlockingAllResponse = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
  aminoType: "osmosis/lockup/begin-unlocking-all-response",
  encode(message: MsgBeginUnlockingAllResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.unlocks) {
      PeriodLock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unlocks.push(PeriodLock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingAllResponse {
    const obj = createBaseMsgBeginUnlockingAllResponse();
    if (Array.isArray(object?.unlocks)) obj.unlocks = object.unlocks.map((e: any) => PeriodLock.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgBeginUnlockingAllResponse): unknown {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.unlocks = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlockingAllResponse>): MsgBeginUnlockingAllResponse {
    const message = createBaseMsgBeginUnlockingAllResponse();
    message.unlocks = object.unlocks?.map(e => PeriodLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgBeginUnlockingAllResponseSDKType): MsgBeginUnlockingAllResponse {
    return {
      unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e: any) => PeriodLock.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseSDKType {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.unlocks = [];
    }
    return obj;
  },
  fromAmino(object: MsgBeginUnlockingAllResponseAmino): MsgBeginUnlockingAllResponse {
    return {
      unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e: any) => PeriodLock.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAmino {
    const obj: any = {};
    if (message.unlocks) {
      obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.unlocks = [];
    }
    return obj;
  },
  fromProtoMsg(message: MsgBeginUnlockingAllResponseProtoMsg): MsgBeginUnlockingAllResponse {
    return MsgBeginUnlockingAllResponse.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingAllResponse): Uint8Array {
    return MsgBeginUnlockingAllResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
      value: MsgBeginUnlockingAllResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlocking(): MsgBeginUnlocking {
  return {
    owner: "",
    ID: BigInt(0),
    coins: []
  };
}
export const MsgBeginUnlocking = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
  aminoType: "osmosis/lockup/begin-unlock-period-lock",
  encode(message: MsgBeginUnlocking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.ID !== BigInt(0)) {
      writer.uint32(16).uint64(message.ID);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlocking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlocking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlocking {
    const obj = createBaseMsgBeginUnlocking();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgBeginUnlocking): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlocking>): MsgBeginUnlocking {
    const message = createBaseMsgBeginUnlocking();
    message.owner = object.owner ?? "";
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgBeginUnlockingSDKType): MsgBeginUnlocking {
    return {
      owner: object?.owner,
      ID: object?.ID,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgBeginUnlocking): MsgBeginUnlockingSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.ID = message.ID;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: MsgBeginUnlockingAmino): MsgBeginUnlocking {
    return {
      owner: object.owner,
      ID: BigInt(object.ID),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgBeginUnlocking): MsgBeginUnlockingAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.ID = message.ID ? message.ID.toString() : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromProtoMsg(message: MsgBeginUnlockingProtoMsg): MsgBeginUnlocking {
    return MsgBeginUnlocking.decode(message.value);
  },
  toProto(message: MsgBeginUnlocking): Uint8Array {
    return MsgBeginUnlocking.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
      value: MsgBeginUnlocking.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnlockingResponse(): MsgBeginUnlockingResponse {
  return {
    success: false
  };
}
export const MsgBeginUnlockingResponse = {
  typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
  aminoType: "osmosis/lockup/begin-unlocking-response",
  encode(message: MsgBeginUnlockingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginUnlockingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBeginUnlockingResponse {
    const obj = createBaseMsgBeginUnlockingResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgBeginUnlockingResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgBeginUnlockingResponse>): MsgBeginUnlockingResponse {
    const message = createBaseMsgBeginUnlockingResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromSDK(object: MsgBeginUnlockingResponseSDKType): MsgBeginUnlockingResponse {
    return {
      success: object?.success
    };
  },
  toSDK(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseSDKType {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAmino(object: MsgBeginUnlockingResponseAmino): MsgBeginUnlockingResponse {
    return {
      success: object.success
    };
  },
  toAmino(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAmino {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromProtoMsg(message: MsgBeginUnlockingResponseProtoMsg): MsgBeginUnlockingResponse {
    return MsgBeginUnlockingResponse.decode(message.value);
  },
  toProto(message: MsgBeginUnlockingResponse): Uint8Array {
    return MsgBeginUnlockingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
      value: MsgBeginUnlockingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExtendLockup(): MsgExtendLockup {
  return {
    owner: "",
    ID: BigInt(0),
    duration: Duration.fromPartial({})
  };
}
export const MsgExtendLockup = {
  typeUrl: "/osmosis.lockup.MsgExtendLockup",
  aminoType: "osmosis/lockup/extend-lockup",
  encode(message: MsgExtendLockup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.ID !== BigInt(0)) {
      writer.uint32(16).uint64(message.ID);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExtendLockup {
    const obj = createBaseMsgExtendLockup();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    return obj;
  },
  toJSON(message: MsgExtendLockup): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExtendLockup>): MsgExtendLockup {
    const message = createBaseMsgExtendLockup();
    message.owner = object.owner ?? "";
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    return message;
  },
  fromSDK(object: MsgExtendLockupSDKType): MsgExtendLockup {
    return {
      owner: object?.owner,
      ID: object?.ID,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined
    };
  },
  toSDK(message: MsgExtendLockup): MsgExtendLockupSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.ID = message.ID;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    return obj;
  },
  fromAmino(object: MsgExtendLockupAmino): MsgExtendLockup {
    return {
      owner: object.owner,
      ID: BigInt(object.ID),
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
    };
  },
  toAmino(message: MsgExtendLockup): MsgExtendLockupAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.ID = message.ID ? message.ID.toString() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromProtoMsg(message: MsgExtendLockupProtoMsg): MsgExtendLockup {
    return MsgExtendLockup.decode(message.value);
  },
  toProto(message: MsgExtendLockup): Uint8Array {
    return MsgExtendLockup.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendLockup): MsgExtendLockupProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgExtendLockup",
      value: MsgExtendLockup.encode(message).finish()
    };
  }
};
function createBaseMsgExtendLockupResponse(): MsgExtendLockupResponse {
  return {
    success: false
  };
}
export const MsgExtendLockupResponse = {
  typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
  aminoType: "osmosis/lockup/extend-lockup-response",
  encode(message: MsgExtendLockupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendLockupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExtendLockupResponse {
    const obj = createBaseMsgExtendLockupResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgExtendLockupResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExtendLockupResponse>): MsgExtendLockupResponse {
    const message = createBaseMsgExtendLockupResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromSDK(object: MsgExtendLockupResponseSDKType): MsgExtendLockupResponse {
    return {
      success: object?.success
    };
  },
  toSDK(message: MsgExtendLockupResponse): MsgExtendLockupResponseSDKType {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAmino(object: MsgExtendLockupResponseAmino): MsgExtendLockupResponse {
    return {
      success: object.success
    };
  },
  toAmino(message: MsgExtendLockupResponse): MsgExtendLockupResponseAmino {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromProtoMsg(message: MsgExtendLockupResponseProtoMsg): MsgExtendLockupResponse {
    return MsgExtendLockupResponse.decode(message.value);
  },
  toProto(message: MsgExtendLockupResponse): Uint8Array {
    return MsgExtendLockupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
      value: MsgExtendLockupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForceUnlock(): MsgForceUnlock {
  return {
    owner: "",
    ID: BigInt(0),
    coins: []
  };
}
export const MsgForceUnlock = {
  typeUrl: "/osmosis.lockup.MsgForceUnlock",
  aminoType: "osmosis/lockup/force-unlock",
  encode(message: MsgForceUnlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.ID !== BigInt(0)) {
      writer.uint32(16).uint64(message.ID);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.ID = reader.uint64();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgForceUnlock {
    const obj = createBaseMsgForceUnlock();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.ID)) obj.ID = BigInt(object.ID.toString());
    if (Array.isArray(object?.coins)) obj.coins = object.coins.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgForceUnlock): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgForceUnlock>): MsgForceUnlock {
    const message = createBaseMsgForceUnlock();
    message.owner = object.owner ?? "";
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = BigInt(object.ID.toString());
    }
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgForceUnlockSDKType): MsgForceUnlock {
    return {
      owner: object?.owner,
      ID: object?.ID,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgForceUnlock): MsgForceUnlockSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.ID = message.ID;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromAmino(object: MsgForceUnlockAmino): MsgForceUnlock {
    return {
      owner: object.owner,
      ID: BigInt(object.ID),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgForceUnlock): MsgForceUnlockAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.ID = message.ID ? message.ID.toString() : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromProtoMsg(message: MsgForceUnlockProtoMsg): MsgForceUnlock {
    return MsgForceUnlock.decode(message.value);
  },
  toProto(message: MsgForceUnlock): Uint8Array {
    return MsgForceUnlock.encode(message).finish();
  },
  toProtoMsg(message: MsgForceUnlock): MsgForceUnlockProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgForceUnlock",
      value: MsgForceUnlock.encode(message).finish()
    };
  }
};
function createBaseMsgForceUnlockResponse(): MsgForceUnlockResponse {
  return {
    success: false
  };
}
export const MsgForceUnlockResponse = {
  typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
  aminoType: "osmosis/lockup/force-unlock-response",
  encode(message: MsgForceUnlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceUnlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgForceUnlockResponse {
    const obj = createBaseMsgForceUnlockResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgForceUnlockResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgForceUnlockResponse>): MsgForceUnlockResponse {
    const message = createBaseMsgForceUnlockResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromSDK(object: MsgForceUnlockResponseSDKType): MsgForceUnlockResponse {
    return {
      success: object?.success
    };
  },
  toSDK(message: MsgForceUnlockResponse): MsgForceUnlockResponseSDKType {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromAmino(object: MsgForceUnlockResponseAmino): MsgForceUnlockResponse {
    return {
      success: object.success
    };
  },
  toAmino(message: MsgForceUnlockResponse): MsgForceUnlockResponseAmino {
    const obj: any = {};
    obj.success = message.success;
    return obj;
  },
  fromProtoMsg(message: MsgForceUnlockResponseProtoMsg): MsgForceUnlockResponse {
    return MsgForceUnlockResponse.decode(message.value);
  },
  toProto(message: MsgForceUnlockResponse): Uint8Array {
    return MsgForceUnlockResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
      value: MsgForceUnlockResponse.encode(message).finish()
    };
  }
};