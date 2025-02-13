import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "evmos.inflation.v1";
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistribution {
  /**
   * staking_rewards defines the proportion of the minted minted_denom that is
   * to be allocated as staking rewards
   */
  stakingRewards: string;
  /**
   * usage_incentives defines the proportion of the minted minted_denom that is
   * to be allocated to the incentives module address
   */
  usageIncentives: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is to
   * be allocated to the community pool
   */
  communityPool: string;
}
export interface InflationDistributionProtoMsg {
  typeUrl: "/evmos.inflation.v1.InflationDistribution";
  value: Uint8Array;
}
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistributionSDKType {
  staking_rewards: string;
  usage_incentives: string;
  community_pool: string;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculation {
  /** initial value */
  a: string;
  /** reduction factor */
  r: string;
  /** long term inflation */
  c: string;
  /** bonding target */
  bondingTarget: string;
  /** max variance */
  maxVariance: string;
}
export interface ExponentialCalculationProtoMsg {
  typeUrl: "/evmos.inflation.v1.ExponentialCalculation";
  value: Uint8Array;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculationSDKType {
  a: string;
  r: string;
  c: string;
  bonding_target: string;
  max_variance: string;
}
function createBaseInflationDistribution(): InflationDistribution {
  return {
    stakingRewards: "",
    usageIncentives: "",
    communityPool: ""
  };
}
export const InflationDistribution = {
  typeUrl: "/evmos.inflation.v1.InflationDistribution",
  encode(message: InflationDistribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.stakingRewards, 18).atomics);
    }
    if (message.usageIncentives !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.usageIncentives, 18).atomics);
    }
    if (message.communityPool !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InflationDistribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflationDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingRewards = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.usageIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: InflationDistributionProtoMsg): InflationDistribution {
    return InflationDistribution.decode(message.value);
  },
  toProto(message: InflationDistribution): Uint8Array {
    return InflationDistribution.encode(message).finish();
  },
  toProtoMsg(message: InflationDistribution): InflationDistributionProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.InflationDistribution",
      value: InflationDistribution.encode(message).finish()
    };
  }
};
function createBaseExponentialCalculation(): ExponentialCalculation {
  return {
    a: "",
    r: "",
    c: "",
    bondingTarget: "",
    maxVariance: ""
  };
}
export const ExponentialCalculation = {
  typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
  encode(message: ExponentialCalculation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.a !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.a, 18).atomics);
    }
    if (message.r !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.r, 18).atomics);
    }
    if (message.c !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.c, 18).atomics);
    }
    if (message.bondingTarget !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.bondingTarget, 18).atomics);
    }
    if (message.maxVariance !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.maxVariance, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExponentialCalculation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExponentialCalculation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.a = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.r = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.c = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.bondingTarget = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.maxVariance = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ExponentialCalculationProtoMsg): ExponentialCalculation {
    return ExponentialCalculation.decode(message.value);
  },
  toProto(message: ExponentialCalculation): Uint8Array {
    return ExponentialCalculation.encode(message).finish();
  },
  toProtoMsg(message: ExponentialCalculation): ExponentialCalculationProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
      value: ExponentialCalculation.encode(message).finish()
    };
  }
};