const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';

const config = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new webpack.ProvidePlugin({
      PIXI: 'pixi.js'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  }
};

if (environment === 'development') {
  config.devtool = 'source-map';
  config.devServer = {
    host: 'localhost',
    port: 8080,
    hot: true,
    overlay: true
  };
} else {
  config.plugins = [...config.plugins, new CleanWebpackPlugin()];
}

module.exports = config;
