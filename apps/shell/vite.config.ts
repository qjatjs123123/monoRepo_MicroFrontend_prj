import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        mfe_header: {
          type: "module",
          name: "mfe_header",
          entry: "http://localhost:5001/remoteEntry.js",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
