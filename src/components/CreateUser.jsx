import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/createUser.module.css";
import { createUser } from "../utils/utils";
const CreateUser = () => {
  const [newUsername, setNewUsername] = useState();
  const [newName, setNewName] = useState();
  const navigate = useNavigate();
  return (
    <div className={styles.createUser}>
      <h1>Create An Account</h1>
      <div className={styles.formContainer}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            createUser({ username: newUsername, name: newName }).then(() => {
              navigate("/home");
            });
          }}
        >
          <label>Enter Name</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          ></input>
          <label>Enter Username</label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => {
              setNewUsername(e.target.value);
            }}
          ></input>
          <button className={styles.createUserButton}>Create User</button>
        </form>
      </div>
      <div className={styles.returnContainer}>
        <h3>Already have an account?</h3>
        <button className={styles.signIn}>Sign In</button>
      </div>
    </div>
  );
};

export default CreateUser;
