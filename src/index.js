import React from "react";
import ReactDOM from "react-dom";
import ThemeContext, { themes } from './context/ThemeContext'

import App from "./App";

ReactDOM.render(
  <ThemeContext.Provider value={themes}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById("root"));
