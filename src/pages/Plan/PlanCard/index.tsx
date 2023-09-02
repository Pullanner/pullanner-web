import { Dropdown } from 'antd';
import { Link } from 'react-router-dom';

import { PLAN_TYPE } from '@/constants';

import type { MenuProps } from 'antd';

type PlanCardProps = {
  id: number;
  planType: string;
  planName: string;
  progress: number;
};

// TODO: 수정 & 삭제 기능 구현
const items: MenuProps['items'] = [
  {
    key: '1',
    label: <Link to="/plan/edit">수정</Link>,
  },
  {
    key: '2',
    label: <button type="button">삭제</button>,
  },
];

const DropdownDots = () => {
  return (
    <svg width="3" height="15" viewBox="0 0 3 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="1.5" cy="1.5" r="1.5" fill="#D9D9D9" />
      <circle cx="1.5" cy="7.5" r="1.5" fill="#D9D9D9" />
      <circle cx="1.5" cy="13.5" r="1.5" fill="#D9D9D9" />
    </svg>
  );
};

export const PlanCard = ({ planType, planName, progress, id }: PlanCardProps) => {
  return (
    <div className="my-2 rounded-md bg-zinc-800">
      <div className="flex items-center justify-between p-2">
        <Link to={`/plan/${id}`} className="flex w-full items-center justify-between">
          <span className="">{`${planType === PLAN_TYPE.strength ? '💪' : '🏆'} ${planName}`}</span>
          <span className="text-sm text-zinc-200">{progress}%</span>
        </Link>
        <Dropdown
          menu={{ items }}
          className="cursor-pointer"
          placement="bottomRight"
          trigger={['click']}
        >
          <div className="pl-5">
            <DropdownDots />
          </div>
        </Dropdown>
      </div>
      <div className="h-2.5 rounded-b-full bg-zinc-600">
        <div className="h-2.5 rounded-bl-full bg-primary" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};
