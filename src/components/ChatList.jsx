import { useEffect, useState } from "react";
import { getChatsByUsername } from "../utils/utils";
import styles from "../styles/chatList.module.css";
import ChatCard from "./ChatCard";
const ChatList = ({ setChatID }) => {
  const [chats, setChats] = useState([]);
  console.log(chats);
  useEffect(() => {
    getChatsByUsername("ellislee").then((chats) => {
      setChats(chats);
    });
  }, []);
  return (
    <div className={styles.chatList}>
      <p>Chats sidebar</p>
      {chats.map((chat) => {
        return <ChatCard key={chat._id} chat={chat} setChatId={setChatID} />;
      })}
    </div>
  );
};

export default ChatList;
