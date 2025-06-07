// client/src/services/userService.js
import axios from "axios";

const API = "http://localhost:5000/api/users";

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProfile = async (data) => {
  const token = localStorage.getItem("token");
  const response = await axios.put(`${API}/me`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
