import { Link } from 'react-router-dom';

export const NaverLoginButton = () => {
  return (
    <Link to="/callback" state={{ platform: 'naver' }}>
      <button
        type="button"
        className="flex flex-row justify-center items-center w-300 h-10 mb-5 rounded-md bg-[#00BF18]"
      >
        <img src="/assets/naver-icon.svg" alt="Naver Icon" />
        <span className="ml-2.5 font-sans font-bold text-sm text-white">Naver로 시작하기</span>
      </button>
    </Link>
  );
};
