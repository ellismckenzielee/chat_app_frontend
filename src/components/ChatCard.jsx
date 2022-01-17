import { useContext } from "react";
import { SocketContext } from "../contexts/socket.context";
import styles from "../styles/chatCard.module.css";
const ChatCard = ({ setChatId, chat, chatId }) => {
  const { socket, moveRoom } = useContext(SocketContext);
  return (
    <div
      onClick={() => {
        moveRoom();
        setChatId(chat._id);
      }}
      className={chatId === chat._id ? styles.activeChatCard : styles.chatCard}
    >
      <div className={styles.chatInfoContainer}>
        <img className={styles.chatImage} src="./user.png" />
        <h4 className={styles.chatName}>{chat.users}</h4>
      </div>
    </div>
  );
};

export default ChatCard;
