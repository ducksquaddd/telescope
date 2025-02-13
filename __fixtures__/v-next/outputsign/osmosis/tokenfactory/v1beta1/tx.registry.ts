import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { TelescopeGeneratedType } from "../../../types";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgMint, MsgMintSDKType, MsgBurn, MsgBurnSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType]> = [["/osmosis.tokenfactory.v1beta1.MsgCreateDenom", MsgCreateDenom], ["/osmosis.tokenfactory.v1beta1.MsgMint", MsgMint], ["/osmosis.tokenfactory.v1beta1.MsgBurn", MsgBurn], ["/osmosis.tokenfactory.v1beta1.MsgChangeAdmin", MsgChangeAdmin], ["/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata", MsgSetDenomMetadata]];