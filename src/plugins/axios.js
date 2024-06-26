import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers["ngrok-skip-browser-warning"] =  'true' 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
