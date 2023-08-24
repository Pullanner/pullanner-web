import { useAtom, useSetAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { validateNickname } from '@/apis/user';
import { DimmedButton } from '@/components/buttons/DimmedButton';
import { SaveButton } from '@/components/buttons/SaveButton';
import { DuplicationCheckInput } from '@/components/DuplicationCheckInput';
import { Modal } from '@/components/Modal';
import { ModalButton } from '@/components/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/Modal/ModalText';
import { ROUTE_PATH } from '@/constants';
import { useMutateNickname } from '@/lib/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

import { INPUT_LENGTH, MODAL_TEXT } from './constants';

export const EditMyPage = () => {
  const userData = useAtomValue(userDataAtom) as UserData;
  const setUserData = useSetAtom(userDataAtom);
  const { nickname } = userData;
  const initialNicknameValue = nickname ?? '';
  const [nicknameValue, setNicknameValue] = useState(initialNicknameValue);
  const [showModal, setShowModal] = useState(false);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const { mutate } = useMutateNickname(accessToken, setAccessToken);
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
      <div className="flex w-full flex-row-reverse py-5">
        <SaveButton
          isActive={!!nicknameValue.length}
          handleButtonClick={handleSaveButtonClick}
          width="5rem"
          height="2rem"
        />
      </div>
      <div className="pb-[24.5rem]">
        <DuplicationCheckInput
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
      )}
    </div>
  );
};
