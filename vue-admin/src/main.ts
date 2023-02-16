import { createApp } from "vue";
import App from "./App.vue";
import setupPlugins from "./plugins";
import { setupRouter } from "./router";
import "@/style/global.scss";

const app = createApp(App);
// global
setupRouter(app);
setupPlugins(app);
app.mount("#app");
