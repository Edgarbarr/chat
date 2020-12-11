import React from "react";
import * as S from "./styles";

const Chat = () => {
  return (
    <S.ChatContainer>
      <S.ChatBox>
        <S.OutgoingMessage>
          Hello, Edgar hows it going?Hello, Edgar hows it going?Hello, Edgar
          hows it going?Hello, Edgar hows it going?vv
        </S.OutgoingMessage>
        <S.IncomingMessage>I'm chilling bro wbu?</S.IncomingMessage>
        <S.OutgoingMessage>Nothin just coding or w/e</S.OutgoingMessage>
        <S.IncomingMessage>thats cool</S.IncomingMessage>
      </S.ChatBox>
      <div className="chat-input-container">
        <S.ChatInput type="text"></S.ChatInput>
        <S.SendButton>
          <img className="send-icon" src="/icons/paper-plane-regular.svg" />
        </S.SendButton>
      </div>
    </S.ChatContainer>
  );
};
export default Chat;
