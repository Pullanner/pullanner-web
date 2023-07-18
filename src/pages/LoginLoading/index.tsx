import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants/routePath';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { getCookie } from '@/utils/cookie';

const ACCESS_TOKEN_COOKIE_KEY = 'auth';

export const LoginLoading = () => {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const accessTokenValue = getCookie(ACCESS_TOKEN_COOKIE_KEY);
    if (accessTokenValue?.length) {
      setAccessToken(accessTokenValue);
      setLoginState(true);
      navigate(ROUTE_PATH.roadmap.index);
    }
  }, [setAccessToken, setLoginState, navigate]);
  return <div className="text-xl">Loading...</div>;
};
