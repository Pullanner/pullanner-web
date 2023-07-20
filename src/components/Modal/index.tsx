import { createPortal } from 'react-dom';

import type { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return createPortal(
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
      <div className="flex h-[100%] w-[100%] items-center justify-center bg-black/50 sm:h-[50rem] sm:max-h-[90vh] sm:w-96">
        <div className="z-50 flex flex-col items-center justify-center rounded-md bg-[#202020] p-5">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('portal-root') as HTMLElement,
  );
};
