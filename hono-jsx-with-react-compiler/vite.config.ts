import pages from "@hono/vite-cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import honox from "honox/vite";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

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
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    {
      name: "hono-jsx-compiler-runtime-transform",
      transform: (src) => {
        return {
          code: src.replace(
            `import { c as _c } from "react/compiler-runtime"`,
            `
import { useState as _hono_jsx_useState } from "hono/jsx";
const $empty = Symbol.for("react.memo_cache_sentinel");

function _c(size) {
  return _hono_jsx_useState(() => {
    const $ = new Array(size);
    for (let ii = 0; ii < size; ii++) {
      $[ii] = $empty;
    }
    $[$empty] = true;
    return $;
  })[0];
}
`
          ),
        };
      },
    },
  ],
});
