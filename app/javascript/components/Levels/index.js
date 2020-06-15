import React from "react";
import "./styles.css";

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
