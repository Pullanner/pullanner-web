import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/modals/Modal';
import { ModalButton } from '@/components/modals/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/modals/Modal/ModalText';
import { ROUTE_PATH } from '@/constants';

import { MODAL_TEXT } from './constants';

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
