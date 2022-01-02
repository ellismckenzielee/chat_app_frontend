import styles from "../styles/chatCard.module.css";
const ChatCard = ({ setChatId, chat }) => {
  return (
    <div
      onClick={() => {
        setChatId(chat._id);
      }}
      className={styles.chatCard}
    >
      <h4>{chat.users}</h4>
    </div>
  );
};

export default ChatCard;
