import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "osmosis.gamm.v1beta1";
/** =============================== Pool */
export interface QueryPoolRequest {
  poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest";
  value: Uint8Array;
}
/** =============================== Pool */
export interface QueryPoolRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolResponse {
  pool?: Any;
}
export interface QueryPoolResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse";
  value: Uint8Array;
}
export interface QueryPoolResponseSDKType {
  pool?: AnySDKType;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest";
  value: Uint8Array;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
  pools: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse";
  value: Uint8Array;
}
export interface QueryPoolsResponseSDKType {
  pools: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequest {}
export interface QueryNumPoolsRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest";
  value: Uint8Array;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequestSDKType {}
export interface QueryNumPoolsResponse {
  numPools: bigint;
}
export interface QueryNumPoolsResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse";
  value: Uint8Array;
}
export interface QueryNumPoolsResponseSDKType {
  num_pools: bigint;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequest {
  poolId: bigint;
}
export interface QueryPoolTypeRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest";
  value: Uint8Array;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolTypeResponse {
  poolType: string;
}
export interface QueryPoolTypeResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse";
  value: Uint8Array;
}
export interface QueryPoolTypeResponseSDKType {
  pool_type: string;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequest {
  poolId: bigint;
  tokensIn: Coin[];
}
export interface QueryCalcJoinPoolSharesRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestSDKType {
  pool_id: bigint;
  tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolSharesResponse {
  shareOutAmount: string;
  tokensOut: Coin[];
}
export interface QueryCalcJoinPoolSharesResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolSharesResponseSDKType {
  share_out_amount: string;
  tokens_out: CoinSDKType[];
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequest {
  poolId: bigint;
  shareInAmount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestSDKType {
  pool_id: bigint;
  share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesResponse {
  tokensOut: Coin[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcExitPoolCoinsFromSharesResponseSDKType {
  tokens_out: CoinSDKType[];
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
  poolId: bigint;
}
export interface QueryPoolParamsRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest";
  value: Uint8Array;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
  pool_id: bigint;
}
export interface QueryPoolParamsResponse {
  params?: Any;
}
export interface QueryPoolParamsResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse";
  value: Uint8Array;
}
export interface QueryPoolParamsResponseSDKType {
  params?: AnySDKType;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequest {
  poolId: bigint;
}
export interface QueryTotalPoolLiquidityRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest";
  value: Uint8Array;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestSDKType {
  pool_id: bigint;
}
export interface QueryTotalPoolLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse";
  value: Uint8Array;
}
export interface QueryTotalPoolLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
  poolId: bigint;
}
export interface QueryTotalSharesRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest";
  value: Uint8Array;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestSDKType {
  pool_id: bigint;
}
export interface QueryTotalSharesResponse {
  totalShares: Coin;
}
export interface QueryTotalSharesResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse";
  value: Uint8Array;
}
export interface QueryTotalSharesResponseSDKType {
  total_shares: CoinSDKType;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequest {
  poolId: bigint;
  tokensIn: Coin[];
}
export interface QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest";
  value: Uint8Array;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestSDKType {
  pool_id: bigint;
  tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolNoSwapSharesResponse {
  tokensOut: Coin[];
  sharesOut: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse";
  value: Uint8Array;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseSDKType {
  tokens_out: CoinSDKType[];
  shares_out: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequest {
  poolId: bigint;
  baseAssetDenom: string;
  quoteAssetDenom: string;
}
export interface QuerySpotPriceRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest";
  value: Uint8Array;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
export interface QueryPoolsWithFilterRequest {
  minLiquidity: Coin[];
  poolType: string;
  pagination?: PageRequest;
}
export interface QueryPoolsWithFilterRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest";
  value: Uint8Array;
}
export interface QueryPoolsWithFilterRequestSDKType {
  min_liquidity: CoinSDKType[];
  pool_type: string;
  pagination?: PageRequestSDKType;
}
export interface QueryPoolsWithFilterResponse {
  pools: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryPoolsWithFilterResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse";
  value: Uint8Array;
}
export interface QueryPoolsWithFilterResponseSDKType {
  pools: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse";
  value: Uint8Array;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  poolId: bigint;
  tokenIn: string;
  routes: SwapAmountInRoute[];
}
export interface QuerySwapExactAmountInRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestSDKType {
  sender: string;
  pool_id: bigint;
  token_in: string;
  routes: SwapAmountInRouteSDKType[];
}
export interface QuerySwapExactAmountInResponse {
  tokenOutAmount: string;
}
export interface QuerySwapExactAmountInResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse";
  value: Uint8Array;
}
export interface QuerySwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
  /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
  sender: string;
  poolId: bigint;
  routes: SwapAmountOutRoute[];
  tokenOut: string;
}
export interface QuerySwapExactAmountOutRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest";
  value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestSDKType {
  sender: string;
  pool_id: bigint;
  routes: SwapAmountOutRouteSDKType[];
  token_out: string;
}
export interface QuerySwapExactAmountOutResponse {
  tokenInAmount: string;
}
export interface QuerySwapExactAmountOutResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface QuerySwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
export interface QueryTotalLiquidityRequest {}
export interface QueryTotalLiquidityRequestProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest";
  value: Uint8Array;
}
export interface QueryTotalLiquidityRequestSDKType {}
export interface QueryTotalLiquidityResponse {
  liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse";
  value: Uint8Array;
}
export interface QueryTotalLiquidityResponseSDKType {
  liquidity: CoinSDKType[];
}
function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
  encode(message: QueryPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest {
    return QueryPoolRequest.decode(message.value);
  },
  toProto(message: QueryPoolRequest): Uint8Array {
    return QueryPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
      value: QueryPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolResponse(): QueryPoolResponse {
  return {
    pool: undefined
  };
}
export const QueryPoolResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
  encode(message: QueryPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool !== undefined) {
      Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse {
    return QueryPoolResponse.decode(message.value);
  },
  toProto(message: QueryPoolResponse): Uint8Array {
    return QueryPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
      value: QueryPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
  fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryNumPoolsRequest(): QueryNumPoolsRequest {
  return {};
}
export const QueryNumPoolsRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
  encode(_: QueryNumPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryNumPoolsRequestProtoMsg): QueryNumPoolsRequest {
    return QueryNumPoolsRequest.decode(message.value);
  },
  toProto(message: QueryNumPoolsRequest): Uint8Array {
    return QueryNumPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolsRequest): QueryNumPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
      value: QueryNumPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryNumPoolsResponse(): QueryNumPoolsResponse {
  return {
    numPools: BigInt(0)
  };
}
export const QueryNumPoolsResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
  encode(message: QueryNumPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numPools !== BigInt(0)) {
      writer.uint32(8).uint64(message.numPools);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNumPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numPools = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryNumPoolsResponseProtoMsg): QueryNumPoolsResponse {
    return QueryNumPoolsResponse.decode(message.value);
  },
  toProto(message: QueryNumPoolsResponse): Uint8Array {
    return QueryNumPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNumPoolsResponse): QueryNumPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
      value: QueryNumPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolTypeRequest(): QueryPoolTypeRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolTypeRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
  encode(message: QueryPoolTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryPoolTypeRequestProtoMsg): QueryPoolTypeRequest {
    return QueryPoolTypeRequest.decode(message.value);
  },
  toProto(message: QueryPoolTypeRequest): Uint8Array {
    return QueryPoolTypeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTypeRequest): QueryPoolTypeRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
      value: QueryPoolTypeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolTypeResponse(): QueryPoolTypeResponse {
  return {
    poolType: ""
  };
}
export const QueryPoolTypeResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
  encode(message: QueryPoolTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolType !== "") {
      writer.uint32(10).string(message.poolType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryPoolTypeResponseProtoMsg): QueryPoolTypeResponse {
    return QueryPoolTypeResponse.decode(message.value);
  },
  toProto(message: QueryPoolTypeResponse): Uint8Array {
    return QueryPoolTypeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolTypeResponse): QueryPoolTypeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
      value: QueryPoolTypeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolSharesRequest(): QueryCalcJoinPoolSharesRequest {
  return {
    poolId: BigInt(0),
    tokensIn: []
  };
}
export const QueryCalcJoinPoolSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
  encode(message: QueryCalcJoinPoolSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryCalcJoinPoolSharesRequestProtoMsg): QueryCalcJoinPoolSharesRequest {
    return QueryCalcJoinPoolSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolSharesRequest): Uint8Array {
    return QueryCalcJoinPoolSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
      value: QueryCalcJoinPoolSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolSharesResponse(): QueryCalcJoinPoolSharesResponse {
  return {
    shareOutAmount: "",
    tokensOut: []
  };
}
export const QueryCalcJoinPoolSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
  encode(message: QueryCalcJoinPoolSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shareOutAmount !== "") {
      writer.uint32(10).string(message.shareOutAmount);
    }
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shareOutAmount = reader.string();
          break;
        case 2:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryCalcJoinPoolSharesResponseProtoMsg): QueryCalcJoinPoolSharesResponse {
    return QueryCalcJoinPoolSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolSharesResponse): Uint8Array {
    return QueryCalcJoinPoolSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
      value: QueryCalcJoinPoolSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCalcExitPoolCoinsFromSharesRequest(): QueryCalcExitPoolCoinsFromSharesRequest {
  return {
    poolId: BigInt(0),
    shareInAmount: ""
  };
}
export const QueryCalcExitPoolCoinsFromSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
  encode(message: QueryCalcExitPoolCoinsFromSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.shareInAmount !== "") {
      writer.uint32(18).string(message.shareInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.shareInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): QueryCalcExitPoolCoinsFromSharesRequest {
    return QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array {
    return QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
      value: QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCalcExitPoolCoinsFromSharesResponse(): QueryCalcExitPoolCoinsFromSharesResponse {
  return {
    tokensOut: []
  };
}
export const QueryCalcExitPoolCoinsFromSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
  encode(message: QueryCalcExitPoolCoinsFromSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): QueryCalcExitPoolCoinsFromSharesResponse {
    return QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array {
    return QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
      value: QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolParamsRequest(): QueryPoolParamsRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryPoolParamsRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
  encode(message: QueryPoolParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryPoolParamsRequestProtoMsg): QueryPoolParamsRequest {
    return QueryPoolParamsRequest.decode(message.value);
  },
  toProto(message: QueryPoolParamsRequest): Uint8Array {
    return QueryPoolParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
      value: QueryPoolParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolParamsResponse(): QueryPoolParamsResponse {
  return {
    params: undefined
  };
}
export const QueryPoolParamsResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
  encode(message: QueryPoolParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Any.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryPoolParamsResponseProtoMsg): QueryPoolParamsResponse {
    return QueryPoolParamsResponse.decode(message.value);
  },
  toProto(message: QueryPoolParamsResponse): Uint8Array {
    return QueryPoolParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
      value: QueryPoolParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalPoolLiquidityRequest(): QueryTotalPoolLiquidityRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryTotalPoolLiquidityRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
  encode(message: QueryTotalPoolLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryTotalPoolLiquidityRequestProtoMsg): QueryTotalPoolLiquidityRequest {
    return QueryTotalPoolLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryTotalPoolLiquidityRequest): Uint8Array {
    return QueryTotalPoolLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
      value: QueryTotalPoolLiquidityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalPoolLiquidityResponse(): QueryTotalPoolLiquidityResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalPoolLiquidityResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
  encode(message: QueryTotalPoolLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalPoolLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryTotalPoolLiquidityResponseProtoMsg): QueryTotalPoolLiquidityResponse {
    return QueryTotalPoolLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryTotalPoolLiquidityResponse): Uint8Array {
    return QueryTotalPoolLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
      value: QueryTotalPoolLiquidityResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSharesRequest(): QueryTotalSharesRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryTotalSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
  encode(message: QueryTotalSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryTotalSharesRequestProtoMsg): QueryTotalSharesRequest {
    return QueryTotalSharesRequest.decode(message.value);
  },
  toProto(message: QueryTotalSharesRequest): Uint8Array {
    return QueryTotalSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSharesRequest): QueryTotalSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
      value: QueryTotalSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSharesResponse(): QueryTotalSharesResponse {
  return {
    totalShares: Coin.fromPartial({})
  };
}
export const QueryTotalSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
  encode(message: QueryTotalSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalShares !== undefined) {
      Coin.encode(message.totalShares, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalShares = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryTotalSharesResponseProtoMsg): QueryTotalSharesResponse {
    return QueryTotalSharesResponse.decode(message.value);
  },
  toProto(message: QueryTotalSharesResponse): Uint8Array {
    return QueryTotalSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSharesResponse): QueryTotalSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
      value: QueryTotalSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolNoSwapSharesRequest(): QueryCalcJoinPoolNoSwapSharesRequest {
  return {
    poolId: BigInt(0),
    tokensIn: []
  };
}
export const QueryCalcJoinPoolNoSwapSharesRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
  encode(message: QueryCalcJoinPoolNoSwapSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.tokensIn) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.tokensIn.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): QueryCalcJoinPoolNoSwapSharesRequest {
    return QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array {
    return QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
      value: QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCalcJoinPoolNoSwapSharesResponse(): QueryCalcJoinPoolNoSwapSharesResponse {
  return {
    tokensOut: [],
    sharesOut: ""
  };
}
export const QueryCalcJoinPoolNoSwapSharesResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
  encode(message: QueryCalcJoinPoolNoSwapSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokensOut) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sharesOut !== "") {
      writer.uint32(18).string(message.sharesOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokensOut.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sharesOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): QueryCalcJoinPoolNoSwapSharesResponse {
    return QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value);
  },
  toProto(message: QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array {
    return QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
      value: QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    poolId: BigInt(0),
    baseAssetDenom: "",
    quoteAssetDenom: ""
  };
}
export const QuerySpotPriceRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
  encode(message: QuerySpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAssetDenom !== "") {
      writer.uint32(18).string(message.baseAssetDenom);
    }
    if (message.quoteAssetDenom !== "") {
      writer.uint32(26).string(message.quoteAssetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.baseAssetDenom = reader.string();
          break;
        case 3:
          message.quoteAssetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QuerySpotPriceRequestProtoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.decode(message.value);
  },
  toProto(message: QuerySpotPriceRequest): Uint8Array {
    return QuerySpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
      value: QuerySpotPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsWithFilterRequest(): QueryPoolsWithFilterRequest {
  return {
    minLiquidity: [],
    poolType: "",
    pagination: undefined
  };
}
export const QueryPoolsWithFilterRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
  encode(message: QueryPoolsWithFilterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minLiquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolType !== "") {
      writer.uint32(18).string(message.poolType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minLiquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.poolType = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryPoolsWithFilterRequestProtoMsg): QueryPoolsWithFilterRequest {
    return QueryPoolsWithFilterRequest.decode(message.value);
  },
  toProto(message: QueryPoolsWithFilterRequest): Uint8Array {
    return QueryPoolsWithFilterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
      value: QueryPoolsWithFilterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsWithFilterResponse(): QueryPoolsWithFilterResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsWithFilterResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
  encode(message: QueryPoolsWithFilterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsWithFilterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryPoolsWithFilterResponseProtoMsg): QueryPoolsWithFilterResponse {
    return QueryPoolsWithFilterResponse.decode(message.value);
  },
  toProto(message: QueryPoolsWithFilterResponse): Uint8Array {
    return QueryPoolsWithFilterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
      value: QueryPoolsWithFilterResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spotPrice: ""
  };
}
export const QuerySpotPriceResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
  encode(message: QuerySpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spotPrice !== "") {
      writer.uint32(10).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QuerySpotPriceResponseProtoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.decode(message.value);
  },
  toProto(message: QuerySpotPriceResponse): Uint8Array {
    return QuerySpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
      value: QuerySpotPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySwapExactAmountInRequest(): QuerySwapExactAmountInRequest {
  return {
    sender: "",
    poolId: BigInt(0),
    tokenIn: "",
    routes: []
  };
}
export const QuerySwapExactAmountInRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
  encode(message: QuerySwapExactAmountInRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.tokenIn !== "") {
      writer.uint32(26).string(message.tokenIn);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountInRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.tokenIn = reader.string();
          break;
        case 4:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QuerySwapExactAmountInRequestProtoMsg): QuerySwapExactAmountInRequest {
    return QuerySwapExactAmountInRequest.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountInRequest): Uint8Array {
    return QuerySwapExactAmountInRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
      value: QuerySwapExactAmountInRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySwapExactAmountInResponse(): QuerySwapExactAmountInResponse {
  return {
    tokenOutAmount: ""
  };
}
export const QuerySwapExactAmountInResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
  encode(message: QuerySwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenOutAmount !== "") {
      writer.uint32(10).string(message.tokenOutAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenOutAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QuerySwapExactAmountInResponseProtoMsg): QuerySwapExactAmountInResponse {
    return QuerySwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountInResponse): Uint8Array {
    return QuerySwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
      value: QuerySwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySwapExactAmountOutRequest(): QuerySwapExactAmountOutRequest {
  return {
    sender: "",
    poolId: BigInt(0),
    routes: [],
    tokenOut: ""
  };
}
export const QuerySwapExactAmountOutRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
  encode(message: QuerySwapExactAmountOutRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenOut !== "") {
      writer.uint32(34).string(message.tokenOut);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.poolId = reader.uint64();
          break;
        case 3:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.tokenOut = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QuerySwapExactAmountOutRequestProtoMsg): QuerySwapExactAmountOutRequest {
    return QuerySwapExactAmountOutRequest.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountOutRequest): Uint8Array {
    return QuerySwapExactAmountOutRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
      value: QuerySwapExactAmountOutRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySwapExactAmountOutResponse(): QuerySwapExactAmountOutResponse {
  return {
    tokenInAmount: ""
  };
}
export const QuerySwapExactAmountOutResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
  encode(message: QuerySwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenInAmount !== "") {
      writer.uint32(10).string(message.tokenInAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenInAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QuerySwapExactAmountOutResponseProtoMsg): QuerySwapExactAmountOutResponse {
    return QuerySwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: QuerySwapExactAmountOutResponse): Uint8Array {
    return QuerySwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
      value: QuerySwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidityRequest(): QueryTotalLiquidityRequest {
  return {};
}
export const QueryTotalLiquidityRequest = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
  encode(_: QueryTotalLiquidityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryTotalLiquidityRequestProtoMsg): QueryTotalLiquidityRequest {
    return QueryTotalLiquidityRequest.decode(message.value);
  },
  toProto(message: QueryTotalLiquidityRequest): Uint8Array {
    return QueryTotalLiquidityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
      value: QueryTotalLiquidityRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidityResponse(): QueryTotalLiquidityResponse {
  return {
    liquidity: []
  };
}
export const QueryTotalLiquidityResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
  encode(message: QueryTotalLiquidityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.liquidity) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidity.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: QueryTotalLiquidityResponseProtoMsg): QueryTotalLiquidityResponse {
    return QueryTotalLiquidityResponse.decode(message.value);
  },
  toProto(message: QueryTotalLiquidityResponse): Uint8Array {
    return QueryTotalLiquidityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
      value: QueryTotalLiquidityResponse.encode(message).finish()
    };
  }
};