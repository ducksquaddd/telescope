import { TSBuilderInput } from '@cosmwasm/ts-codegen';
import { AminoExceptions } from "./aminos";
export declare enum TelescopeLogLevel {
    None = 0,
    Info = 1,
    Warn = 2,
    Error = 3,
    Debug = 4
}
interface TelescopeOpts {
    env?: 'default' | 'v-next';
    removeUnusedImports?: boolean;
    classesUseArrowFunctions?: boolean;
    useSDKTypes?: boolean;
    includeExternalHelpers?: boolean;
    logLevel?: TelescopeLogLevel;
    interfaces?: {
        enabled?: boolean;
        useUnionTypes?: boolean;
    };
    prototypes?: {
        enabled?: boolean;
        parser?: {
            keepCase?: boolean;
            alternateCommentMode?: boolean;
            preferTrailingComment?: boolean;
        };
        methods?: {
            encode?: boolean;
            decode?: boolean;
            fromJSON?: boolean;
            toJSON?: boolean;
            /**
            * @deprecated The 'fromPartial' option will be deprecated in a future version. Encoder objects need fromPartial to be a creator function to create instance of the type. So it should always be left on.
            */
            fromPartial?: boolean;
            toSDK?: boolean;
            fromSDK?: boolean;
            fromSDKJSON?: boolean;
            toAmino?: boolean;
            fromAmino?: boolean;
            toProto?: boolean;
            fromProto?: boolean;
        };
        strictNullCheckForPrototypeMethods?: boolean;
        paginationDefaultFromPartial?: boolean;
        includePackageVar?: boolean;
        fieldDefaultIsOptional?: boolean;
        useOptionalNullable?: boolean;
        allowUndefinedTypes?: boolean;
        optionalQueryParams?: boolean;
        optionalPageRequests?: boolean;
        addTypeUrlToObjects?: boolean;
        addAminoTypeToObjects?: boolean;
        addTypeUrlToDecoders?: boolean;
        enableRegistryLoader?: boolean;
        enableMessageComposer?: boolean;
        excluded?: {
            packages?: string[];
            protos?: string[];
            hardProtos?: string[];
        };
        includes?: {
            packages?: string[];
            protos?: string[];
        };
        typingsFormat?: {
            customTypes?: {
                useCosmosSDKDec?: boolean;
            };
            num64?: 'long' | 'bigint';
            useDeepPartial?: boolean;
            useExact?: boolean;
            timestamp?: 'date' | 'timestamp';
            duration?: 'duration' | 'string';
            setDefaultEnumToUnrecognized?: boolean;
            setDefaultCustomTypesToUndefined?: boolean;
            updatedDuration?: boolean;
            useTelescopeGeneratedType?: boolean;
        };
    };
    tsDisable?: {
        files?: string[];
        disableAll?: boolean;
        patterns?: string[];
    };
    eslintDisable?: {
        files?: string[];
        disableAll?: boolean;
        patterns?: string[];
    };
    bundle?: {
        enabled: boolean;
    };
    cosmwasm?: TSBuilderInput;
    aggregatedLCD?: {
        dir: string;
        filename: string;
        packages: string[];
        protos?: string[];
        addToBundle: boolean;
    };
    stargateClients?: {
        enabled: boolean;
        includeCosmosDefaultTypes?: boolean;
    };
    aminoEncoding?: {
        enabled: boolean;
        disableMsgTypes?: boolean;
        casingFn?: Function;
        exceptions?: AminoExceptions;
        typeUrlToAmino?: (typeUrl: string) => string | undefined;
        /**
        * @deprecated The logic of useLegacyInlineEncoding will be deprecated in the future.
        */
        useLegacyInlineEncoding?: boolean;
    };
    lcdClients?: {
        enabled: boolean;
        scopedIsExclusive?: boolean;
        bundle?: boolean;
        scoped?: {
            dir: string;
            filename?: string;
            packages: string[];
            protos?: string[];
            addToBundle: boolean;
            methodName?: string;
        }[];
    };
    rpcClients?: {
        type?: 'tendermint' | 'grpc-web' | 'grpc-gateway';
        enabled: boolean;
        inline?: boolean;
        extensions?: boolean;
        camelCase?: boolean;
        scopedIsExclusive?: boolean;
        bundle?: boolean;
        enabledServices?: ('Msg' | 'Query' | 'Service' | 'ReflectionService' | 'ABCIApplication' | string)[];
        scoped?: {
            dir: string;
            filename?: string;
            packages: string[];
            protos?: string[];
            addToBundle: boolean;
            methodNameQuery?: string;
            methodNameTx?: string;
        }[];
    };
    reactQuery?: {
        enabled: boolean;
        needExtraQueryKey?: boolean;
        include?: {
            /**
             * @deprecated in favor of packages and protos supporting minimatch
             */
            patterns?: string[];
            packages?: string[];
            protos?: string[];
        };
        instantExport?: {
            include: {
                patterns?: string[];
            };
            nameMapping?: {
                [key: string]: string;
            };
        };
    };
    mobx?: {
        enabled: boolean;
        include?: {
            /**
             * @deprecated in favor of packages and protos supporting minimatch
             */
            patterns?: string[];
            packages?: string[];
            protos?: string[];
        };
    };
    pinia?: {
        enabled: boolean;
        include?: {
            /**
             * @deprecated in favor of packages and protos supporting minimatch
             */
            patterns?: string[];
            packages?: string[];
            protos?: string[];
        };
    };
}
interface TelescopePackageOpts {
    packages?: Record<string, any>;
}
export type TelescopeOptions = TelescopeOpts & TelescopePackageOpts;
export type TelescopeOption = keyof TelescopeOpts;
export declare const defaultTelescopeOptions: TelescopeOptions;
export {};
