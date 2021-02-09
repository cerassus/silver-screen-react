import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from './Typography';

const useStyles = makeStyles({
  paperField: {
    width: "100%",
    minHeight: "70vh",
    margin: "1px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  movieDetailContainer: {
    margin: "1px auto",
    display: "flex",
    alignItems: "flex-start",
    padding: "30px 20px",
    flexWrap: "wrap",
  },
  formStandard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
    width: "100%",
    padding: "20px",
    margin: "1px auto",
    height: "100px",
  },
  formMobile: {
      padding: "20px 20px 10px",
      flexWrap: "wrap",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
  },
  movieDetailTitle: {
    borderBottom: "3px solid #3f51b5", 
    padding: "20px", 
    textAlign: "center", 
    marginTop: "5px", 
    color: "#3f51b5",
  },
});

export default ({ children, content, loader }) => {
  const mobile = useMediaQuery('(max-width:650px)');
  const classes = useStyles();
  return (
    <Paper className={
      content 
        ? classes.paperField 
        : mobile 
          ? classes.formMobile 
          : classes.formStandard
    } >
    {
      loader 
        ? content 
          ? <CircularProgress /> 
          : <Typography variant="h5" style={{marginTop: mobile ? "-5px" : "15px"}}>Loading</Typography> 
        : children
    }
    </Paper>
  )
};
