import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import GenericButton from "../../components/GenericButton/index.js";
import "./Email.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& div.MuiTextField-root": {
      margin: theme.spacing(5),
      width: "50ch",
      display: "flex",
    },
    "& div.MuiInputBase-root": {
      borderRadius: "25px",
    },
    "& div.MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "& div.MuiFilledInput-underline:after": {
      borderBottom: "none",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  return (
    // need div tags that enclose entire return statement
    <div className="layout">
      <h1>pls werk</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <div className="partner">
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
      </form>
      <div>
        <GenericButton label="send" className=""></GenericButton>
      </div>
    </div>
  );
}
