import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPages = repositoryName?.toLowerCase().endsWith(".github.io");
const githubPagesBase = repositoryName && !isUserOrOrgPages ? `/${repositoryName}/` : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? githubPagesBase : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
