import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    css: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      "@api": path.resolve(import.meta.dirname, "./src/api"),
      "@assets": path.resolve(import.meta.dirname, "./src/assets"),
      "@components": path.resolve(import.meta.dirname, "./src/components"),
      "@config": path.resolve(import.meta.dirname, "./src/config"),
      "@constants": path.resolve(import.meta.dirname, "./src/constants"),
      "@features": path.resolve(import.meta.dirname, "./src/features"),
      "@hooks": path.resolve(import.meta.dirname, "./src/hooks"),
      "@layouts": path.resolve(import.meta.dirname, "./src/layouts"),
      "@lib": path.resolve(import.meta.dirname, "./src/lib"),
      "@middleware": path.resolve(import.meta.dirname, "./src/middleware"),
      "@services": path.resolve(import.meta.dirname, "./src/services"),
      "@state": path.resolve(import.meta.dirname, "./src/state"),
      "@styles": path.resolve(import.meta.dirname, "./src/styles"),
      "@test-utils": path.resolve(import.meta.dirname, "./src/test-utils"),
      "@types": path.resolve(import.meta.dirname, "./src/types"),
      "@utils": path.resolve(import.meta.dirname, "./src/utils"),
    },
  },
});
