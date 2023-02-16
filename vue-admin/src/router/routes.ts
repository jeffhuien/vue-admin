import { RouteRecordRaw } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../views/home.vue"),
    name: "home",
    meta: { auth: true },
  },
  {
    path: "/:any(.*)",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
  // { path: "/", component: () => import("@/views/auth/login.vue") },
] as RouteRecordRaw[];

export default routes;
