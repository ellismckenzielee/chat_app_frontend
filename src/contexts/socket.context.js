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
  };
  const joinRoom = async (chatId) => {
    console.log("join room");
    socket.emit("join", chatId);
  };
  return <SocketContext.Provider value={{ joinRoom, socket, sendMessage, moveRoom }}>{props.children}</SocketContext.Provider>;
};

export { SocketContext, SocketProvider };
