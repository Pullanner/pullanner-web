import { isAxiosError } from 'axios';

import type { SetModalType } from '@/stores/atoms/modalTypeAtom';
import { initializeAccessToken } from '@/utils/initializeAccessToken';

import type { Dispatch, SetStateAction } from 'react';

type ResponseData = {
  code: string;
  message: string;
};

type Paramters = {
  authRequest: (accessToken: string) => Promise<any>;
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  setModalType: SetModalType;
};

export const excuteAuthRequestWithErrorHandling = async ({
  authRequest,
  accessToken,
  setAccessToken,
  setModalType,
}: Paramters) => {
  try {
    const response = await authRequest(accessToken);

    return response;
  } catch (error) {
    if (isAxiosError<ResponseData>(error) && error.response) {
      const { status, data } = error.response;
      if (status === 401 && data.code === 'A02') {
        const newAccessToken = await initializeAccessToken(setAccessToken, setModalType);
        const retriedResponse = await authRequest(newAccessToken);

        return retriedResponse;
      }
    }
  }
};
