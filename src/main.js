import { createApp } from "vue";
import { Quasar } from "quasar";
import router from "./router";
import AOS from "aos";
import BootstrapVue3 from "bootstrap-vue-3";
import Toaster from "@meforma/vue-toaster";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "quasar/src/css/index.sass";
import App from "./App.vue";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/custom.scss";

const myApp = createApp(App).use(router).use(Toaster);
myApp.use(BootstrapVue3);
myApp.use(Quasar, {
  plugins: {} // import Quasar plugins and add here
});

// Mount the app
myApp.mount("#app").$nextTick(() => {
  AOS.init();
});
