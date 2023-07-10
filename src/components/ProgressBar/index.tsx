type ProgressBarProps = {
  percent: number;
};

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <div className="h-2.5 rounded-full bg-gray-200">
      <div className="h-2.5 rounded-full bg-primary" style={{ width: `${percent}%` }} />
    </div>
  );
};
