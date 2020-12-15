import React, { useState, useEffect } from "react";
import * as S from "./styles";

const UserList = ({ socket }) => {
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    socket.on("admin-userlist-show", (displayName) => {
      setActiveUsers((oldState) => [...oldState, displayName]);
    });
  }, []);

  return (
    <S.UserListContainer id="user-list">
      Chat User Activity:
      <S.UserActionBox>
        {activeUsers.map((singleUser) => {
          return (
            <S.UserEntered>
              {`${singleUser.toUpperCase()} has entered the arena!!`}
            </S.UserEntered>
          );
        })}
      </S.UserActionBox>
      Current users in chat:
      <S.CurrentUserBox>
        <S.UserInChat>Bob</S.UserInChat>
        {activeUsers.map((singleUser) => {
          return <S.UserInChat>{`${singleUser.toUpperCase()}`}</S.UserInChat>;
        })}
      </S.CurrentUserBox>
    </S.UserListContainer>
  );
};
export default UserList;
