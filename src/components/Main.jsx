import styles from "../styles/main.module.css";
import ChatList from "./ChatList";
import Chat from "./Chat";
import { useContext, useEffect, useState } from "react";
import { SocketContext, SocketProvider } from "../contexts/socket.context";
const Main = () => {
  const [chatId, setChatID] = useState("");
  console.log("CHTID", chatId);

  return (
    <div className={styles.main}>
      <SocketProvider>
        <ChatList setChatID={setChatID} chatId={chatId}></ChatList>
        <Chat chatId={chatId}></Chat>
      </SocketProvider>
    </div>
  );
};
export default Main;
