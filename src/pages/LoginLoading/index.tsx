import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants/routePath';
import { useUserData } from '@/lib/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';
import { getCookie } from '@/utils/cookie';

const ACCESS_TOKEN_COOKIE_KEY = 'auth';

export const LoginLoading = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const userData = useAtomValue(userDataAtom) as UserData;
  const setUserData = useSetAtom(userDataAtom);
  const { data, isSuccess } = useUserData(accessToken, setAccessToken);
  const navigate = useNavigate();

  useEffect(() => {
    const accessTokenValue = getCookie(ACCESS_TOKEN_COOKIE_KEY);
    if (accessTokenValue?.length) {
      setAccessToken(accessTokenValue);
      setLoginState(true);
      navigate(ROUTE_PATH.roadmap.index);
    }

    if (isSuccess) {
      setUserData(data);
      if (!userData?.nickname) {
        navigate(ROUTE_PATH.setup.setNickname);
      }
    }
  }, [setAccessToken, setLoginState, navigate, userData?.nickname, data, isSuccess, setUserData]);

  return <div className="text-xl">Loading...</div>;
};
