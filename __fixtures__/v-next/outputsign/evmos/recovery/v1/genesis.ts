import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "evmos.recovery.v1";
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.recovery.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the recovery module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
}
/** Params holds parameters for the recovery module */
export interface Params {
  /** enable recovery IBC middleware */
  enableRecovery: boolean;
  /** duration added to timeout timestamp for balances recovered via IBC packets */
  packetTimeoutDuration: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/evmos.recovery.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the recovery module */
export interface ParamsSDKType {
  enable_recovery: boolean;
  packet_timeout_duration: DurationSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/evmos.recovery.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
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
      typeUrl: "/evmos.recovery.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableRecovery: false,
    packetTimeoutDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/evmos.recovery.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableRecovery === true) {
      writer.uint32(8).bool(message.enableRecovery);
    }
    if (message.packetTimeoutDuration !== undefined) {
      Duration.encode(message.packetTimeoutDuration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableRecovery = reader.bool();
          break;
        case 2:
          message.packetTimeoutDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/evmos.recovery.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};