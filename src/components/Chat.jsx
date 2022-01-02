import { useEffect, useState } from "react";
import { getMessages } from "../utils/utils";
import styles from "../styles/chat.module.css";
import MessageCard from "./MessageCard";
const Chat = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    console.log("use effect");
    getMessages("ellislee", chatId).then(setMessages);
  }, [chatId]);
  return (
    <div className={styles.chat}>
      <p>This is the chatpage</p>
      {messages.map((message) => {
        return <MessageCard key={message._id} message={message} />;
      })}
    </div>
  );
};

export default Chat;
