import { PlanData } from '../mockData';

import type { Dayjs } from 'dayjs';

type CalendarCellProps = {
  date: Dayjs;
  planData: PlanData;
};

export const CalendarCell = ({ date, planData }: CalendarCellProps) => {
  const MAX_PLAN_DOT_COUNT = 2;
  const dateKey = date.format('YYYY-MM-DD');
  const plans = planData[dateKey];

  if (!plans) {
    return (
      <div className="flex pt-1">
        <div className="h-1.5 w-1.5" />
      </div>
    );
  }

  return (
    <div className="flex justify-evenly pt-1">
      {plans.map(({ id, mainColor }, index) => {
        if (index >= MAX_PLAN_DOT_COUNT) {
          return;
        }

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
