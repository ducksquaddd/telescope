import { Tx, TxSDKType } from "./tx";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../tendermint/types/block";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "cosmos.tx.v1beta1";
/** OrderBy defines the sorting order */
export enum OrderBy {
  /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
  ORDER_BY_UNSPECIFIED = 0,
  /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
  ORDER_BY_ASC = 1,
  /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
  ORDER_BY_DESC = 2,
  UNRECOGNIZED = -1,
}
export const OrderBySDKType = OrderBy;
export function orderByFromJSON(object: any): OrderBy {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
export function orderByToJSON(object: OrderBy): string {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    case OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export enum BroadcastMode {
  /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
  BROADCAST_MODE_UNSPECIFIED = 0,
  /**
   * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
   * the tx to be committed in a block.
   */
  BROADCAST_MODE_BLOCK = 1,
  /**
   * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
   * a CheckTx execution response only.
   */
  BROADCAST_MODE_SYNC = 2,
  /**
   * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
   * immediately.
   */
  BROADCAST_MODE_ASYNC = 3,
  UNRECOGNIZED = -1,
}
export const BroadcastModeSDKType = BroadcastMode;
export function broadcastModeFromJSON(object: any): BroadcastMode {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
export function broadcastModeToJSON(object: BroadcastMode): string {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
  /** events is the list of transaction event type. */
  events: string[];
  /** pagination defines a pagination for the request. */
  pagination?: PageRequest;
  orderBy: OrderBy;
}
export interface GetTxsEventRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest";
  value: Uint8Array;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequestSDKType {
  events: string[];
  pagination?: PageRequestSDKType;
  order_by: OrderBy;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
  /** txs is the list of queried transactions. */
  txs: Tx[];
  /** tx_responses is the list of queried TxResponses. */
  txResponses: TxResponse[];
  /** pagination defines a pagination for the response. */
  pagination?: PageResponse;
}
export interface GetTxsEventResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse";
  value: Uint8Array;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponseSDKType {
  txs: TxSDKType[];
  tx_responses: TxResponseSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
  /** tx_bytes is the raw transaction. */
  txBytes: Uint8Array;
  mode: BroadcastMode;
}
export interface BroadcastTxRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest";
  value: Uint8Array;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequestSDKType {
  tx_bytes: Uint8Array;
  mode: BroadcastMode;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
  /** tx_response is the queried TxResponses. */
  txResponse?: TxResponse;
}
export interface BroadcastTxResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse";
  value: Uint8Array;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponseSDKType {
  tx_response?: TxResponseSDKType;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   */
  /** @deprecated */
  tx?: Tx;
  /**
   * tx_bytes is the raw transaction.
   * 
   * Since: cosmos-sdk 0.43
   */
  txBytes: Uint8Array;
}
export interface SimulateRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.SimulateRequest";
  value: Uint8Array;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequestSDKType {
  /** @deprecated */
  tx?: TxSDKType;
  tx_bytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
  /** gas_info is the information about gas used in the simulation. */
  gasInfo?: GasInfo;
  /** result is the result of the simulation. */
  result?: Result;
}
export interface SimulateResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.SimulateResponse";
  value: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponseSDKType {
  gas_info?: GasInfoSDKType;
  result?: ResultSDKType;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
  /** hash is the tx hash to query, encoded as a hex string. */
  hash: string;
}
export interface GetTxRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxRequest";
  value: Uint8Array;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequestSDKType {
  hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
  /** tx is the queried transaction. */
  tx?: Tx;
  /** tx_response is the queried TxResponses. */
  txResponse?: TxResponse;
}
export interface GetTxResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxResponse";
  value: Uint8Array;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponseSDKType {
  tx?: TxSDKType;
  tx_response?: TxResponseSDKType;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequest {
  /** height is the height of the block to query. */
  height: bigint;
  /** pagination defines a pagination for the request. */
  pagination?: PageRequest;
}
export interface GetBlockWithTxsRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest";
  value: Uint8Array;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequestSDKType {
  height: bigint;
  pagination?: PageRequestSDKType;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
  /** txs are the transactions in the block. */
  txs: Tx[];
  blockId?: BlockID;
  block?: Block;
  /** pagination defines a pagination for the response. */
  pagination?: PageResponse;
}
export interface GetBlockWithTxsResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse";
  value: Uint8Array;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponseSDKType {
  txs: TxSDKType[];
  block_id?: BlockIDSDKType;
  block?: BlockSDKType;
  pagination?: PageResponseSDKType;
}
function createBaseGetTxsEventRequest(): GetTxsEventRequest {
  return {
    events: [],
    pagination: undefined,
    orderBy: 0
  };
}
export const GetTxsEventRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
  encode(message: GetTxsEventRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetTxsEventRequestProtoMsg): GetTxsEventRequest {
    return GetTxsEventRequest.decode(message.value);
  },
  toProto(message: GetTxsEventRequest): Uint8Array {
    return GetTxsEventRequest.encode(message).finish();
  },
  toProtoMsg(message: GetTxsEventRequest): GetTxsEventRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
      value: GetTxsEventRequest.encode(message).finish()
    };
  }
};
function createBaseGetTxsEventResponse(): GetTxsEventResponse {
  return {
    txs: [],
    txResponses: [],
    pagination: undefined
  };
}
export const GetTxsEventResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
  encode(message: GetTxsEventResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      TxResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetTxsEventResponseProtoMsg): GetTxsEventResponse {
    return GetTxsEventResponse.decode(message.value);
  },
  toProto(message: GetTxsEventResponse): Uint8Array {
    return GetTxsEventResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxsEventResponse): GetTxsEventResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
      value: GetTxsEventResponse.encode(message).finish()
    };
  }
};
function createBaseBroadcastTxRequest(): BroadcastTxRequest {
  return {
    txBytes: new Uint8Array(),
    mode: 0
  };
}
export const BroadcastTxRequest = {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
  encode(message: BroadcastTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.mode = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: BroadcastTxRequestProtoMsg): BroadcastTxRequest {
    return BroadcastTxRequest.decode(message.value);
  },
  toProto(message: BroadcastTxRequest): Uint8Array {
    return BroadcastTxRequest.encode(message).finish();
  },
  toProtoMsg(message: BroadcastTxRequest): BroadcastTxRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
      value: BroadcastTxRequest.encode(message).finish()
    };
  }
};
function createBaseBroadcastTxResponse(): BroadcastTxResponse {
  return {
    txResponse: undefined
  };
}
export const BroadcastTxResponse = {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
  encode(message: BroadcastTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: BroadcastTxResponseProtoMsg): BroadcastTxResponse {
    return BroadcastTxResponse.decode(message.value);
  },
  toProto(message: BroadcastTxResponse): Uint8Array {
    return BroadcastTxResponse.encode(message).finish();
  },
  toProtoMsg(message: BroadcastTxResponse): BroadcastTxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
      value: BroadcastTxResponse.encode(message).finish()
    };
  }
};
function createBaseSimulateRequest(): SimulateRequest {
  return {
    tx: undefined,
    txBytes: new Uint8Array()
  };
}
export const SimulateRequest = {
  typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
  encode(message: SimulateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SimulateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: SimulateRequestProtoMsg): SimulateRequest {
    return SimulateRequest.decode(message.value);
  },
  toProto(message: SimulateRequest): Uint8Array {
    return SimulateRequest.encode(message).finish();
  },
  toProtoMsg(message: SimulateRequest): SimulateRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
      value: SimulateRequest.encode(message).finish()
    };
  }
};
function createBaseSimulateResponse(): SimulateResponse {
  return {
    gasInfo: undefined,
    result: undefined
  };
}
export const SimulateResponse = {
  typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
  encode(message: SimulateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SimulateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: SimulateResponseProtoMsg): SimulateResponse {
    return SimulateResponse.decode(message.value);
  },
  toProto(message: SimulateResponse): Uint8Array {
    return SimulateResponse.encode(message).finish();
  },
  toProtoMsg(message: SimulateResponse): SimulateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
      value: SimulateResponse.encode(message).finish()
    };
  }
};
function createBaseGetTxRequest(): GetTxRequest {
  return {
    hash: ""
  };
}
export const GetTxRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
  encode(message: GetTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetTxRequestProtoMsg): GetTxRequest {
    return GetTxRequest.decode(message.value);
  },
  toProto(message: GetTxRequest): Uint8Array {
    return GetTxRequest.encode(message).finish();
  },
  toProtoMsg(message: GetTxRequest): GetTxRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
      value: GetTxRequest.encode(message).finish()
    };
  }
};
function createBaseGetTxResponse(): GetTxResponse {
  return {
    tx: undefined,
    txResponse: undefined
  };
}
export const GetTxResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
  encode(message: GetTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetTxResponseProtoMsg): GetTxResponse {
    return GetTxResponse.decode(message.value);
  },
  toProto(message: GetTxResponse): Uint8Array {
    return GetTxResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxResponse): GetTxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
      value: GetTxResponse.encode(message).finish()
    };
  }
};
function createBaseGetBlockWithTxsRequest(): GetBlockWithTxsRequest {
  return {
    height: BigInt(0),
    pagination: undefined
  };
}
export const GetBlockWithTxsRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
  encode(message: GetBlockWithTxsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetBlockWithTxsRequestProtoMsg): GetBlockWithTxsRequest {
    return GetBlockWithTxsRequest.decode(message.value);
  },
  toProto(message: GetBlockWithTxsRequest): Uint8Array {
    return GetBlockWithTxsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
      value: GetBlockWithTxsRequest.encode(message).finish()
    };
  }
};
function createBaseGetBlockWithTxsResponse(): GetBlockWithTxsResponse {
  return {
    txs: [],
    blockId: undefined,
    block: undefined,
    pagination: undefined
  };
}
export const GetBlockWithTxsResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
  encode(message: GetBlockWithTxsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GetBlockWithTxsResponseProtoMsg): GetBlockWithTxsResponse {
    return GetBlockWithTxsResponse.decode(message.value);
  },
  toProto(message: GetBlockWithTxsResponse): Uint8Array {
    return GetBlockWithTxsResponse.encode(message).finish();
  },
  toProtoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
      value: GetBlockWithTxsResponse.encode(message).finish()
    };
  }
};