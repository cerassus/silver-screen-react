import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  searchButton: {
    height: "40px", 
    marginLeft: "10px",
    width: "30%",
  },
  searchButtonSmall: {
    height: "40px", 
    marginLeft: "10px",
    width: "10%",
  },
  inputMobile: {
    width: "100%",
    height: "40px",
    marginBottom: "15px",
  },
});

export default ({ children, click, database_type }) => {
  const mobile = useMediaQuery('(max-width:650px)');
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={click}
      className={mobile ? classes.inputMobile : database_type === "API" ? classes.searchButton : classes.searchButtonSmall}
    >
      {children}
    </Button>
  );
};
