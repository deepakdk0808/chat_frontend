import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-backend-01.onrender.com/api",
  withCredentials: true,
});
