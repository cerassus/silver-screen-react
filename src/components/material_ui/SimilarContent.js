import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  movieDetailSimilarContainer: {
    display: "flex",
    height: "240px",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "25px",
    overflow: "hidden",
  },
});

const SimilarContent = ({ children }) => {
  const classes = useStyles();
  return (
      <Paper className={classes.movieDetailSimilarContainer}>
        {children}
      </Paper>
  )
}

export default SimilarContent;
