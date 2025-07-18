import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  splitting: true,
  clean: true,
});
