import axios from "axios";
const backendAPI = axios.create({
  baseURL: "http://localhost:4500",
});
const getChatsByUsername = async (username) => {
  const response = await backendAPI.get(`${username}/chats`);
  return response.data.chats;
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
    return response;
  } catch (err) {
    const messageFormatter = {
      "chat already exists": "This chat already exists, please choose a different user.",
    };
    console.dir("ERR", err);
    const msg = messageFormatter[err.response.data.msg];
    return Promise.reject(msg);
  }
};

export { getChatsByUsername, getMessages, createChat };
