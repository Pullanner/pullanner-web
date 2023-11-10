import { MONTH_NAME_IN_KOREAN } from '@/constants';

type WorkoutNames =
  | 'Hanging'
  | 'Jumping Pull-up'
  | 'Band Pull-up'
  | 'Chin-up'
  | 'Pull-up'
  | 'Chest to Bar'
  | 'Archer Pull-up'
  | 'Muscle up';

export type MonthWorkoutCount = {
  data: {
    [K in WorkoutNames]: {
      month: keyof typeof MONTH_NAME_IN_KOREAN;
      totalCount: number;
    }[];
  };
};

export const MONTH_WORKOUT_COUNT_DATA = {
  data: {
    Hanging: [
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
    'Jumping Pull-up': [
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
    'Band Pull-up': [
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
    'Chin-up': [
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
    'Pull-up': [
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
    'Chest to Bar': [
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
    'Archer Pull-up': [
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
    'Muscle up': [
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
};
