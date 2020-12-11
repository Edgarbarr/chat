import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  float: right;
  background-color: #6c8da9;

  .chat-input-container {
    display: flex;
    flex-direction: row nowrap;
  }
  .send-icon {
    height: 75%;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const ChatBox = styled.ul`
  width: 100%;
  height: 90%;
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  padding: 25px;
`;

export const IncomingMessage = styled.li`
  background-color: darkgoldenrod;
  width: fit-content;
  height: fit-content;
  align-self: flex-end;
  min-height: 50px;
  padding: 10px;
  border-radius: 15px 5px 15px 20px;
  margin: 3px 0;
`;

export const OutgoingMessage = styled.li`
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
  width: 100%;
`;

export const SendButton = styled.button`
  height: 100%;
  display: flex;
  justify-content: center;
`;
