import React from "react";
import "./styles.css";
import GenericButton from "components/GenericButton/index.js";

function Landing() {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <h1>we're strangers</h1>
        <p>
          we're strangers is a game with a mission: to make everyone strangers.
          connection is overrated. join us in our effort to create absolutely
          meaningless relationships. our mission can be witnessed in its
          spontanous form on <em>'Too Hot to Handle.'</em>
        </p>
        <GenericButton label="instructions" />
        <GenericButton label="new game" />
        <GenericButton label="join game" />
      </header>
    </div>
  );
}

export default Landing;
