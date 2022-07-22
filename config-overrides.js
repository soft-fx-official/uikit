const { ModuleFederationPlugin } = require('webpack').container
const FederatedTypesPlugin = require('wmftypes')
const { dependencies } = require('./package.json')
const config = require('./src/config')

module.exports = {
  webpack: function (webpackConfig, env) {
    webpackConfig.output.publicPath = 'auto'
    webpackConfig.output.uniqueName = config.appName

    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new ModuleFederationPlugin({
        name: config.appName,
        filename: 'remoteEntry.js',
        exposes: {
          './themes': './src/themes',
          './components': './src/components',
        },
        remotes: {
          'common': 'common@http://localhost:4001/remoteEntry.js',
        },
        shared: {
          ...dependencies,
          react: {
            singleton: true,
            requiredVersion: dependencies['react'],
          },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
          'react-router-dom': {
            singleton: true,
            requiredVersion: dependencies['react-router-dom'],
          },
        },
      }),
      new FederatedTypesPlugin(),
    ]

    return webpackConfig
  },
}
