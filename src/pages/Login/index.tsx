import { GoogleLoginButton, KakaoLoginButton, NaverLoginButton } from './Button';

export const Login = () => {
  return (
    <>
      <h1 className="mb-14">
        <img src="/assets/logo.svg" alt="Logo" />
      </h1>
      <h3 className="mb-9 font-sans text-sm font-normal text-white tracking-tight">
        로그인 후 플래너의 다양한 기능을 사용해보세요
      </h3>
      <KakaoLoginButton />
      <NaverLoginButton />
      <GoogleLoginButton />
    </>
  );
};
