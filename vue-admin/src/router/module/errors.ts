/*
 * @Author: GAOGAO
 * @Date: 2023-02-26 14:39:21
 */
import { RouteRecordRaw } from "vue-router";

export default {
  name: "error",
  path: "/error",
  component: () => import("@/layouts/admin.vue"),
  meta: {
    auth: true,
    // <i class="fa-solid fa-square-exclamation"></i>
    menu: { title: "错误页面", icon: "fa-solid fa-circle-exclamation" },
  },
  children: [
    {
      name: "error.404",
      path: "404",
      component: () => import("@/views/errors/404.vue"),
      meta: { menu: { title: "404页面" } },
    },
    {
      name: "error.403",
      path: "403",
      component: () => import("@/views/errors/403.vue"),
      meta: { menu: { title: "403页面" } },
    },
    {
      name: "error.500",
      path: "500",
      component: () => import("@/views/errors/500.vue"),
      meta: { menu: { title: "500页面" } },
    },
  ],
} as RouteRecordRaw;
