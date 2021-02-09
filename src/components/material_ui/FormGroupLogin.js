import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formGroup: {
    width: "min(400px, 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
});

export default ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.formGroup}>
      {children}
    </div>
  )
};
