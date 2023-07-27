// import React from "react";
// import ReactDom from "react-dom";
// import App from "./App.js";

// ReactDom.render(<App />, document.getElementById("root"));

import { StrictMode } from "react";
import ReactDom from "react-dom";

import App from "./App";

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
