import React, {useEffect} from "react"
import LandingPage from "./views/landing-page";
import GlobalStyles from "./global.styles";
import { Route, Switch } from "react-router-dom";
import DashBoard from "./components/dashboard";
import socketIOClient from "socket.io-client";
const App = () => {
  useEffect( () =>{
    const io = socketIOClient("http://localhost:3000/");
    // (function () {
      var socket = io();
      // document.getElementById('form').submit(function (e){
      //   e.preventDefault();
      //   socket.emit('chat message', document.getElementById('app').value;
      //   document.getElementById('app').value()
      //   return false;
      // });
      // socket.on('chat message', function (msg){
      //   document.getElementById('message').append(getElementById("<li>").test(msg));
      //   console.log("socket listening");
      // });
    socket.emit('connection')
    //});
  }, []);
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
