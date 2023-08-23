import { useEffect, useState, useMemo, useRef } from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const useTimer = (deadline: number, interval = SECOND) => {
  const targetTime = useMemo(() => {
    return new Date(new Date().getTime() + deadline).getTime();
  }, [deadline]);
  const [timeSpan, setTimeSpan] = useState(targetTime - Date.now());
  const timerIdRef = useRef<number>();

  useEffect(() => {
    timerIdRef.current = window.setTimeout(() => {
      setTimeSpan((prevTimeSpan) => {
        return prevTimeSpan - interval;
      });
    }, interval);

    if (timeSpan < interval) {
      clearTimeout(timerIdRef.current);
    }

    return () => {
      clearTimeout(timerIdRef.current);
    };
  }, [interval, timeSpan]);

  useEffect(() => {
    return () => {
      clearTimeout(timerIdRef.current);
    };
  }, []);

  return {
    days: Math.floor(timeSpan / DAY),
    hours: Math.floor((timeSpan / HOUR) % 24),
    minutes: Math.floor((timeSpan / MINUTE) % 60),
    seconds: Math.floor((timeSpan / SECOND) % 60),
  };
};
