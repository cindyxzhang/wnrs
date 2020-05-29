import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Landing from "./pages/Landing/Landing";
import Instructions from "./pages/Instructions/Instructions";
import Perception from "./pages/LevelPage/Perception";
import Connection from "./pages/LevelPage/Connection";
import Reflection from "./pages/LevelPage/Reflection";
import Final from "./pages/LevelPage/Final";

ReactDOM.render(
  <React.StrictMode>
    <Final />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
