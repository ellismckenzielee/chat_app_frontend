import { useState } from "react";
import styles from "../styles/createUser.module.css";
const CreateUser = () => {
  const [newUsername, setNewUsername] = useState();
  return (
    <div className={styles.createUser}>
      <h1>Create An Account</h1>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Enter Username</label>
          <input type="text" value={newUsername}></input>
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
