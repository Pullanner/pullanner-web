import { useAtom } from 'jotai';
import { useEffect, useState, useMemo, useRef } from 'react';

import { timerStateAtom } from '@/stores/atoms/timerStateAtom';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const useTimer = (deadline: number, interval = SECOND) => {
  const targetTime = useMemo(() => {
    return new Date(new Date().getTime() + deadline).getTime();
  }, [deadline]);
  const [timeSpan, setTimeSpan] = useState(targetTime - Date.now());
  const [timerState, setTimerState] = useAtom(timerStateAtom);
  const intervalIdRef = useRef<number>();

  useEffect(() => {
    if (timerState.reset) {
      clearInterval(intervalIdRef.current);
      setTimeSpan(deadline);
      setTimerState({ ...timerState, reset: false });
    }
    intervalIdRef.current = window.setInterval(() => {
      setTimeSpan((prevTimeSpan) => {
        return prevTimeSpan - interval;
      });
    }, interval);
    const id = intervalIdRef.current;

    if (timeSpan < interval) {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [interval, timeSpan]);

  useEffect(() => {
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  return {
    days: Math.floor(timeSpan / DAY),
    hours: Math.floor((timeSpan / HOUR) % 24),
    minutes: Math.floor((timeSpan / MINUTE) % 60),
    seconds: Math.floor((timeSpan / SECOND) % 60),
  };
};
