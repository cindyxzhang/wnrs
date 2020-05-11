import React from "react";
import "./Landing.css";
import GenericButton from "../components/GenericButton/index.js";

function Landing() {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <h1>we're strangers</h1>
        <GenericButton label="start"></GenericButton>
        <GenericButton label="instructions"></GenericButton>
      </header>
    </div>
  );
}

export default Landing;
