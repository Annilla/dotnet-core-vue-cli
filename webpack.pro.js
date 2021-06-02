const { merge } = require('webpack-merge')
const base = require('./webpack.base')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge(base, {
  entry: {
    main: [
      './src/main.js'
    ]
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserPlugin()]
  }
})