import { authInstance } from '@/lib/axios/authInstance';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { reissueAccessToken } from '@/utils/reissueAccessToken';
import axios from 'axios';
import { useRecoilState } from 'recoil';

export const useAuthGetApi = async (url: string) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  try {
    const { data } = await authInstance.get(url, {
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

export const useAuthPostApi = async <T>(url: string, payload: T) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  try {
    const { data } = await authInstance.post(url, payload, {
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
