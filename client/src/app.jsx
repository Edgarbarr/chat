import React, { useEffect } from "react";
import LandingPage from "./views/landing-page";
import GlobalStyles from "./global.styles";
import { Route, Switch } from "react-router-dom";
import DashBoard from "./components/dashboard";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3000/");


const App = () => {
  useEffect(() => {}, []);
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" component= {()=><DashBoard socket={socket}/>} />
      </Switch>
    </>
  );
};

export default App;
