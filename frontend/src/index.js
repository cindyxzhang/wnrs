import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./pages/Landing.css";
import Landing from "./pages/Landing";
import Instructions from "./pages/Instructions";
import Perception from "./pages/Levels/Perception";
import Connection from "./pages/Levels/Connection";
import Reflection from "./pages/Levels/Reflection";

ReactDOM.render(
  <React.StrictMode>
    <Perception />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
