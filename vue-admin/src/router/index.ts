import { createRouter, createWebHistory, useRoute } from "vue-router";
// import autoLoad from "./autoload/views";

import autoLoad from "./autoload";

import routes from "./routes";
import guard from "./guard";
import { App } from "vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoLoad],
});

// autoLoadError();

export function setupRouter(app: App) {
  guard(router);
  app.use(router);
}
export { useRoute };
export default router;
