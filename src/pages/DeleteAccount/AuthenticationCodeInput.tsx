import { useAtom, useAtomValue } from 'jotai';
import { useState, forwardRef } from 'react';

import { deleteAccountWithAuthenticationCode } from '@/apis/user/deleteAccountWithAuthenticationCode';
import { DeleteAccountSuccessModal } from '@/components/modals/DeleteAccountSuccessModal';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { isTimerActiveAtom } from '@/stores/atoms/isTimerActiveAtom';

import {
  MAX_INPUT_LENGTH,
  TEXT_CONTENTS,
  BUTTON_STATE,
  VALIDATE_CODE_BUTTON_STYLE,
  LIMIT_TIME,
} from './constants';
import { Timer } from './Timer';

import type { ChangeEvent, ForwardedRef } from 'react';

export const AuthenticationCodeInput = forwardRef<HTMLInputElement>(
  (_, ref: ForwardedRef<HTMLInputElement>) => {
    const [authenticationCode, setAuthenticationCode] = useState('');
    const [isDeleteAccountButtonActive, setDeleteAccountButtonActive] = useState(false);
    const [isDeleteRequestFailed, setShowInvalidAuthenticationCodeDescription] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
    const isTimerActive = useAtomValue(isTimerActiveAtom);

    const deleteAccountButtonState = isDeleteAccountButtonActive
      ? BUTTON_STATE.active
      : BUTTON_STATE.inactive;

    const handleDeleteAccountButtonClick = async () => {
      if (!isDeleteAccountButtonActive) {
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
      }
    };

    const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const inputNumberValue = value.replace(/[^0-9]/g, '');
      setAuthenticationCode(inputNumberValue);
      setShowInvalidAuthenticationCodeDescription(false);

      setDeleteAccountButtonActive(inputNumberValue.length === MAX_INPUT_LENGTH);
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
        {showModal && <DeleteAccountSuccessModal setShowModal={setShowModal} />}
      </div>
    );
  },
);
