import { TimePicker } from 'antd';

import { NEW_PLAN_TITLE, PLAN_TIME_FORMAT, WORKOUT_TIME_DESCRIPTION } from '@/constants';

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
        <p className="py-2">{NEW_PLAN_TITLE.workoutTime}</p>
        <p className="mb-2 text-sm">{WORKOUT_TIME_DESCRIPTION}</p>
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
