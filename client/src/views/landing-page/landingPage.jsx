import React, { useState, useEffect } from "react";
import * as S from "./styles";
import SignIn from "../../components/sign-in/signIn.jsx";
import SignUp from "../../components/sign-up/signUp.jsx";

const LandingPage = () => {
  return (
    <S.Home>
      <div className="aside">
        <SignUp />
      </div>
      <div className="main"></div>
    </S.Home>
  );
};
export default LandingPage;
