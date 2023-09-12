import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { SaveButton } from '@/components/buttons/SaveButton';
import { SelectableWorkoutCard } from '@/components/cards/SelectableWorkoutCard';
import { Headline } from '@/components/Headline';
import { ROADMAP_DATA, ROUTE_PATH } from '@/constants';
import { usePostWorkoutData } from '@/lib/react-query/useWorkoutData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';
import { workoutDataAtom } from '@/stores/atoms/workoutDataAtom';

const TEXT_CONTENTS = {
  headline: '가능한 풀업 동작을 수정해주세요',
  description: 'Hanging(매달리기) 동작은 기본적으로 선택되어 있어요.',
} as const;

export const EditWorkout = () => {
  const [workoutData, setWorkoutData] = useAtom(workoutDataAtom);
  const { nickname } = useAtomValue(userDataAtom) as UserData;
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const setModalType = useSetAtom(modalTypeAtom);
  const { mutate: postWorkoutData } = usePostWorkoutData(accessToken, setAccessToken, setModalType);
  const navigate = useNavigate();

  const handleSaveButtonClick = () => {
    setWorkoutData(workoutData);
    postWorkoutData([...workoutData.values()]);
    navigate(ROUTE_PATH.myPage.index);
  };

  return (
    <div className="flex flex-col items-center">
      <Headline descriptions={TEXT_CONTENTS.headline} classNames="pb-9 pt-12">
        <span className="font-extrabold">{nickname}</span>님,
      </Headline>
      <p className="pb-10 text-xs text-[#D9D9D9]">{TEXT_CONTENTS.description}</p>
      <section className="bg-[#1E1E1E] py-4">
        <div className="flex w-full justify-center">
          <p className="pb-1 pt-2 font-bold text-primary">{`현재 가능한 풀업 동작 : ${workoutData.size}`}</p>
        </div>
        <div className="grid grid-cols-4 gap-x-3.5 gap-y-6 p-5">
          {ROADMAP_DATA.map(({ id, name, imageSrc, color }) => {
            const isCardSelected = workoutData.has(id);

            return (
              <SelectableWorkoutCard
                key={id}
                id={id}
                name={name}
                imageSrc={imageSrc}
                color={color}
                width="4.75rem"
                height="6.375rem"
                isActive={isCardSelected}
              />
            );
          })}
        </div>
      </section>
      <div className="pt-14">
        <SaveButton
          isActive
          handleButtonClick={handleSaveButtonClick}
          width="21.875rem"
          height="2.75rem"
          text="저장"
          className="text-sm"
        />
      </div>
    </div>
  );
};
