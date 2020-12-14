import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../UserContext";

const ProtectedRoute = ({ component: Component, ...otherProps }) => {
  const [user] = useContext(UserContext);

  return (
    <Route
      {...otherProps}
      render={(props) =>
        !user.isLoading && user.username === null ? (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectedRoute;
