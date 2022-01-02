import styles from "../styles/chatCard.module.css";
import { Link } from "react-router-dom";
const ChatCard = ({ props }) => {
  return (
    <div className={styles.chatCard}>
      <Link className={styles.chatCardButton} to={`/messenger/${props._id}`}>
        {props.users}
      </Link>
    </div>
  );
};

export default ChatCard;
