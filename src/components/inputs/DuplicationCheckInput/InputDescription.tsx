import { VALID_INPUT, INVALID_INPUT } from './constants';

export type InputStatusType = typeof VALID_INPUT.status | typeof INVALID_INPUT.status;

type DescriptionItemProps = {
  descriptionInfo: string;
  descriptionInfoStyle?: string;
};

type InputDescriptionProps = {
  inputName: string;
  minLength: number;
  maxLength: number;
  showValidationResult: boolean;
  inputStatus: InputStatusType;
};

const DescriptionItem = ({ descriptionInfo, descriptionInfoStyle }: DescriptionItemProps) => {
  return (
    <span id="patternDescription" className={`inline-block pt-2.5 text-xs ${descriptionInfoStyle}`}>
      {descriptionInfo}
    </span>
  );
};

export const InputDescription = ({
  inputName,
  minLength,
  maxLength,
  showValidationResult,
  inputStatus,
}: InputDescriptionProps) => {
  if (!showValidationResult) {
    return (
      <DescriptionItem
        descriptionInfo={`${inputName}은 ${minLength}자 이상 ${maxLength}자 이하로 입력하세요`}
      />
    );
  }

  return inputStatus === VALID_INPUT.status ? (
    <DescriptionItem
      descriptionInfo={VALID_INPUT.description.text}
      descriptionInfoStyle={VALID_INPUT.description.style}
    />
  ) : (
    <DescriptionItem
      descriptionInfo={INVALID_INPUT.description.text}
      descriptionInfoStyle={INVALID_INPUT.description.style}
    />
  );
};
