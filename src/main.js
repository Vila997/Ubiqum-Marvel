import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { auth } from "@/firebase.js";

auth.onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch("setUsuario", user);

    console.log(user.displayName);
  }
  new Vue({
    router,
    store,
    render: h => h(App),
    created() {
      this.$store.dispatch("getComics");
    }
  }).$mount("#app");
});
