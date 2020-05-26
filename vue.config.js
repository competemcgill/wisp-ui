module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: config => {
    config.output.filename = `[name].${Date.now().valueOf()}.[chunkhash].js`;
  },
  devServer: {
    watchOptions: {
      poll: 500
    }
  }
};
