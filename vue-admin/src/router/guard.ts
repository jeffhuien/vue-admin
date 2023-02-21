import store from "@/utils/store";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard {
  constructor(private router: Router) {
    // console.log(this.router);
  }

  public run() {
    this.router.beforeEach((to, from) => {
      console.log(to.meta);
      console.log(store.get("token"));

      if (this.isLogin(to) === false) return { name: "login" };
      // if (this.isGuest(to) === false) {
      //   return { name: "home" };
      // }
    });
  }

  private isLogin(route: RouteLocationNormalized) {
    // if (route.name !== "login") return false;
    return Boolean(!route.meta.auth || (route.meta.auth && store.get("token")));
  }

  private isGuest(route: RouteLocationNormalized) {
    return Boolean(
      !route.meta.guest || (route.meta.guest && !store.get("token"))
    );
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
