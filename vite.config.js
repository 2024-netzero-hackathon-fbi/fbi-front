import react from "@vitejs/plugin-react";
import fs from "fs";
import { ConfigEnv, defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const isDevelop = process.env.VITE_DEVELOP === "true";

  return defineConfig({
    plugins: [react()],
    server: {
      https: isDevelop
        ? {
            key: fs.readFileSync("localhost-key.pem"),
            cert: fs.readFileSync("localhost.pem"),
          }
        : false,
    },
  });
};