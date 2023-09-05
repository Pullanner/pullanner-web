import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/modals/Modal';
import { ModalButton } from '@/components/modals/Modal/ModalButton';
import { MainText, ModalText } from '@/components/modals/Modal/ModalText';
import { API_PATH, ROUTE_PATH } from '@/constants';
import { axiosInstance } from '@/lib/axios/instance';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

const MODAL_TEXT = '정말 로그아웃하시겠습니까?';

export const LogoutModal = () => {
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

  const handleCancleButtonClick = () => {
    setModalType(null);
  };

  return (
    <Modal>
      <ModalText textStyle="py-7">
        <MainText>{MODAL_TEXT}</MainText>
      </ModalText>
      <div className="flex w-full">
        <ModalButton text="네" handler={handleOkButtonClick} />
        <ModalButton text="아니오" handler={handleCancleButtonClick} isPrimary />
      </div>
    </Modal>
  );
};
