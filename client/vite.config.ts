import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const proxyTarget = env.VITE_PROXY_TARGET || env.VITE_API_URL || "http://localhost:5000";

  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      proxy: {
        "/api": {
          target: proxyTarget,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
