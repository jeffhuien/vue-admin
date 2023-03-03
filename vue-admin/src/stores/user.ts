import { defineStore } from "pinia";
import userApi from "@/apis/user";

export default defineStore("user", {
  state: () => {
    return { info: {} as null | User };
  },

  actions: {
    async getUserInfo() {
      const res = await userApi.info();
      this.info = res.res;
    },
  },
});
