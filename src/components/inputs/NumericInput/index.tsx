import { ChangeEvent } from 'react';

type NumericInputProps = {
  inputName: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
};

export const NumericInput = ({ inputName, onChange, value, maxLength }: NumericInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const regex = /^[0-9]+$/;
    if (inputValue === '' || (regex.test(inputValue) && inputValue.length <= maxLength)) {
      onChange(inputValue);
    }
  };

  const handleBlur = () => {
    onChange(value.replace(/0*(\d+)/, '$1'));
  };

  return (
    <input
      name={inputName}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      className="w-10 rounded-md bg-gray-4 p-1 text-center"
      required
    />
  );
};
