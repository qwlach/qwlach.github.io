const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist');
module.exports = {
  entry: {
    app: './app/index.js',
    verdor: ['react', 'react-dom'],
  },
  output: {
    filename: "js/[name].[chunkhash:16].js",
    path: DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader"
        }],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /.(jpg|png|gif|svg)$/,
        loader: 'url-loader?limit=8192&name=[name].[ext]?[hash]'
      }
    ],
  },
};
