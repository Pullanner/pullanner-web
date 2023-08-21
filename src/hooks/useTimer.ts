import { useEffect, useState, useMemo } from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const useTimer = (deadline: number, interval = SECOND) => {
  const targetTime = useMemo(() => {
    return new Date(new Date().getTime() + deadline).getTime();
  }, [deadline]);
  const [timeSpan, setTimeSpan] = useState(targetTime - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSpan((prevTimeSpan) => {
        return prevTimeSpan - interval;
      });
    }, interval);

    if (timeSpan < interval) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [interval, timeSpan]);

  return {
    days: Math.floor(timeSpan / DAY),
    hours: Math.floor((timeSpan / HOUR) % 24),
    minutes: Math.floor((timeSpan / MINUTE) % 60),
    seconds: Math.floor((timeSpan / SECOND) % 60),
  };
};
