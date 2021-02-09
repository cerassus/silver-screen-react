import React, { useState } from "react";
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';

const useStyles = makeStyles({
  favoritesFormControl: {
    marginTop: "-7px", 
    marginLeft: "40px", 
    width: "15%", 
  },
  inputMobile: {
    width: "100%",
    height: "40px",
    marginBottom: "15px",
  },
  icon: {
    fontSize: "40px",
    borderRadius: "5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#FFF",
    }
  },
  iconChecked: {
    fontSize: "40px",
    borderRadius: "5px",
    backgroundColor: "#3f51b5",
    color: "#FFF",
  },
  panel: {
    display: "inline-flex", 
    marginLeft: "10px", 
    width: "100px", 
    justifyContent: "space-between"
  }
});

export const IconList = ({ checked }) => {
  const classes = useStyles();
  return (
    <label htmlFor="lists">
      <ViewListIcon 
        className={checked === "lists" ? classes.iconChecked : classes.icon}
        color="primary" />
      <input defaultChecked={checked === "lists"} name="view-type" value="lists" id="lists" type="radio" style={{display: "none"}}/>
    </label>
  )
}

export const IconCards = ({ checked }) => {
  const classes = useStyles();
  return (
    <label htmlFor="cards">
      <ViewComfyIcon 
        className={checked === "cards" ? classes.iconChecked : classes.icon}
        color="primary" />
      <input defaultChecked={checked === "cards"} name="view-type" value="cards" id="cards" type="radio" style={{display: "none"}}/>
    </label>
  )
}

export const IconPanel = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.panel} {...props} >
      {children}
    </div>
  )
}

export default ({ children }) => {
  const mobile = useMediaQuery('(max-width:650px)');
  const classes = useStyles();
  return (
    <FormControl className={mobile ? classes.inputMobile : classes.favoritesFormControl}>
      {children}
    </FormControl>
  );
};
