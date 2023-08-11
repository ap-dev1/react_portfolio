import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./App.sass";
import ReactGA from "react-ga4";
ReactGA.initialize("G-VNGX57MZ2M");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
