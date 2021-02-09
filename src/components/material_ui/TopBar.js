import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "space-between",
  },
  menuButton: {
    display: "flex",
    alignItems: "center",
    width: "50%",
    justifyContent: "flex-start",
  },
  flexEnd: {
    width: "15%",
    justifyContent: "space-between",
  },
  helpButton: {
    "&:hover": {
      transform: "scale(1.6)",
      cursor: "pointer",
    },
  },
  mobile: {
    flexDirection: "column",
  },
  fullWidth: {
    width: "100%",
  },
  paddingBottom: {
    paddingBottom: "10px",
  },
});

export const StyledToolBar = ({ children }) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      {children}
    </Toolbar>
  )
}

export const TitleContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.menuButton}>
      {children}
    </div>
  )
}

export const LoginContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.menuButton}>
      {children}
    </div>
  )
}

export const StyledIconButton = ({ children, ...rest }) => (
    <IconButton
    edge="start"
    style={{ marginRight: "10px" }}
    color="inherit"
    aria-label="menu"
    {...rest}
  >
    <MenuIcon />
  </IconButton>
)