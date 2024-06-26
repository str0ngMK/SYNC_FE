const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@router': path.resolve(__dirname, 'src/router'),
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.paths.json',
        debug: false,
      },
    },
  ],
};
