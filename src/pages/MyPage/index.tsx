import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { DimmedButton } from '@/components/buttons/DimmedButton';
import { API_PATH, ROUTE_PATH } from '@/constants';
import { authInstance } from '@/lib/axios/authInstance';
import { useUserData } from '@/lib/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';

import { ProgressSection } from './ProgressSection';
import { TabSection } from './TabSection';
import { UserSection } from './UserSection';

export const MyPage = () => {
  const { data } = useUserData();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const navigate = useNavigate();

  const handleLogoutButtonClick = () => {
    authInstance.delete(API_PATH.token);
    setLoginState(false);
    setAccessToken('');
    navigate(ROUTE_PATH.root);
  };
  return (
    <div>
      <UserSection
        profileImage={data?.profileImage}
        nickname={data?.nickname}
        email={data?.email}
      />
      <ProgressSection journalCount={data?.journalCount} level={data?.level} />
      <TabSection />
      <div className="flex justify-center">
        <DimmedButton name="로그아웃" handler={handleLogoutButtonClick} />
      </div>
    </div>
  );
};
