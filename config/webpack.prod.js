const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  entry: './src/App.js',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/myva_dashboard/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'myva_dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardIndex': './src/App.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
