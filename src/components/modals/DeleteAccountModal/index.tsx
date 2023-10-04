import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';

const MODAL_TEXT = {
  title: '회원 탈퇴',
  description: 'Pullanner의 모든 데이터가 삭제됩니다.',
  warning: '삭제된 데이터는 복구할 수 없습니다.',
} as const;

export const DeleteAccountModal = () => {
  const setModalType = useSetAtom(modalTypeAtom);
  const navigate = useNavigate();

  const handleOkButtonClick = () => {
    setModalType(null);
    navigate(ROUTE_PATH.deleteAccount);
  };

  const handleCancelButtonClick = () => {
    setModalType(null);
  };

  return (
    <AlertDialogPrimitive.Root defaultOpen>
      <AlertDialogPrimitive.Portal>
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
          <AlertDialogPrimitive.Overlay className="flex h-[100%] w-[100%] items-center justify-center bg-black/50 sm:h-[50rem] sm:max-h-[90vh] sm:w-96">
            <AlertDialogPrimitive.Content className="z-50 mx-5 flex w-full flex-col items-center justify-center overflow-hidden rounded-md bg-gray-5 text-center">
              <AlertDialogPrimitive.Title className="w-full py-5 text-base font-extrabold">
                {MODAL_TEXT.title}
              </AlertDialogPrimitive.Title>
              <AlertDialogPrimitive.Description className="w-full border-t-2 border-gray-3 px-5 pb-7 pt-6 text-sm leading-6">
                {MODAL_TEXT.description}
                <p className="font-extrabold">{MODAL_TEXT.warning}</p>
              </AlertDialogPrimitive.Description>
              <div className="flex w-full">
                <AlertDialogPrimitive.Action
                  aria-label="Close"
                  className="flex h-[3.125rem] w-full items-center justify-center gap-y-0.5 bg-gray-4 p-2 text-white"
                  onClick={handleOkButtonClick}
                >
                  <img
                    src="/assets/images/emotion/2.svg"
                    alt="emoticon"
                    className="mr-1.5 h-5 w-5"
                  />
                  <span className="text-sm">네</span>
                </AlertDialogPrimitive.Action>
                <AlertDialogPrimitive.Cancel
                  aria-label="Close"
                  className="flex h-[3.125rem] w-full items-center justify-center gap-y-0.5 bg-primary p-2 text-black"
                  onClick={handleCancelButtonClick}
                >
                  <img
                    src="/assets/images/emotion/5.svg"
                    alt="emoticon"
                    className="mr-1.5 h-5 w-5"
                  />
                  <span className="text-sm">아니오</span>
                </AlertDialogPrimitive.Cancel>
              </div>
            </AlertDialogPrimitive.Content>
          </AlertDialogPrimitive.Overlay>
        </div>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};
