import { RouteRecordRaw } from "vue-router";
import { env } from "@/utils";
// const layouts = import.meta.globEager("../layouts/*.vue");
const layouts = import.meta.glob("../layouts/*.vue", {
  eager: true,
});

const views = import.meta.glob("../views/**/*.vue", {
  eager: true,
});

// const layouts = import.meta.globEager("../layouts/*.vue");
// const views = import.meta.globEager("../views/**/*.vue");

// console.log(views);
// console.log("--------------------");

// function getRoutes() {
//   const routes = [] as RouteRecordRaw[];
//   Object.entries(layouts).forEach(([file, model]) => {
//     const route = getRouteModel(file, model);
//     route.children = getChildrenRoute(route);
//     routes.push(route);
//   });
//   return routes;
// }

// function getChildrenRoute(route: RouteRecordRaw) {
//   // console.log(route.path);
//   const routes = [] as RouteRecordRaw[];
//   Object.entries(views).forEach(([file, model]) => {
//     if (file.includes(`../views${route.path}`)) {
//       // console.log(file);
//       const viewRoute = {
//         path: `${file.substring(file.lastIndexOf("/") + 1, file.length - 4)}`,
//         component: model,
//       } as RouteRecordRaw;
//       routes.push(viewRoute);
//     }
//   });
//   return routes;
// }

// function getRouteModel(file: string, model: unknown) {
//   const route = {
//     name: `${file.substring(file.lastIndexOf("/") + 1, file.length - 4)}`,
//     path: `/${file.substring(file.lastIndexOf("/") + 1, file.length - 4)}`,
//     component: model,
//   } as RouteRecordRaw;
//   return route;
// }

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[];

  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteModel(file, module as FileReader);
    route.children = getChildrenRoutes(route);
    layoutRoutes.push(route);
  });
  return layoutRoutes;
}

//获取布局路由的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteModel(file, module as FileReader);
      routes.push(route);
    }
  });
  return routes;
}

function getRouteModel(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  const route = {
    name: name.replace("/", "."),
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw;

  return Object.assign(route, module.default?.route);
}

// console.log(getRoutes());
// console.log( utils.env.VITE_ROUTE_AUTOLOAD);
const routes = env.VITE_ROUTE_AUTOLOAD ? getRoutes() : ([] as RouteRecordRaw[]);
export default routes;
