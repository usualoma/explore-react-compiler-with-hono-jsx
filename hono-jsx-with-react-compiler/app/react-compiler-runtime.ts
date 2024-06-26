import { useState } from "hono/jsx";
const $empty = Symbol.for("react.memo_cache_sentinel");

export function c(size: number) {
  return useState(() => {
    const $ = new Array(size);
    for (let ii = 0; ii < size; ii++) {
      $[ii] = $empty;
    }
    // @ts-ignore
    $[$empty] = true;
    return $;
  })[0];
}
