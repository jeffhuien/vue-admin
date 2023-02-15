// test.ts

import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/info",
    method: "get",
    response: () => {
      return {
        code: 0,
        res: {
          name: "gaogao",
          age: 18,
        },
      };
    },
  },
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "登录成功",
        type: "success",
        res: {
          token: Random.string(50),
        },
      };
    },
  },
] as MockMethod[];
