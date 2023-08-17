import { useState, forwardRef } from 'react';

import { Timer } from './Timer';

import type { ChangeEvent, Dispatch, SetStateAction, ForwardedRef } from 'react';

const MAX_INPUT_LENGTH = 6;

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
    const [code, setCode] = useState('');
    const [validateCodeButtonActive, setValidateCodeButtonActive] = useState(false);

    const validateCodeButtonState = validateCodeButtonActive
      ? BUTTON_STATE.active
      : BUTTON_STATE.inactive;

    const handleValidateCodeButtonClick = () => {
      if (!validateCodeButtonActive) {
        return;
      }
      console.log(code);
    };

    const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      const numberValue = value.replace(/[^0-9]/g, '');
      setCode(numberValue);
      setSendCodeButtonActive(false);
      if (numberValue.length === MAX_INPUT_LENGTH) {
        setValidateCodeButtonActive(true);
      }
    };

    return (
      <div className="pt-6">
        <div className="flex h-11 items-center justify-between rounded-[0.313rem] bg-[#161616] px-2.5">
          <input
            id="authenticationCode"
            type="text"
            className="w-[9.25rem] bg-transparent text-base placeholder:text-[#8D8D8D] focus:bg-transparent focus:outline-none"
            maxLength={MAX_INPUT_LENGTH}
            value={code}
            ref={ref}
            onChange={handleInputChange}
            placeholder="인증코드 6자리 입력"
            aria-label="authenticationCode"
            aria-describedby="valdationResult"
          />
          {isTimerActive && <Timer limitTime={LIMIT_TIME} />}
          <button
            type="button"
            className={`h-[1.875rem] w-[4.5rem] rounded-[0.313rem] text-base ${VALIDATE_CODE_BUTTON_STYLE[validateCodeButtonState]}`}
            onClick={handleValidateCodeButtonClick}
          >
            회원탈퇴
          </button>
        </div>
      </div>
    );
  },
);
