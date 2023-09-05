import { useAtom, useSetAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { validateNickname } from '@/apis/user';
import { DimmedButton } from '@/components/buttons/DimmedButton';
import { SaveButton } from '@/components/buttons/SaveButton';
import { DuplicationCheckInput } from '@/components/inputs/DuplicationCheckInput';
import { ROUTE_PATH } from '@/constants';
import { usePostNickname } from '@/lib/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

import { NICKNAME_LENGTH } from './constants';

export const EditMyPage = () => {
  const userData = useAtomValue(userDataAtom) as UserData;
  const setUserData = useSetAtom(userDataAtom);
  const { nickname } = userData;
  const initialNicknameValue = nickname ?? '';
  const [nicknameValue, setNicknameValue] = useState(initialNicknameValue);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const { mutate } = usePostNickname(accessToken, setAccessToken, setModalType);
  const navigate = useNavigate();

  const handleSaveButtonClick = () => {
    if (nicknameValue.length) {
      mutate(nicknameValue);
      setUserData({ ...userData, nickname: nicknameValue });
      navigate(ROUTE_PATH.myPage.index);
    }
  };

  const handleWithdrwalButtonClick = () => {
    setModalType('deleteAccount');
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
          minLength={NICKNAME_LENGTH.min}
          maxLength={NICKNAME_LENGTH.max}
          setValidInputValue={setNicknameValue}
          validationFunction={validateNickname}
        />
      </div>

      <DimmedButton name="회원탈퇴" handler={handleWithdrwalButtonClick} />
    </div>
  );
};
