import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/modals/Modal';
import { ModalButton } from '@/components/modals/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/modals/Modal/ModalText';
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
    <Modal>
      <ModalText>
        <MainText textStyle="py-5 border-b-2 border-gray-3">{MODAL_TEXT.title}</MainText>
        <SubText textStyle="pt-5 pb-7">
          <p>{MODAL_TEXT.description}</p>
          <p className="font-extrabold">{MODAL_TEXT.warning}</p>
        </SubText>
      </ModalText>
      <div className="flex w-full">
        <ModalButton
          text="네"
          handler={handleOkButtonClick}
          imageUrl="/assets/images/emotion/2.svg"
        />
        <ModalButton
          text="아니오"
          handler={handleCancelButtonClick}
          imageUrl="/assets/images/emotion/5.svg"
          isPrimary
        />
      </div>
    </Modal>
  );
};
