const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = merge(baseWebpackConfig, {
  mode: 'production',
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
