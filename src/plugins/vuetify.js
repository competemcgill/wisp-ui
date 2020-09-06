import Vue from "vue";
import Vuetify from "vuetify/lib";
import Logo from "@/components/Core/Logo";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#8F1D14",
        secondary: "#828282",
        background: "#ffffff",
        success: "#329D00",
        incomplete: "#F89D13",
        failure: "#8F1D14"
      }
    }
  },
  icons: {
    values: {
      "cp-logo": {
        component: Logo
      }
    }
  }
});
