/* eslint-disable arrow-body-style */
import { Calendar, ConfigProvider } from 'antd';
import { useSetAtom } from 'jotai';

import { selectedDateAtom } from '@/stores/atoms/selectedDateAtom';
import type { Plans } from '@/types/plan';

import { CalendarCell } from './CalendarCell';
import { CalendarHeader } from './CalendarHeader';
import { CUSTOM_COLOR_TOKEN } from './customColorToken';

import type { Dayjs } from 'dayjs';

export const PlanCalendar = ({ planData }: { planData: Plans | undefined }) => {
  const setSelectedDate = useSetAtom(selectedDateAtom);

  const handleDateChange = (newDate: Dayjs) => {
    const selectedDate = newDate.format('YYYY-MM-DD');
    setSelectedDate(selectedDate);
  };

  return (
    <ConfigProvider theme={{ token: CUSTOM_COLOR_TOKEN }}>
      <Calendar
        headerRender={({ value, onChange }) => CalendarHeader({ value, onChange })}
        cellRender={(date) => CalendarCell({ date, planData })}
        onSelect={handleDateChange}
        fullscreen={false}
      />
    </ConfigProvider>
  );
};
