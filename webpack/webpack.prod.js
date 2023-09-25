const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const dotenvFilename = '.env.production'

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: dotenvFilename,
    }),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Weather App'),
    }),
  ],
}
