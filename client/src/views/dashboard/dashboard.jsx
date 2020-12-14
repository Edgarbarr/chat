import React, { useState, useContext } from "react";
import Nav from "../../components/navigation";
import * as S from "./styles";
import Chat from "../../components/chat";
import UserList from "../../components/userlist";
import { UserContext } from "../../UserContext";
import Spinner from "../../components/spinner";
const Dashboard = () => {
  const [user] = useContext(UserContext);
  const { isLoading } = user;
  return (
    <S.Dashboard>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Nav />
          <UserList />
          <div className="main-div">
            <Chat />
          </div>
        </>
      )}
    </S.Dashboard>
  );
};
export default Dashboard;
