// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./index');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080', // bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './src/index.tsx', // the entry point of our app
  ],
  devServer: {
    hotOnly: true, // enable HMR on the server
    writeToDisk: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  // devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
  ],
});
