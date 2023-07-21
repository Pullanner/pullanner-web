type ModalButtonProps = {
  text: string;
  handler: () => void;
  imageUrl?: string;
  isPrimary?: boolean;
};

export const ModalButton = ({ text, handler, imageUrl, isPrimary }: ModalButtonProps) => {
  const primaryButtonStyle = isPrimary ? 'bg-primary text-black' : 'bg-[#373737] text-white';

  return (
    <button
      type="button"
      className={`${primaryButtonStyle} flex min-h-[2.5rem] min-w-[3.75rem] items-center justify-center gap-y-0.5 rounded-md bg-[#373737] p-2`}
      onClick={handler}
    >
      {imageUrl && <img src={imageUrl} alt="emoticon" className="mr-1.5 h-5 w-5" />}
      <span className="inline-block text-xs">{text}</span>
    </button>
  );
};
