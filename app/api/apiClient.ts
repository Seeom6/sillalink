import axios from 'axios';
import { getCookie } from 'cookies-next';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

const apiClient = axios.create({
  baseURL,
  withCredentials: true, 
});

apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = getCookie('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;