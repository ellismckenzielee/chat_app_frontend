import styles from "../styles/home.module.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/utils";
import { UserContext } from "../contexts/user.context";
const Home = () => {
  const [username, setUsername] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h3 className={styles.welcome}>welcome to</h3>
        <h1 className={styles.title}>Link</h1>
        <main>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login(username)
                .then((user) => {
                  console.log(user);
                  setUser(user);
                  navigate("/messenger");
                })
                .catch((err) => {
                  console.log("ERR", err);
                });
            }}
            className={styles.loginForm}
          >
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                <h3 className={styles.legendTitle}>Sign In!</h3>
              </legend>
              <label>
                <h3>Username: </h3>
              </label>
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
            <p> Dont' have an account?</p>
            <button
              onClick={() => {
                navigate("/create-user");
              }}
              className={styles.create}
            >
              Create Account
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Home;
