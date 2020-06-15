import React from "react";
import "./styles.css";
import GenericButton from "components/GenericButton/index.js";

function Landing() {
  return (
    <div className="Landing">
      <div className="Landing-header">
        <h1>we're strangers</h1>
        <p>
          we're strangers is a game with a mission: to make everyone strangers.
          connection is overrated. join us in our effort to create absolutely
          meaningless relationships. our mission can be witnessed in its
          spontanous form on <em>'Too Hot to Handle.'</em>
        </p>
        <GenericButton label="instructions"></GenericButton>
        <GenericButton label="new game"></GenericButton>
        <GenericButton label="join game"></GenericButton>
      </div>
    </div>
  );
}

export default Landing;
