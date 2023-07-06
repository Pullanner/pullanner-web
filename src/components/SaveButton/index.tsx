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
    <div className="flex flex-row-reverse w-[100%] py-5">
      <button
        type="button"
        className={`w-20 h-8 rounded-[0.313rem] ${SAVE_BUTTON_STYLE[isActive]}`}
        onClick={handleButtonClick}
      >
        저장
      </button>
    </div>
  );
};
