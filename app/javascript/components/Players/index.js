import React from "react";
import GenericButton from "components/GenericButton/index.js";
import "./styles.css";

function Players() {
  return (
    <div className="Players">
      <h1 className="heading">
        Choose how many cards per level you want to play.
      </h1>
      <div className="buttons">
        <GenericButton label="5" />
      </div>
      <div className="buttons">
        <GenericButton label="10" />
      </div>
      <div className="buttons">
        <GenericButton label="15" />
      </div>
    </div>
  );
}

export default Players;
