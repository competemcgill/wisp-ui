import Vue from "vue";

const assets = require.context("@/assets/", false, /\.(jpg|png)$/);

const DynamicAssets = {
  install(vue) {
    vue.prototype.$getImageUrl = name => assets(`./${name}`);
  }
};

Vue.use(DynamicAssets);
