/**
 * 根据模块自动注册路由 依据 module中每个模块的路由进行合并 从而自动生成路由信息
 */

import { RouteRecordRaw } from "vue-router";

const modules = import.meta.glob("../module/**/*.ts", {
  eager: true,
  import: "default",
});
const routes = [] as RouteRecordRaw[];
Object.keys(modules).forEach(m => routes.push(modules[m] as RouteRecordRaw));

export default routes;
