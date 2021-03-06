const merge = require('webpack-merge')
const base = require('./webpack.base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(base, {
  mode: 'production',
  devtool: '#source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
})