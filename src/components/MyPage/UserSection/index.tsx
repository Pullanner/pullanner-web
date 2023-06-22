import { Link } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants/routePath';

type UserSectionProps = {
  profileImage: string;
  nickName: string;
  email: string;
};

export const UserSection = ({ profileImage, nickName, email }: UserSectionProps) => {
  return (
    <section className="mt-12 mb-7 flex flex-col justify-center items-center">
      <img className="w-24 h-24 mb-[1.938rem] rounded-full" src={profileImage} alt="profileImage" />
      <span className="inline-block mb-[0.313rem]  text-main font-semibold text-white">{`안녕하세요, ${nickName}님`}</span>
      <span className="inline-block mb-[1.125rem] text-xs text-gray-400">{email}</span>
      <Link
        to={ROUTE_PATH.myPage.edit}
        className="flex w-[6.25rem] h-7 border border-white rounded-[1.25rem] items-center"
      >
        <span className="mx-3 text-xs text-white">정보수정</span>
        <img src="/assets/images/edit-icon.svg" alt="editIcon" />
      </Link>
    </section>
  );
};
