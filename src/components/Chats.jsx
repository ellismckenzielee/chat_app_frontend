import { useEffect, useState } from "react";
import { getChatsByUsername } from "../utils/utils";
import ChatCard from "./ChatCard";
const Chats = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    getChatsByUsername("ellislee").then((chats) => {
      setChats(chats);
    });
  }, []);
  return (
    <div className="chats">
      <p>Chats sidebar</p>
      {chats.map((chat) => {
        return <ChatCard key={chat._id} props={chat} />;
      })}
    </div>
  );
};

export default Chats;
