const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    noInfo: false,
  },
  devtool: '#eval-source-map',
})