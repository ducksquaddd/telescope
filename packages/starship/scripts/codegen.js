import { join } from 'path';
import telescope from '@cosmology/telescope';
import { rimrafSync as rimraf } from 'rimraf';

const protoDirs = [join(__dirname, '/../../../__fixtures__/chain1')];
const outPath = join(__dirname, '/../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    removeUnusedImports: true,
    tsDisable: {
      patterns: ['**/tx.registry.ts']
    },
    interfaces: {
      enabled: false,
      useUnionTypes: false
    },
    prototypes: {
      addTypeUrlToObjects: true,
      excluded: {
        packages: [
          'ibc.applications.fee.v1', // issue with parsing protos (LCD routes with nested objects in params)

          'akash.**',

          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.feegrant.v1beta1',
          'cosmos.genutil.v1beta1',
          'cosmos.group.v1beta1',

          'cosmos.autocli.v1',

          'cosmos.group.v1',
          'cosmos.msg.v1',
          'cosmos.nft.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.orm.v1alpha1',
          'cosmos.orm.v1',
          'cosmos.slashing.v1beta1',
          'cosmos.vesting.v1beta1',
          'google.api.**',
          'google.logging.**',
          'ibc.core.port.v1',
          'ibc.core.types.v1'
        ]
      },
      methods: {
        fromJSON: false,
        toJSON: false
      },
      parser: {
        keepCase: false
      },
      typingsFormat: {
        num64: 'long',
        duration: 'duration',
        timestamp: 'date',
        useExact: false
      }
    },
    aminoEncoding: {
      enabled: true,
      useLegacyInlineEncoding: false
    },
    lcdClients: {
      enabled: true
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    },
    reactQuery: {
      enabled: true
    },
    packages: {
      osmosis: {
        classesUseArrowFunctions: true
      }
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
