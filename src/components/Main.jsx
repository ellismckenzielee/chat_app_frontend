import styles from "../styles/main.module.css";
import ChatList from "./ChatList";
import Chat from "./Chat";
import { useState } from "react";
const Main = () => {
  const [chatId, setChatID] = useState("");
  console.log("CHTID", chatId);
  return (
    <div className={styles.main}>
      <ChatList setChatID={setChatID}></ChatList>
      <Chat chatId={chatId}></Chat>
    </div>
  );
};
export default Main;
