import { createRouter, createWebHistory } from "vue-router";
import autoLoad from "./autoLoad";
import routes from "./routes";
import guard from "./guard";
import { App } from "vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoLoad],
});

export function setupRouter(app: App) {
  guard(router);
  app.use(router);
}
export default router;
