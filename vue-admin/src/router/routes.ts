import { RouteRecordRaw } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../views/home.vue"),
    name: "home",

    meta: { auth: true, menu: { title: "首页" } },
  },
  {
    path: "/:any(.*)",
    name: "NotFound",
    component: () => import("@/views/errors/404.vue"),
  },

  {
    path: "/login",
    component: () => import("../views/auth/login.vue"),
    name: "login",
    meta: { guest: true },
  },
  {
    path: "/Register",
    component: () => import("../views/auth/Register.vue"),
    name: "Register",
    meta: { guest: true },
  },
] as RouteRecordRaw[];

export default routes;
