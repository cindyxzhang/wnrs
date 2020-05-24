import React from "react";
import "./LevelsLayout.css";

const LevelLayout = ({ title, color }) => {
  return (
    <div className={color}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default LevelLayout;
