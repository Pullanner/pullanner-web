import axios, { RawAxiosRequestHeaders, AxiosHeaders } from 'axios';

import { ApiPathType } from '@/constants';
import { axiosInstance } from '@/lib/axios/instance';
import { reissueAccessToken } from '@/utils/reissueAccessToken';

import type { Dispatch, SetStateAction } from 'react';

type Options = {
  headers?: RawAxiosRequestHeaders | AxiosHeaders;
  params?: any;
};

export const getAuthRequest = async (
  apiPath: ApiPathType,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  options?: Options,
) => {
  try {
    const { data } = await axiosInstance.get(apiPath, {
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
  }
};

export const postAuthRequest = async <T>(
  apiPath: string,
  payload: T,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  try {
    const { data } = await axiosInstance.post(apiPath, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === '403') {
      const newAccessToken = await reissueAccessToken();
      setAccessToken(newAccessToken);
    }
  }
};
