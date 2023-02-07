import _ from "lodash";

export default function parseEnv(env: Record<string, any>): ViteEnv {
  const Env: any = _.cloneDeep(env);

  Object.entries(import.meta.env as Record<string, any>).forEach(([k, v]) => {
    if (v == "true" || v == "false") Env[k] = v == "true" ? true : false;
    else if (/^\d+$/.test(v)) Env[k] = Number(v);
    else if (v == "null") Env[k] = null;
    else if (v == "undefined") Env[k] = undefined;
    // else Env[k] = v;
  });
  return Env;
}
