import { useSetAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DimmedButton } from '@/components/buttons/DimmedButton';
import { API_PATH, ROUTE_PATH } from '@/constants';
import { authInstance } from '@/lib/axios/authInstance';
import { useUserData } from '@/lib/react-query/useUserData';
import { accessTokenAtom } from '@/stores/atoms/accessTokenAtom';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

import { ProgressSection } from './ProgressSection';
import { TabSection } from './TabSection';
import { UserSection } from './UserSection';

export const MyPage = () => {
  const { data, isSuccess } = useUserData();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setLoginState = useSetAtom(loginStateAtom);
  const userData = useAtomValue(userDataAtom) as UserData;
  const setUserData = useSetAtom(userDataAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setUserData(data);
    }
  }, [isSuccess, data, setUserData]);

  const handleLogoutButtonClick = () => {
    authInstance.delete(API_PATH.token);
    setLoginState(false);
    setAccessToken('');
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
