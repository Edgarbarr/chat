import React from "react";
import LandingPage from "./views/landing-page";
import GlobalStyles from "./global.styles";
import { Route, Switch } from "react-router-dom";
import DashBoard from "./components/dashboard";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={DashBoard} />
      </Switch>
    </>
  );
};

export default App;
