import { Link } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';

export const PlanButtons = () => {
  return (
    <div className="mb-3 flex justify-around p-3">
      <Link
        to={ROUTE_PATH.plan.newStrength}
        className="flex items-center rounded-md bg-primary px-5 py-3 text-base text-black"
      >
        <span>💪 근력 키우기</span>
      </Link>
      <Link
        to={ROUTE_PATH.plan.newMaster}
        className="flex items-center rounded-md border-2 border-primary bg-zinc-800 px-5 py-3 text-base text-white"
      >
        <span>🏆 동작 마스터</span>
      </Link>
    </div>
  );
};
