import React, { useEffect, useState } from "react";
import * as S from "./styles.jsx";
import { Redirect } from "react-router-dom";
const OutOfBounds = () => {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    {
      setTimeout(() => setRedirect(true), 2000);
    }
  }, []);
  return (
    <>
      {redirect ? (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      ) : (
        <S.OutOfBounds>
          <h1>404</h1>
          <h3>Being redirected...</h3>
        </S.OutOfBounds>
      )}
    </>
  );
};
export default OutOfBounds;
