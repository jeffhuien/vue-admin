// import { CacheEnum } from "./../enum/cacheEnum";
import user from "@/stores/user";
import util from "@/utils";
import { RouteLocationNormalized, Router } from "vue-router";

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this));
  }

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (to.meta.auth && !this.token()) return { name: "login" };
    if (to.meta.guest && this.token()) return from;
    await this.getUserInfo();
  }

  private getUserInfo() {
    if (this.token()) return user().getUserInfo();
  }

  private token(): string | null {
    return util.store.get("token");
  }
}

export default (router: Router) => {
  new Guard(router).run();
};
