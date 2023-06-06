import { authInstance } from '@/lib/axios/authInstance';
import { getCookie } from '@/utils/cookie';
import axios, { AxiosResponse } from 'axios';

const REFRESH_TOKEN_COOKIE_KEY = 'renew';
const REISSUE_TOKEN_PATH = '/api/token';

export const reissueAccessToken = async () => {
  const refreshToken = getCookie(REFRESH_TOKEN_COOKIE_KEY);
  authInstance.defaults.headers.Authorization = `Bearer ${refreshToken}`;
  try {
    const {
      data: { accessToken: newAccessToken },
    } = await axios.post(REISSUE_TOKEN_PATH);
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
