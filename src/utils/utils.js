import axios from "axios";
const backendAPI = axios.create({
  baseURL: "https://gentle-meadow-96818.herokuapp.com/",
  //baseURL: "http://localhost:4500",
});
const getChatsByUsername = async (username) => {
  const response = await backendAPI.get(`${username}/chats`);
  const chats = response.data.chats;
  const formattedchats = chats.map((chat) => {
    const users = chat.users;
    const _id = chat._id;
    const filteredUsers = users.filter((user) => user !== username);
    return { _id, users: filteredUsers };
  });
  return formattedchats;
};

const getMessages = async (username, chatId) => {
  const response = await backendAPI.get(`${username}/chats/${chatId}`);
  console.log(response);
  return response.data.messages;
};

const createChat = async (username, recipientUsername) => {
  console.log(username, recipientUsername);
  try {
    const response = await backendAPI.post(`${username}/chats`, { recipientUsername });
    console.log(response);
    return response.data.chat;
  } catch (err) {
    const messageFormatter = {
      "chat already exists": "This chat already exists, please choose a different user.",
    };
    console.dir("ERR", err);
    const msg = messageFormatter[err.response.data.msg];
    return Promise.reject(msg);
  }
};

const createUser = async (user) => {
  console.log(user);
  try {
    const response = await backendAPI.post("/users", { user });
  } catch (err) {
    return Promise.reject({});
  }
};

const login = async (username) => {
  try {
    console.log("USERNAME", username);
    const response = await backendAPI.get(`users/${username}`);
    return response.data.user;
  } catch (err) {
    console.dir(err);
    return Promise.reject({});
  }
};
export { getChatsByUsername, getMessages, createChat, createUser, login };
