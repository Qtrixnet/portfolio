import "./vendor/normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>,
  /* </React.StrictMode>, */ 
  document.getElementById("root")
);