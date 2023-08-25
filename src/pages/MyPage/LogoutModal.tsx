import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/Modal';
import { ModalButton } from '@/components/Modal/ModalButton';
import { MainText, ModalText } from '@/components/Modal/ModalText';
import { API_PATH, ROUTE_PATH } from '@/constants';
import { axiosInstance } from '@/lib/axios/instance';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

import { MODAL_TEXT } from './constants';

type LogoutModalProps = {
  handleCancleButtonClick: () => void;
};

export const LogoutModal = ({ handleCancleButtonClick }: LogoutModalProps) => {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const setUserData = useSetAtom(userDataAtom);
  const navigate = useNavigate();

  const handleOkButtonClick = () => {
    if (import.meta.env.PROD) {
      axiosInstance.delete(API_PATH.tokens);
    }
    setLoginState(false);
    setAccessToken('');
    setUserData(null);
    navigate(ROUTE_PATH.root);
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
