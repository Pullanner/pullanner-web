import { useAtom, useSetAtom, useAtomValue } from 'jotai';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { validateNickname } from '@/apis/user';
import { SaveButton } from '@/components/buttons/SaveButton';
import { DuplicationCheckInput } from '@/components/inputs/DuplicationCheckInput';
import { ROUTE_PATH } from '@/constants';
import { usePostNickname } from '@/lib/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

import { NICKNAME_LENGTH } from './constants';
import { ProfileImageSection } from './ProfileImageSection';

export const EditMyPage = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const setUserData = useSetAtom(userDataAtom);
  const userData = useAtomValue(userDataAtom) as UserData;
  const [nicknameValue, setNicknameValue] = useState('');
  const { mutate: postNickname } = usePostNickname(accessToken, setAccessToken, setModalType);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      setNicknameValue(userData.nickname);
    }
  }, [userData]);

  // TODO: 추후에 로딩페이지로 교체하기
  if (!userData) {
    return <div>Loading...</div>;
  }

  const { profileImage } = userData;

  const handleSaveButtonClick = () => {
    if (nicknameValue.length) {
      postNickname(nicknameValue);
      setUserData({ ...userData, nickname: nicknameValue });
      navigate(ROUTE_PATH.myPage.index);
    }
  };

  const handleWithdrawalButtonClick = () => {
    setModalType('deleteAccount');
  };

  return (
    <div>
      {profileImage && <ProfileImageSection profileImage={profileImage} />}
      <div className="pb-6">
        <DuplicationCheckInput
          inputName="닉네임"
          defaultValue={nicknameValue}
          minLength={NICKNAME_LENGTH.min}
          maxLength={NICKNAME_LENGTH.max}
          setValidInputValue={setNicknameValue}
          validationFunction={validateNickname}
        />
      </div>
      <div className="pb-44">
        <SaveButton
          isActive={!!nicknameValue.length}
          handleButtonClick={handleSaveButtonClick}
          width="21.875rem"
          height="2.75rem"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-sm text-gray-2 underline"
          onClick={handleWithdrawalButtonClick}
        >
          회원탈퇴
        </button>
      </div>
    </div>
  );
};
