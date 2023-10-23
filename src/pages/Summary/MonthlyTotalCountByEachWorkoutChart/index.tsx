import { useState, type MouseEvent } from 'react';
import { LineChart, Legend, Line, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import { COLOR_BY_WORKOUT, FULL_MONTH_NAME_BY_ABBREVIATION } from '@/constants';

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

type LineChartData = {
  [K in WorkoutNames]: {
    month: keyof typeof FULL_MONTH_NAME_BY_ABBREVIATION;
    totalCount: number;
  }[];
};

const LINE_CHART_DATA: LineChartData = {
  Hanging: [
    {
      month: 'May',
      totalCount: 200,
    },
    {
      month: 'Jun',
      totalCount: 300,
    },
    {
      month: 'Jul',
      totalCount: 400,
    },
    {
      month: 'Aug',
      totalCount: 300,
    },
    {
      month: 'Sep',
      totalCount: 200,
    },
    {
      month: 'Oct',
      totalCount: 100,
    },
  ],
  'Jumping Pull-Up': [
    {
      month: 'May',
      totalCount: 200,
    },
    {
      month: 'Jun',
      totalCount: 300,
    },
    {
      month: 'Jul',
      totalCount: 400,
    },
    {
      month: 'Aug',
      totalCount: 300,
    },
    {
      month: 'Sep',
      totalCount: 200,
    },
    {
      month: 'Oct',
      totalCount: 100,
    },
  ],
  'Band Pull-Up': [
    {
      month: 'May',
      totalCount: 200,
    },
    {
      month: 'Jun',
      totalCount: 300,
    },
    {
      month: 'Jul',
      totalCount: 400,
    },
    {
      month: 'Aug',
      totalCount: 300,
    },
    {
      month: 'Sep',
      totalCount: 200,
    },
    {
      month: 'Oct',
      totalCount: 100,
    },
  ],
  'Chin-Up': [
    {
      month: 'May',
      totalCount: 200,
    },
    {
      month: 'Jun',
      totalCount: 300,
    },
    {
      month: 'Jul',
      totalCount: 400,
    },
    {
      month: 'Aug',
      totalCount: 300,
    },
    {
      month: 'Sep',
      totalCount: 200,
    },
    {
      month: 'Oct',
      totalCount: 100,
    },
  ],
  'Pull-Up': [
    {
      month: 'May',
      totalCount: 200,
    },
    {
      month: 'Jun',
      totalCount: 300,
    },
    {
      month: 'Jul',
      totalCount: 400,
    },
    {
      month: 'Aug',
      totalCount: 300,
    },
    {
      month: 'Sep',
      totalCount: 200,
    },
    {
      month: 'Oct',
      totalCount: 100,
    },
  ],
  'Chest to Bar': [
    {
      month: 'May',
      totalCount: 200,
    },
    {
      month: 'Jun',
      totalCount: 300,
    },
    {
      month: 'Jul',
      totalCount: 400,
    },
    {
      month: 'Aug',
      totalCount: 300,
    },
    {
      month: 'Sep',
      totalCount: 200,
    },
    {
      month: 'Oct',
      totalCount: 100,
    },
  ],
  'Archer Pull-Up': [
    {
      month: 'May',
      totalCount: 200,
    },
    {
      month: 'Jun',
      totalCount: 300,
    },
    {
      month: 'Jul',
      totalCount: 400,
    },
    {
      month: 'Aug',
      totalCount: 300,
    },
    {
      month: 'Sep',
      totalCount: 200,
    },
    {
      month: 'Oct',
      totalCount: 100,
    },
  ],
  'Muscle Up': [
    {
      month: 'May',
      totalCount: 200,
    },
    {
      month: 'Jun',
      totalCount: 300,
    },
    {
      month: 'Jul',
      totalCount: 400,
    },
    {
      month: 'Aug',
      totalCount: 300,
    },
    {
      month: 'Sep',
      totalCount: 200,
    },
    {
      month: 'Oct',
      totalCount: 100,
    },
  ],
};

export const MonthlyTotalCountByEachWorkoutChart = () => {
  const [workoutName, setWorkoutName] = useState<WorkoutNames>('Hanging');

  const handleDropdownItemClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    const selectedWorkoutName = currentTarget.name as WorkoutNames;
    setWorkoutName(selectedWorkoutName);
  };

  const MOST_WORKOUT_MONTH = LINE_CHART_DATA[workoutName].reduce((prevWorkoutData, workoutData) => {
    return prevWorkoutData.totalCount >= workoutData.totalCount ? prevWorkoutData : workoutData;
  }).month;

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
        <LineChart width={350} height={350} data={LINE_CHART_DATA[workoutName]}>
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
