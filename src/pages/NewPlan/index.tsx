import { TimePicker, message } from 'antd';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { ChangeEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SaveButton } from '@/components/buttons/SaveButton';
import { SelectablePullUpCard } from '@/components/PullUpCard/SelectablePullUpCard';
import { WorkoutTable } from '@/components/WorkoutTable';
import {
  NEW_PLAN_DESCRIPTION,
  PLAN_MESSAGE,
  PLAN_TIME_FORMAT,
  PLAN_TYPE,
  ROADMAP_DATA,
  ROUTE_PATH,
} from '@/constants';
import { WarningIcon } from '@/icons/WarningIcon';
import { impossiblePullUpAtom, possiblePullUpAtom } from '@/stores/atoms/workoutDataAtom';
import { workoutPlanAtom } from '@/stores/atoms/workoutPlanAtom';
import { PullUpSteps, Workout } from '@/types/plan';
import { checkPastDateTime, convertToUTCDate } from '@/utils/date';

import type { Dayjs } from 'dayjs';

const PAST_TIME_PLAN_MESSAGE_OPTION = {
  type: 'warning' as const,
  content: PLAN_MESSAGE.pastTime,
  duration: 2,
  style: {
    marginTop: '75vh',
  },
  icon: WarningIcon(),
};

type PlanType = keyof typeof NEW_PLAN_DESCRIPTION;

type LocationStateType = {
  state: {
    planType: PlanType;
    date: string;
  };
};

export const NewPlan = () => {
  const { state: locationState }: LocationStateType = useLocation();
  const planType = locationState?.planType;
  const planDate = locationState?.date;
  const navigate = useNavigate();
  const userPossiblePullUps = useAtomValue(possiblePullUpAtom);
  const userImpossiblePullUps = useAtomValue(impossiblePullUpAtom);
  const pullUpList = planType === PLAN_TYPE.strength ? userPossiblePullUps : userImpossiblePullUps;
  const [selectedWorkouts, setSelectedWorkouts] = useState<Workout[]>([]);
  const [planName, setPlanName] = useState('');
  const [planDateTime, setPlanDateTime] = useState('');
  const workouts = useAtomValue(workoutPlanAtom);
  const [messageApi, contextHolder] = message.useMessage();

  if (!planType) {
    navigate(ROUTE_PATH.plan.index);

    return null;
  }

  const handlePlanInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPlanName(value);
  };

  // TODO: POST request
  const handlePlanSaveClick = () => {
    const userWorkoutPlan = {
      planType,
      planName,
      planDateTime,
      workouts,
    };
    console.log(userWorkoutPlan);
    // navigate(ROUTE_PATH.plan.index);
  };

  const handleTimePickerChange = (_: Dayjs | null, selectedTime: string) => {
    if (!selectedTime) {
      setPlanDateTime('');

      return;
    }
    const planDateTimeUtc = convertToUTCDate(planDate, selectedTime);
    setPlanDateTime(planDateTimeUtc);
    const isPast = checkPastDateTime(planDate, selectedTime);
    if (isPast) {
      messageApi.open(PAST_TIME_PLAN_MESSAGE_OPTION);
    }
  };

  const addWorkoutRow = (id: PullUpSteps, name: string, color: string) => {
    setSelectedWorkouts((prev) => {
      return [...prev, { id, name, color, count: 0, set: 0, total: 0 }];
    });
  };

  const deleteWorkoutRow = (id: PullUpSteps) => {
    setSelectedWorkouts((prev) => {
      const filtered = prev.filter((w) => {
        return w.id !== id;
      });

      return filtered;
    });
  };

  return (
    <div>
      <img src={`/assets/images/banner/${planType}.jpg`} alt={planType} />
      <p>{NEW_PLAN_DESCRIPTION[planType]}</p>
      <div>{planDate}</div>
      <form>
        <div>
          <label htmlFor="plan-name">
            풀업 계획의 이름을 입력해주세요.
            <input
              id="plan-name"
              name="planName"
              className="bg-[#2E2E2E] text-base"
              maxLength={20}
              required
              minLength={1}
              value={planName}
              onChange={handlePlanInputChange}
            />
          </label>
        </div>
        <div>
          <p>풀업 운동을 언제 할까요?</p>
          <TimePicker
            defaultValue={dayjs('12:00', PLAN_TIME_FORMAT)}
            format={PLAN_TIME_FORMAT}
            onChange={handleTimePickerChange}
          />
        </div>
        <div>
          <p>연습할 풀업 운동을 선택하고, 횟수와 세트를 입력해주세요.</p>
          <div className="flex">
            {pullUpList.map((workoutId) => {
              const workoutData = ROADMAP_DATA.find((v) => {
                return v.id === workoutId;
              });

              if (!workoutData) {
                return null;
              }

              const { id, name, imageSrc, color } = workoutData;

              return (
                <SelectablePullUpCard
                  id={id}
                  name={name}
                  width=""
                  height=""
                  imageSrc={imageSrc}
                  color={color}
                  onAdd={addWorkoutRow}
                  onDelete={deleteWorkoutRow}
                />
              );
            })}
          </div>
          <div>{selectedWorkouts.length > 0 && <WorkoutTable workouts={selectedWorkouts} />}</div>
        </div>
        <SaveButton isActive width="100%" height="44px" handleButtonClick={handlePlanSaveClick} />
      </form>
      {contextHolder}
    </div>
  );
};
