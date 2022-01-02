import axios from "axios";
const backendAPI = axios.create({
  baseURL: "http://localhost:4500",
});
const getChatsByUsername = async (username) => {
  const response = await backendAPI.get(`${username}/chats`);
  return response.data.chats;
};

export { getChatsByUsername };
