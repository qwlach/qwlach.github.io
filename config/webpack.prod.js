const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: "js/[name].[chunkhash:16].js",
    // publicPath: "/dist/",
    path:path.resolve(__dirname,"../dist"),
    publicPath:"./"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      minify: {
        html5: true,
      },
      hash: false
    }),
    new CleanWebpackPlugin(['../dist'], { allowExternal: true })
  ],
  optimization: {
    splitChunks: {
        chunks: "all",
        minChunks: 1,
        minSize: 0,
        cacheGroups: {
            vendor: {
                test: "vendor",
                name: "vendor"
            }
        }
    }
  }
});
