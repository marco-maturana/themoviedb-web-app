
import "./plugins/vuetify";
import "./registerServiceWorker";
import axios from "@/plugins/axios";
import registerStore from "@/plugins/registerStore";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import Vue from "vue";

Vue.config.productionTip = false;

Vue.use(axios);
Vue.use(registerStore);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
