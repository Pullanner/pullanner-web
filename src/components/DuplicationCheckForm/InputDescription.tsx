import {
  VALID_INPUT_STATUS,
  VALID_INPUT_DESCRIPTION,
  VALID_INPUT_DESCRIPTION_STYLE,
  INVALID_INPUT_STATUS,
  INVALID_INPUT_DESCRIPTION,
  INVALID_INPUT_DESCRIPTION_STYLE,
} from './constants';

export type InputStatusType = typeof VALID_INPUT_STATUS | typeof INVALID_INPUT_STATUS;

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
  return inputStatus === VALID_INPUT_STATUS ? (
    <DescriptionItem
      descriptionInfo={VALID_INPUT_DESCRIPTION}
      descriptionInfoStyle={VALID_INPUT_DESCRIPTION_STYLE}
    />
  ) : (
    <DescriptionItem
      descriptionInfo={INVALID_INPUT_DESCRIPTION}
      descriptionInfoStyle={INVALID_INPUT_DESCRIPTION_STYLE}
    />
  );
};
