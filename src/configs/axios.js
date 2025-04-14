import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://chat-backend-d2n9.onrender.com/api"
      : "/api",
  withCredentials: true,
});
