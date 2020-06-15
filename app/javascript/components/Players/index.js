import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import GenericButton from "components/GenericButton/index.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
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
      <div className={classes.root}>
        <Typography gutterBottom>pretto.fr</Typography>
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-labelledby="track-inverted-slider"
          defaultValue={5}
          max={10}
          min={3}
        />
      </div>
    </div>
  );
}

export default Players;

// function Players() {
//     return (
//         <div className="Players">
//             <h1 className='heading'>Choose how many cards per level you want to play.</h1>
//             <div className='buttons'>
//                 <GenericButton label='5' />
//             </div>
//             <div className='buttons'>
//                 <GenericButton label='10' />
//             </div>
//             <div className='buttons'>
//                 <GenericButton label='15' />
//             </div>
//         </div >
//     );
// }

// export default Players;
