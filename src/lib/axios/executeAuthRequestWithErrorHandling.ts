import { isAxiosError } from 'axios';

import { reissueAccessToken } from '@/utils/reissueAccessToken';

import type { Dispatch, SetStateAction } from 'react';

type ResponseData = {
  code: string;
  message: string;
};

type Paramters = {
  authRequest: (accessToken: string) => Promise<any>;
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
};

export const excuteAuthRequestWithErrorHandling = async ({
  authRequest,
  accessToken,
  setAccessToken,
}: Paramters) => {
  try {
    const response = await authRequest(accessToken);

    return response;
  } catch (error) {
    if (isAxiosError<ResponseData>(error) && error.response) {
      const { status, data } = error.response;
      if (status === 401 && data.code === 'A03') {
        const newAccessToken = await reissueAccessToken();
        setAccessToken(newAccessToken);
        const retriedResponse = await authRequest(newAccessToken);

        return retriedResponse;
      }

      if (status === 401 && data.code === 'A04') {
        console.log(data.message);
      }
    }
  }
};
