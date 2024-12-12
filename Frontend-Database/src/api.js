import axios from "axios";

// Tạo instance Axios
const api = axios.create({
  baseURL: "https://pizza-fastbear-be.onrender.com", // URL API backend của bạn
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("role");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
