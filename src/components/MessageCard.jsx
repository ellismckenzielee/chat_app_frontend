import styles from "../styles/messageCard.module.css";
import { UserContext } from "../contexts/user.context";
import { useContext } from "react";
const MessageCard = ({ message }) => {
  const { user } = useContext(UserContext);
  return (
    <div className={user.username === message.sender ? styles.userMessage : styles.otherMessage}>
      <p>
        <span className={styles.messageContent}>{message.message}</span>
        <br />
        <span className={styles.author}>{message.sender}</span>
      </p>
    </div>
  );
};

export default MessageCard;
