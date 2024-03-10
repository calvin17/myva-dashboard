const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8087,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'myva_dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardIndex': './src/index',
      },
      shared: {
        react: {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
