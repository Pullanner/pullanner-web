import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { Modal } from '@/components/modals/Modal';
import { ModalButton } from '@/components/modals/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/modals/Modal/ModalText';
import { ROUTE_PATH } from '@/constants';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom } from '@/stores/atoms/userDataAtom';

import { TEXT_CONTENTS } from '../../../pages/DeleteAccount/constants';

import type { Dispatch, SetStateAction } from 'react';

type DeleteAccountSuccessModalProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const DeleteAccountSuccessModal = ({ setShowModal }: DeleteAccountSuccessModalProps) => {
  const setLoginState = useSetAtom(loginStateAtom);
  const setUserData = useSetAtom(userDataAtom);
  const navigate = useNavigate();

  const handleOkButtonClick = () => {
    setShowModal(false);
    setLoginState(false);
    setUserData(null);
    navigate(ROUTE_PATH.roadmap.index);
  };

  return (
    <Modal>
      <ModalText>
        <MainText textStyle="border-b-2 border-[#686868] py-5">
          {TEXT_CONTENTS.modal.title}
        </MainText>
        <SubText textStyle="pt-6 pb-7">{TEXT_CONTENTS.modal.greeting}</SubText>
      </ModalText>
      <ModalButton text="확인" handler={handleOkButtonClick} isPrimary />
    </Modal>
  );
};
