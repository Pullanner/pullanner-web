import { LoginButton } from '@/components/buttons/LoginButton';

const LOGIN_BUTTON_DATA = [
  {
    platform: 'kakao',
    iconURL: '/assets/images/kakao-icon.svg',
    style: 'bg-kakao text-[#34201F] capitalize',
  },
  {
    platform: 'naver',
    iconURL: '/assets/images/naver-icon.svg',
    style: 'bg-naver capitalize',
  },
  {
    platform: 'google',
    iconURL: '/assets/images/google-icon.svg',
    style: 'bg-white text-black capitalize',
  },
] as const;

const LOGIN_MESSAGE = '로그인 후 풀래너의 다양한 기능을 사용해보세요!';

export const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <figure className="my-16">
        <img src="/assets/images/banner/login.jpg" alt="loginBanner" />
      </figure>
      <div className="mx-5">
        <h1 className="mb-9 text-sm font-normal">{LOGIN_MESSAGE}</h1>
        {LOGIN_BUTTON_DATA.map(({ platform, iconURL, style }) => {
          return <LoginButton key={platform} platform={platform} iconURL={iconURL} style={style} />;
        })}
      </div>
    </div>
  );
};
