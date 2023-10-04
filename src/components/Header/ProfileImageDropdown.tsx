import { Dropdown, ConfigProvider } from 'antd';
import { useSetAtom, useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

import { CUSTOM_COLOR_TOKEN } from './customColorToken';

import type { MenuProps } from 'antd';

const DEFAULT_PROFILE_IMAGE_URL = '/assets/images/user-icon.svg';

export const ProfileImageDropdown = () => {
  const setModalType = useSetAtom(modalTypeAtom);
  const userData = useAtomValue(userDataAtom) as UserData;
  const imageUrl = userData ? userData.profileImage : DEFAULT_PROFILE_IMAGE_URL;

  const handleLogoutButtonClick = () => {
    setModalType('logout');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to={ROUTE_PATH.myPage.index}>프로필</Link>,
    },
    {
      key: '2',
      label: <Link to={ROUTE_PATH.myPage.edit}>정보수정</Link>,
    },
    {
      key: '3',
      label: <span>커뮤니티 활동</span>,
    },
    {
      key: '4',
      label: (
        <button type="button" onClick={handleLogoutButtonClick}>
          로그아웃
        </button>
      ),
    },
  ];

  return (
    <ConfigProvider theme={{ token: CUSTOM_COLOR_TOKEN }}>
      <Dropdown menu={{ items, selectable: true }} placement="bottomRight" trigger={['click']}>
        <img
          className="h-8 w-8 rounded-full border-[0.063rem] border-gray-3"
          src={imageUrl}
          alt="userIcon"
        />
      </Dropdown>
    </ConfigProvider>
  );
};
