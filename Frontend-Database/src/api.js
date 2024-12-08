import axios from "axios";

// Tạo instance Axios
const api = axios.create({
  baseURL: "http://4.194.248.208:4000", // URL API backend của bạn
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
