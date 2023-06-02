import { LoginButton } from '@/components/LoginButton';

type LoginButtonData = {
  platform: 'kakao' | 'naver' | 'google';
  iconURL: string;
};

const loginButtonData: LoginButtonData[] = [
  {
    platform: 'kakao',
    iconURL: '/assets/kakao-icon.svg',
  },
  {
    platform: 'naver',
    iconURL: '/assets/naver-icon.svg',
  },
  {
    platform: 'google',
    iconURL: '/assets/google-icon.svg',
  },
];

export const Login = () => {
  return (
    <>
      <h1 className="mb-14">
        <img src="/assets/logo.svg" alt="Logo" />
      </h1>
      <h3 className="mb-9 font-sans text-sm font-normal text-white tracking-tight">
        로그인 후 플래너의 다양한 기능을 사용해보세요
      </h3>
      {loginButtonData.map(({ platform, iconURL }) => {
        return <LoginButton key={platform} platform={platform} iconURL={iconURL} />;
      })}
    </>
  );
};
