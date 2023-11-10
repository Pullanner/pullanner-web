import { Dropdown, ConfigProvider, type MenuProps } from 'antd';
import { type MouseEvent } from 'react';

import { DownArrowIcon } from '@/icons/DownArrowIcon';

import { CUSTOM_COLOR_TOKEN } from './customColorToken';

type MonthDropdownProps = {
  handleDropdownItemClick: ({ currentTarget }: MouseEvent<HTMLButtonElement>) => void;
  workoutName: string;
};

export const MonthDropdown = ({ handleDropdownItemClick, workoutName }: MonthDropdownProps) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <button type="button" name="Hanging" onClick={handleDropdownItemClick}>
          Hanging
        </button>
      ),
    },
    {
      key: '2',
      label: (
        <button type="button" name="Jumping Pull-up" onClick={handleDropdownItemClick}>
          Jumping Pull-up
        </button>
      ),
    },
    {
      key: '3',
      label: (
        <button type="button" name="Band Pull-up" onClick={handleDropdownItemClick}>
          Band Pull-up
        </button>
      ),
    },
    {
      key: '4',
      label: (
        <button type="button" name="Chin-up" onClick={handleDropdownItemClick}>
          Chin-up
        </button>
      ),
    },
    {
      key: '5',
      label: (
        <button type="button" name="Pull-up" onClick={handleDropdownItemClick}>
          Pull-up
        </button>
      ),
    },
    {
      key: '6',
      label: (
        <button type="button" name="Chest to Bar" onClick={handleDropdownItemClick}>
          Chest to Bar
        </button>
      ),
    },
    {
      key: '7',
      label: (
        <button type="button" name="Archer Pull-up" onClick={handleDropdownItemClick}>
          Archer Pull-up
        </button>
      ),
    },
    {
      key: '8',
      label: (
        <button type="button" name="Muscle up" onClick={handleDropdownItemClick}>
          Muscle up
        </button>
      ),
    },
  ];

  return (
    <div className="pb-3 pl-3">
      <ConfigProvider theme={{ token: CUSTOM_COLOR_TOKEN }}>
        <Dropdown menu={{ items, selectable: true }} placement="bottomLeft" trigger={['click']}>
          <div className="inline-block rounded-md bg-gray-4 px-2.5 py-1.5 text-sm hover:bg-gray-3">
            <div className="flex items-center justify-center gap-2">
              <span>{workoutName}</span>
              <DownArrowIcon />
            </div>
          </div>
        </Dropdown>
      </ConfigProvider>
    </div>
  );
};
