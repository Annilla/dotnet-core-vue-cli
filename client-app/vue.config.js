const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: 44405,
  },
  transpileDependencies: [
    'vuetify'
  ]
})
