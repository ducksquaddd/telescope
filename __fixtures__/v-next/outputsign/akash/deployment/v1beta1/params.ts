import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "akash.deployment.v1beta1";
/** Params defines the parameters for the x/deployment package */
export interface Params {
  deploymentMinDeposit: Coin | undefined;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.deployment.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the x/deployment package */
export interface ParamsSDKType {
  deployment_min_deposit: CoinSDKType | undefined;
}
function createBaseParams(): Params {
  return {
    deploymentMinDeposit: Coin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/akash.deployment.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deploymentMinDeposit !== undefined) {
      Coin.encode(message.deploymentMinDeposit, writer.uint32(10).fork()).ldelim();
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
          message.deploymentMinDeposit = Coin.decode(reader, reader.uint32());
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
      typeUrl: "/akash.deployment.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};