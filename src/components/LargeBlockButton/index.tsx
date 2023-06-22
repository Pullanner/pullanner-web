type LargeBlockButtonProps = {
  name: string;
  handler?: () => void;
};

export const LargeBlockButton = ({ name, handler }: LargeBlockButtonProps) => {
  return (
    <button
      onClick={handler}
      type="button"
      className="fixed bottom-36 w-[18.125rem] h-8 border border-gray-500 rounded-[0.313rem] text-xs text-gray-500"
    >
      {name}
    </button>
  );
};
