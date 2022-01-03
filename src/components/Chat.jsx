import { useEffect, useState } from "react";
import { getMessages } from "../utils/utils";
import styles from "../styles/chat.module.css";
import MessageCard from "./MessageCard";
import { io } from "socket.io-client";
const Chat = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    console.log("use effect");
    if (chatId !== "") {
      getMessages("ellislee", chatId).then((messages) => {
        setMessages(messages);
        const socket = io("http://localhost:4500", { transports: ["websocket"] });
        socket.emit("join", chatId);
        socket.on("message", (msg) => {
          console.log("MESSAGE!!!", msg);
        });
        socket.on("joined", (chatId) => {
          console.log("RETURNED CHAT ID", chatId);
        });
      });
    }
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
