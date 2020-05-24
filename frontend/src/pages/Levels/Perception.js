import React from "react";
import LevelLayout from "../../components/Levels/LevelLayout.js";

class Perception extends React.Component {
  render() {
    return (
      <div className={"perception"}>
        {/* how to line break between level 1: and perception?  */}
        <LevelLayout title="level 1: perception"></LevelLayout>
      </div>
    );
  }
}

export default Perception;
