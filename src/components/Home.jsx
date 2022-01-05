import styles from "../styles/home.module.css";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
const Home = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const socket = io("http://localhost:4500", { transports: ["websocket"] });
    socket.on("message", () => {
      console.log("MESSAGE!!!");
    });
    axios.get("http://localhost:4500/users").then(console.log);
  }, []);
  return (
    <div className={styles.home}>
      <h3 className={styles.welcome}>welcome to</h3>
      <h1>Link</h1>
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
