import { createApp } from "vue";
// import "./style.css";
import router from "./routes";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import App from "./App.vue";
import loadimage from "./assets/Animation_loading.gif";

import VueLazyload from "vue-lazyload";

const app = createApp(App);
app.use(VueLazyload, {
  loading: loadimage,
});
app.use(router);
app.mount("#app");
app.component("Loading", Loading);
