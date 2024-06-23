import axios from "axios";

const axiosInstanceContact = axios.create({
  baseURL: "https://tempmail-email.com/api",
});

axiosInstanceContact.interceptors.request.use((config) => {
  config.headers["Content-Type"] =
    config.headers["Content-Type"] ?? "application/json";

  return config;
});

export default axiosInstanceContact;
