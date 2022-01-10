import { useEffect, useRef, useState } from "react";
import { getMessages } from "../utils/utils";
import styles from "../styles/chat.module.css";
import MessageCard from "./MessageCard";
import { io } from "socket.io-client";
import { useContext } from "react";
import { SocketContext } from "../contexts/socket.context";
import { UserContext } from "../contexts/user.context";
const Chat = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const { socket, sendMessage, joinRoom } = useContext(SocketContext);
  const { user, setUser } = useContext(UserContext);
  console.log("USER", user);
  console.log(socket);
  const ref = useRef(null);
  console.log("REF", ref.current);
  const [newMessage, setNewMessage] = useState("");
  console.log(messages);
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };
  useEffect(() => {
    if (chatId !== "") {
      getMessages("ellislee", chatId).then((messages) => {
        setMessages(messages);
        joinRoom(chatId, setMessages);
      });
    }
  }, [chatId]);
  if (chatId === "") return <p>Choose a chat</p>;
  return (
    <div className={styles.chat}>
      <div ref={ref} className={styles.messageList}>
        {messages.map((message, indx) => {
          return (
            <div key={message._id + indx}>
              <MessageCard message={message} />
              <AlwaysScrollToBottom />
            </div>
          );
        })}
      </div>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ message: newMessage, sender: user.username, chatId }).then(() => {
            setNewMessage("");
          });
        }}
      >
        <textarea
          type="text"
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
          className={styles.formInput}
        />
        <button className={styles.formSubmit}>Send </button>
      </form>
    </div>
  );
};

export default Chat;
