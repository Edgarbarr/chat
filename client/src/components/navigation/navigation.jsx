import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { Redirect } from "react-router-dom";

const Nav = (props) => {
  const [redirect, setRedirect] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setRedirect(true);
    let socket = props.socket;
    socket.emit("Message", { message: "this is nav" });
  };
  const handleMoreInfo = (e) => {
    const userList = document.getElementById("user-list");

    if (userList.offsetWidth) {
      userList.setAttribute("style", "width: 0; opacity: 0;");
      e.currentTarget.parentElement.classList.remove("active");
    } else {
      userList.setAttribute("style", "opacity: 1; width:100%;");
      e.currentTarget.parentElement.classList.add("active");
    }
  };
  return (
    <S.Nav>
      {redirect ? <Redirect to="/" /> : null}
      <ul>
        <li className={window.innerWidth > 425 ? "active" : ""}>
          <button onClick={handleMoreInfo}>
            <img src="/icons/info-circle-solid.svg" />
          </button>
        </li>
        <li>
          <button>
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
