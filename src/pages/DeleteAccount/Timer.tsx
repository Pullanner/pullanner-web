import { useTimer } from '@/hooks/useTimer';

import { DECADE } from './constants';

type TimerProps = {
  limitTime: number;
};

export const Timer = ({ limitTime }: TimerProps) => {
  const { minutes, seconds } = useTimer(limitTime);
  const paddedMinutes = minutes >= DECADE ? minutes : `0${minutes}`;
  const paddedSeconds = seconds >= DECADE ? seconds : `0${seconds}`;

  return (
    <span className="inline-block w-11 text-invalid">{`${paddedMinutes}:${paddedSeconds}`}</span>
  );
};
