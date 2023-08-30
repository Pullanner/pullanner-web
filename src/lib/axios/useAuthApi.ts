import axios, { RawAxiosRequestHeaders, AxiosHeaders } from 'axios';

import { ApiPathType } from '@/constants';
import { axiosInstance } from '@/lib/axios/instance';
import { reissueAccessToken } from '@/utils/reissueAccessToken';

import type { Dispatch, SetStateAction } from 'react';

type Options = {
  headers?: RawAxiosRequestHeaders | AxiosHeaders;
  params?: any;
};

const isDevMode = import.meta.env.DEV;

export const getAuthRequest = async (
  apiPath: ApiPathType,
  accessToken: string,
  options?: Options,
) => {
  if (isDevMode) {
    const { data } = await axios.get(apiPath, { ...options });

    return data;
  }

  const { data } = await axiosInstance.get(apiPath, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    ...options,
  });

  return data;
};

export const postAuthRequest = async <T>(apiPath: string, payload: T, accessToken: string) => {
  if (isDevMode) {
    const { data } = await axios.post(apiPath, payload);

    return data;
  }

  const { data } = await axiosInstance.post(apiPath, payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export const deleteAuthRequest = async (
  apiPath: ApiPathType,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  options?: Options,
) => {
  try {
    if (isDevMode) {
      const { data } = await axios.delete(apiPath, { ...options });

      return data;
    }

    const { data } = await axiosInstance.delete(apiPath, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      ...options,
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === '403') {
      const newAccessToken = await reissueAccessToken();
      setAccessToken(newAccessToken);
    }
    throw error;
  }
};
