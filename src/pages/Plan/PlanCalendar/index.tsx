/* eslint-disable arrow-body-style */
import { Calendar, ConfigProvider } from 'antd';
import { useSetAtom } from 'jotai';

import { selectedDateAtom } from '@/stores/atoms/selectedDateAtom';
import { PlanData } from '@/types/plan';

import { CalendarCell } from './CalendarCell';
import { CalendarHeader } from './CalendarHeader';
import { CUSTOM_COLOR_TOKEN } from './customColorToken';

import type { Dayjs } from 'dayjs';

export const PlanCalendar = ({ planData }: { planData: PlanData | undefined }) => {
  const setSelectedDate = useSetAtom(selectedDateAtom);

  const handleDateChange = (newDate: Dayjs) => {
    // TODO: 날짜가 변경될 때  API 호출 로직 짜기
    // 날짜 변경 -> API를 매번 호출하는 것이 아니라 달이 바뀌었을 때만 호출될 수 있도록.
    // TODO: 호출 시  슬래시 방식 or string 방식
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
