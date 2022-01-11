import { useContext, useEffect, useState } from "react";
import { getChatsByUsername } from "../utils/utils";
import styles from "../styles/chatList.module.css";
import ChatCard from "./ChatCard";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
const ChatList = ({ setChatID, chatId }) => {
  const { user, logout } = useContext(UserContext);
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getChatsByUsername(user.username).then((chats) => {
      setChats(chats);
    });
  }, []);
  return (
    <div className={styles.chatList}>
      <div className={styles.logoutContainer}>
        <p className={styles.subHeader}> You are logged in as {user.username}</p>
        <button
          onClick={() => {
            console.log("Pressed");
            logout();
            navigate("/home");
          }}
          className={styles.logoutButton}
        >
          Logout
        </button>
      </div>

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
