import { useSetAtom, useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import { DimmedButton } from '@/components/buttons/DimmedButton';
import { API_PATH, ROUTE_PATH } from '@/constants';
import { axiosInstance } from '@/lib/axios/instance';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

import { ProgressSection } from './ProgressSection';
import { TabSection } from './TabSection';
import { UserSection } from './UserSection';

export const MyPage = () => {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const userData = useAtomValue(userDataAtom) as UserData;
  const setUserData = useSetAtom(userDataAtom);
  const navigate = useNavigate();

  const handleLogoutButtonClick = () => {
    axiosInstance.delete(API_PATH.token);
    setLoginState(false);
    setAccessToken('');
    setUserData(null);
    navigate(ROUTE_PATH.root);
  };

  // TODO: 추후에 로딩페이지로 교체하기
  if (!userData) {
    return <div>Loading...</div>;
  }

  const { profileImage, nickname, email, journalCount, level } = userData;

  return (
    <div>
      <UserSection profileImage={profileImage} nickname={nickname} email={email} />
      <ProgressSection journalCount={journalCount} level={level} />
      <TabSection />
      <div className="flex justify-center">
        <DimmedButton name="로그아웃" handler={handleLogoutButtonClick} />
      </div>
    </div>
  );
};
