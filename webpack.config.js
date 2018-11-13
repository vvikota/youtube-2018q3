const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PUBLIC_DIR = 'public';

module.exports = {
  mode: 'development',
  entry: {
    app: './index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './' + PUBLIC_DIR
  },
  plugins: [
    new CleanWebpackPlugin([PUBLIC_DIR]),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, PUBLIC_DIR)
  }
};
