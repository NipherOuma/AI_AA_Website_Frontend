// src/axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://aiaa.sunshinedrivingschool.co.ke/",
});

export default axiosInstance;
