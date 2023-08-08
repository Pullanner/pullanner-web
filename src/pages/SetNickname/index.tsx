import { useAtom, useSetAtom, useAtomValue } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { validateNickname } from '@/apis/user';
import { SaveButton } from '@/components/buttons/SaveButton';
import { DuplicationCheckInput } from '@/components/DuplicationCheckInput';
import { Headline } from '@/components/Headline';
import { ROUTE_PATH } from '@/constants';
import { useMutateNickname } from '@/lib/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

const INPUT_LENGTH = {
  min: 2,
  max: 8,
} as const;

const DESCRIPTION_TEXT = [
  'Pullanner에 오신 것을 환영합니다!',
  '사용하실 닉네임을 알려주세요',
] as const;

export const SetNickname = () => {
  const [nickname, setNickname] = useState('');
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const { mutate } = useMutateNickname(accessToken, setAccessToken);
  const userData = useAtomValue(userDataAtom) as UserData;
  const setUserData = useSetAtom(userDataAtom);
  const navigate = useNavigate();

  const handleSaveButtonClick = () => {
    if (nickname.length) {
      mutate(nickname);
      setUserData({ ...userData, nickname });
      navigate(ROUTE_PATH.setup.selectWorkout);
    }
  };

  return (
    <div className="flex flex-col items-center px-5">
      <Headline descriptions={DESCRIPTION_TEXT} classNames="pt-[6.25rem]" />
      <figure className="pb-9 pt-12">
        <img src="/assets/images/greeting-bongcheol.svg" alt="greetingBongcheol" />
      </figure>
      <DuplicationCheckInput
        inputName="닉네임"
        minLength={INPUT_LENGTH.min}
        maxLength={INPUT_LENGTH.max}
        setValidInputValue={setNickname}
        validationFunction={validateNickname}
      />
      <div className="flex justify-center pt-44">
        <SaveButton
          isActive={!!nickname.length}
          handleButtonClick={handleSaveButtonClick}
          width="21.875rem"
          height="2.75rem"
          text="다음으로 가기"
          className="font-extrabold"
        />
      </div>
    </div>
  );
};
