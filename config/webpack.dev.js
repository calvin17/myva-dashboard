const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  entry: './src/index',
  devtool: 'source-map',
  // output: {
  //   publicPath: 'auto',
  // },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true,
          output: {
            comments: false,
          },
          sourceMap: true, 
        },
        extractComments: false,
      }),
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8087,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'myva_dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardIndex': './src/index',
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          singleton: true,
          requiredVersion: packageJson.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
      }
    }),
    // new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // new ReactRefreshWebpackPlugin(),
    // new ReactRefreshWebpackPlugin({
    //   exclude: [/node_modules/, /bootstrap\.js$/],
    // }),
  ],
};

module.exports = merge(commonConfig, devConfig);
