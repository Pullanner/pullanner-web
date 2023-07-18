type LoginButtonProps = {
  platform: 'Google' | 'Kakao' | 'Naver';
  iconURL: string;
};

const BACKGROUND_COLOR_VARIANTS = {
  Google: 'bg-white text-black',
  Kakao: 'bg-kakao text-[#34201F]',
  Naver: 'bg-naver',
} as const;

export const LoginButton = (props: LoginButtonProps) => {
  const { platform, iconURL } = props;
  const AUTH_URL = `${import.meta.env.VITE_API_URL}/oauth2/authorization/${platform}`;
  return (
    <a
      href={AUTH_URL}
      className={`${BACKGROUND_COLOR_VARIANTS[platform]} mb-5 flex h-10 w-[300px] flex-row items-center justify-center rounded-md`}
    >
      <img src={iconURL} alt={`${platform} icon`} />
      <span className="ml-2.5 text-sm font-bold">{platform}로 시작하기</span>
    </a>
  );
};
