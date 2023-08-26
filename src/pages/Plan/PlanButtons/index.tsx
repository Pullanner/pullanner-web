import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { selectedDateAtom } from '@/stores/atoms/selectedDateAtom';

export const PlanButtons = () => {
  const selectedDate = useAtomValue(selectedDateAtom);
  const isLoggedIn = useAtomValue(loginStateAtom);
  const planLink = isLoggedIn ? ROUTE_PATH.plan.new : ROUTE_PATH.login;

  return (
    <div className="mb-3 flex justify-around p-3">
      <Link
        to={planLink}
        state={{ planType: 'strength', date: selectedDate }}
        className="flex items-center rounded-md bg-primary p-3 text-base text-black"
      >
        <span>💪 근력 키우기 플랜</span>
      </Link>
      <Link
        to={planLink}
        state={{ planType: 'master', date: selectedDate }}
        className="flex items-center rounded-md border-2 border-primary bg-zinc-800 p-3 text-base text-white"
      >
        <span>🏆 동작 마스터 플랜</span>
      </Link>
    </div>
  );
};
