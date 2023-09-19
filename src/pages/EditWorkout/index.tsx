import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { SaveButton } from '@/components/buttons/SaveButton';
import { Headline } from '@/components/Headline';
import { SelectableWorkoutDashboard } from '@/components/SelectableWorkoutDashboard';
import { ROUTE_PATH } from '@/constants';
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
      <Headline descriptions={TEXT_CONTENTS.headline} classNames="py-10">
        <span className="font-extrabold">{nickname}</span>님,
      </Headline>
      <p className="pb-5 text-xs text-gray-1">{TEXT_CONTENTS.description}</p>
      <SelectableWorkoutDashboard />
      <div className="pt-5">
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
