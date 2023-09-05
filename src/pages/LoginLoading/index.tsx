import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants/routePath';
import { useGetUserData } from '@/lib/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';
import { getCookie } from '@/utils/cookie';

const ACCESS_TOKEN_COOKIE_KEY = 'auth';

export const LoginLoading = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const setUserData = useSetAtom(userDataAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const { data, isSuccess } = useGetUserData(accessToken, setAccessToken, setModalType);
  const navigate = useNavigate();
  setLoginState(true);

  useEffect(() => {
    const accessTokenValue = getCookie(ACCESS_TOKEN_COOKIE_KEY);
    if (accessTokenValue?.length) {
      setAccessToken(accessTokenValue);
    }

    if (isSuccess) {
      setUserData(data);
      if (!data.nickname) {
        navigate(ROUTE_PATH.setup.setNickname);
      } else {
        navigate(ROUTE_PATH.roadmap.index);
      }
    }
  }, [setAccessToken, setLoginState, navigate, data, isSuccess, setUserData]);

  return <div className="text-xl">Loading...</div>;
};
