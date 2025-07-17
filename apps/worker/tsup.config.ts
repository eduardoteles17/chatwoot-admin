import {defineConfig} from "tsup";
import defaultConfig from "../../tsup.config"

export default defineConfig({
  ...defaultConfig,
  format: "cjs",
  platform: "node",
  dts: false
})
