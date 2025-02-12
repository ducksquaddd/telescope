import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "evmos.erc20.v1";
/** Owner enumerates the ownership of a ERC20 contract. */
export enum Owner {
  /** OWNER_UNSPECIFIED - OWNER_UNSPECIFIED defines an invalid/undefined owner. */
  OWNER_UNSPECIFIED = 0,
  /** OWNER_MODULE - OWNER_MODULE erc20 is owned by the erc20 module account. */
  OWNER_MODULE = 1,
  /** OWNER_EXTERNAL - EXTERNAL erc20 is owned by an external account. */
  OWNER_EXTERNAL = 2,
  UNRECOGNIZED = -1,
}
export const OwnerSDKType = Owner;
export function ownerFromJSON(object: any): Owner {
  switch (object) {
    case 0:
    case "OWNER_UNSPECIFIED":
      return Owner.OWNER_UNSPECIFIED;
    case 1:
    case "OWNER_MODULE":
      return Owner.OWNER_MODULE;
    case 2:
    case "OWNER_EXTERNAL":
      return Owner.OWNER_EXTERNAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Owner.UNRECOGNIZED;
  }
}
export function ownerToJSON(object: Owner): string {
  switch (object) {
    case Owner.OWNER_UNSPECIFIED:
      return "OWNER_UNSPECIFIED";
    case Owner.OWNER_MODULE:
      return "OWNER_MODULE";
    case Owner.OWNER_EXTERNAL:
      return "OWNER_EXTERNAL";
    case Owner.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 *  Cosmos Coin and an ERC20 token address.
 */
export interface TokenPair {
  /** address of ERC20 contract token */
  erc20Address: string;
  /** cosmos base denomination to be mapped to */
  denom: string;
  /** shows token mapping enable status */
  enabled: boolean;
  /** ERC20 owner address ENUM (0 invalid, 1 ModuleAccount, 2 external address) */
  contractOwner: Owner;
}
export interface TokenPairProtoMsg {
  typeUrl: "/evmos.erc20.v1.TokenPair";
  value: Uint8Array;
}
/**
 * TokenPair defines an instance that records a pairing consisting of a native
 *  Cosmos Coin and an ERC20 token address.
 */
export interface TokenPairSDKType {
  erc20_address: string;
  denom: string;
  enabled: boolean;
  contract_owner: Owner;
}
/**
 * RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin.
 */
export interface RegisterCoinProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** metadata of the native Cosmos coin */
  metadata: Metadata;
}
export interface RegisterCoinProposalProtoMsg {
  typeUrl: "/evmos.erc20.v1.RegisterCoinProposal";
  value: Uint8Array;
}
/**
 * RegisterCoinProposal is a gov Content type to register a token pair for a
 * native Cosmos coin.
 */
export interface RegisterCoinProposalSDKType {
  title: string;
  description: string;
  metadata: MetadataSDKType;
}
/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20Proposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** contract address of ERC20 token */
  erc20address: string;
}
export interface RegisterERC20ProposalProtoMsg {
  typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal";
  value: Uint8Array;
}
/**
 * RegisterERC20Proposal is a gov Content type to register a token pair for an
 * ERC20 token
 */
export interface RegisterERC20ProposalSDKType {
  title: string;
  description: string;
  erc20address: string;
}
/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   */
  token: string;
}
export interface ToggleTokenConversionProposalProtoMsg {
  typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal";
  value: Uint8Array;
}
/**
 * ToggleTokenConversionProposal is a gov Content type to toggle the conversion
 * of a token pair.
 */
export interface ToggleTokenConversionProposalSDKType {
  title: string;
  description: string;
  token: string;
}
function createBaseTokenPair(): TokenPair {
  return {
    erc20Address: "",
    denom: "",
    enabled: false,
    contractOwner: 0
  };
}
export const TokenPair = {
  typeUrl: "/evmos.erc20.v1.TokenPair",
  encode(message: TokenPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.erc20Address !== "") {
      writer.uint32(10).string(message.erc20Address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(24).bool(message.enabled);
    }
    if (message.contractOwner !== 0) {
      writer.uint32(32).int32(message.contractOwner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TokenPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20Address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.enabled = reader.bool();
          break;
        case 4:
          message.contractOwner = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: TokenPairProtoMsg): TokenPair {
    return TokenPair.decode(message.value);
  },
  toProto(message: TokenPair): Uint8Array {
    return TokenPair.encode(message).finish();
  },
  toProtoMsg(message: TokenPair): TokenPairProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.TokenPair",
      value: TokenPair.encode(message).finish()
    };
  }
};
function createBaseRegisterCoinProposal(): RegisterCoinProposal {
  return {
    title: "",
    description: "",
    metadata: Metadata.fromPartial({})
  };
}
export const RegisterCoinProposal = {
  typeUrl: "/evmos.erc20.v1.RegisterCoinProposal",
  encode(message: RegisterCoinProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisterCoinProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterCoinProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: RegisterCoinProposalProtoMsg): RegisterCoinProposal {
    return RegisterCoinProposal.decode(message.value);
  },
  toProto(message: RegisterCoinProposal): Uint8Array {
    return RegisterCoinProposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterCoinProposal): RegisterCoinProposalProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.RegisterCoinProposal",
      value: RegisterCoinProposal.encode(message).finish()
    };
  }
};
function createBaseRegisterERC20Proposal(): RegisterERC20Proposal {
  return {
    title: "",
    description: "",
    erc20address: ""
  };
}
export const RegisterERC20Proposal = {
  typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal",
  encode(message: RegisterERC20Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.erc20address !== "") {
      writer.uint32(26).string(message.erc20address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisterERC20Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterERC20Proposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.erc20address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: RegisterERC20ProposalProtoMsg): RegisterERC20Proposal {
    return RegisterERC20Proposal.decode(message.value);
  },
  toProto(message: RegisterERC20Proposal): Uint8Array {
    return RegisterERC20Proposal.encode(message).finish();
  },
  toProtoMsg(message: RegisterERC20Proposal): RegisterERC20ProposalProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.RegisterERC20Proposal",
      value: RegisterERC20Proposal.encode(message).finish()
    };
  }
};
function createBaseToggleTokenConversionProposal(): ToggleTokenConversionProposal {
  return {
    title: "",
    description: "",
    token: ""
  };
}
export const ToggleTokenConversionProposal = {
  typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal",
  encode(message: ToggleTokenConversionProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ToggleTokenConversionProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToggleTokenConversionProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ToggleTokenConversionProposalProtoMsg): ToggleTokenConversionProposal {
    return ToggleTokenConversionProposal.decode(message.value);
  },
  toProto(message: ToggleTokenConversionProposal): Uint8Array {
    return ToggleTokenConversionProposal.encode(message).finish();
  },
  toProtoMsg(message: ToggleTokenConversionProposal): ToggleTokenConversionProposalProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.ToggleTokenConversionProposal",
      value: ToggleTokenConversionProposal.encode(message).finish()
    };
  }
};