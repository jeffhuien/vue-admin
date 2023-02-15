import { RouteRecordRaw } from "vue-router";
import { env } from "@/utils";
// const layouts = import.meta.globEager("../layouts/*.vue");
const layouts = import.meta.glob("../layouts/*.vue", {
  eager: true,
  import: "default",
});

const views = import.meta.glob("../views/**/*.vue", {
  eager: true,
  import: "default",
});
// console.log(views);
// console.log("--------------------");

function getRoutes() {
  const routes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([file, model]) => {
    const route = getRouteModel(file, model);
    route.children = getChildrenRoute(route);
    routes.push(route);
  });
  return routes;
}

function getChildrenRoute(route: RouteRecordRaw) {
  // console.log(route.path);
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, model]) => {
    if (file.includes(`../views${route.path}`)) {
      // console.log(file);
      const viewRoute = {
        path: `${file.substring(file.lastIndexOf("/") + 1, file.length - 4)}`,
        component: model,
      } as RouteRecordRaw;
      routes.push(viewRoute);
    }
  });
  return routes;
}

function getRouteModel(file: string, model: unknown) {
  const route = {
    path: `/${file.substring(file.lastIndexOf("/") + 1, file.length - 4)}`,
    component: model,
  } as RouteRecordRaw;
  return route;
}

// console.log(getRoutes());
// console.log( utils.env.VITE_ROUTE_AUTOLOAD);
const routes = env.VITE_ROUTE_AUTOLOAD ? getRoutes() : ([] as RouteRecordRaw[]);
export default routes;
