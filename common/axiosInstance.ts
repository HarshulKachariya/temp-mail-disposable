import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tempapi-w3c1.vercel.app/api",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  config.headers["Content-Type"] =
    config.headers["Content-Type"] ?? "application/json";

  return config;
});

export default axiosInstance;
