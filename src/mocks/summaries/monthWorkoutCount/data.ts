import { MONTH_NAME_IN_KOREAN } from '@/constants';
import { StepIdForWorkout } from '@/types/workout';

export type MonthWorkoutCount = {
  workoutCountPerMonth: {
    step: StepIdForWorkout;
    data: {
      month: keyof typeof MONTH_NAME_IN_KOREAN;
      totalCount: number;
    }[];
  }[];
};

export const MONTH_WORKOUT_COUNT_DATA: MonthWorkoutCount = {
  workoutCountPerMonth: [
    {
      step: 1,
      data: [
        {
          month: 'MAY',
          totalCount: 200,
        },
        {
          month: 'JUN',
          totalCount: 300,
        },
        {
          month: 'JUL',
          totalCount: 400,
        },
        {
          month: 'AUG',
          totalCount: 300,
        },
        {
          month: 'SEP',
          totalCount: 200,
        },
        {
          month: 'OCT',
          totalCount: 100,
        },
      ],
    },
    {
      step: 2,
      data: [
        {
          month: 'MAY',
          totalCount: 300,
        },
        {
          month: 'JUN',
          totalCount: 400,
        },
        {
          month: 'JUL',
          totalCount: 300,
        },
        {
          month: 'AUG',
          totalCount: 200,
        },
        {
          month: 'SEP',
          totalCount: 100,
        },
        {
          month: 'OCT',
          totalCount: 100,
        },
      ],
    },
    {
      step: 3,
      data: [
        {
          month: 'MAY',
          totalCount: 500,
        },
        {
          month: 'JUN',
          totalCount: 400,
        },
        {
          month: 'JUL',
          totalCount: 300,
        },
        {
          month: 'AUG',
          totalCount: 200,
        },
        {
          month: 'SEP',
          totalCount: 100,
        },
        {
          month: 'OCT',
          totalCount: 200,
        },
      ],
    },
    {
      step: 4,
      data: [
        {
          month: 'MAY',
          totalCount: 100,
        },
        {
          month: 'JUN',
          totalCount: 200,
        },
        {
          month: 'JUL',
          totalCount: 300,
        },
        {
          month: 'AUG',
          totalCount: 400,
        },
        {
          month: 'SEP',
          totalCount: 300,
        },
        {
          month: 'OCT',
          totalCount: 200,
        },
      ],
    },
    {
      step: 5,
      data: [
        {
          month: 'MAY',
          totalCount: 100,
        },
        {
          month: 'JUN',
          totalCount: 100,
        },
        {
          month: 'JUL',
          totalCount: 200,
        },
        {
          month: 'AUG',
          totalCount: 300,
        },
        {
          month: 'SEP',
          totalCount: 400,
        },
        {
          month: 'OCT',
          totalCount: 300,
        },
      ],
    },
    {
      step: 6,
      data: [
        {
          month: 'MAY',
          totalCount: 200,
        },
        {
          month: 'JUN',
          totalCount: 100,
        },
        {
          month: 'JUL',
          totalCount: 200,
        },
        {
          month: 'AUG',
          totalCount: 300,
        },
        {
          month: 'SEP',
          totalCount: 400,
        },
        {
          month: 'OCT',
          totalCount: 500,
        },
      ],
    },
    {
      step: 7,
      data: [
        {
          month: 'MAY',
          totalCount: 500,
        },
        {
          month: 'JUN',
          totalCount: 300,
        },
        {
          month: 'JUL',
          totalCount: 400,
        },
        {
          month: 'AUG',
          totalCount: 300,
        },
        {
          month: 'SEP',
          totalCount: 200,
        },
        {
          month: 'OCT',
          totalCount: 100,
        },
      ],
    },
    {
      step: 8,
      data: [
        {
          month: 'MAY',
          totalCount: 300,
        },
        {
          month: 'JUN',
          totalCount: 450,
        },
        {
          month: 'JUL',
          totalCount: 400,
        },
        {
          month: 'AUG',
          totalCount: 300,
        },
        {
          month: 'SEP',
          totalCount: 200,
        },
        {
          month: 'OCT',
          totalCount: 200,
        },
      ],
    },
  ],
};
