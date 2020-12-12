import React, { useState } from "react";
import Nav from "../navigation";
import * as S from "./styles";
import Chat from "../chat";
import UserList from "../userlist";

const Dashboard = () => {
  return (
    <S.Dashboard>
      <Nav />
      {/* <UserList /> */}
      <div className="main-div">
        <Chat />
      </div>
    </S.Dashboard>
  );
};
export default Dashboard;
