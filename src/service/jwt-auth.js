import axios from "axios";
export const jwtAxios = axios.create({
  baseURL: "http://192.168.29.180:4000",
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
jwtAxios.interceptors.request.use(
  (config) => {
    // Get the token from localStorage or wherever you store it
    const token = localStorage.getItem("token");
    // Set the token in the Authorization header
    console.log("token---->", token);
    if (token) {
      //config.headers.Authorization = `Bearer ${token}`;
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default jwtAxios;
