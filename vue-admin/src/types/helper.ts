import _ from "lodash";

export default class {
  public env = {} as ImportMeta;

  constructor() {
    this.env = this.getEnvs();
  }

  private getEnvs() {
    const Env: any = {};
    Object.entries(import.meta.env as Record<string, any>).forEach(([k, v]) => {
      if (v == "true" || v == "false") Env[k] = v == "true" ? true : false;
      else if (/^\d+$/.test(v)) Env[k] = parseInt(v);
      else if (v == "null") Env[k] = null;
      else if (v == "undefined") Env[k] = undefined;
      //   else Env[k] = v;
    });

    return Env;
  }
}
