import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DimmedButton } from '@/components/buttons/DimmedButton';
import { ROUTE_PATH } from '@/constants';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { modalTypeAtom } from '@/stores/atoms/modalTypeAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

import { ProgressSection } from './ProgressSection';
import { TabSection } from './TabSection';
import { UserSection } from './UserSection';

export const MyPage = () => {
  const loginState = useAtomValue(loginStateAtom) as boolean;
  const userData = useAtomValue(userDataAtom) as UserData;
  const setModalType = useSetAtom(modalTypeAtom);
  const navigate = useNavigate();

  const handleLogoutButtonClick = () => {
    setModalType('logout');
  };

  useEffect(() => {
    if (!loginState) {
      navigate(ROUTE_PATH.login);
    }
  }, [loginState, navigate]);

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
