import { useAtom } from 'jotai';
import { useState, useRef } from 'react';

import { sendAuthenticationCode } from '@/apis/user/sendAuthenticationCode';
import { SaveButton } from '@/components/buttons/SaveButton';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';

import { AuthenticationCodeInput } from './AuthenticationCodeInput';
import { DeleteAccountDescription } from './DeleteAccountDescription';

export const DeleteAccount = () => {
  const [isTimerActive, setTimerActive] = useState(false);
  const [isSendCodeButtonActive, setSendCodeButtonActive] = useState(true);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendCodeButtonClick = () => {
    sendAuthenticationCode(accessToken, setAccessToken);
    setTimerActive(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full px-5">
      <h1 className="pb-3.5 pt-5 text-xl font-extrabold">회원 탈퇴</h1>
      <DeleteAccountDescription />
      <SaveButton
        isActive={isSendCodeButtonActive}
        handleButtonClick={handleSendCodeButtonClick}
        width="100%"
        height="2.75rem"
        text="인증 코드 전송하기"
        className="text-sm"
      />
      <AuthenticationCodeInput
        isTimerActive={isTimerActive}
        setSendCodeButtonActive={setSendCodeButtonActive}
        ref={inputRef}
      />
    </div>
  );
};
