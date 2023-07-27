import { SAMPLE_JOURNAL_DATA } from '@/mocks/journal/data';

import type { Dayjs } from 'dayjs';

type CalendarCellProps = {
  date: Dayjs;
};

export const CalendarCell = ({ date }: CalendarCellProps) => {
  const MAX_JOURNAL_DOT_COUNT = 3;

  const dateKey = date.format('YYYY-MM-DD');
  const journals = SAMPLE_JOURNAL_DATA[dateKey];
  if (!journals) {
    return (
      <div className="flex pt-1">
        <div className="h-1.5 w-1.5" />
      </div>
    );
  }

  return (
    <div className="flex justify-evenly pt-1">
      {journals.map(({ color }, index) => {
        if (index >= MAX_JOURNAL_DOT_COUNT) {
          return;
        }

        return <div style={{ backgroundColor: color }} className="h-1.5 w-1.5 rounded-full" />;
      })}
    </div>
  );
};
