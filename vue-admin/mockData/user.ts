// test.ts

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
] as MockMethod[];
