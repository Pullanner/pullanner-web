import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';

import { VALID_INPUT, INVALID_INPUT, DUPLICATION_CHECK_BUTTON_STYLE } from './constants';
import { InputStatusType, InputDescription } from './InputDescription';

type AsyncValidateFunction<T> = (value: T) => Promise<boolean>;

type DuplicationCheckFormProps = {
  inputName: string;
  defaultValue?: string;
  minLength: number;
  maxLength: number;
  setValidInputValue: Dispatch<SetStateAction<string>>;
  validationFunction: AsyncValidateFunction<string>;
};

export const DuplicationCheckForm = ({
  inputName,
  defaultValue = '',
  minLength,
  maxLength,
  setValidInputValue,
  validationFunction,
}: DuplicationCheckFormProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [inputStatus, setInputStatus] = useState<InputStatusType>(INVALID_INPUT.status);
  const [showValidationResult, setValidationResultShowed] = useState(false);
  const DuplicationCheckButtonState = inputValue.length >= minLength ? 'active' : 'inactive';
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
      const isInputNotDuplicated = await validationFunction(inputValue);
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
    <form className="flex flex-col">
      <label className="inline-block mb-2.5 text-sm" htmlFor={inputName}>
        {inputName}
      </label>
      <div className="flex h-11 justify-between items-center px-3 rounded-[0.313rem] bg-[#161616]">
        <input
          id={inputName}
          name={inputName}
          type="text"
          className="text-base focus:outline-none bg-transparent focus:bg-transparent"
          value={inputValue}
          onChange={handleInputChange}
          minLength={minLength}
          maxLength={maxLength}
          aria-describedby="patternDescription"
        />
        <button
          type="button"
          className={`w-[4.875rem] h-[1.875rem] rounded-[0.313rem] text-base ${DUPLICATION_CHECK_BUTTON_STYLE[DuplicationCheckButtonState]}`}
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
    </form>
  );
};
