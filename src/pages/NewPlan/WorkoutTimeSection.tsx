import { TimePicker } from 'antd';

import { PLAN_TIME_FORMAT } from '@/constants';

import type { Dayjs } from 'dayjs';

type WorkoutTableSectionProps = {
  planDateTime: string;
  handleTimePickerChange: (_: Dayjs | null, selectedTime: string) => void;
};

export const WorkoutTimeSection = ({
  planDateTime,
  handleTimePickerChange,
}: WorkoutTableSectionProps) => {
  return (
    <section>
      <div>
        <p className="py-2">⏰ 풀업 운동을 언제 할까요?</p>
        <p className="mb-2 text-sm">
          플랜 날짜가 오늘이면, 현재 시각보다 이후의 시각으로 설정해주세요.
        </p>
      </div>
      <TimePicker
        status={planDateTime ? '' : 'error'}
        format={PLAN_TIME_FORMAT}
        onChange={handleTimePickerChange}
        placeholder="12:00"
      />
    </section>
  );
};
