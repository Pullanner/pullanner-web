import { ROUTE_PATH } from '@/constants';

type LoginButtonProps = {
  platform: 'google' | 'kakao' | 'naver';
  iconURL: string;
  style: string;
};

export const LoginButton = ({ platform, iconURL, style }: LoginButtonProps) => {
  const AUTH_URL = import.meta.env.DEV
    ? ROUTE_PATH.callback
    : `${import.meta.env.VITE_API_URL}/oauth2/authorization/${platform}`;

  return (
    <a
      href={AUTH_URL}
      className={`${style} mb-5 flex h-10 w-[300px] flex-row items-center justify-center rounded-md`}
    >
      <img src={iconURL} alt={`${platform} icon`} />
      <span className="ml-2.5 text-sm font-bold">{platform}로 시작하기</span>
    </a>
  );
};
