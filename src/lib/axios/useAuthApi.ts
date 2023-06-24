import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';

import { ApiPathType } from '@/constants';
import { authInstance } from '@/lib/axios/authInstance';
import { reissueAccessToken } from '@/utils/reissueAccessToken';

export const getAuthRequest = async (
  apiPath: ApiPathType,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  try {
    const { data } = await authInstance.get(apiPath, {
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

export const postAuthRequest = async <T>(
  apiPath: string,
  payload: T,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => {
  try {
    const { data } = await authInstance.post(apiPath, payload, {
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
