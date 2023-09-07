import { PlanData } from '@/types/plan';

export const SAMPLE_PLAN_DATA: PlanData = {
  data: {
    '2023-09-01': [
      {
        id: 1,
        createdAt: '2023-09-01T08:31:01.461Z',
        updatedAt: '2023-09-01T08:31:01.461Z',
        planDateTime: '2023-09-01T08:31:01.461Z',
        planName: 'Pull-up Plan 1',
        planType: 'master',
        workouts: [
          {
            count: 3,
            set: 5,
            done: false,
            step: 2,
          },
          {
            count: 3,
            set: 10,
            done: true,
            step: 5,
          },
          {
            count: 3,
            set: 10,
            done: true,
            step: 3,
          },
        ],
        progress: 66,
        note: '열심히 했다!',
        mainWorkoutStep: 5,
      },
      {
        id: 2,
        createdAt: '2023-09-01T08:31:01.461Z',
        updatedAt: '2023-09-01T08:31:01.461Z',
        planDateTime: '2023-09-01T08:31:01.461Z',
        planName: 'Pull-up Plan 2',
        planType: 'strength',
        workouts: [
          {
            count: 3,
            set: 5,
            done: false,
            step: 7,
          },
          {
            count: 3,
            set: 10,
            done: false,
            step: 8,
          },
        ],
        progress: 0,
        note: '',
        mainWorkoutStep: 8,
      },
    ],
    '2023-09-02': [
      {
        id: 3,
        createdAt: '2023-09-02T08:31:01.461Z',
        updatedAt: '2023-09-02T08:31:01.461Z',
        planDateTime: '2023-09-02T08:31:01.461Z',
        planName: 'Pull-up Plan 3',
        planType: 'master',
        workouts: [
          {
            count: 3,
            set: 5,
            done: false,
            step: 2,
          },
          {
            count: 3,
            set: 10,
            done: true,
            step: 5,
          },
        ],
        progress: 50,
        note: '열심히 했다!',
        mainWorkoutStep: 5,
      },
      {
        id: 4,
        createdAt: '2023-09-02T08:31:01.461Z',
        updatedAt: '2023-09-02T08:31:01.461Z',
        planDateTime: '2023-09-02T08:31:01.461Z',
        planName: 'Pull-up Plan 4',
        planType: 'strength',
        workouts: [
          {
            count: 3,
            set: 5,
            done: false,
            step: 7,
          },
          {
            count: 3,
            set: 10,
            done: false,
            step: 8,
          },
        ],
        progress: 0,
        note: '',
        mainWorkoutStep: 8,
      },
    ],
    '2023-09-05': [
      {
        id: 5,
        createdAt: '2023-09-05T06:31:01.461Z',
        updatedAt: '2023-09-05T06:31:01.461Z',
        planDateTime: '2023-09-05T16:31:00.461Z',
        planName: 'Pull-up Plan 5',
        planType: 'master',
        workouts: [
          {
            count: 3,
            set: 5,
            done: false,
            step: 2,
          },
          {
            count: 3,
            set: 10,
            done: true,
            step: 5,
          },
        ],
        progress: 50,
        note: '열심히 했다!',
        mainWorkoutStep: 5,
      },
      {
        id: 6,
        createdAt: '2023-09-05T08:31:01.461Z',
        updatedAt: '2023-09-05T09:31:01.461Z',
        planDateTime: '2023-09-05T16:20:00.461Z',
        planName: 'Pull-up Plan 6',
        planType: 'strength',
        workouts: [
          {
            count: 3,
            set: 5,
            done: false,
            step: 7,
          },
          {
            count: 3,
            set: 10,
            done: false,
            step: 8,
          },
        ],
        progress: 0,
        note: '',
        mainWorkoutStep: 8,
      },
    ],
  },
};
