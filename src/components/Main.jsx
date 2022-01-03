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
      <h2> jibber jabber </h2>
      <main>
        <SocketProvider>
          <ChatList setChatID={setChatID} chatId={chatId}></ChatList>
          <Chat chatId={chatId}></Chat>
        </SocketProvider>
      </main>
    </div>
  );
};
export default Main;
