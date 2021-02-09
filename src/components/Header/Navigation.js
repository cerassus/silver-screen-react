import React, { useEffect, useState } from "react";
import Tabs, { SingleTab as Tab } from "../material_ui/NavigationTabs";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const tabs = [
  {
    label: "Search for movies",
    url: "/search",
  },
  {
    label: "Your Rated movies",
    url: "/rated",
  },
  {
    label: "Your Shelf",
    url: "/shelf",
  },
  {
    label: "Ranking",
    url: "/top",
  },
  {
    label: "Help",
    url: "/help",
  },
  {
    label: "",
    url: "/",
  },
];

const Navigation = ({ toggleTabs, location }) => {
  const [value, setValue] = useState(5);
  const [visibleIndicator, setIndicatorVisibility] = useState(false);
  useEffect(() => {
    (location.pathname === "/search" ||
    location.pathname === "/rated" ||
    location.pathname === "/shelf" ||
    location.pathname === "/top"  || 
    location.pathname === "/help" )
      ? setIndicatorVisibility(true)
      : setIndicatorVisibility(false)
  },[location.pathname])
  useEffect(() => {
    !visibleIndicator 
      ? setValue(5)
      : setValue(tabs.map(x => x = x.url).indexOf(location.pathname))
  },[visibleIndicator])
  return (
    <Tabs
      toggleTabs={toggleTabs}
      visibleIndicator={visibleIndicator}
      value={value}
      onChange={(e, x) => setValue(x)}
    >
      {tabs.map((tab, i) => (
        <Tab
          key={i + 800}
          label={tab.label}
          component={Link}
          to={tab.url}
        />
      ))}
    </Tabs>
  );
};

export default withRouter(Navigation);
