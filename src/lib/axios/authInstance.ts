import { getCookie } from '@/utils/cookie';
import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

import { onResponse } from './defaultInstance';

const ACCESS_TOKEN_COOKIE_KEY = 'auth';
const REFRESH_TOKEN_COOKIE_KEY = 'renew';
const AXIOS_TIMEOUT_SECOND = 10000;

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_API_UR,
  timeout: AXIOS_TIMEOUT_SECOND,
  headers: {
    'Content-Type': 'application/json',
    WithCredentials: true,
  },
});

const onAuthRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const axiosConfig = config;
  const accessToken = getCookie(ACCESS_TOKEN_COOKIE_KEY);
  axiosConfig.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
  return axiosConfig;
};

export const reissueAccessToken = async () => {
  const refreshToken = getCookie(REFRESH_TOKEN_COOKIE_KEY);
  authInstance.defaults.headers.Authorization = `Bearer ${refreshToken}`;
  try {
    await axios.post('/api/token');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const { status } = error.response as AxiosResponse;
      switch (status) {
        case 401:
          console.log('your account is hijacked');
          console.log('Please logout now');
          // TODO: Logout 화면 구성 후 추가할 코드 : window.location.href = '/logout';
          break;
        case 403:
          console.log('Refresh token is expired');
          window.location.href = '/login';
          break;
        default:
          break;
      }
    }
  }
};

const onAuthErrorResponse = async (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { response } = error;
    const { status } = error.response as AxiosResponse;

    if (response && status === 403) {
      reissueAccessToken();
    }
  }
  return Promise.reject(error);
};

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onAuthRequest, onAuthErrorResponse);
  instance.interceptors.response.use(onResponse, onAuthErrorResponse);
  return instance;
};

export const authInstanceWithInterceptors = setupInterceptors(authInstance);
