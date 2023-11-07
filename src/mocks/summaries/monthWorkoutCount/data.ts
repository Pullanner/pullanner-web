import { FULL_MONTH_NAME_BY_ABBREVIATION } from '@/constants';

type WorkoutNames =
  | 'Hanging'
  | 'Jumping Pull-Up'
  | 'Band Pull-Up'
  | 'Chin-Up'
  | 'Pull-Up'
  | 'Chest to Bar'
  | 'Archer Pull-Up'
  | 'Muscle Up';

export type MonthWorkoutCount = {
  data: {
    [K in WorkoutNames]: {
      month: keyof typeof FULL_MONTH_NAME_BY_ABBREVIATION;
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
    'Jumping Pull-Up': [
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
    'Band Pull-Up': [
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
    'Chin-Up': [
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
    'Pull-Up': [
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
    'Archer Pull-Up': [
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
    'Muscle Up': [
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
