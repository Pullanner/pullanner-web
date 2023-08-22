import { message } from 'antd';
import { useAtom } from 'jotai';
import { useState, useRef } from 'react';

import { sendAuthenticationCode } from '@/apis/user/sendAuthenticationCode';
import { SaveButton } from '@/components/buttons/SaveButton';
import { SuccessIcon } from '@/components/icons/SuccessIcon';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { timerStateAtom } from '@/stores/atoms/timerStateAtom';

import { AuthenticationCodeInput } from './AuthenticationCodeInput';
import { DeleteAccountDescription } from './DeleteAccountDescription';

export const DeleteAccount = () => {
  const [timerState, setTimerState] = useAtom(timerStateAtom);
  const [isSendCodeButtonActive, setSendCodeButtonActive] = useState(true);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const [messageApi, contextHolder] = message.useMessage();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendCodeButtonClick = async () => {
    if (timerState.isVisible) {
      setTimerState({ ...timerState, reset: true });
    } else {
      setTimerState({ ...timerState, isVisible: true });
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
    const isSuccess = await sendAuthenticationCode(accessToken, setAccessToken);
    if (isSuccess) {
      messageApi.open({
        type: 'success',
        content: '이메일로 인증 코드가 발송되었습니다.',
        duration: 2,
        style: {
          marginTop: '75vh',
        },
        icon: SuccessIcon(),
      });
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
      <AuthenticationCodeInput setSendCodeButtonActive={setSendCodeButtonActive} ref={inputRef} />
      {contextHolder}
    </div>
  );
};
