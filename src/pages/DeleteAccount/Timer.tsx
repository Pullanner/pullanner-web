import { useTimer } from '@/hooks/useTimer';

type TimerProps = {
  limitTime: number;
};

const DECADE = 10;

export const Timer = ({ limitTime }: TimerProps) => {
  const { minutes, seconds } = useTimer(limitTime);
  const paddedMinutes = minutes >= DECADE ? minutes : `0${minutes}`;
  const paddedSeconds = seconds >= DECADE ? seconds : `0${seconds}`;

  return (
    <span className="inline-block w-11 text-[#FF8277]">{`${paddedMinutes}:${paddedSeconds}`}</span>
  );
};
