import { useAtom } from 'jotai';
import { useState, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { deleteAccountWithAuthenticationCode } from '@/apis/user/deleteAccountWithAuthenticationCode';
import { Modal } from '@/components/Modal';
import { ModalButton } from '@/components/Modal/ModalButton';
import { MainText, SubText, ModalText } from '@/components/Modal/ModalText';
import { ROUTE_PATH } from '@/constants';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';

import { Timer } from './Timer';

import type { ChangeEvent, Dispatch, SetStateAction, ForwardedRef } from 'react';

const MAX_INPUT_LENGTH = 6;

const TEXT_CONTENTS = {
  invalidAuthenticationCodeDescription: '유효하지 않은 인증번호입니다.',
  modal: {
    main: '회원탈퇴',
    sub: [
      'pullanner 회원탈퇴가 완료되었습니다.',
      '그 동안 Pullanner 서비스를 이용해주셔서 감사합니다.',
    ],
  },
} as const;

const BUTTON_STATE = {
  active: 'active',
  inactive: 'inactive',
} as const;

const VALIDATE_CODE_BUTTON_STYLE = {
  active: 'text-primary border border-primary',
  inactive: 'text-gray-500 border border-gray-500',
} as const;

const LIMIT_TIME = 3 * 60 * 1000;

type AuthenticationCodeInputProps = {
  isTimerActive: boolean;
  setSendCodeButtonActive: Dispatch<SetStateAction<boolean>>;
};

export const AuthenticationCodeInput = forwardRef<HTMLInputElement, AuthenticationCodeInputProps>(
  (
    { isTimerActive, setSendCodeButtonActive }: AuthenticationCodeInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [authenticationCode, setAuthenticationCode] = useState('');
    const [deleteAccountButtonActive, setDeleteAccountButtonActive] = useState(false);
    const [isDeleteRequestFailed, setShowInvalidAuthenticationCodeDescription] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
    const navigate = useNavigate();

    const deleteAccountButtonState = deleteAccountButtonActive
      ? BUTTON_STATE.active
      : BUTTON_STATE.inactive;

    const handleDeleteAccountButtonClick = async () => {
      if (!deleteAccountButtonActive) {
        return;
      }

      const isAuthenticationCodeVaild = await deleteAccountWithAuthenticationCode(
        authenticationCode,
        accessToken,
        setAccessToken,
      );

      if (isAuthenticationCodeVaild) {
        setShowModal(true);
      } else {
        setShowInvalidAuthenticationCodeDescription(true);
        setSendCodeButtonActive(true);
      }
    };

    const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const inputNumberValue = value.replace(/[^0-9]/g, '');
      setAuthenticationCode(inputNumberValue);
      setSendCodeButtonActive(false);
      setShowInvalidAuthenticationCodeDescription(false);

      if (inputNumberValue.length === MAX_INPUT_LENGTH) {
        setDeleteAccountButtonActive(true);
      }
    };

    const handleOkButtonClick = () => {
      setShowModal(false);
      navigate(ROUTE_PATH.roadmap.index);
    };

    return (
      <div className="pt-6">
        <div className="flex h-11 items-center justify-between rounded-[0.313rem] bg-[#161616] px-2.5">
          <input
            id="authenticationCode"
            type="text"
            className="w-[9.25rem] bg-transparent text-base placeholder:text-[#8D8D8D] focus:bg-transparent focus:outline-none"
            maxLength={MAX_INPUT_LENGTH}
            value={authenticationCode}
            ref={ref}
            onChange={handleInputChange}
            placeholder="인증코드 6자리 입력"
            aria-label="authenticationCode"
            aria-describedby="valdationResult"
          />
          {isTimerActive && <Timer limitTime={LIMIT_TIME} />}
          <button
            type="button"
            className={`h-[1.875rem] w-[4.5rem] rounded-[0.313rem] text-base ${VALIDATE_CODE_BUTTON_STYLE[deleteAccountButtonState]}`}
            onClick={handleDeleteAccountButtonClick}
          >
            회원탈퇴
          </button>
        </div>
        {isDeleteRequestFailed && (
          <p id="valdationResult" className="pt-3 text-sm text-[#FF5E62]">
            {TEXT_CONTENTS.invalidAuthenticationCodeDescription}
          </p>
        )}
        {showModal && (
          <Modal>
            <ModalText textStyle="flex flex-col items-center justify-center px-5 pt-5">
              <MainText textStyle="pb-2.5">{TEXT_CONTENTS.modal.main}</MainText>
              <div className="border-t-2 border-[#686868] pt-2.5 text-center">
                {TEXT_CONTENTS.modal.sub.map((text) => {
                  return <SubText key={text}>{text}</SubText>;
                })}
              </div>
            </ModalText>
            <div className="mb-5 flex w-full justify-center pt-2.5">
              <ModalButton
                text="확인"
                buttonStyle="w-[5.625rem] h-7"
                handler={handleOkButtonClick}
                isPrimary
              />
            </div>
          </Modal>
        )}
      </div>
    );
  },
);
