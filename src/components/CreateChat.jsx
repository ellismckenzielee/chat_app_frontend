import styles from "../styles/createChat.module.css";
import { useState } from "react";
const CreateChat = () => {
  const [recipientUsername, setRecipientUsername] = useState("");

  return (
    <div className={styles.createChat}>
      <p>Create Chat Page</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
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
