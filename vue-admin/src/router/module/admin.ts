/*
 * @Author: GAO GAO
 * @Date: 2023-02-26 12:44:16
 */
import { RouteRecordRaw } from "vue-router";
export default {
  name: "admin",
  path: "/admin",
  redirect: "/admin/home",
  component: () => import("@/layouts/admin.vue"),
  meta: {
    auth: true,
    menu: { title: "Dashboard", icon: "fa-solid fa-house" },
  },
  children: [
    {
      name: "admin.home",
      path: "home",
      component: () => import("@/views/admin/home.vue"),
      meta: {
        menu: { title: "工作台" },
      },
    },
  ],
} as RouteRecordRaw;
