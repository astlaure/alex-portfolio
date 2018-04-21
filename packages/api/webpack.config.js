const webpack = require('webpack'); /* eslint no-unused-vars: 0 */
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

/**
 * @type {webpack.Configuration}
 */
const config = {
  entry: './src/index.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    __dirname: true
  },
  target: "node",
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts|\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      './.env'
    ]),
  ]
};

module.exports = config;
