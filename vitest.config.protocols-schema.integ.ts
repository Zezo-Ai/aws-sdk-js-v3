import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*/node_modules/**/*.spec.ts", "**/*.{integ,e2e,browser}.spec.ts"],
    include: ["private/**-schema/**/*.spec.ts"],
    environment: "node",
    globals: true,
  },
});
