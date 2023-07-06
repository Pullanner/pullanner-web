import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { validateNickname } from '@/apis/user';
import { DimmedButton } from '@/components/DimmedButton';
import { DuplicationCheckForm } from '@/components/DuplicationCheckForm';
import { SaveButton } from '@/components/SaveButton';
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
  const { mutate } = useMutateNickname();
  const navigate = useNavigate();

  return (
    <div>
      <SaveButton
        isActive={nicknameValue.length ? 'active' : 'inactive'}
        handleButtonClick={() => {
          if (nicknameValue.length) {
            mutate(nicknameValue);
            navigate(ROUTE_PATH.myPage.index);
          }
        }}
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

      <DimmedButton name="회원탈퇴" />
    </div>
  );
};
