import axios, { InternalAxiosRequestConfig } from "axios";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${process.env.REACT_APP_API_KEY}`;

  return config;
});
