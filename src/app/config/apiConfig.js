// src/services/api.ts
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Tạo một instance axios riêng
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10s
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để tự động gắn token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // hoặc Redux store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Xử lý lỗi response chung
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
