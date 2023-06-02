import { accessTokenAtom } from '@/stores/accessTokenAtom';
import { getCookie } from '@/utils/cookie';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

export const LoginLoading = () => {
  const storeAccessToken = useSetRecoilState(accessTokenAtom);

  useEffect(() => {
    const accessToken = getCookie('auth');
    if (accessToken) {
      storeAccessToken(accessToken);
    }
  }, [storeAccessToken]);

  return <div className="font-sans text-xl text-white">Loading...</div>;
};
