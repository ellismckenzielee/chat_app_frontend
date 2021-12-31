import styles from "../styles/home.module.css";
import { useState } from "react";
const Home = () => {
  const [username, setUsername] = useState("");
  return (
    <div className={styles.home}>
      <h3 classname={styles.welcome}>welcome to</h3>
      <h1>jibber-jabber</h1>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(username);
          }}
          className={styles.loginForm}
        >
          <fieldset className={styles.fieldset}>
            <legend>Sign In!</legend>
            <label>Username</label>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className={styles.input}
              type="text"
            ></input>
          </fieldset>
          <button className={styles.submit}>Login</button>
        </form>
      </main>
    </div>
  );
};

export default Home;
