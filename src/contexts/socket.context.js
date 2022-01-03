import react, { useState } from "react";
import { io } from "socket.io-client";
export const socket = io("http://localhost:4500", { transports: ["websocket"] });

const SocketContext = react.createContext();
const SocketProvider = (props) => {
  const sendMessage = async (message) => {
    socket.emit("message", message);
  };
  const moveRoom = async () => {
    socket.emit("moveroom");
  };
  return <SocketContext.Provider value={{ socket, sendMessage, moveRoom }}>{props.children}</SocketContext.Provider>;
};

export { SocketContext, SocketProvider };
