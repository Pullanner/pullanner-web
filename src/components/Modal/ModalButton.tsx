type ModalButtonProps = {
  text: string;
  handler: () => void;
  imageUrl?: string;
  isPrimary?: boolean;
  buttonStyle?: string;
};

export const ModalButton = ({
  text,
  handler,
  imageUrl,
  isPrimary,
  buttonStyle,
}: ModalButtonProps) => {
  const primaryButtonStyle = isPrimary ? 'bg-primary text-black' : 'bg-[#373737] text-white';

  return (
    <button
      type="button"
      className={`${primaryButtonStyle} ${buttonStyle} flex h-[3.125rem] w-full items-center justify-center gap-y-0.5 bg-[#373737] p-2`}
      onClick={handler}
    >
      {imageUrl && <img src={imageUrl} alt="emoticon" className="mr-1.5 h-5 w-5" />}
      <span className="text-sm">{text}</span>
    </button>
  );
};
