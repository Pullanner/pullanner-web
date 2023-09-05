import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { BottomNavigationBar } from '@/components/BottomNavigationBar';
import { ScrollTopButton } from '@/components/buttons/ScrollTopButton';
import { Header } from '@/components/Header';
import { AccountHijackingModal } from '@/components/modals/AccountHijackingModal';
import { DeleteAccountModal } from '@/components/modals/DeleteAccountModal';
import { DeleteAccountSuccessModal } from '@/components/modals/DeleteAccountSuccessModal';
import { LoginExpirationModal } from '@/components/modals/LoginExpirationModal';
import { LogoutModal } from '@/components/modals/LogoutModal';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { initializeAccessToken } from '@/utils/initializeAccessToken';

export const Root = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const loginState = useAtomValue(loginStateAtom) as boolean;
  const modalType = useAtomValue(modalTypeAtom);
  const isProductionMode = import.meta.env.PROD;

  useEffect(() => {
    if (isProductionMode && loginState && !accessToken.length) {
      initializeAccessToken(setAccessToken);
    }
  }, [isProductionMode, loginState, accessToken, setAccessToken]);

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
      {modalType === 'deleteAccount' && <DeleteAccountModal />}
      {modalType === 'deleteAccountSuccess' && <DeleteAccountSuccessModal />}
      {modalType === 'logout' && <LogoutModal />}
      {modalType === 'loginExpiration' && <LoginExpirationModal />}
      {modalType === 'accountHijacking' && <AccountHijackingModal />}
    </div>
  );
};
