import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { BottomNavigationBar } from '@/components/BottomNavigationBar';
import { ScrollTopButton } from '@/components/buttons/ScrollTopButton';
import { Header } from '@/components/Header';
import { AccountHijackingModal } from '@/components/modals/AccountHijackingModal';
import { LoginExpirationModal } from '@/components/modals/LoginExpirationModal';
import { LogoutModal } from '@/components/modals/LogoutModal';
import { ROUTE_PATH } from '@/constants';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom, type UserData } from '@/stores/atoms/userDataAtom';
import { initializeAccessToken } from '@/utils/initializeAccessToken';

export const Root = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const loginState = useAtomValue(loginStateAtom) as boolean;
  const [modalType, setModalType] = useAtom(modalTypeAtom);
  const userData = useAtomValue(userDataAtom) as UserData;
  const navigate = useNavigate();
  const isProductionMode = import.meta.env.PROD;

  useEffect(() => {
    if (isProductionMode && loginState && !accessToken?.length) {
      initializeAccessToken(setAccessToken, setModalType);
    }
  }, [isProductionMode, loginState, accessToken, setAccessToken, setModalType]);

  useEffect(() => {
    if (userData && !userData.nickname) {
      navigate(ROUTE_PATH.setup.setNickname);
    }
  }, [userData, navigate]);

  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center">
      <div className="h-[100%] w-[100%] bg-black sm:h-[50rem] sm:max-h-[90vh] sm:w-96">
        <Header />
        <main className="flex h-[calc(100%-124px)] flex-col items-center">
          <div className="relative overflow-y-auto" id="outlet-container">
            <Outlet />
            <ScrollTopButton />
          </div>
        </main>
        <BottomNavigationBar />
      </div>
      {modalType === 'accountHijacking' && <AccountHijackingModal />}
      {modalType === 'loginExpiration' && <LoginExpirationModal />}
      {modalType === 'logout' && <LogoutModal />}
    </div>
  );
};
