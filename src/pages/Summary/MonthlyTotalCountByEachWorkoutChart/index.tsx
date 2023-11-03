import { useAtom, useSetAtom } from 'jotai';
import { useState, type MouseEvent } from 'react';
import { LineChart, Legend, Line, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import { COLOR_BY_WORKOUT, FULL_MONTH_NAME_BY_ABBREVIATION } from '@/constants';
import { useGetMonthWorkoutCount } from '@/lib/react-query/useMonthWorkoutCount';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';

import { MonthDropdown } from './MonthDropdown';

type WorkoutNames =
  | 'Hanging'
  | 'Jumping Pull-Up'
  | 'Band Pull-Up'
  | 'Chin-Up'
  | 'Pull-Up'
  | 'Chest to Bar'
  | 'Archer Pull-Up'
  | 'Muscle Up';

export const MonthlyTotalCountByEachWorkoutChart = () => {
  const [workoutName, setWorkoutName] = useState<WorkoutNames>('Hanging');
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const { data: monthWorkoutCountData } = useGetMonthWorkoutCount(
    accessToken,
    setAccessToken,
    setModalType,
  );

  if (!monthWorkoutCountData) {
    return null;
  }

  const MOST_WORKOUT_MONTH = monthWorkoutCountData[workoutName].reduce((prevWorkout, workout) => {
    return prevWorkout.totalCount >= workout.totalCount ? prevWorkout : workout;
  }).month;

  const handleDropdownItemClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    const selectedWorkoutName = currentTarget.name as WorkoutNames;
    setWorkoutName(selectedWorkoutName);
  };

  return (
    <section className="w-full pb-8 pt-5">
      <MonthDropdown handleDropdownItemClick={handleDropdownItemClick} workoutName={workoutName} />
      <div className="flex w-full flex-col items-center bg-gray-6 py-4">
        <p className="pb-4 text-center text-xs">
          <span className="text-primary">
            {FULL_MONTH_NAME_BY_ABBREVIATION[MOST_WORKOUT_MONTH]}
          </span>
          에 {workoutName}을 가장 많이 하셨어요!
        </p>
        <LineChart width={350} height={350} data={monthWorkoutCountData[workoutName]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            labelFormatter={(value) => {
              return `month : ${value}`;
            }}
            labelStyle={{ color: COLOR_BY_WORKOUT[workoutName] }}
            contentStyle={{
              paddingRight: '20px',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="totalCount"
            dot={false}
            stroke={COLOR_BY_WORKOUT[workoutName]}
          />
        </LineChart>
      </div>
    </section>
  );
};
