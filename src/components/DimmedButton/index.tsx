type DimmedButtonProps = {
  name: string;
  handler?: () => void;
};

export const DimmedButton = ({ name, handler }: DimmedButtonProps) => {
  return (
    <div className="flex justify-center item-center">
      <button
        onClick={handler}
        type="button"
        className="w-[18.125rem] h-8 border border-gray-500 rounded-[0.313rem] text-xs text-gray-500"
      >
        {name}
      </button>
    </div>
  );
};
