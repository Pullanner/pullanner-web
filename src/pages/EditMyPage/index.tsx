import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { validateNickname } from '@/apis/user';
import { DimmedButton } from '@/components/buttons/DimmedButton';
import { SaveButton } from '@/components/buttons/SaveButton';
import { DuplicationCheckForm } from '@/components/DuplicationCheckForm';
import { Modal } from '@/components/Modal';
import { ModalButton } from '@/components/Modal/ModalButton';
import { PromptText } from '@/components/Modal/PromptText';
import { ROUTE_PATH } from '@/constants';
import { useMutateNickname } from '@/lib/react-query/useUserData';

const INPUT_LENGTH = {
  min: 2,
  max: 15,
} as const;

export const EditMyPage = () => {
  const {
    state: { nickname },
  } = useLocation();
  const [nicknameValue, setNicknameValue] = useState(nickname);
  const [showModal, setShowModal] = useState(false);
  const { mutate } = useMutateNickname();
  const navigate = useNavigate();

  const handleSaveButtonClick = () => {
    if (nicknameValue.length) {
      mutate(nicknameValue);
      navigate(ROUTE_PATH.myPage.index);
    }
  };

  const handleWithdrwalButtonClick = () => {
    setShowModal(true);
  };

  const handleOkButtonClick = () => {
    navigate('/withdrawal');
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
      <div className="mt-[2.125rem] pb-[24.5rem]">
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
          <PromptText>
            <p className="mb-2.5 text-xs">
              회원 탈퇴시 Pullanner의<span className="font-extrabold">모든 데이터가 삭제</span>
              됩니다.
            </p>
            <p className="text-xs">정말 탈퇴하시겠습니까?</p>
          </PromptText>
          <div className="mt-4 flex w-full justify-around">
            <ModalButton
              text="네"
              handler={handleOkButtonClick}
              imageUrl="/assets/images/emotion/2.svg"
            />
            <ModalButton
              text="아니오"
              handler={handleCancleButtonClick}
              imageUrl="/assets/images/emotion/5.svg"
              isFocused
            />
          </div>
        </Modal>
      )}
    </div>
  );
};
