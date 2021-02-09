import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  tab: {
    minWidth: "18%",
    fontWeight: "600",
    "&:last-child": {
      display: "none",
    },
  },
  menuVisible: {
    height: "48px",
  },
  menuVisibleMobile: {
    height: "240px",
  },
  menuHidden: {
    height: "0px",
  },
  root: {
    minHeight: "0px",
  },
  indicatorBig: {
    width: "8px",
  },
  indicatorHidden: {
    visibility: "hidden",
  }
});

export const SingleTab = ({...props}) => {
  const classes = useStyles();
  return (
    <Tab
      {...props}
      className={classes.tab}
  />
  )
}

export const LoginTabs = ({ children, ...rest }) => (
  <Tabs
    {...rest}
    indicatorColor="primary"
    textColor="primary"
    variant="fullWidth"
    aria-label="full width tabs example"
    style={{backgroundColor: "white"}}
  >
    {children}
  </Tabs>
)

const StyledTabs = ({ toggleTabs, visibleIndicator, children, ...rest }) => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:700px)");
  return (
    <Tabs
      classes={{
        flexContainer: toggleTabs ? (
            mobile ? classes.menuVisibleMobile : classes.menuVisible
        ) : classes.menuHidden,
        root: classes.root,
        indicator: visibleIndicator ? mobile && classes.indicatorBig : classes.indicatorHidden,
      }}
      indicatorColor="primary"
      textColor="primary"
      orientation={mobile ? "vertical" : "horizontal"}
      centered={true}
      variant={mobile ? "fullWidth" : "standard"}
      {...rest}
    >
      {children}
    </Tabs>
  )
}

export default StyledTabs
