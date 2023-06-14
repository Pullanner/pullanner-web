import axios from 'axios';

const AXIOS_TIMEOUT_SECOND = 10000;

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: AXIOS_TIMEOUT_SECOND,
  headers: {
    'Content-Type': 'application/json',
    WithCredentials: true,
  },
});
