import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
// import Cookies from 'js-cookie';
// import { ApiResponse, ApiError } from '../../types/api/api.types';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

console.log(baseURL)
const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});

export default apiClient;




// // lib/api/axios.ts
// import axios from 'axios';
// import { getCookie } from 'cookies-next';

// const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// export const apiClient = axios.create({
//   baseURL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor
// apiClient.interceptors.request.use(
//   (config) => {
//     // Get token from cookies (works in both server and client)
//     const token = getCookie('auth-token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor
// apiClient.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     const errorMessage = error.response?.data?.message || 'An error occurred';
//     return Promise.reject(new Error(errorMessage));
//   }
// );