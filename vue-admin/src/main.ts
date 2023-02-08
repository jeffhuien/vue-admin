import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import router from "@/router";
import setupPlugins from "./plugins";
// import gInput from "@/components/form/g-input.vue";
// import gButton from "@/components/form/g-button.vue";
const app = createApp(App);

setupPlugins(app);
// app.component("gInput", gInput);
// app.component(gButton);
app.use(router);
app.mount("#app");
