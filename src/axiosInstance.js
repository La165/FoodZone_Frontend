

// axiosInstance.js
import axios from "axios";
import Swal from "sweetalert2";


const axiosInstance = axios.create({
  baseURL: "https://food-zone-backend-phi.vercel.app/api/v1/products",
  withCredentials: true,
});

// ✅ 1. Add JWT to all requests
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ✅ 2. Handle 401 responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      Swal.fire({
        icon: "warning",
        title: "Session expired!",
        confirmButtonText: "Login",
      }).then(() => window.location.href = "/login");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

