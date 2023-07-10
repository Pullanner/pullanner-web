type DimmedButtonProps = {
  name: string;
  handler?: () => void;
};

export const DimmedButton = ({ name, handler }: DimmedButtonProps) => {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handler}
        type="button"
        className="h-8 w-[18.125rem] rounded-[0.313rem] border border-gray-500 text-xs text-gray-500"
      >
        {name}
      </button>
    </div>
  );
};
