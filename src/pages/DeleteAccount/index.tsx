import { message } from 'antd';
import { useAtom } from 'jotai';
import { useRef } from 'react';

import { sendAuthenticationCode } from '@/apis/user';
import { SaveButton } from '@/components/buttons/SaveButton';
import { DeleteAccountSuccessModal } from '@/components/modals/DeleteAccountSuccessModal';
import { SuccessIcon } from '@/icons/SuccessIcon';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { isTimerActiveAtom } from '@/stores/atoms/isTimerActiveAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';

import { AuthenticationCodeInput } from './AuthenticationCodeInput';
import { DeleteAccountDescription } from './DeleteAccountDescription';

export const DeleteAccount = () => {
  const [isTimerActive, setTimerActive] = useAtom(isTimerActiveAtom);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const [modalType, setModalType] = useAtom(modalTypeAtom);
  const [messageApi, contextHolder] = message.useMessage();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendCodeButtonClick = async () => {
    if (isTimerActive) {
      return;
    }
    setTimerActive(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
    const isSuccess = await sendAuthenticationCode(accessToken, setAccessToken, setModalType);
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
        isActive={!isTimerActive}
        handleButtonClick={handleSendCodeButtonClick}
        width="100%"
        height="2.75rem"
        text="인증 코드 전송하기"
        className="text-sm"
      />
      <AuthenticationCodeInput ref={inputRef} />
      {contextHolder}
      {modalType === 'deleteAccountSuccess' && <DeleteAccountSuccessModal />}
    </div>
  );
};
