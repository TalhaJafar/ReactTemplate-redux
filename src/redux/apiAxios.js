import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 10000,
  timeoutErrorMessage: "Request Connection timedout",
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.token;
//     if (token) {
//       config.headers.common["x-auth-token"] = token;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

export default axiosInstance;
