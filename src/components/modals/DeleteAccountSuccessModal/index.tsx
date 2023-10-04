import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

const MODAL_TEXT_CONTENTS = {
  title: '회원 탈퇴가 완료되었습니다.',
  description: '그 동안 Pullanner 서비스를 이용해주셔서 감사합니다.',
} as const;

export const DeleteAccountSuccessModal = () => {
  const setLoginState = useSetAtom(loginStateAtom);
  const setUserData = useSetAtom(userDataAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const navigate = useNavigate();

  const handleOkButtonClick = () => {
    setLoginState(false);
    setUserData(null);
    setModalType(null);
    navigate(ROUTE_PATH.roadmap.index);
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
