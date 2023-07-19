import { useRef, useLayoutEffect } from 'react';

import type { RefObject } from 'react';

type ModalButtonProps = {
  text: string;
  handler: () => void;
  imageUrl?: string;
  isFocused?: boolean;
};

export const ModalButton = ({ text, handler, imageUrl, isFocused }: ModalButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>() as RefObject<HTMLButtonElement>;
  useLayoutEffect(() => {
    if (isFocused && buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [isFocused]);

  return (
    <button
      type="button"
      className="flex h-14 w-20 cursor-pointer flex-col items-center justify-center gap-y-0.5 rounded-md bg-[#373737] focus:bg-primary focus:text-black"
      onClick={handler}
      ref={buttonRef}
    >
      {imageUrl && <img src={imageUrl} alt="emoticon" className="h-5 w-5" />}
      <span className="inline-block text-sm">{text}</span>
    </button>
  );
};
