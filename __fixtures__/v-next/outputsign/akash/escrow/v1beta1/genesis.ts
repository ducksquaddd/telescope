import { Account, AccountSDKType, Payment, PaymentSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "akash.escrow.v1beta1";
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisState {
  accounts: Account[];
  payments: Payment[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.escrow.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by escrow module */
export interface GenesisStateSDKType {
  accounts: AccountSDKType[];
  payments: PaymentSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    accounts: [],
    payments: []
  };
}
export const GenesisState = {
  typeUrl: "/akash.escrow.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.payments) {
      Payment.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.payments.push(Payment.decode(reader, reader.uint32()));
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
      typeUrl: "/akash.escrow.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};