import { createRoute } from "honox/factory";
import App from "../islands/app";

export default createRoute((c) => {
  return c.render(
    <>
      <h1>React Compiler compatibility test for Honox</h1>
      <App />
    </>
  );
});
