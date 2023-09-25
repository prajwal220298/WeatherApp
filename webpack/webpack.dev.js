const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const dotenvFilename = '.env.development'

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new Dotenv({
      path: dotenvFilename,
    }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Development'),
    }),
  ],
}
