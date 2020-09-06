import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "vuetify/lib/locale/en";

Vue.use(VueI18n);

const messages = {
  en: {
    ...require("@/locales/en.json"),
    $vuetify: en
  }
};

export default new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages
});
