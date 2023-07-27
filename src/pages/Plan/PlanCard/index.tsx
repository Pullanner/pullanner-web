import { Dropdown } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import type { MenuProps } from 'antd';

type JournalCardProps = {
  color: string;
  name: string;
  count: number;
  time: string;
  description: string;
};

// TODO: 수정 & 삭제 기능 구현
const items: MenuProps['items'] = [
  {
    key: '1',
    label: <Link to="/journal/edit">수정</Link>,
  },
  {
    key: '2',
    label: <button type="button">삭제</button>,
  },
];

export const PlanCard = ({ color, name, count, time, description }: JournalCardProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleJournalCardClick = () => {
    setShowDescription((prev) => {
      return !prev;
    });
  };

  return (
    <div className="my-2 rounded-md bg-zinc-800 p-2">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleJournalCardClick}
          className="grid w-full grid-cols-7 items-center"
        >
          <span style={{ color }} className="col-span-3 justify-self-start">
            {name}
          </span>
          <span>{count}</span>
          <span className="col-span-2 justify-self-end text-sm">{time}</span>
        </button>
        <Dropdown
          menu={{ items }}
          className="cursor-pointer justify-self-end pl-3"
          placement="bottomRight"
          trigger={['click']}
        >
          <img src="/assets/images/dropdown-dots.svg" alt="dropdown" />
        </Dropdown>
      </div>
      <div
        className="mt-2 rounded-sm bg-zinc-700 p-2 text-sm"
        style={{ display: showDescription ? 'block' : 'none' }}
      >
        {description}
      </div>
    </div>
  );
};
