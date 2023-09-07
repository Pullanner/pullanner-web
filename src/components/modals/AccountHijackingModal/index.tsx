import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/modals/Modal';
import { ModalButton } from '@/components/modals/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/modals/Modal/ModalText';
import { ROUTE_PATH, API_PATH } from '@/constants';
import { axiosInstance } from '@/lib/axios/instance';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

const MODAL_TEXT = {
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
    <Modal>
      <ModalText>
        <MainText textStyle="border-b-2 border-[#686868] py-5">{MODAL_TEXT.title}</MainText>
        <SubText textStyle="pt-6 pb-7">{MODAL_TEXT.description}</SubText>
      </ModalText>
      <ModalButton text="확인" handler={handleOkButtonClick} isPrimary />
    </Modal>
  );
};
