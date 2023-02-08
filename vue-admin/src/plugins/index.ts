import { App, Component } from "vue";
import setupTailwindcss from "./tailwindcss";
import _ from "lodash";
export default function setupPlugins(app: App) {
  setupTailwindcss();
  autoRegisterComponent(app);
}

function autoRegisterComponent(app: App) {
  const components = import.meta.glob("../components/form/*.vue", {
    eager: true,
    import: "default",
  });

  Object.keys(components).forEach(k => {
    const name = k.split("/").pop()?.split(".").shift() as string;
    // app.component(name, components[k] as Component);
    app.component(_.camelCase(name), components[k] as Component);
  });
}
