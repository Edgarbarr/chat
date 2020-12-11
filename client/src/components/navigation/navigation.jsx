import React, { useState } from "react";
import * as S from "./styles";
import { Redirect } from "react-router-dom";

const Nav = () => {
  const [redirect, setRedirect] = useState(false);
  const handleSignOut = () => {
    setRedirect(true);
  };
  return (
    <S.Nav>
      {redirect ? <Redirect to="/" /> : null}
      <ul>
        <li>
          <button onClick={handleSignOut}>
            <img src="/icons/door-open-solid.svg" />
          </button>
        </li>
        <li>
          <button onClick={handleSignOut}>
            <img src="/icons/user-cog-solid.svg" />
          </button>
        </li>
        <li>
          <button onClick={handleSignOut}>
            <img src="/icons/sign-out-alt-solid.svg" />
          </button>
        </li>
      </ul>
    </S.Nav>
  );
};
export default Nav;
