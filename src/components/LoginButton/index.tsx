type LoginButtonProps = {
  platform: 'google' | 'kakao' | 'naver';
  iconURL: string;
};

const BACKGROUND_COLOR_VARIANTS = {
  google: 'bg-white text-black',
  kakao: 'bg-kakao',
  naver: 'bg-naver',
} as const;

export const LoginButton = (props: LoginButtonProps) => {
  const { platform, iconURL } = props;
  const AUTH_URL = `${import.meta.env.VITE_API_URL}/oauth2/authorization/${platform}`;
  return (
    <a
      href={AUTH_URL}
      className={`${BACKGROUND_COLOR_VARIANTS[platform]} flex flex-row justify-center items-center w-[300px] h-10 mb-5 rounded-md`}
    >
      <img src={iconURL} alt={`${platform} icon`} />
      <span className="ml-2.5 font-bold text-sm">{platform}로 시작하기</span>
    </a>
  );
};
