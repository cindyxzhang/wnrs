import React from "react";
import "./Instructions.css";
import GenericButton from "../components/GenericButton/index.js";

function Instructions() {
  return (
    <div className="Instructions">
      <div className="Instr-header">
        <div className="Ins-left">
          <h2>The Levels</h2>
          <ol>
            <li>
              There are 3 levels in the game. Select the number of cards per
              level you want to play.{" "}
            </li>
            <li>
              Player A draws a card, player B answers. (Optional) Both players
              answer each question.{" "}
            </li>
            <li>
              Alternate back and forth until you have gone through the cards for
              that level.{" "}
            </li>
          </ol>
        </div>
        <div className="Ins-right">
          <h2>The Cards </h2>
          <ol>
            <li>
              Wildcards will appear at random throughout each level. Complete
              the instructions. These are meant to be spontaneous.{" "}
            </li>
            <li>
              Dig Deeper cards are meant to promote transparancy if you feel
              your partner is holding back. Each player gets one per level.{" "}
            </li>
            <li>
              The Final Card is the last card of the game. Stay tuned to see
              what it is!{" "}
            </li>
          </ol>
        </div>
      </div>
      <div className="Ins-back">
        <GenericButton label="back"></GenericButton>
      </div>
    </div>
  );
}

export default Instructions;
