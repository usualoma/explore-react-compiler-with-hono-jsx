import pages from "@hono/vite-cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import honox from "honox/vite";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";
import path from "path";

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    honox({ devServer: { adapter } }),
    pages(),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"],
        plugins: [
          [
            "babel-plugin-react-compiler",
            {
              runtimeModule: path.resolve(
                __dirname,
                "app/react-compiler-runtime.ts"
              ),
            },
          ],
        ],
      },
    }),
  ],
});
