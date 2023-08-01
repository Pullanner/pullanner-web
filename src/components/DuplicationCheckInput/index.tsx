import { useAtom } from 'jotai';
import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';

import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';

import { VALID_INPUT, INVALID_INPUT, DUPLICATION_CHECK_BUTTON_STYLE } from './constants';
import { InputStatusType, InputDescription } from './InputDescription';

type AsyncValidateFunction = (
  nickname: string,
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
) => Promise<boolean>;

type DuplicationCheckInputProps = {
  inputName: string;
  defaultValue?: string;
  minLength: number;
  maxLength: number;
  setValidInputValue: Dispatch<SetStateAction<string>>;
  validationFunction: AsyncValidateFunction;
};

const BUTTON_STATE = {
  active: 'active',
  inactive: 'inactive',
} as const;

export const DuplicationCheckInput = ({
  inputName,
  defaultValue = '',
  minLength,
  maxLength,
  setValidInputValue,
  validationFunction,
}: DuplicationCheckInputProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [inputStatus, setInputStatus] = useState<InputStatusType>(INVALID_INPUT.status);
  const [showValidationResult, setValidationResultShowed] = useState(false);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const duplicationCheckButtonState =
    inputValue.length >= minLength ? BUTTON_STATE.active : BUTTON_STATE.inactive;
  let isFirstTyping = true;

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (isFirstTyping) {
      setValidInputValue('');
      isFirstTyping = false;
    }
    setInputValue(value);
    setValidationResultShowed(false);
  };

  const handleDuplicationCheckButtonClick = async () => {
    try {
      if (duplicationCheckButtonState === BUTTON_STATE.inactive) {
        return;
      }
      const isInputNotDuplicated = await validationFunction(
        inputValue,
        accessToken,
        setAccessToken,
      );
      if (isInputNotDuplicated) {
        setInputStatus(VALID_INPUT.status);
        setValidInputValue(inputValue);
      } else {
        setInputStatus(INVALID_INPUT.status);
        setValidInputValue('');
      }
      setValidationResultShowed(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2.5 inline-block text-sm" htmlFor={inputName}>
        {inputName}
      </label>
      <div className="flex h-11 items-center justify-between rounded-[0.313rem] bg-[#161616] px-3">
        <input
          id={inputName}
          name={inputName}
          type="text"
          className="bg-transparent text-base focus:bg-transparent focus:outline-none"
          value={inputValue}
          onChange={handleInputChange}
          minLength={minLength}
          maxLength={maxLength}
          aria-describedby="patternDescription"
        />
        <button
          type="button"
          className={`h-[1.875rem] w-[4.875rem] rounded-[0.313rem] text-base ${DUPLICATION_CHECK_BUTTON_STYLE[duplicationCheckButtonState]}`}
          onClick={handleDuplicationCheckButtonClick}
        >
          중복확인
        </button>
      </div>
      <InputDescription
        inputName={inputName}
        minLength={minLength}
        maxLength={maxLength}
        showValidationResult={showValidationResult}
        inputStatus={inputStatus}
      />
    </div>
  );
};
