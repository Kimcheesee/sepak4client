import Vue from "vue";
import Vuetify from "vuetify/lib";

import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa" || "mdi"
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#0C97AD",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
