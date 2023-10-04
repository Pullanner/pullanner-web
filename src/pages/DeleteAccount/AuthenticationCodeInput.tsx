import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useState, forwardRef } from 'react';

import { deleteAccountWithAuthenticationCode } from '@/apis/user';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { isTimerActiveAtom } from '@/stores/atoms/isTimerActiveAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';

import {
  MAX_INPUT_LENGTH,
  INVALID_AUTHORIZATION_CODE_DESCRIPTION,
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
    const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
    const isTimerActive = useAtomValue(isTimerActiveAtom);
    const setModalType = useSetAtom(modalTypeAtom);

    const deleteAccountButtonState = isDeleteAccountButtonActive
      ? BUTTON_STATE.active
      : BUTTON_STATE.inactive;

    const handleDeleteAccountButtonClick = async () => {
      if (!isDeleteAccountButtonActive) {
        return;
      }

      const isAuthenticationCodeValid = await deleteAccountWithAuthenticationCode(
        authenticationCode,
        accessToken,
        setAccessToken,
        setModalType,
      );

      if (isAuthenticationCodeValid) {
        setModalType('deleteAccountSuccess');
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
        <div className="flex h-11 items-center justify-between rounded-[0.313rem] bg-gray-5 px-2.5">
          <input
            id="authenticationCode"
            type="text"
            className="w-[9.25rem] bg-transparent text-base placeholder:text-gray-2 focus:bg-transparent focus:outline-none"
            maxLength={MAX_INPUT_LENGTH}
            value={authenticationCode}
            ref={ref}
            onChange={handleInputChange}
            placeholder="인증코드 6자리 입력"
            aria-label="authenticationCode"
            aria-describedby="validationResult"
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
          <p id="validationResult" className="pt-3 text-sm text-invalid">
            {INVALID_AUTHORIZATION_CODE_DESCRIPTION}
          </p>
        )}
      </div>
    );
  },
);
