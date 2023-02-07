import { ConfigEnv, defineConfig, loadEnv } from "vite";

import alias from "./vite/alias";
import parseEnv from "./vite/utils";
import setupPlugins from "./vite/plugins";

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == "build";
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  // env = parseEnv(env);
  // console.log(env);
  // env.VITE_SOME_KEY

  return {
    // plugins: [vue()],
    plugins: setupPlugins(isBuild, env),
    server: {
      host: "0.0.0.0",
      port: 80,
      // open: true,
    },

    resolve: {
      alias,
    },
  };
};
