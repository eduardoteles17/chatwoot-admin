import {defineConfig} from "tsup";
import defaultConfig from "../../tsup.config"
import packageJson from "./package.json"

export default defineConfig({
  ...defaultConfig,
  format: "cjs",
  platform: "node",
  dts: false,
  noExternal: [...Object.keys(packageJson.dependencies)] // Inclui todas as dependencies
})
