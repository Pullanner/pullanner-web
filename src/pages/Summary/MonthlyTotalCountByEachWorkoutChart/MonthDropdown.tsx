import { Dropdown, ConfigProvider, type MenuProps } from 'antd';
import { type MouseEvent } from 'react';

import { WORKOUT_NAME } from '@/constants';
import { DownArrowIcon } from '@/icons/DownArrowIcon';
import { StepIdForWorkout } from '@/types/workout';

import { CUSTOM_COLOR_TOKEN } from './customColorToken';

type MonthDropdownProps = {
  handleDropdownItemClick: ({ currentTarget }: MouseEvent<HTMLButtonElement>) => void;
  stepId: StepIdForWorkout;
};

export const MonthDropdown = ({ handleDropdownItemClick, stepId }: MonthDropdownProps) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <button type="button" id="1" onClick={handleDropdownItemClick}>
          Hanging
        </button>
      ),
    },
    {
      key: '2',
      label: (
        <button type="button" id="2" onClick={handleDropdownItemClick}>
          Jumping Pull-up
        </button>
      ),
    },
    {
      key: '3',
      label: (
        <button type="button" id="3" onClick={handleDropdownItemClick}>
          Band Pull-up
        </button>
      ),
    },
    {
      key: '4',
      label: (
        <button type="button" id="4" onClick={handleDropdownItemClick}>
          Chin-up
        </button>
      ),
    },
    {
      key: '5',
      label: (
        <button type="button" id="5" onClick={handleDropdownItemClick}>
          Pull-up
        </button>
      ),
    },
    {
      key: '6',
      label: (
        <button type="button" id="6" onClick={handleDropdownItemClick}>
          Chest to Bar
        </button>
      ),
    },
    {
      key: '7',
      label: (
        <button type="button" id="7" onClick={handleDropdownItemClick}>
          Archer Pull-up
        </button>
      ),
    },
    {
      key: '8',
      label: (
        <button type="button" id="8" onClick={handleDropdownItemClick}>
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
              <span>{WORKOUT_NAME[stepId]}</span>
              <DownArrowIcon />
            </div>
          </div>
        </Dropdown>
      </ConfigProvider>
    </div>
  );
};
