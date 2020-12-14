import React, { useEffect, useContext } from "react";
import LandingPage from "./views/landing-page";
import GlobalStyles from "./global.styles";
import { Route, Switch } from "react-router-dom";
import DashBoard from "./views/dashboard";
import socketIOClient from "socket.io-client";
const io = socketIOClient("http://localhost:3000/");
import axios from "axios";
import ProtectedRoute from "./components/protectedRoute.jsx";
import { UserContext } from "./UserContext";
import { useHistory } from "react-router-dom";
import Confirmation from "./components/confirmation";
import ChangePassword from "./views/changePassword";
import SendChangePassword from "./views/sendChangePassword/sendChangePassword.jsx";
import OutOfBounds from "./views/out-of-bounds";
const App = () => {
  const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("user"));
    if (token) {
      axios
        .post("/user/authenticate", {
          token,
        })
        .then((response) => {
          const username = response.data;
          setUser({ username, isLoading: false });
          history.push("/dashboard");
        })
        .catch((err) => {
          setUser({ username: null, isLoading: false });
          localStorage.removeItem("user");
          console.log(err);
        });
    } else {
      setUser({ username: null, isLoading: false });
    }
  }, []);
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <ProtectedRoute exact path="/dashboard" component={DashBoard} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/change-password" component={SendChangePassword} />
        <Route
          exact
          path="/change-password/:token"
          component={ChangePassword}
        />
        <Route component={OutOfBounds} />
      </Switch>
    </>
  );
};

export default App;
