import styles from "../styles/createChat.module.css";
import { useState, useContext } from "react";
import { createChat } from "../utils/utils";
import { UserContext } from "../contexts/user.context";
import { useNavigate } from "react-router-dom";
const CreateChat = () => {
  const [recipientUsername, setRecipientUsername] = useState("");
  const { user } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  return (
    <div className={styles.createChat}>
      <h2 className={styles.title}>Create a New Chat</h2>
      <div className={styles.main}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            createChat(user.username, recipientUsername)
              .then(() => {
                navigate(-1);
              })
              .catch(setErrorMessage);
          }}
        >
          <label> Enter Username </label>
          <input
            onChange={(e) => {
              setRecipientUsername(e.target.value);
            }}
            type="text"
            value={recipientUsername}
          ></input>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          <button>Create!</button>
        </form>
      </div>
    </div>
  );
};

export default CreateChat;
