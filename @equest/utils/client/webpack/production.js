// production config
const merge = require('webpack-merge');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./index');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin({ template: 'static/production.html' })],
});
