const path = require('path');
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      '@data': path.resolve(__dirname, 'src/data'),
      '@components': path.resolve(__dirname, 'src/developer/liga-template/src/components'),
      '@ui': path.resolve(__dirname, 'src/developer/liga-template/src/ui'),
      '@pages': path.resolve(__dirname, 'src/developer/liga-template/src/pages'),
      '@assets': path.resolve(__dirname, 'src/developer/liga-template/src/assets'),
      '@styles': path.resolve(__dirname, 'src/developer/liga-template/src/styles'),
      '@db': path.resolve(__dirname, 'src/developer/liga-template/src/db'),
      '@hooks': path.resolve(__dirname, 'src/developer/liga-template/src/hooks'),
      '@layout': path.resolve(__dirname, 'src/developer/liga-template/src/layout'),
      '@fonts': path.resolve(__dirname, 'src/developer/liga-template/src/fonts'),
      '@utils': path.resolve(__dirname, 'src/developer/liga-template/src/utils'),
      '@widgets': path.resolve(__dirname, 'src/developer/liga-template/src/widgets'),
      '@contexts': path.resolve(__dirname, 'src/developer/liga-template/src/contexts'),
      '@constants': path.resolve(__dirname, 'src/developer/liga-template/src/constants'),
      '@features': path.resolve(__dirname, 'src/developer/liga-template/src/features'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              hack: `true;@import "${require.resolve("./src/assets/less/core-theme.less")}";`,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
