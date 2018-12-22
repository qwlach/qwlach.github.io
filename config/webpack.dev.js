const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: "js/[name].[hash:16].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      minify: {
        html5: true
      },
      hash: false
    }),
    new webpack.DefinePlugin({
      DEBUG: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    stats: "minimal",
    hot: true,
    historyApiFallback: true,
    port: 3002,
    host: "127.0.0.1",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
})
