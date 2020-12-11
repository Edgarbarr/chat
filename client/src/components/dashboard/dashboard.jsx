import React, { useState } from "react";
import Nav from "../navigation";
import * as S from "./styles";
import Chat from "../chat";
const Dashboard = () => {
  return (
    <S.Dashboard>
      <Nav />
      <div className="main-div">
        <Chat />
      </div>
    </S.Dashboard>
  );
};
export default Dashboard;
