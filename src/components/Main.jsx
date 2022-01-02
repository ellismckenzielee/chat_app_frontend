import styles from "../styles/main.module.css";
import Chats from "./Chats";
const Main = () => {
  return (
    <div className="main">
      <p>This is the main messenger page</p>
      <Chats></Chats>
    </div>
  );
};
export default Main;
