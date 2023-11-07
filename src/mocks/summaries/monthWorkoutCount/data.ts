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
        totalCount: 300,
      },
      {
        month: 'Jun',
        totalCount: 400,
      },
      {
        month: 'Jul',
        totalCount: 300,
      },
      {
        month: 'Aug',
        totalCount: 200,
      },
      {
        month: 'Sep',
        totalCount: 100,
      },
      {
        month: 'Oct',
        totalCount: 100,
      },
    ],
    'Band Pull-Up': [
      {
        month: 'May',
        totalCount: 500,
      },
      {
        month: 'Jun',
        totalCount: 400,
      },
      {
        month: 'Jul',
        totalCount: 300,
      },
      {
        month: 'Aug',
        totalCount: 200,
      },
      {
        month: 'Sep',
        totalCount: 100,
      },
      {
        month: 'Oct',
        totalCount: 200,
      },
    ],
    'Chin-Up': [
      {
        month: 'May',
        totalCount: 100,
      },
      {
        month: 'Jun',
        totalCount: 200,
      },
      {
        month: 'Jul',
        totalCount: 300,
      },
      {
        month: 'Aug',
        totalCount: 400,
      },
      {
        month: 'Sep',
        totalCount: 300,
      },
      {
        month: 'Oct',
        totalCount: 200,
      },
    ],
    'Pull-Up': [
      {
        month: 'May',
        totalCount: 100,
      },
      {
        month: 'Jun',
        totalCount: 100,
      },
      {
        month: 'Jul',
        totalCount: 200,
      },
      {
        month: 'Aug',
        totalCount: 300,
      },
      {
        month: 'Sep',
        totalCount: 400,
      },
      {
        month: 'Oct',
        totalCount: 300,
      },
    ],
    'Chest to Bar': [
      {
        month: 'May',
        totalCount: 200,
      },
      {
        month: 'Jun',
        totalCount: 100,
      },
      {
        month: 'Jul',
        totalCount: 200,
      },
      {
        month: 'Aug',
        totalCount: 300,
      },
      {
        month: 'Sep',
        totalCount: 400,
      },
      {
        month: 'Oct',
        totalCount: 500,
      },
    ],
    'Archer Pull-Up': [
      {
        month: 'May',
        totalCount: 500,
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
        totalCount: 300,
      },
      {
        month: 'Jun',
        totalCount: 450,
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
        totalCount: 200,
      },
    ],
  },
};
