import { useSetAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { validateNickname } from '@/apis/user';
import { DimmedButton } from '@/components/buttons/DimmedButton';
import { SaveButton } from '@/components/buttons/SaveButton';
import { DuplicationCheckForm } from '@/components/DuplicationCheckForm';
import { Modal } from '@/components/Modal';
import { ModalButton } from '@/components/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/Modal/ModalText';
import { ROUTE_PATH } from '@/constants';
import { useMutateNickname } from '@/lib/react-query/useUserData';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

const INPUT_LENGTH = {
  min: 2,
  max: 15,
} as const;

export const EditMyPage = () => {
  const userData = useAtomValue(userDataAtom) as UserData;
  const setUserData = useSetAtom(userDataAtom);
  const { nickname } = userData;
  const initialNicknameValue = nickname ?? '';
  const [nicknameValue, setNicknameValue] = useState(initialNicknameValue);
  const [showModal, setShowModal] = useState(false);
  const { mutate } = useMutateNickname();
  const navigate = useNavigate();

  const handleSaveButtonClick = () => {
    if (nicknameValue.length) {
      mutate(nicknameValue);
      setUserData({ ...userData, nickname: nicknameValue });
      navigate(ROUTE_PATH.myPage.index);
    }
  };

  const handleWithdrwalButtonClick = () => {
    setShowModal(true);
  };

  const handleOkButtonClick = () => {
    navigate(ROUTE_PATH.deleteAccount);
  };

  const handleCancleButtonClick = () => {
    setShowModal(false);
  };

  return (
    <div>
      <SaveButton
        isActive={nicknameValue.length ? 'active' : 'inactive'}
        handleButtonClick={handleSaveButtonClick}
      />
      <div className="pb-[24.5rem]">
        <DuplicationCheckForm
          inputName="닉네임"
          defaultValue={nickname}
          minLength={INPUT_LENGTH.min}
          maxLength={INPUT_LENGTH.max}
          setValidInputValue={setNicknameValue}
          validationFunction={validateNickname}
        />
      </div>

      <DimmedButton name="회원탈퇴" handler={handleWithdrwalButtonClick} />
      {showModal && (
        <Modal>
          <ModalText textStyle="p-5">
            <MainText textStyle="text-red-400">정말 탈퇴하시겠습니까?</MainText>
            <SubText>
              회원 탈퇴시 Pullanner의 모든 데이터가 삭제됩니다. 삭제된 데이터는 복구할 수 없습니다.
            </SubText>
          </ModalText>
          <div className="mb-2 flex w-full justify-around p-3">
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
      )}
    </div>
  );
};
