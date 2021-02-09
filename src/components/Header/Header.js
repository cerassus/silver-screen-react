import React, { useState, Fragment } from "react";
import TopBar from "../../containers/TopBar";
import Navigation from "./Navigation";

const Header = () => {
  const [toggleTabs, changeToggle] = useState(true);
  return (
    <Fragment>
      <TopBar click={() => changeToggle((toggleTabs) => !toggleTabs)} />
      <Navigation toggleTabs={toggleTabs} />
    </Fragment>
  );
};

export default Header;
