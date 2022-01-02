import styles from "../styles/messageCard.module.css";
const MessageCard = ({ message }) => {
  return (
    <div className={styles.messageCard}>
      <p>{message.message}</p>
    </div>
  );
};

export default MessageCard;
