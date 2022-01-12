import styles from "../styles/main.module.css";
import ChatList from "./ChatList";
import Chat from "./Chat";
import { useContext, useEffect, useState } from "react";
import { SocketContext, SocketProvider } from "../contexts/socket.context";
import { UserContext } from "../contexts/user.context";
const Main = () => {
  const [chatId, setChatID] = useState("");
  console.log("CHTID", chatId);
  const { user } = useContext(UserContext);

  return (
    <div className={styles.main}>
      <ChatList setChatID={setChatID} chatId={chatId}></ChatList>
      <Chat chatId={chatId}></Chat>
    </div>
  );
};
export default Main;
