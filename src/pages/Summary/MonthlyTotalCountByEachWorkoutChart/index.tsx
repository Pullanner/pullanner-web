import { useAtom, useSetAtom } from 'jotai';
import { useState, type MouseEvent } from 'react';
import { LineChart, Legend, Line, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import { MONTH_NAME_IN_KOREAN, WORKOUT_NAME_COLOR } from '@/constants';
import { useGetMonthWorkoutCount } from '@/lib/react-query/useMonthWorkoutCount';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { StepIdForWorkout } from '@/types/workout';

import { MonthDropdown } from './MonthDropdown';

export const MonthlyTotalCountByEachWorkoutChart = () => {
  const [stepId, setStepId] = useState<StepIdForWorkout>(1);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const { data } = useGetMonthWorkoutCount(accessToken, setAccessToken, setModalType);
  const workoutName = WORKOUT_NAME_COLOR[stepId].name;
  const workoutColor = WORKOUT_NAME_COLOR[stepId].color;

  if (!data) {
    return null;
  }

  const { workoutCountPerMonth: allWorkoutCountPerMonthData } = data;

  const workoutCountPerMonthData = allWorkoutCountPerMonthData.find((workoutData) => {
    return workoutData.step === stepId;
  })?.data;

  if (!workoutCountPerMonthData) {
    return null;
  }

  const monthWithTheMostWorkout = workoutCountPerMonthData.reduce((prevWorkout, workout) => {
    return prevWorkout.totalCount >= workout.totalCount ? prevWorkout : workout;
  }).month;

  const handleDropdownItemClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    const selectedStepId = Number(currentTarget.id) as StepIdForWorkout;
    setStepId(selectedStepId);
  };

  const monthWorkoutCountData = workoutCountPerMonthData.map(({ month, totalCount }) => {
    return {
      월: MONTH_NAME_IN_KOREAN[month],
      '운동 횟수': totalCount,
    };
  });

  return (
    <section className="w-full pb-8 pt-5">
      <MonthDropdown handleDropdownItemClick={handleDropdownItemClick} stepId={stepId} />
      <div className="flex w-full flex-col items-center bg-gray-6 py-4">
        <p className="pb-4 text-center text-xs">
          <span className="text-primary">{MONTH_NAME_IN_KOREAN[monthWithTheMostWorkout]}</span>에{' '}
          {workoutName}을 가장 많이 하셨어요!
        </p>
        <LineChart width={350} height={350} data={monthWorkoutCountData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="월" />
          <YAxis />
          <Tooltip
            labelFormatter={(value) => {
              return value;
            }}
            labelStyle={{ color: workoutColor }}
            contentStyle={{
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
              paddingRight: '10px',
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="운동 횟수" dot={false} stroke={workoutColor} />
        </LineChart>
      </div>
    </section>
  );
};
