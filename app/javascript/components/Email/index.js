import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import GenericButton from "components/GenericButton/index.js";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& div.MuiTextField-root": {
      margin: theme.spacing(5),
      width: "40ch",
      display: "flex",
    },
    "& div.MuiInputBase-root": {
      borderRadius: "25px",
      fontSize: "20px",
    },
    "& div.MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "& div.MuiFilledInput-underline:after": {
      borderBottom: "none",
    },
    "& label.Mui-focused": {
      color: "#BB5244",
    },
    "& label": {
      fontSize: "21px",
      color: "#282828",
    },
  },
}));

function Email() {
  const classes = useStyles();
  return (
    // need div tags that enclose entire return statement
    <div className="container">
      <div className="layout">
        <h2>
          exchange emails with your partner and write them a message. they will
          recieve it one hour after you click send.{" "}
        </h2>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="partner">
            <TextField
              id="outlined-basic"
              label="partner's email"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="message"
              multiline
              rows={9}
              variant="filled"
            />
          </div>
        </form>
        <div>
          <GenericButton label="send" className=""></GenericButton>
        </div>
      </div>
    </div>
  );
}

export default Email;
