import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/modals/Modal';
import { ModalButton } from '@/components/modals/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/modals/Modal/ModalText';
import { ROUTE_PATH } from '@/constants';

const MODAL_TEXT = {
  title: '회원 탈퇴',
  description: 'Pullanner의 모든 데이터가 삭제됩니다.',
  warning: '삭제된 데이터는 복구할 수 없습니다.',
} as const;

type DeleteAccountModalProps = {
  handleCancleButtonClick: () => void;
};

export const DeleteAccountModal = ({ handleCancleButtonClick }: DeleteAccountModalProps) => {
  const navigate = useNavigate();

  const handleOkButtonClick = () => {
    navigate(ROUTE_PATH.deleteAccount);
  };

  return (
    <Modal>
      <ModalText>
        <MainText textStyle="py-5 border-b-2 border-[#686868]">{MODAL_TEXT.title}</MainText>
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
          handler={handleCancleButtonClick}
          imageUrl="/assets/images/emotion/5.svg"
          isPrimary
        />
      </div>
    </Modal>
  );
};
