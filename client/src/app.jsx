import React, { useEffect } from "react";
import LandingPage from "./views/landing-page";
import GlobalStyles from "./global.styles";
import { Route, Switch } from "react-router-dom";
import DashBoard from "./components/dashboard";
import socketIOClient from "socket.io-client";
const io = socketIOClient("http://localhost:3000/");
const App = () => {
  useEffect(() => {}, []);
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" component={DashBoard} />
      </Switch>
    </>
  );
};

export default App;
