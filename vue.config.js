module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: config => {
    config.output.filename = `[name].${Date.now().valueOf()}.[hash].js`;
  },
  devServer: {
    watchOptions: {
      poll: 500
    }
  }
};
