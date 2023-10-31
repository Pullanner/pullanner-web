import { Dropdown, ConfigProvider, type MenuProps } from 'antd';
import { type MouseEvent } from 'react';

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
        <button type="button" name="Jumping Pull-Up" onClick={handleDropdownItemClick}>
          Jumping Pull-Up
        </button>
      ),
    },
    {
      key: '3',
      label: (
        <button type="button" name="Band Pull-Up" onClick={handleDropdownItemClick}>
          Band Pull-Up
        </button>
      ),
    },
    {
      key: '4',
      label: (
        <button type="button" name="Chin-Up" onClick={handleDropdownItemClick}>
          Chin-Up
        </button>
      ),
    },
    {
      key: '5',
      label: (
        <button type="button" name="Pull-Up" onClick={handleDropdownItemClick}>
          Pull-Up
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
        <button type="button" name="Archer Pull-Up" onClick={handleDropdownItemClick}>
          Archer Pull-Up
        </button>
      ),
    },
    {
      key: '8',
      label: (
        <button type="button" name="Muscle Up" onClick={handleDropdownItemClick}>
          Muscle Up
        </button>
      ),
    },
  ];

  return (
    <div className="pb-3 pl-3">
      <ConfigProvider theme={{ token: CUSTOM_COLOR_TOKEN }}>
        <Dropdown menu={{ items, selectable: true }} placement="bottomLeft" trigger={['click']}>
          <div className="inline-block rounded-md bg-gray-4 px-2 py-1 text-sm hover:bg-gray-3">
            {workoutName}
          </div>
        </Dropdown>
      </ConfigProvider>
    </div>
  );
};
