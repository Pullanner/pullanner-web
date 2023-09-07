import { message } from 'antd';
import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

import { PLAN_MESSAGE, PLAN_TYPE, PLAN_TYPE_KR, ROUTE_PATH } from '@/constants';
import { WarningIcon } from '@/icons/WarningIcon';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { selectedDateAtom } from '@/stores/atoms/selectedDateAtom';
import { impossiblePullUpAtom } from '@/stores/atoms/workoutDataAtom';
import { PlanType } from '@/types/plan';
import { checkPastDate } from '@/utils/date';

export const PlanButtons = () => {
  const selectedDate = useAtomValue(selectedDateAtom);
  const isLoggedIn = useAtomValue(loginStateAtom);
  const isPastDate = checkPastDate(selectedDate);
  const [messageApi, contextHolder] = message.useMessage();
  const userImpossiblePullUps = useAtomValue(impossiblePullUpAtom);
  const isAllMaster = userImpossiblePullUps.length <= 0;

  const getPlanLink = (planType: PlanType) => {
    if (!isLoggedIn) {
      return ROUTE_PATH.login;
    }
    if (isPastDate || (planType === PLAN_TYPE.master && isAllMaster)) {
      return '';
    }

    return ROUTE_PATH.plan.new;
  };

  const handlePlanButtonClick = () => {
    if (isPastDate) {
      messageApi.open({
        type: 'warning',
        content: PLAN_MESSAGE.pastDate,
        duration: 2,
        style: {
          marginTop: '75vh',
        },
        icon: WarningIcon(),
      });
    }
  };

  const strengthPlanLink = getPlanLink(PLAN_TYPE.strength);
  const masterPlanLink = getPlanLink(PLAN_TYPE.master);

  const handleMasterButtonClick = () => {
    if (userImpossiblePullUps.length <= 0) {
      messageApi.open({
        type: 'warning',
        content: `모든 풀업 운동이 가능해서 마스터 할 동작이 없어요! 대신, [${PLAN_TYPE_KR.strength}]을 만들 수 있어요.`,
        duration: 5,
        style: {
          marginTop: '75vh',
        },
        icon: WarningIcon(),
      });

      return;
    }
    handlePlanButtonClick();
  };

  return (
    <div className="mb-3 flex justify-around p-3">
      <Link
        to={strengthPlanLink}
        onClick={handlePlanButtonClick}
        state={{ planType: PLAN_TYPE.strength, date: selectedDate }}
        className="flex items-center rounded-md bg-primary p-3 text-base text-black"
      >
        <span>{PLAN_TYPE_KR.strength}</span>
      </Link>
      <Link
        to={masterPlanLink}
        onClick={handleMasterButtonClick}
        state={{ planType: PLAN_TYPE.master, date: selectedDate }}
        className="flex items-center rounded-md border-2 border-primary bg-zinc-800 p-3 text-base text-white"
      >
        <span>${PLAN_TYPE_KR.master}</span>
      </Link>
      {contextHolder}
    </div>
  );
};
