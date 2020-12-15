import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  /* max-width: 500px; */
  float: right;
  background-color: #6c8da9;

  .chat-input-container {
    display: flex;
    flex-direction: row nowrap;
    position: absolute;
    bottom: 10px;
    width: 100%;
  }
  .send-icon {
    height: 40%;
    position: relative;
    right: 10%;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    min-width: 100%;
  }
`;
export const ChatBox = styled.ul`
  width: 100%;
  height: calc(100% - 50px);
  list-style: none;
  flex-flow: column wrap;
  padding: 25px;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
  display: block;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const IncomingMessage = styled.li`
  background-color: darkgoldenrod;
  width: fit-content;
  height: fit-content;
  align-self: flex-end;
  padding: 10px;
  border-radius: 15px 5px 15px 20px;
  margin: 3px 0;
  flex-flow: column wrap;
  .username {
    font-size: 3px;
  }
`;

export const OutgoingMessage = styled.li`
  display: flex;
  background-color: cadetblue;
  width: fit-content;
  height: fit-content;
  justify-self: flex-start;
  padding: 10px;
  border-radius: 5px 20px 15px 15px;
  margin: 3px 0;
  flex-flow: column wrap;
  .username {
    font-size: 10px;
    float: right;
    display: flex;
    align-self: flex-end;
  }
`;

export const ChatInput = styled.input`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #b68f40;
  width: 85%;
  border-radius: 20px 0 0 20px;
  margin-left: 5px;
  outline: none;
  border: none;
  height: 40px;
  padding-left: 13px;
`;

export const SendButton = styled.button`
  border-radius: 0 20px 20px 0;
  margin-right: 5px;
  border: none;
  outline: none;
  width: 15%;
  height: 40px;
`;
