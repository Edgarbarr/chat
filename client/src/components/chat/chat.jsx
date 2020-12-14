import React, {useState} from "react";
import * as S from "./styles";
const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [chatInputField, setChatInputField] = useState("");
  const onClickHandler = ()=>{
   
  
    props.socket.emit('Message', {message: chatInputField});
    
    }
    const onChangeHandler = (event)=>{
      setChatInputField(event.currentTarget.value)
    }
    props.socket.on('Message', (message)=>{
      setMessages([...messages, message])
    
     
      console.log(message)
      console.log(messages)
      console.log("inside socket on")
    } )
  return (
    <S.ChatContainer>
      <S.ChatBox>
       {messages.map(msg =>{
         return <S.IncomingMessage>{msg.message}</S.IncomingMessage>
       })}
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
