import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/modals/Modal';
import { ModalButton } from '@/components/modals/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/modals/Modal/ModalText';
import { ROUTE_PATH } from '@/constants';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';

const MODAL_TEXT = {
  title: '로그인이 만료되었습니다.',
  description: '다시 로그인해주세요.',
};

export const LoginExpirationModal = () => {
  const setModalType = useSetAtom(modalTypeAtom);
  const navigate = useNavigate();

  const handleOkButtonClick = () => {
    setModalType(null);
    navigate(ROUTE_PATH.login);
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
