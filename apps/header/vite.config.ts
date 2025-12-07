import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "https://pwc-header.netlify.app/",
  // base:"https://localhost:5003/",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "mfe_header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Headers.tsx",
      },
      shared: {
        react: { singleton: true, strictVersion: true },
        "react-dom": { singleton: true, strictVersion: true },
        "@monorepo/ui": { singleton: true, strictVersion: false },
        "@monorepo/core": { singleton: true, strictVersion: false },
        "@monorepo/tailwind-config": { singleton: true, strictVersion: false },
        "react-router-dom": { singleton: true, requiredVersion: "6.16.0" },
      },
    }),
  ],
  build: {
    target: "esnext",
  },
  preview: {
    port: 5003,
  },
  server: {
    port: 5003, // dev 서버 포트 설정
  },
});
