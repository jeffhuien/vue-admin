import { RouteRecordRaw } from "vue-router";
const routes = [
  // { path: "/", component: () => import("../views/home.vue") },
  { path: "/", component: () => import("@/views/auth/login.vue") },
] as RouteRecordRaw[];

export default routes;
