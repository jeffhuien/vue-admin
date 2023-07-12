/*
 * @Author: GAO GAO
 * @Date: 2023-02-07 21:52:03
 */
import { App, Component } from "vue";
import setupTailwindcss from "./tailwindcss";
import _ from "lodash";
import setupElementPlus from "./elementPlus";
import setupPinia from "./pinia";
import setupAniMateCss from "./animateCss";
import setupFontAwesomeCss from "./font";

export default function setupPlugins(app: App) {
  setupTailwindcss();
  setupAniMateCss();
  setupFontAwesomeCss();
  autoRegisterComponent(app);
  setupElementPlus(app);
  setupPinia(app);
}

//自动注册插件
function autoRegisterComponent(app: App) {
  const components = import.meta.glob("../components/**/*.vue", {
    eager: true,
    import: "default",
  });

  Object.keys(components).forEach(k => {
    const name = k.split("/").pop()?.split(".").shift() as string;
    // app.component(name, components[k] as Component);
    app.component(_.camelCase(name), components[k] as Component);
  });
}
