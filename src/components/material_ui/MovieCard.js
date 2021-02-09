import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card as CardContainer, Paper } from "@material-ui/core/";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  link: {
    width: "100%",
    "&:link, &:visited, &:active": {
      textDecoration: "none"
    },
  },
  container: {
    display: "grid",
    margin: "10px",
    alignItems: "center",
    position: "relative",
    transition: "transform ease .2s!important",
    border: "3px solid #3f51b5",
    "&:hover": {
      boxShadow: "3px 3px 15px 0px rgba(0,0,0,0.75)",
      transform: "scale(1.05)",
    },
  },
  containerCard: {
    gridTemplateRows: "auto 50px auto 100px",
    justifyItems: "center",
    width: "260px",
  },
  containerList: {
    gridTemplateRows: "60px",
    gridTemplateColumns: "minmax(0, 40px) minmax(200px,50%) minmax(0, 1fr) 170px",
    width: "92%",
    "& > *:nth-child(3), & > *:nth-child(1)": {
      minWidth: "0",
      overflow: "hidden",
    }
  },
  containerListMobile: {
    gridTemplateColumns: "0 50% 0 50%",
  },
  nohover: {
    "&:hover": {
      transform: "scale(1)!important",
    },
  },
  title: {
    display: "flex",
    border: "3px solid #3f51b5",
    backgroundColor: "#3f51b5",
    color: "white",
    width: "100%",
    minHeight: "60px",
    justifyContent: "center",
    borderRadius: "0px",
    fontSize: "12px",
    alignItems: "center",
    "& > *:first-child": {
      fontSize: "clamp(0.6rem, 2.5vw, 0.75rem)!important",
    },
  },
});

export const CardContent = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.title}>
      {children}
    </Paper>
  )
}

export const Card = ({ list, children }) => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:500px)");
  return (
    <CardContainer
      className={
        mobile
          ? list 
            ? `${classes.containerList} ${classes.container} ${classes.nohover} ${classes.containerListMobile}`
            : `${classes.containerCard} ${classes.container} ${classes.nohover}`
          : list
            ? `${classes.containerList} ${classes.container}`
            : `${classes.containerCard} ${classes.container}`
      }
    >
      {children}
    </CardContainer>
  );
};

export const Link = ({ order, children, ...rest }) => {
  const classes = useStyles();
  return (
    <RouterLink className={classes.link} 
    style={{order: order}} 
    {...rest}>
      {children}
    </RouterLink>
  )
}

export default Card;
