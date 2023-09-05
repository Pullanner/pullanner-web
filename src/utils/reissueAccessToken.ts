import { isAxiosError } from 'axios';

import { API_PATH } from '@/constants';
import { axiosInstance } from '@/lib/axios/instance';

type ResponseData = {
  code: string;
  message: string;
};

export const reissueAccessToken = async () => {
  try {
    const {
      data: { accessToken: newAccessToken },
    } = await axiosInstance.post(API_PATH.tokens);

    return newAccessToken;
  } catch (error) {
    if (isAxiosError<ResponseData>(error) && error.response) {
      const { status, data } = error.response;
      if (status === 401 && data.code === 'A02') {
        console.log('로그인이 만료되었습니다.');
      }
      if (status === 401 && data.code === 'A03') {
        console.log('계정이 도용된 것으로 의심됩니다.');
      }
    }
  }
};
