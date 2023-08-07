import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { SaveButton } from '@/components/buttons/SaveButton';
import { Headline } from '@/components/Headline';
import { ROADMAP_DATA, ROUTE_PATH } from '@/constants';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';
import { workoutDataAtom } from '@/stores/atoms/workoutDataAtom';

import { WorkoutResult } from './WorkoutResult';

const TEXT_CONTENTS = {
  headline: {
    description: ['풀래너와 함께', '풀업 동작을 연습해 보아요!'],
  },
  section: {
    title: '나의 풀업 현황',
  },
  selectedWorkout: {
    title: '가능한 풀업 동작',
    plan: '💪근력 키우기 플랜',
    description: '을 통해  더욱 근력을 향상시켜볼 수 있어요',
  },
  restWorkout: {
    title: '연습이 필요한 풀업 동작',
    plan: '🏆 동작 마스터 플랜',
    description: '을 통해 풀업 동작을 완성시켜볼 수 있어요',
  },
  edit: {
    description: '나의 풀업 현황은 마이페이지에서 수정 가능합니다.',
  },
} as const;

export const SetupResult = () => {
  const { nickname } = useAtomValue(userDataAtom) as UserData;
  const workoutData = useAtomValue(workoutDataAtom);
  const navigate = useNavigate();

  const selectedWorkoutData = ROADMAP_DATA.filter(({ title }) => {
    const workout = workoutData.find(({ name }) => {
      return name === title;
    });

    return workout?.selected;
  });

  const restWorkoutData = ROADMAP_DATA.filter(({ title }) => {
    const workout = workoutData.find(({ name }) => {
      return name === title;
    });

    return !workout?.selected;
  });

  const handleSaveButtonClick = () => {
    navigate(ROUTE_PATH.roadmap.index);
  };

  return (
    <div className="flex flex-col items-center">
      <Headline descriptions={TEXT_CONTENTS.headline.description} classNames="px-5 pb-9 pt-10">
        <p>
          <span className="font-extrabold">{nickname}</span>님,
        </p>
      </Headline>
      <section className="h-full w-full bg-[#1E1E1E] px-5 text-center">
        <p className="pb-7 pt-3.5 text-xl font-extrabold">{TEXT_CONTENTS.section.title}</p>
        <WorkoutResult
          workoutData={selectedWorkoutData}
          textContents={TEXT_CONTENTS.selectedWorkout}
        />
        <WorkoutResult workoutData={restWorkoutData} textContents={TEXT_CONTENTS.restWorkout} />
      </section>
      <p className="py-7 text-xs text-[#D9D9D9]">{TEXT_CONTENTS.edit.description}</p>
      <div className="flex justify-center">
        <SaveButton
          isActive
          handleButtonClick={handleSaveButtonClick}
          width="21.875rem"
          height="2.75rem"
          text="다음으로 가기"
          className="font-extrabold"
        />
      </div>
    </div>
  );
};
