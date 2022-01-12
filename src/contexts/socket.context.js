import react, { useState } from "react";
import { io } from "socket.io-client";
export const socket = io("http://localhost:4500", { transports: ["websocket"] });
socket.on("joined", (chat) => {
  console.log("joined", chat);
});
const SocketContext = react.createContext();
const SocketProvider = (props) => {
  const sendMessage = async (message) => {
    socket.emit("message", message);
  };
  const moveRoom = async () => {
    socket.emit("moveroom");
    socket.removeAllListeners("message");
  };
  const joinRoom = async (chatId, func) => {
    console.log("join room");
    socket.emit("join", chatId);
    socket.on("message", (message) => {
      console.log("in on message function");
      func((prevMessages) => {
        const updatedMessages = [];
        prevMessages.forEach((prevMessage) => {
          updatedMessages.push({ ...prevMessage });
        });
        return [...updatedMessages, message];
      });
    });
  };

  const listenChat = (setChats, chat) => {
    setChats((prevChats) => {
      const updatedChats = [];
      prevChats.forEach((chat) => {
        updatedChats.push({ ...prevChats });
      });
      return [...updatedChats, chat];
    });
  };

  const emitChat = (chat) => {
    console.log("emitting chat");
    socket.emit("chat", chat);
  };
  const register = (username) => {
    socket.emit("register", username);
  };
  const leave = () => {
    console.log("leaving");
    socket.emit("leave");
  };
  return (
    <SocketContext.Provider value={{ listenChat, emitChat, joinRoom, socket, sendMessage, moveRoom, leave, register }}>
      {props.children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
