import React, {useState} from "react";
import * as S from "./styles";
const Chat = (props) => {
  const [messages, setMessages] = useState("Chris");
  const [chatInputField, setChatInputField] = useState("");
  const onClickHandler = ()=>{
    setMessages("Kelson");
  
    props.socket.emit('Message', {message: chatInputField});
    setChatInputField("");
    }
    const onChangeHandler = (event)=>{
      setChatInputField(event.currentTarget.value)
    }
  return (
    <S.ChatContainer>
      <S.ChatBox>
       <S.IncomingMessage >{messages}</S.IncomingMessage>
      </S.ChatBox>
      <div className="chat-input-container">
        <S.ChatInput value={chatInputField} onChange={onChangeHandler} id="chat-input" type="text"></S.ChatInput>
        <S.SendButton onClick={onClickHandler}>
          <img className="send-icon" src="/icons/paper-plane-regular.svg" />
        </S.SendButton>
      </div>
    </S.ChatContainer>
  );
};
export default Chat;
