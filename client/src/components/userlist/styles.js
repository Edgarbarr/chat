import styled from "styled-components";

export const UserListContainer = styled.div.attrs((props) => ({
  id: props.id,
}))`
  width: 100%;
  height: 100%;
  max-width: 500px;
  float: right;
  background-color: #536f86;
  opacity: 1;
  transition: width 0.2s ease-in, opacity 0.2s ease-in;
  @media screen and (max-width: 500px) {
    z-index: 3;
    position: absolute;
    padding-top: 200px;
  }

  .current-user-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    overflow: auto;
  }

  @media only screen and (max-width: 500px) {
    width: 0;
    opacity: 0;
  }
`;
export const UserActionBox = styled.ul`
  width: 100%;
  height: 50%;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  padding: 25px;
  overflow: auto;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const CurrentUserBox = styled.ul`
  width: 100%;
  height: 30%;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  padding: 25px;
  overflow: auto;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const UserEntered = styled.li`
  background-color: darkgoldenrod;
  width: fit-content;
  height: fit-content;
  align-self: flex-end;
  min-height: 50px;
  padding: 10px;
  border-radius: 15px 5px 15px 20px;
  margin: 3px 0;
`;

export const UserExited = styled.li`
  display: flex;
  background-color: cadetblue;
  width: fit-content;
  height: fit-content;
  min-height: 50px;
  justify-self: flex-start;
  padding: 10px;
  border-radius: 5px 20px 15px 15px;
  justify-content: center;
  margin: 3px 0;
`;

export const UserInChat = styled.li`
  background-color: darkgoldenrod;
  width: fit-content;
  height: fit-content;
  align-self: flex-end;
  min-height: 20px;
  padding: 10px;
  border-radius: 15px 5px 15px 20px;
  margin: 3px 0;
`;
