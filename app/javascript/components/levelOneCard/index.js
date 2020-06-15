import React from "react";
import "./styles.css";
import GameCards from "components/GameCards/index.js";

function LevelOneCard() {
  return (
    <div className="Level1Card">
      <GameCards label="what was your first impression of me?" />
    </div>
  );
}

export default LevelOneCard;
