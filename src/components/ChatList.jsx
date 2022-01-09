import { useEffect, useState } from "react";
import { getChatsByUsername } from "../utils/utils";
import styles from "../styles/chatList.module.css";
import ChatCard from "./ChatCard";
import { useNavigate } from "react-router-dom";
const ChatList = ({ setChatID, chatId }) => {
  const [chats, setChats] = useState([]);
  console.log(chats);
  const navigate = useNavigate();
  useEffect(() => {
    getChatsByUsername("ellislee").then((chats) => {
      setChats(chats);
    });
  }, []);
  return (
    <div className={styles.chatList}>
      <p className={styles.chatHeader}>LINK</p>
      {chats.map((chat) => {
        return <ChatCard key={chat._id} chat={chat} chatId={chatId} setChatId={setChatID} />;
      })}
      <button
        onClick={() => {
          navigate("/create");
        }}
        className={styles.newChatButton}
      >
        New Chat
      </button>
    </div>
  );
};

export default ChatList;
