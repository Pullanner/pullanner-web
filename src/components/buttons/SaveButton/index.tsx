type SaveButtonProps = {
  isActive: boolean;
  handleButtonClick: () => void;
  width: string;
  height: string;
  text?: string;
  className?: string;
  isDisabled?: boolean;
};

export const SaveButton = ({
  isActive,
  handleButtonClick,
  width,
  height,
  text = '저장',
  className,
  isDisabled = false,
}: SaveButtonProps) => {
  return (
    <button
      type="button"
      className={`rounded-[0.313rem] bg-primary text-black ${className}`}
      onClick={handleButtonClick}
      style={{
        opacity: isActive ? 1 : 0.5,
        width,
        height,
      }}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
