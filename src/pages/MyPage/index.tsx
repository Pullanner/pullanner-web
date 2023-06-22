import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { LargeBlockButton } from '@/components/LargeBlockButton';
import { ProgressSection, UserSection, TabSection } from '@/components/MyPage';
import { API_PATH, ROUTE_PATH } from '@/constants';
import { authInstance } from '@/lib/axios/authInstance';
import { useUserData } from '@/lib/react-query/useUserData';
import { loginStateAtom } from '@/stores/atoms/loginStateAtom';

export const MyPage = () => {
  const { data } = useUserData();
  const setLoginState = useSetRecoilState(loginStateAtom);
  const navigate = useNavigate();

  const handleLogoutButtonClick = () => {
    authInstance.delete(API_PATH.token);
    setLoginState(false);
    navigate(ROUTE_PATH.root);
  };
  return (
    <div className="flex flex-col justify-center items-center border-t-0">
      <UserSection
        profileImage={data?.profileImage}
        nickName={data?.nickName}
        email={data?.email}
      />
      <ProgressSection />
      <TabSection />
      <LargeBlockButton name="로그아웃" handler={handleLogoutButtonClick} />
    </div>
  );
};
