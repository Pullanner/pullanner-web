import axios from 'axios';
import { useRecoilState } from 'recoil';

import { ApiPathType } from '@/constants';
import { authInstance } from '@/lib/axios/authInstance';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { reissueAccessToken } from '@/utils/reissueAccessToken';

export const useAuthGetApi = async (apiPath: ApiPathType) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
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

export const useAuthPostApi = async <T>(apiPath: string, payload: T) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
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
