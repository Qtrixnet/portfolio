import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";
import './vendor/normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);