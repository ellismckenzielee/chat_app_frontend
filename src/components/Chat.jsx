import { useEffect, useState } from "react";
import { getMessages } from "../utils/utils";
import styles from "../styles/chat.module.css";
import MessageCard from "./MessageCard";
import { io } from "socket.io-client";
import { useContext } from "react";
import { SocketContext } from "../contexts/socket.context";
const Chat = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const { socket, sendMessage, joinRoom } = useContext(SocketContext);
  console.log(socket);
  useEffect(() => {
    if (chatId !== "") {
      getMessages("ellislee", chatId).then((messages) => {
        setMessages(messages);
        joinRoom(chatId);
      });
    }
  }, [chatId]);
  return (
    <div className={styles.chat}>
      <p>This is the chatpage</p>
      {messages.map((message) => {
        return <MessageCard key={message._id} message={message} />;
      })}
      <button
        onClick={() => {
          sendMessage("hello!");
        }}
      >
        Send Message
      </button>
    </div>
  );
};

export default Chat;
