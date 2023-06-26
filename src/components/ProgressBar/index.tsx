type ProgressBarProps = {
  percent: number;
};

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <div className="h-2.5 bg-gray-200 rounded-full">
      <div className="h-2.5 bg-primary rounded-full" style={{ width: `${percent}%` }} />
    </div>
  );
};
