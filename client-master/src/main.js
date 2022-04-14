import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { io } from "socket.io-client";

import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;
// Vue.config.devtools = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
