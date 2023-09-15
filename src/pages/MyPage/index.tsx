import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';
import { userDataAtom, UserData } from '@/stores/atoms/userDataAtom';

import { ProgressSection } from './ProgressSection';
import { UserSection } from './UserSection';
import { WorkoutSection } from './WorkoutSection';

export const MyPage = () => {
  const loginState = useAtomValue(loginStateAtom) as boolean;
  const userData = useAtomValue(userDataAtom) as UserData;
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState) {
      navigate(ROUTE_PATH.login);
    }
  }, [loginState, navigate]);

  // TODO: 추후에 로딩페이지로 교체하기
  if (!userData) {
    return <div>Loading...</div>;
  }

  const { profileImage, nickname, email, experiencePoint, level } = userData;

  return (
    <div>
      <UserSection profileImage={profileImage} nickname={nickname} email={email} />
      <ProgressSection experiencePoint={experiencePoint} level={level} />
      <WorkoutSection />
    </div>
  );
};
