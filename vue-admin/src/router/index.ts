import { createRouter, createWebHistory } from "vue-router";
import autoLoad from "./autoLoad";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoLoad],
});
export default router;
