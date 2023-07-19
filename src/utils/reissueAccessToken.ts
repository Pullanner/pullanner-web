import axios, { AxiosResponse } from 'axios';

import { API_PATH } from '@/constants';
import { authInstance } from '@/lib/axios/authInstance';

export const reissueAccessToken = async () => {
  try {
    const {
      data: { accessToken: newAccessToken },
    } = await authInstance.post(API_PATH.token);

    return newAccessToken;
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
