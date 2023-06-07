type LoginButtonProps = {
  platform: 'google' | 'kakao' | 'naver';
  iconURL: string;
};

const backgroundColorVariants = {
  google: 'bg-white',
  kakao: 'bg-amber-300',
  naver: 'bg-green-500',
};

export const LoginButton = (props: LoginButtonProps) => {
  const { platform, iconURL } = props;
  const AUTH_URL = `${import.meta.env.VITE_API_URL}/oauth2/authorization/${platform}`;
  return (
    <a
      href={AUTH_URL}
      className={`${backgroundColorVariants[platform]} flex flex-row justify-center items-center w-300 h-10 mb-5 rounded-md`}
    >
      <img src={iconURL} alt={`${platform} icon`} />
      <span className="ml-2.5 font-sans font-bold text-sm">{platform}로 시작하기</span>
    </a>
  );
};
