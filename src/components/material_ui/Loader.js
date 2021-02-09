import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";


const useStyles = makeStyles({
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});

export default () => {
  const classes = useStyles();
  return <CircularProgress className={classes.loader} />
};
