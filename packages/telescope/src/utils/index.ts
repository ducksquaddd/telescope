import { ProtoRoot, ProtoRef } from '@cosmology/types';
import { relative, dirname, extname } from 'path';
import { ImportObj } from '../types';

export const getRoot = (ref: ProtoRef): ProtoRoot => {
  if (ref.traversed) return ref.traversed;
  return ref.proto;
};

// default example:
// Long: { type: 'default', path: 'long', name: 'Long ' },
// namespaced:
// _m0: { type: 'namespace', path: 'protobufjs/minimal', name: '_m0' },
export const UTILS = {
  _m0: { type: 'namespace', path: 'protobufjs/minimal', name: '_m0' },
  AminoHeight: '__helpers__',
  AminoMsg: '@cosmjs/amino',
  AminoTypes: '@cosmjs/stargate',
  base64FromBytes: '__helpers__',
  bytesFromBase64: '__helpers__',
  BrowserHeaders: 'browser-headers',
  Decimal: '@cosmjs/math',
  createProtobufRpcClient: '@cosmjs/stargate',
  Pubkey: '@cosmjs/amino',
  decodeBech32Pubkey: '@cosmjs/amino',
  DeepPartial: '__helpers__',
  defaultRegistryTypes: '@cosmjs/stargate',
  encodeBech32Pubkey: '@cosmjs/amino',
  Exact: '__helpers__',
  fm: { type: 'namespace', path: '__grpc-gateway__', name: 'fm' },
  encodePubkey: '@cosmjs/proto-signing',
  decodePubkey: '@cosmjs/proto-signing',
  fromBase64: '@cosmjs/encoding',
  fromBech32: '@cosmjs/encoding',
  fromDuration: '__helpers__',
  fromHex: '@cosmjs/encoding',
  fromJsonTimestamp: '__helpers__',
  fromTimestamp: '__helpers__',
  fromUtf8: '@cosmjs/encoding',
  GeneratedType: '@cosmjs/proto-signing',
  getRpcClient: '__extern__',
  getRpcEndpointKey: '__extern__',
  HttpEndpoint: '@cosmjs/tendermint-rpc',
  isObject: '__helpers__',
  isSet: '__helpers__',
  LCDClient: '@cosmology/lcd',
  Long: '__helpers__',
  OfflineSigner: '@cosmjs/proto-signing',
  omitDefault: '__helpers__',
  ProtobufRpcClient: '@cosmjs/stargate',
  QueryClient: '@cosmjs/stargate',
  Registry: '@cosmjs/proto-signing',
  Rpc: '__helpers__',
  grpc: '@improbable-eng/grpc-web',
  setPaginationParams: '__helpers__',
  SigningStargateClient: '@cosmjs/stargate',
  Tendermint34Client: '@cosmjs/tendermint-rpc',
  toBase64: '@cosmjs/encoding',
  toDuration: '__helpers__',
  toTimestamp: '__helpers__',
  toUtf8: '@cosmjs/encoding',
  useQuery: '@tanstack/react-query',
  useRpcEndpoint: '__react-query__',
  useRpcClient: '__react-query__',
  useTendermintClient: '__react-query__',
  ReactQueryParams: '__react-query__',
  UseQueryOptions: '@tanstack/react-query',
  QueryStore: '__mobx__',
  MobxResponse: '__mobx__',
  useEndpoint: '__pinia-endpoint__',
  override: 'mobx',
  makeObservable: 'mobx',
  NodeHttpTransport: '@improbable-eng/grpc-web-node-http-transport',
  UnaryMethodDefinitionishR: '__grpc-web__',
  UnaryMethodDefinitionish: '__grpc-web__',
  BinaryReader: '__binary__',
  BinaryWriter: '__binary__',
  TelescopeGeneratedType: '__types__',
};

export const UTIL_HELPERS = [
  '__helpers__',
  '__extern__',
  '__react-query__',
  '__mobx__',
  '__binary__',
  '__pinia-endpoint__',
  '__grpc-gateway__',
  '__grpc-web__',
  '__types__'
];

export const fixlocalpaths = (imports: ImportObj[]) => {
  return imports.map(imp => {
    return {
      ...imp,
      path: (UTIL_HELPERS.includes(imp.path) || imp.path.startsWith('.') || imp.path.startsWith('@')) ?
        imp.path : `./${imp.path}`
    };
  })
};


export const getRelativePath = (f1: string, f2: string) => {
  const rel = relative(dirname(f1), f2);
  let importPath = rel.replace(extname(rel), '');
  if (!/^\./.test(importPath)) importPath = `./${importPath}`;
  return importPath;
}

export * from './common-create-bundle';
