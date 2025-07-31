// client/src/api.js
import axios from "axios";

const API = axios.create({
 baseURL: "https://fullstack-basic-app-7s6u.onrender.com/api", // Adjust if deployed
});

export const createUser = async (userData) => {
  const res = await API.post("/users", userData);
  // console.log("User created telling from api.js:", userData); // Log the response
  if (res.status !== 201) {
    throw new Error("Failed to create user");
  }
  return res.data;
};

