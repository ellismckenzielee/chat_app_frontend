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
      className={styles.chatCard}
    >
      <h4>{chat.users}</h4>
    </div>
  );
};

export default ChatCard;
