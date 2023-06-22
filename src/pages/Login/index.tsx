import { LoginButton } from '@/components/LoginButton';

const LOGIN_BUTTON_DATA = [
  {
    platform: 'kakao',
    iconURL: '/assets/images/kakao-icon.svg',
  },
  {
    platform: 'naver',
    iconURL: '/assets/images/naver-icon.svg',
  },
  {
    platform: 'google',
    iconURL: '/assets/images/google-icon.svg',
  },
] as const;

export const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center my-52">
      <h1 className="mb-14">
        <img src="/assets/images/logo.svg" alt="Logo" />
      </h1>
      <h3 className="mb-9 text-sm font-normal text-white tracking-tight">
        로그인 후 플래너의 다양한 기능을 사용해보세요
      </h3>
      {LOGIN_BUTTON_DATA.map(({ platform, iconURL }) => {
        return <LoginButton key={platform} platform={platform} iconURL={iconURL} />;
      })}
    </div>
  );
};
