import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  searchList: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    flexFlow: "row wrap",
    margin: "2px 0",
    padding: "20px 0",
    textAlign: "center",
  },
});

export default ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.searchList}>
      {children}
    </div>
  )
};
