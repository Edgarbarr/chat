import React, { useState } from "react";
import * as S from "./styles";
const Chat = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [chatInputField, setChatInputField] = useState("");
  const [clientID, setClientID] = useState("");
  const onClickHandler = () => {
    socket.emit("Message", { message: chatInputField, id: clientID });
  };
  const onChangeHandler = (event) => {
    setChatInputField(event.currentTarget.value);
  };
  socket.on("Message", (message) => {
    setMessages([...messages, message]);
    socket.on("Id", (clientID) => {
      setClientID(clientID);
      console.log("hello");
    });
    console.log(message);
    console.log(messages);
    console.log("inside socket on");
  });
  socket.on("Id", (clientID) => {
    setClientID(clientID);
    console.log("hello");
  });
  return (
    <S.ChatContainer>
      <S.ChatBox>
        {messages.map((msg) => {
          console.log("message id =", msg.id, "client id = ", clientID);
          {
            msg.id === clientID;
            return <S.OutgoingMessage>{msg.message}</S.OutgoingMessage>;
          }
          msg.id !== clientID;
          return <S.IncomingMessage>{msg.message}</S.IncomingMessage>;
        })}
      </S.ChatBox>
      <div className="chat-input-container">
        <S.ChatInput
          value={chatInputField}
          onChange={onChangeHandler}
          id="chat-input"
          type="text"
        ></S.ChatInput>
        <S.SendButton onClick={onClickHandler}>
          <img className="send-icon" src="/icons/paper-plane-regular.svg" />
        </S.SendButton>
      </div>
    </S.ChatContainer>
  );
};
export default Chat;
