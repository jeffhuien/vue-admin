import { RouteRecordRaw } from "vue-router";

export default {
  name: "user",
  path: "/userinfo",
  meta: { auth: true },
  component: () => import("@/layouts/user.vue"),
  children: [
    {
      name: "userinfo.about",
      path: "about",
      component: () => import("@/views/user/about.vue"),
    },
    {
      name: "userinfo.v",
      path: "v",
      component: () => import("@/views/user/v.vue"),
    },
  ],
} as RouteRecordRaw;
