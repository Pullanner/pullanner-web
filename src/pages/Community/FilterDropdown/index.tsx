import { Dropdown, ConfigProvider } from 'antd';
import { useSearchParams } from 'react-router-dom';

import { DownArrowIcon } from '@/icons/DownArrowIcon';
import { COMMUNITY_FILTER_CRITERIA } from '@/pages/Community/constant';
import { FilterName } from '@/types/article';

import { CUSTOM_COLOR_TOKEN } from './customColorToken';

import type { MenuProps } from 'antd';
import type { MouseEvent } from 'react';

export const FilterDropdown = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterName = searchParams.get('sort') as FilterName;

  const handleDropdownItemClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    const itemName = currentTarget.name as FilterName;
    searchParams.set('sort', itemName);
    setSearchParams(searchParams);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <button type="button" name="latest" onClick={handleDropdownItemClick}>
          최신순
        </button>
      ),
    },
    {
      key: '2',
      label: (
        <button type="button" name="likes" onClick={handleDropdownItemClick}>
          좋아요순
        </button>
      ),
    },
    {
      key: '3',
      label: (
        <button type="button" name="views" onClick={handleDropdownItemClick}>
          조회순
        </button>
      ),
    },
  ];

  return (
    <ConfigProvider theme={{ token: CUSTOM_COLOR_TOKEN }}>
      <Dropdown menu={{ items, selectable: true }} placement="bottomRight" trigger={['click']}>
        <div className="flex w-fit items-center justify-center gap-2 py-2.5">
          <span className="text-xs">{COMMUNITY_FILTER_CRITERIA[filterName] || '최신순'}</span>
          <DownArrowIcon />
        </div>
      </Dropdown>
    </ConfigProvider>
  );
};
