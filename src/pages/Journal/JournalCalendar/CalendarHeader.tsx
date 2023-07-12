import { Button, Select } from 'antd';

import type { Dayjs } from 'dayjs';
import type { ReactElement } from 'react';

const YEAR_SPAN = 5;
const MONTHS_PER_YEAR = 12;

const monthOptions = Array.from({ length: MONTHS_PER_YEAR }).reduce<ReactElement[]>(
  (options, _, i) => {
    const monthIndex = i;
    const monthName = new Date(2000, monthIndex).toLocaleString(undefined, { month: 'short' });
    options.push(
      <Select.Option key={monthIndex} value={monthIndex} className="month-item">
        {monthName}
      </Select.Option>,
    );
    return options;
  },
  [],
);

const yearOptions = Array.from({ length: YEAR_SPAN }, (_, index) => {
  const currentYear = new Date().getFullYear();
  const year = currentYear - YEAR_SPAN + index;
  return (
    <Select.Option key={year} value={year} className="year-item">
      {year}
    </Select.Option>
  );
});

interface ExtendedDayjs extends Dayjs {
  $d: Date;
  $y: number;
  $M: number;
  $D: number;
}

type CalendarHeaderProps = {
  value: Dayjs;
  onChange: (date: Dayjs) => void;
};

export const CalendarHeader = ({ value, onChange }: CalendarHeaderProps) => {
  const selectedYear = value.year();
  const selectedMonth = value.month();

  const handleTodayClick = () => {
    const todayObj = value.clone() as ExtendedDayjs;
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    todayObj.$d = today;
    todayObj.$y = currentYear;
    todayObj.$M = currentMonth;
    todayObj.$D = currentDate;
    onChange(todayObj);
  };

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Select
            size="small"
            className="my-year-select"
            value={selectedYear}
            style={{ width: '70px', textAlign: 'center' }}
            showArrow={false}
            onChange={(newYear) => {
              const now = value.clone().year(newYear);
              onChange(now);
            }}
          >
            {yearOptions}
          </Select>
          <Select
            size="small"
            value={selectedMonth}
            style={{ width: '60px', textAlign: 'center' }}
            showArrow={false}
            onChange={(newMonth) => {
              const now = value.clone().month(newMonth);
              onChange(now);
            }}
          >
            {monthOptions}
          </Select>
        </div>
        <Button style={{ padding: '0 15px' }} size="small" onClick={handleTodayClick}>
          Today
        </Button>
      </div>
    </div>
  );
};
