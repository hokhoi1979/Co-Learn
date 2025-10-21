import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      try {
        const parsed = JSON.parse(auth);
        if (parsed.token) {
          config.headers.Authorization = `Bearer ${parsed.token}`;
        }
      } catch (err) {
        console.error("❌ Failed to parse token:", err);
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
