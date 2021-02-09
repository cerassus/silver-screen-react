import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  searchTextField: {
    width: "70%",
  },
  favoritesTextField: {
    width: "35%", 
  },
  fixedHeight: {
    height: "40px",
  },
  inputMobile: {
    width: "100%",
    height: "40px",
    marginBottom: "25px",
  },
});

export default ({ database_type, keyUp, change, helper }) => {
  const mobile = useMediaQuery('(max-width:650px)');
  const classes = useStyles();
  return (
    <TextField
      size="small"
      label="Search for movies"
      variant="outlined"
      onKeyUp={keyUp}
      onChange={change}
      error={Boolean(helper)}
      helperText={helper}
      className={mobile ? classes.inputMobile : database_type === "API"
        ? `${classes.fixedHeight} ${classes.searchTextField}`
        : `${classes.fixedHeight} ${classes.favoritesTextField}`}
    / >
  );
};
