import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { BottomNavigationBar } from '@/components/BottomNavigationBar';
import { ScrollTopButton } from '@/components/buttons/ScrollTopButton';
import { Header } from '@/components/Header';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { initializeAccessToken } from '@/utils/initializeAccessToken';

export const Root = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const isProductionMode = import.meta.env.PROD;

  useLayoutEffect(() => {
    if (isProductionMode) {
      initializeAccessToken(accessToken, setAccessToken);
    }
  }, [isProductionMode, accessToken, setAccessToken]);

  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center">
      <div className="h-[100%] w-[100%] bg-black sm:h-[50rem] sm:max-h-[90vh] sm:w-96">
        <Header />
        <div className="flex h-[calc(100%-8rem)] flex-col items-center">
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
