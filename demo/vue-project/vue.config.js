const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:4000",
  devServer: {
    port: 4000,
  },
});
