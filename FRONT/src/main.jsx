import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles";
import { App } from "./routes/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
