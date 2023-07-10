type SaveButtonProps = {
  isActive: 'active' | 'inactive';
  handleButtonClick: () => void;
};

const SAVE_BUTTON_STYLE = {
  active: 'bg-primary text-black',
  inactive: 'bg-[#4E4E4E] text-[#8A8A8A]',
} as const;

export const SaveButton = ({ isActive, handleButtonClick }: SaveButtonProps) => {
  return (
    <div className="flex w-full flex-row-reverse py-5">
      <button
        type="button"
        className={`h-8 w-20 rounded-[0.313rem] ${SAVE_BUTTON_STYLE[isActive]}`}
        onClick={handleButtonClick}
      >
        저장
      </button>
    </div>
  );
};
