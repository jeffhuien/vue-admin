import { RouteRecordRaw } from "vue-router";

export default {
  name: "auth",
  path: "/auth",
  meta: { guest: true },
  component: () => import("@/layouts/auth.vue"),
  children: [],
} as RouteRecordRaw;
