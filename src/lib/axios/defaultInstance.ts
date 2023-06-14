import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const defaultInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config;
};

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onErrorResponse = async (error: AxiosError | Error): Promise<AxiosError> => {
  return Promise.reject(error);
};

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onRequest, onErrorResponse);
  instance.interceptors.response.use(onResponse, onErrorResponse);
  return instance;
};

export const defaultInstanceWithInterceptors = setupInterceptors(defaultInstance);
