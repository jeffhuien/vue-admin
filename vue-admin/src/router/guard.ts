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
    });
  }

  private isLogin(route: RouteLocationNormalized) {
    // if (route.name !== "login") return false;
    return Boolean(!route.meta.auth || (route.meta.auth && store.get("token")));
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
