import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/modals/Modal';
import { ModalButton } from '@/components/modals/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/modals/Modal/ModalText';
import { ROUTE_PATH } from '@/constants';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

const MODAL_TEXT = {
  title: '회원 탈퇴가 완료되었습니다',
  greeting: '그동안 Pullanner를 이용해주셔서 감사합니다.',
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
    <Modal>
      <ModalText>
        <MainText textStyle="border-b-2 border-gray-3 py-5">{MODAL_TEXT.title}</MainText>
        <SubText textStyle="pt-6 pb-7">{MODAL_TEXT.greeting}</SubText>
      </ModalText>
      <ModalButton text="확인" handler={handleOkButtonClick} isPrimary />
    </Modal>
  );
};
