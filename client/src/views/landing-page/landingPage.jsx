import React, { useState } from "react";
import * as S from "./styles";
import SignIn from "../../components/sign-in/signIn.jsx";
import SignUp from "../../components/sign-up/signUp.jsx";

const LandingPage = () => {
  const [type, setType] = useState("Sign In");

  const onClickHandler = () => {
    if (type === "Sign In") {
      setType("Sign Up");
    } else {
      setType("Sign In");
    }
  };
  return (
    <S.Home>
      <div className="aside">
        {type === "Sign In" ? <SignIn /> : <SignUp />}
        <button onClick={onClickHandler}>
          <span>{type === "Sign In" ? "Sign Up" : "Sign In"}</span>
        </button>
      </div>
      <div className="main">
        <h1>Kelson & Friends Chat App</h1>
      </div>
    </S.Home>
  );
};
export default LandingPage;
