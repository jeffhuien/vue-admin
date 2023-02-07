import { viteMockServe } from "vite-plugin-mock";

export default function setupMockPlugin(isBuild: boolean) {
  return viteMockServe({
    mockPath: "mockData",
    localEnabled: !isBuild,
  });
}
