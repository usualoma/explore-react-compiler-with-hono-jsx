import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
const App = lazy(() => import("./App.tsx"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1>React with React Compiler</h1>
    <App />
  </React.StrictMode>
);
