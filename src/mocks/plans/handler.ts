import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { rest } from 'msw';

import { API_PATH } from '@/constants';
import { NewPlan, Plan, PullUpSteps } from '@/types/plan';

import { SAMPLE_PLAN_DATA } from './data';

import type { DefaultBodyType, ResponseComposition, RestContext, RestRequest } from 'msw';

dayjs.extend(utc);

const getAllPlans = (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  return res(ctx.status(200), ctx.json(SAMPLE_PLAN_DATA));
};

const postPlan = async (
  req: RestRequest,
  res: ResponseComposition<DefaultBodyType>,
  ctx: RestContext,
) => {
  const newPlan: NewPlan = await req.json();
  const id = Math.random();
  const planDate = newPlan.planDateTime.split('T')[0];
  const createdAt = dayjs.utc().format();
  const progress = 0;
  const note = '';
  let mainWorkoutStep: PullUpSteps = 1;

  let largestTotal = 0;
  newPlan.workouts.forEach((workout) => {
    const total = workout.count * workout.set;
    if (total > largestTotal) {
      largestTotal = total;
      mainWorkoutStep = workout.step;
    }
  });

  const newPlanData: Plan = {
    ...newPlan,
    id,
    createdAt,
    updatedAt: createdAt,
    progress,
    note,
    mainWorkoutStep,
  };

  SAMPLE_PLAN_DATA.data[planDate] = SAMPLE_PLAN_DATA.data[planDate]
    ? [...SAMPLE_PLAN_DATA.data[planDate], newPlanData]
    : [newPlanData];

  return res(ctx.status(200));
};

const planHandler = [rest.get(API_PATH.plans, getAllPlans), rest.post(API_PATH.plans, postPlan)];

export default planHandler;
