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
  emotion: number;
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

export const JournalCard = ({
  color,
  name,
  count,
  time,
  description,
  emotion,
}: JournalCardProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleJournalCardClick = () => {
    setShowDescription((prev) => {
      return !prev;
    });
  };

  return (
    <div className="bg-zinc-800 p-2 my-2 rounded-md">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleJournalCardClick}
          className="grid grid-cols-7 w-full items-center"
        >
          <img src={`/assets/images/emotion/${emotion}.svg`} alt="emotion" className="w-6 h-6" />
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
        className="p-2 mt-2 text-sm bg-zinc-700 rounded-sm"
        style={{ display: showDescription ? 'block' : 'none' }}
      >
        {description}
      </div>
    </div>
  );
};
