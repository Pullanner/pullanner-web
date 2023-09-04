import { TimePicker, message, Input } from 'antd';
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
import { PullUpSteps, SelectedWorkoutType } from '@/types/plan';
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
  const [selectedWorkouts, setSelectedWorkouts] = useState<SelectedWorkoutType[]>([]);
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
      <div
        className="p-5"
        style={{
          backgroundColor: planType === PLAN_TYPE.master ? '#8BB3FF85' : '#F1B55B',
          color: planType === PLAN_TYPE.master ? 'white' : 'black',
        }}
      >
        <p>{NEW_PLAN_DESCRIPTION[planType]}</p>
      </div>
      <div className="border-b-2 border-white p-4 text-center font-bold">
        {dayjs(planDate).format('dddd, MMMM DD, YYYY')}
      </div>
      <div className="p-5">
        <form className="flex flex-col gap-5">
          <div>
            <div>
              <p className="py-2">😎 이번 풀업 계획의 이름은 뭘로 할까요?</p>
            </div>
            <Input
              status={planName.length ? '' : 'error'}
              showCount
              maxLength={20}
              allowClear
              value={planName}
              onChange={handlePlanInputChange}
              placeholder="1자 이상 20자 이하로 입력해주세요"
            />
          </div>
          <div>
            <div>
              <p className="py-2">⏰ 풀업 운동을 언제 할까요?</p>
              <p className="mb-2 text-sm">
                플랜 날짜가 오늘이면, 현재 시각보다 이후의 시각으로 설정해주세요.
              </p>
            </div>
            <TimePicker
              status={planDateTime ? '' : 'error'}
              defaultValue={dayjs('12:00', PLAN_TIME_FORMAT)}
              format={PLAN_TIME_FORMAT}
              onChange={handleTimePickerChange}
              placeholder="운동 시간"
            />
          </div>
          <div>
            <div>
              <p className="py-2">💪 어떤 풀업 운동을 해볼까요?</p>
              <p className="mb-2 text-sm ">
                연습할 풀업 운동을 선택 후, 횟수(Count)와 세트(Set)를 입력해주세요.
              </p>
              {planType === PLAN_TYPE.strength && (
                <p className="mb-2 text-sm">Hanging은 횟수 대신 초(Second) 단위로 입력해주세요.</p>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
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
                    width="100px"
                    height=""
                    imageSrc={imageSrc}
                    color={color}
                    onAdd={addWorkoutRow}
                    onDelete={deleteWorkoutRow}
                  />
                );
              })}
            </div>
            <div className="py-5">
              {selectedWorkouts.length > 0 && <WorkoutTable workouts={selectedWorkouts} />}
            </div>
          </div>
          <SaveButton isActive width="100%" height="44px" handleButtonClick={handlePlanSaveClick} />
        </form>
      </div>

      {contextHolder}
    </div>
  );
};