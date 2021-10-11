import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import Vuelidate from "vuelidate";
import "jquery";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

createApp(App)
  .use(Vuelidate)
  .use(router)
  .mount("#app");
