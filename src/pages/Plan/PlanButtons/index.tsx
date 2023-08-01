import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';
import { selectedDateAtom } from '@/stores/atoms/selectedDateAtom';

const PLAN = {
  strength: {
    type: 'strength',
    name: '💪 근력 키우기 플랜',
  },
  master: {
    type: 'master',
    name: '🏆 동작 마스터 플랜',
  },
};

export const PlanButtons = () => {
  const selectedDate = useAtomValue(selectedDateAtom);

  return (
    <div className="mb-3 flex justify-around p-3">
      <Link
        to={ROUTE_PATH.plan.new}
        state={{ planType: PLAN.strength.type, date: selectedDate }}
        className="flex items-center rounded-md bg-primary p-3 text-base text-black"
      >
        <span>{PLAN.strength.name}</span>
      </Link>
      <Link
        to={ROUTE_PATH.plan.new}
        state={{ planType: PLAN.master.type, date: selectedDate }}
        className="flex items-center rounded-md border-2 border-primary bg-zinc-800 p-3 text-base text-white"
      >
        <span>{PLAN.master.name}</span>
      </Link>
    </div>
  );
};
