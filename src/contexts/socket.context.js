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
  return <SocketContext.Provider value={{ joinRoom, socket, sendMessage, moveRoom }}>{props.children}</SocketContext.Provider>;
};

export { SocketContext, SocketProvider };
