import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import GenericButton from "components/GenericButton/index.js";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
<<<<<<< Updated upstream
    width: 500 + theme.spacing(3) * 2,
=======
    width: 600 + theme.spacing(3) * 2,
>>>>>>> Stashed changes
  },
  margin: {
    height: theme.spacing(3),
    display: "flex",
  },
}));

<<<<<<< Updated upstream
const CustomSlider = withStyles({
  root: {
    color: "#E27D6B",
    height: 10,
    marginBottom: 50,
=======
const PrettoSlider = withStyles({
  root: {
    color: "#E27D6B",
    height: 10,
>>>>>>> Stashed changes
  },
  thumb: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    border: "13px solid #B65854",
    marginTop: -8,
    marginLeft: -8,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 8px)",
    top: "calc(-250% + 10px)",
    fontSize: "1.0rem",
<<<<<<< Updated upstream
    // "& div.PrivateValueLabel-circle-12": {
    //   height: 100,
    //   width: 100,
    // },
=======
>>>>>>> Stashed changes
  },
  track: {
    height: 30,
    borderRadius: "15px 0px 0px 15px",
    backgroundImage: "linear-gradient(to right, #E27D6B , #B65854)",
  },
  rail: {
    height: 30,
    borderRadius: 15,
  },
})(Slider);

function Players() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="layout">
      <h1>
        For each level, how many questions does each player want to answer?
      </h1>
      <div className={classes.root}>
<<<<<<< Updated upstream
        <CustomSlider
=======
        <PrettoSlider
>>>>>>> Stashed changes
          valueLabelDisplay="auto"
          aria-labelledby="track-inverted-slider"
          defaultValue={5}
          max={10}
          min={3}
        />
      </div>
      <div>
        <GenericButton label="play" className=""></GenericButton>
      </div>
    </div>
  );
}

export default Players;

// function Players() {
//   return (
//     <div className="Players">
//       <h1 className="heading">
//         Choose how many cards per level you want to play.
//       </h1>
//       <div className="buttons">
//         <GenericButton label="5" />
//       </div>
//       <div className="buttons">
//         <GenericButton label="10" />
//       </div>
//       <div className="buttons">
//         <GenericButton label="15" />
//       </div>
//     </div>
//   );
// }

// export default Players;
