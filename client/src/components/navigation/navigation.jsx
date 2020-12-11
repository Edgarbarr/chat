import React from "react";
import * as S from "./styles";
const Nav = ({ isLoading }) => {
  const handleSignOut = () => {
    console.log("you logged out");
  };
  return (
    <S.Nav>
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
