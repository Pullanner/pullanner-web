import { LoginButton } from '@/components/buttons/LoginButton';

const LOGIN_BUTTON_DATA = [
  {
    platform: 'Kakao',
    iconURL: '/assets/images/kakao-icon.svg',
  },
  {
    platform: 'Naver',
    iconURL: '/assets/images/naver-icon.svg',
  },
  {
    platform: 'Google',
    iconURL: '/assets/images/google-icon.svg',
  },
] as const;

const LOGIN_MESSAGE = '로그인 후 풀래너의 다양한 기능을 사용해보세요!';

export const Login = () => {
  return (
    <div className="mt-24 flex flex-col items-center">
      <h1 className="mb-9">
        <img src="/assets/images/logo.svg" alt="Logo" />
      </h1>
      <h3 className="mb-9 text-sm font-normal">{LOGIN_MESSAGE}</h3>
      {LOGIN_BUTTON_DATA.map(({ platform, iconURL }) => {
        return <LoginButton key={platform} platform={platform} iconURL={iconURL} />;
      })}
    </div>
  );
};
