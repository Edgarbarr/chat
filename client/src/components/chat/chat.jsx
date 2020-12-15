import React, { useState, useEffect, useContext } from "react";
import * as S from "./styles";
import UserContext from "../../UserContext";

const Chat = ({ socket }) => {
  const [user, setUser] = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [chatInputField, setChatInputField] = useState("");
  const onClickHandler = () => {
    socket.emit("Message", { message: chatInputField, user });
    setChatInputField("");
  };
  const onEnterPressed = (event) => {
    if (event.key === "Enter") {
      onClickHandler();
    }
  };
  const onChangeHandler = (event) => {
    setChatInputField(event.currentTarget.value);
  };
  useEffect(() => {
    socket.on("Message", (message) => {
      console.log("hello");
      setMessages((oldState) => [...oldState, message]);
    });
  }, []);

  return (
    <S.ChatContainer>
      <S.ChatBox>
        {messages.map((msg) => {
          console.log(msg, user);

          if (msg.user.id === user.id) {
            return (
              <S.OutgoingMessage>
                <span className="text">{msg.message}</span>
                <span className="username">- {msg.user.username}</span>
              </S.OutgoingMessage>
            );
          } else {
            return <S.IncomingMessage>{msg.message}</S.IncomingMessage>;
          }
        })}
      </S.ChatBox>
      <div className="chat-input-container">
        <S.ChatInput
          onKeyPress={onEnterPressed}
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
