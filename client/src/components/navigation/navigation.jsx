import React, { useState } from "react";
import * as S from "./styles";
import { Redirect } from "react-router-dom";

const Nav = (props) => {
  const [redirect, setRedirect] = useState(false);
  const handleSignOut = () => {
    let socket = props.socket;
    socket.emit("Message", {message: "this is nav"})
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
