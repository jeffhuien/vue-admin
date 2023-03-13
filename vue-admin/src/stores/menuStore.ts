import { defineStore } from "pinia";
import { IMenu } from "#/menu";
import { RouteLocationNormalized, RouteRecordNormalized, useRouter } from "vue-router";
export default defineStore("menu", {
  state: () => {
    return {
      menus: [] as RouteRecordNormalized[],
      historyMenu: [] as IMenu[],
    };
  },

  actions: {
    addHistoryMenu(route: RouteLocationNormalized) {
      const menu = { name: route.name, title: route.meta.menu?.title } as IMenu;

      this.historyMenu.push(menu); //添加后去重
      for (let i = 0; i < this.historyMenu.length - 1; i++) {
        for (let j = i + 1; j < this.historyMenu.length; j++) {
          if (this.historyMenu[i].name === this.historyMenu[j]["name"]) {
            this.historyMenu.splice(j, 1);
            j--;
          }
        }
      }
    },
    getMenus() {
      const router = useRouter();
      const routes = router
        .getRoutes()
        .filter(route => route.children.length !== 0 && route.meta.menu) //需要有子路由且需要有menu属性
        .map(route => {
          route.children = route.children.filter(route => route.meta?.menu);
          return route;
        });

      console.log(router.getRoutes().filter(route => route.children.length !== 0));

      this.menus = [...routes];
    },
  },
});
