import { Router } from "vue-router";

class Guard {
  constructor(private router: Router) {}

  run() {
    this.router.beforeEach((to, from) => {
      console.log(to);
    });
  }
}
export default (router: Router) => {
  return new Guard(router).run();
};
