type SaveButtonProps = {
  isActive: 'active' | 'inactive';
  handleButtonClick: () => void;
  width: string;
  height: string;
  text?: string;
  className?: string;
};

export const SaveButton = ({
  isActive,
  handleButtonClick,
  width,
  height,
  text = '저장',
  className,
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
    >
      {text}
    </button>
  );
};
