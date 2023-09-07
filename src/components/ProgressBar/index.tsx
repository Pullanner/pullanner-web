type ProgressBarProps = {
  percent: number;
};

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <>
      <span className="float-right pr-1.5 text-xs text-black">{`${percent}%`}</span>
      <div className="h-3.5 rounded-full bg-gray-200">
        <div className="h-3.5 rounded-full bg-primary" style={{ width: `${percent}%` }} />
      </div>
    </>
  );
};
