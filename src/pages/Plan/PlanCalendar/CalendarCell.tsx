import { WORKOUT_NAME_COLOR } from '@/constants';
import { Plans } from '@/types/plan';

import type { Dayjs } from 'dayjs';

type CalendarCellProps = {
  date: Dayjs;
  planData?: Plans;
};

export const CalendarCell = ({ date, planData }: CalendarCellProps) => {
  const MAX_PLAN_DOT_COUNT = 2;
  const dateKey = date.format('YYYY-MM-DD');

  if (!planData) {
    return;
  }

  const plans = planData[dateKey];

  if (!plans || plans.length === 0) {
    return (
      <div className="flex pt-1">
        <div className="h-1.5 w-1.5" />
      </div>
    );
  }

  return (
    <div className="flex justify-evenly pt-1">
      {plans.map(({ id, mainWorkoutStep }, index) => {
        if (index >= MAX_PLAN_DOT_COUNT) {
          return;
        }

        const mainColor = WORKOUT_NAME_COLOR[mainWorkoutStep].color;

        return (
          <div
            key={id}
            style={{ backgroundColor: mainColor }}
            className="h-1.5 w-1.5 rounded-full"
          />
        );
      })}
    </div>
  );
};
