import { TelescopeOptions } from "@cosmology/types";

export const getReactQueryHelper = (options: TelescopeOptions) => {
  return `import { getRpcClient } from './extern'
import {
    useQuery,
    UseQueryOptions,
} from '@tanstack/react-query';

import { HttpEndpoint, ProtobufRpcClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

export interface ReactQueryParams<TResponse, TData = TResponse> {
    options?: UseQueryOptions<TResponse, Error, TData>;
}

export interface UseRpcClientQuery<TData> extends ReactQueryParams<ProtobufRpcClient, TData> {
    rpcEndpoint: string | HttpEndpoint;
}

${
  options.reactQuery.needExtraQueryKey
    ? `export interface UseRpcEndpointQuery<TData> extends ReactQueryParams<string | HttpEndpoint, TData> {
    getter: () => Promise<string | HttpEndpoint>;
    extraKey?: string
}

export const useRpcEndpoint = <TData = string | HttpEndpoint>({
    getter,
    options,
    extraKey
}: UseRpcEndpointQuery<TData>) => {
    return useQuery<string | HttpEndpoint, Error, TData>(['rpcEndpoint', extraKey], async () => {
        return await getter();
    }, options);
};`
    : `export interface UseRpcEndpointQuery<TData> extends ReactQueryParams<string | HttpEndpoint, TData> {
    getter: () => Promise<string | HttpEndpoint>;
}

export const useRpcEndpoint = <TData = string | HttpEndpoint>({
    getter,
    options,
}: UseRpcEndpointQuery<TData>) => {
    return useQuery<string | HttpEndpoint, Error, TData>(['rpcEndpoint', getter], async () => {
        return await getter();
    }, options);
};`
}

export const useRpcClient = <TData = ProtobufRpcClient>({
    rpcEndpoint,
    options,
}: UseRpcClientQuery<TData>) => {
    return useQuery<ProtobufRpcClient, Error, TData>(['rpcClient', rpcEndpoint], async () => {
        return await getRpcClient(rpcEndpoint);
    }, options);
};

interface UseTendermintClient extends ReactQueryParams<Tendermint34Client> {
    rpcEndpoint: string | HttpEndpoint;
}

/**
 * Hook that uses react-query to cache a connected tendermint client.
 */
export const useTendermintClient = ({
    rpcEndpoint,
    options,
}: UseTendermintClient) => {
    const { data: client } = useQuery<Tendermint34Client, Error, Tendermint34Client>(
        ['client', 'tendermint', rpcEndpoint],
        () => Tendermint34Client.connect(rpcEndpoint),
        {
            // allow overriding
            onError: (e) => {
                throw new Error(\`Failed to connect to \${rpcEndpoint}\` + '\\n' + e)
            },
            ...options,
        }
    )
    return { client }
};
`;
};
