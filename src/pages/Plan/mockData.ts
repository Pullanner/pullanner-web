export const SAMPLE_PLAN_DATA = {
  '2023-07-01': [
    {
      id: 1,
      createdAt: '2023-07-01 15:35',
      updatedAt: '',
      planDate: '2023-07-01',
      planName: 'Pull-up Plan 1',
      planTime: '12:00pm',
      planType: 'master',
      workout: [
        { id: 1, name: 'Jump Pull-up', count: 3, set: 5, total: 15, done: false, color: '#F1B55B' },
        { id: 2, name: 'Pull-up', count: 3, set: 10, total: 30, done: true, color: '#8EE14E' },
        { id: 3, name: 'Band Pull-up', count: 3, set: 10, total: 30, done: true, color: '#DFE152' },
      ],
      progress: 66,
      note: '열심히 했다!',
      mainColor: '#F1B55B',
    },
    {
      id: 2,
      createdAt: '2023-07-01 15:45',
      updatedAt: '',
      planDate: '2023-07-01',
      planName: 'Pull-up Plan 2',
      planTime: '12:00pm',
      planType: 'strength',
      workout: [
        {
          id: 1,
          name: 'Archer Pull-up',
          count: 3,
          set: 5,
          total: 15,
          done: false,
          color: '#CD7BFF',
        },
        { id: 2, name: 'Muscle-up', count: 3, set: 10, total: 30, done: false, color: '#FF8CF4' },
      ],
      progress: 0,
      note: '',
      mainColor: '#CD7BFF',
    },
  ],
  '2023-07-27': [
    {
      id: 3,
      createdAt: '2023-07-01 15:35',
      updatedAt: '',
      planDate: '2023-07-27',
      planName: 'Pull-up Plan 3',
      planTime: '12:00pm',
      planType: 'master',
      workout: [
        { id: 1, name: 'Jump Pull-up', count: 3, set: 5, total: 15, done: false, color: '#F1B55B' },
        { id: 2, name: 'Pull-up', count: 3, set: 10, total: 30, done: true, color: '#8EE14E' },
      ],
      progress: 50,
      note: '열심히 했다!',
      mainColor: '#F1B55B',
    },
    {
      id: 4,
      createdAt: '2023-07-01 15:45',
      updatedAt: '',
      planDate: '2023-07-27',
      planName: 'Pull-up Plan 4',
      planTime: '12:00pm',
      planType: 'strength',
      workout: [
        {
          id: 1,
          name: 'Archer Pull-up',
          count: 3,
          set: 5,
          total: 15,
          done: false,
          color: '#CD7BFF',
        },
        { id: 2, name: 'Muscle-up', count: 3, set: 10, total: 30, done: false, color: '#FF8CF4' },
      ],
      progress: 0,
      note: '',
      mainColor: '#CD7BFF',
    },
  ],
};

type Workout = {
  id: number;
  name: string;
  count: number;
  set: number;
  total: number;
  done: boolean;
  color: string;
};

type Plan = {
  id: number;
  createdAt: string;
  updatedAt: string;
  planDate: string;
  planName: string;
  planTime: string;
  planType: string;
  workout: Workout[];
  progress: number;
  note: string;
  mainColor: string;
};

export type PlanData = {
  [date: string]: Plan[];
};
