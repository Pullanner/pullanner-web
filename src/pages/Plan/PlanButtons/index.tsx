import { message } from 'antd';
import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

import { PLAN_MESSAGE, PLAN_TYPE, ROUTE_PATH } from '@/constants';
import { WarningIcon } from '@/icons/WarningIcon';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { selectedDateAtom } from '@/stores/atoms/selectedDateAtom';
import { checkPastDate } from '@/utils/date';

export const PlanButtons = () => {
  const selectedDate = useAtomValue(selectedDateAtom);
  const isLoggedIn = useAtomValue(loginStateAtom);
  const isPastDate = checkPastDate(selectedDate);
  const [messageApi, contextHolder] = message.useMessage();

  const getPlanLink = () => {
    if (!isLoggedIn) {
      return ROUTE_PATH.login;
    }
    if (isPastDate) {
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

  const planLink = getPlanLink();

  return (
    <div className="mb-3 flex justify-around p-3">
      <Link
        to={planLink}
        onClick={handlePlanButtonClick}
        state={{ planType: PLAN_TYPE.strength, date: selectedDate }}
        className="flex items-center rounded-md bg-primary p-3 text-base text-black"
      >
        <span>💪 근력 키우기 플랜</span>
      </Link>
      <Link
        to={planLink}
        onClick={handlePlanButtonClick}
        state={{ planType: PLAN_TYPE.master, date: selectedDate }}
        className="flex items-center rounded-md border-2 border-primary bg-zinc-800 p-3 text-base text-white"
      >
        <span>🏆 동작 마스터 플랜</span>
      </Link>
      {contextHolder}
    </div>
  );
};
