import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Account from "./containers/Account";
import Search from "./components/Main/Search";
import Favorites from "./components/Main/Favorites";
import Top from "./containers/Top";
import Details from "./containers/Details";
import NotFound from "./components/Main/Notfound";
import Help from "./components/Main/Help";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./filterAndSort";

const App = () => (
    <Provider store={store}>
      <Router>  
          <Route component={Header} />
          <Switch>
            <Route exact path="/" component={Account} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/rated" component={() => <Favorites type="rating"/>} />
            <Route exact path="/shelf" component={() => <Favorites type="shelf"/>} />
            <Route exact path="/top" component={Top} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/:movieID" component={Details}  />
            <Route component={NotFound} />
          </Switch>   
          <Route component={Footer} />
      </Router>
    </Provider>
)

export default App;
