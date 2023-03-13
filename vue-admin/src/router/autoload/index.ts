import env from "@/utils/env";
import { RouteRecordRaw } from "vue-router";
import views from "./views";
import modules from "./module";

let routes = [] as RouteRecordRaw[];

/**
 * 根据env环境变量中的值完成具体的自动注册基于那种方式实现
 */

if (env.VITE_ROUTE_AUTOLOAD) {
  routes = views;
} else {
  routes = modules;
}
// routes = modules;

export default routes;
