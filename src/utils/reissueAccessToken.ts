import { isAxiosError } from 'axios';

import { API_PATH } from '@/constants';
import { axiosInstance } from '@/lib/axios/instance';
import type { SetModalType } from '@/stores/atoms/modalTypeAtom';

type ResponseData = {
  code: string;
  message: string;
};

export const reissueAccessToken = async (setModalType: SetModalType) => {
  try {
    const {
      data: { accessToken: newAccessToken },
    } = await axiosInstance.post(API_PATH.tokens);

    return newAccessToken;
  } catch (error) {
    if (isAxiosError<ResponseData>(error) && error.response) {
      const { status, data } = error.response;
      if (status === 401 && data.code === 'A02') {
        setModalType('loginExpiration');
      }
      if (status === 401 && data.code === 'A03') {
        setModalType('accountHijacking');
      }
    }
  }
};
