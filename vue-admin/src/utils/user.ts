import userApi from "@/apis/user";
import { CacheEnum } from "@/enum/cacheEnum";
import router from "@/router";
import store from "./store";
import user from "@/stores/user";
export async function login(values: any) {
  const {
    res: { token },
  } = await userApi.login(values);
  store.set(CacheEnum.TOKEN_NAME, { token }, 5);
  const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? "home";
  router.push({ name: routeName });
}

export function logout() {
  store.remove(CacheEnum.TOKEN_NAME);
  user().info = null;
}
