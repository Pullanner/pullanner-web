export const KakaoLoginButton = () => {
  return (
    <button
      type="button"
      className="flex flex-row justify-center items-center w-300 h-10 mb-5 rounded-md bg-[#FBE950]"
    >
      <img src="/assets/kakao-icon.svg" alt="Kakao Icon" />
      <span className="ml-2.5 font-sans font-bold text-sm">Kakao로 시작하기</span>
    </button>
  );
};
