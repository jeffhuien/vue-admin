/**
 * 根据页面自动注册路由 依据 layouts中的 <routeView> 和views文件夹中文件的一一对应关系自动生成路由信息
 */

import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.glob("@/layouts/**/*.vue", { eager: true });
const views = import.meta.glob("@/views/**/*.vue", { eager: true });

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
    if (file.includes(`/views/${layoutRoute.name as string}`)) {
      const route = getRouteModel(file, module as FileReader);
      routes.push(route);
    }
  });
  return routes;
}

function getRouteModel(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");
  // const name = `${file.substring(file.lastIndexOf("/") + 1, file.length - 4)}`;
  // const name = file;
  // console.log(name, name.replaceAll("/", "."));

  const route = {
    name: name.replaceAll("/", "."),
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw;

  return Object.assign(route, module.default?.route);
}

// const routes = env.VITE_ROUTE_AUTOLOAD ? getRoutes() : ([] as RouteRecordRaw[]);
// // const routes = getRoutes();
export default getRoutes();
