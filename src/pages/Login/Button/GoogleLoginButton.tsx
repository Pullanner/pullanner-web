export const GoogleLoginButton = () => {
  return (
    <button
      type="button"
      className="flex flex-row justify-center items-center w-300 h-10 mb-5 rounded-md bg-white"
    >
      <img src="/assets/google-icon.svg" alt="Goole Icon" />
      <span className="ml-2.5 font-sans font-bold text-sm">Google로 시작하기</span>
    </button>
  );
};
