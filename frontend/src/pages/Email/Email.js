import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import GenericButton from "../../components/GenericButton/index.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: 450,
      display: "flex",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-basic"
          label="Partner's Email"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="filled"
        />
      </div>
      <div>
        <GenericButton label="send" className=""></GenericButton>
      </div>
    </form>
  );
}
