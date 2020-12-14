import React, { useState } from "react";
import Nav from "../navigation";
import * as S from "./styles";
import Chat from "../chat";
const Dashboard = (props) => {
  return (
    <S.Dashboard>
      <Nav socket={props.socket}/>
      <div className="main-div">
        <Chat socket={props.socket}/>
      </div>
    </S.Dashboard>
  );
};
export default Dashboard;
