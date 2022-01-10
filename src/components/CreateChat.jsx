import styles from "../styles/createChat.module.css";
import { useState, useContext } from "react";
import { createChat } from "../utils/utils";
import { UserContext } from "../contexts/user.context";
const CreateChat = () => {
  const [recipientUsername, setRecipientUsername] = useState("");
  const { user } = useContext(UserContext);
  return (
    <div className={styles.createChat}>
      <p>Create Chat Page</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createChat(user.username, recipientUsername).then().catch(console.log);
        }}
      >
        <input
          onChange={(e) => {
            setRecipientUsername(e.target.value);
          }}
          type="text"
          value={recipientUsername}
        ></input>
        <button>Create!</button>
      </form>
    </div>
  );
};

export default CreateChat;
