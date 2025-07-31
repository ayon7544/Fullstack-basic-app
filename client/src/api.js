import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const createUser = async (userData) => {
  const res = await API.post("/users", userData);
  if (res.status !== 201) {
    throw new Error("Failed to create user");
  }
  return res.data;
};
