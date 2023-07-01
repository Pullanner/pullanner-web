import { Link } from 'react-router-dom';

import { ProfileImage } from '@/components/ProfileImage';
import { ROUTE_PATH } from '@/constants/routePath';

type UserSectionProps = {
  profileImage: string;
  nickName: string;
  email: string;
};

const MyPageEditButton = () => {
  return (
    <Link
      to={ROUTE_PATH.myPage.edit}
      className="flex w-[6.25rem] h-7 border border-white rounded-[1.25rem] items-center"
    >
      <span className="px-3 text-xs">정보수정</span>
      <img src="/assets/images/edit-icon.svg" alt="editIcon" />
    </Link>
  );
};

export const UserSection = ({ profileImage, nickName, email }: UserSectionProps) => {
  return (
    <section className="pt-12 pb-7 flex flex-col justify-center items-center">
      <ProfileImage url={profileImage} size="6rem" />
      <span className="inline-block pb-[0.313rem]  text-main font-semibold">{`안녕하세요, ${nickName}님`}</span>
      <span className="inline-block pb-[1.125rem] text-xs text-gray-400">{email}</span>
      <MyPageEditButton />
    </section>
  );
};
