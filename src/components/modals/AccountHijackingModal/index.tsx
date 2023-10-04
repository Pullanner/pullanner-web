import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH, API_PATH } from '@/constants';
import { axiosInstance } from '@/lib/axios/instance';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

const MODAL_TEXT_CONTENTS = {
  title: '계정이 도용된 것으로 의심됩니다.',
  description: '계정 보호를 위해 로그아웃되었습니다.',
};

export const AccountHijackingModal = () => {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const setUserData = useSetAtom(userDataAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const navigate = useNavigate();

  const handleOkButtonClick = () => {
    if (import.meta.env.PROD) {
      axiosInstance.delete(API_PATH.tokens);
    }
    setLoginState(false);
    setAccessToken('');
    setUserData(null);
    setModalType(null);
    navigate(ROUTE_PATH.root);
  };

  return (
    <AlertDialogPrimitive.Root defaultOpen>
      <AlertDialogPrimitive.Portal>
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
          <AlertDialogPrimitive.Overlay className="flex h-[100%] w-[100%] items-center justify-center bg-black/50 sm:h-[50rem] sm:max-h-[90vh] sm:w-96">
            <AlertDialogPrimitive.Content className="z-50 mx-5 flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-gray-5 text-center">
              <AlertDialogPrimitive.Title className="w-full py-5 text-base font-extrabold">
                {MODAL_TEXT_CONTENTS.title}
              </AlertDialogPrimitive.Title>
              <AlertDialogPrimitive.Description className="w-full border-t-2 border-gray-3 px-5 pb-7 pt-6 text-sm leading-6">
                {MODAL_TEXT_CONTENTS.description}
              </AlertDialogPrimitive.Description>
              <div className="flex w-full">
                <AlertDialogPrimitive.Action
                  aria-label="Close"
                  className="flex h-[3.125rem] w-full items-center justify-center gap-y-0.5 bg-primary p-2 text-black"
                  onClick={handleOkButtonClick}
                >
                  <span className="text-sm">확인</span>
                </AlertDialogPrimitive.Action>
              </div>
            </AlertDialogPrimitive.Content>
          </AlertDialogPrimitive.Overlay>
        </div>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};
