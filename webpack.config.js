const path = require('path')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000/',
      './src/main.js'
    ]
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    // hot: true,
    port: 3000,
    inline: false,
    liveReload: true,
  },
  devtool: 'eval-source-map',
})