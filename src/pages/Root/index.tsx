import { useAtom, useAtomValue } from 'jotai';
import { useLayoutEffect, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { BottomNavigationBar } from '@/components/BottomNavigationBar';
import { ScrollTopButton } from '@/components/buttons/ScrollTopButton';
import { Header } from '@/components/Header';
import { ROUTE_PATH } from '@/constants';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';
import { initializeAccessToken } from '@/utils/initializeAccessToken';

export const Root = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const userData = useAtomValue(userDataAtom) as UserData;
  const navigate = useNavigate();
  const isProductionMode = import.meta.env.PROD;

  useLayoutEffect(() => {
    if (isProductionMode) {
      initializeAccessToken(accessToken, setAccessToken);
    }
  }, [isProductionMode, accessToken, setAccessToken]);

  useEffect(() => {
    if (!userData?.nickname) {
      navigate(ROUTE_PATH.setup.setNickname);
    }
  }, [userData, navigate]);

  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center">
      <div className="h-[100%] w-[100%] bg-black sm:h-[50rem] sm:max-h-[90vh] sm:w-96">
        <Header />
        <div className="flex h-[calc(100%-124px)] flex-col items-center">
          <div className="relative overflow-y-auto" id="outlet-container">
            <Outlet />
            <ScrollTopButton />
          </div>
        </div>
        <BottomNavigationBar />
      </div>
    </div>
  );
};
