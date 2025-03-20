const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['bin/cli.js'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/cli.mjs',
  format: 'esm',
  inject: ['cjs-shim.ts'],
});