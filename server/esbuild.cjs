const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  outfile: 'build/index.js',
  format: 'esm',
  inject: ['cjs-shim.ts'],
});