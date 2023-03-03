import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/user/info",
    method: "get",
    response: () => {
      return {
        message: "获取成功",
        type: "success",
        res: {
          name: "gaogao",
          age: 18,
          img: "/img/head.jpg",
        },
      };
    },
  },
  {
    url: "/api/login",
    method: "post",
    response: () => {
      return {
        message: "登录成功",
        type: "success",
        res: {
          token: Random.string(50),
        },
      };
    },
  },
] as MockMethod[];
