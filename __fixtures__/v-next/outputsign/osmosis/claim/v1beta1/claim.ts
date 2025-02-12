import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "osmosis.claim.v1beta1";
export enum Action {
  ActionAddLiquidity = 0,
  ActionSwap = 1,
  ActionVote = 2,
  ActionDelegateStake = 3,
  UNRECOGNIZED = -1,
}
export const ActionSDKType = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "ActionAddLiquidity":
      return Action.ActionAddLiquidity;
    case 1:
    case "ActionSwap":
      return Action.ActionSwap;
    case 2:
    case "ActionVote":
      return Action.ActionVote;
    case 3:
    case "ActionDelegateStake":
      return Action.ActionDelegateStake;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.ActionAddLiquidity:
      return "ActionAddLiquidity";
    case Action.ActionSwap:
      return "ActionSwap";
    case Action.ActionVote:
      return "ActionVote";
    case Action.ActionDelegateStake:
      return "ActionDelegateStake";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecord {
  /** address of claim user */
  address: string;
  /** total initial claimable amount for the user */
  initialClaimableAmount: Coin[];
  /**
   * true if action is completed
   * index of bool in array refers to action enum #
   */
  actionCompleted: boolean[];
}
export interface ClaimRecordProtoMsg {
  typeUrl: "/osmosis.claim.v1beta1.ClaimRecord";
  value: Uint8Array;
}
/** A Claim Records is the metadata of claim data per address */
export interface ClaimRecordSDKType {
  address: string;
  initial_claimable_amount: CoinSDKType[];
  action_completed: boolean[];
}
function createBaseClaimRecord(): ClaimRecord {
  return {
    address: "",
    initialClaimableAmount: [],
    actionCompleted: []
  };
}
export const ClaimRecord = {
  typeUrl: "/osmosis.claim.v1beta1.ClaimRecord",
  encode(message: ClaimRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.initialClaimableAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.actionCompleted) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClaimRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.initialClaimableAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.actionCompleted.push(reader.bool());
            }
          } else {
            message.actionCompleted.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ClaimRecordProtoMsg): ClaimRecord {
    return ClaimRecord.decode(message.value);
  },
  toProto(message: ClaimRecord): Uint8Array {
    return ClaimRecord.encode(message).finish();
  },
  toProtoMsg(message: ClaimRecord): ClaimRecordProtoMsg {
    return {
      typeUrl: "/osmosis.claim.v1beta1.ClaimRecord",
      value: ClaimRecord.encode(message).finish()
    };
  }
};