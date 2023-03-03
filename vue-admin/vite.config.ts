import { ConfigEnv, loadEnv } from "vite";

import alias from "./vite/alias";
import parseEnv from "./vite/utils";
import setupPlugins from "./vite/plugins";

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command == "build";
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
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
