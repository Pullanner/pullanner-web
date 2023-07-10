import { Link } from 'react-router-dom';

import { ProfileImage } from '@/components/ProfileImage';
import { ROUTE_PATH } from '@/constants';

type UserSectionProps = {
  profileImage: string;
  nickname: string;
  email: string;
};

type MyPageEditButtonProps = Pick<UserSectionProps, 'nickname'>;

const MyPageEditButton = ({ nickname }: MyPageEditButtonProps) => {
  return (
    <Link
      to={ROUTE_PATH.myPage.edit}
      state={{ nickname }}
      className="flex h-7 w-[6.25rem] items-center rounded-[1.25rem] border border-white"
    >
      <span className="px-3 text-xs">정보수정</span>
      <img src="/assets/images/edit-icon.svg" alt="editIcon" />
    </Link>
  );
};

export const UserSection = ({ profileImage, nickname, email }: UserSectionProps) => {
  return (
    <section className="flex flex-col items-center justify-center pb-7 pt-12">
      <ProfileImage imageUrl={profileImage} imageSize="6rem" />
      <span className="mt-[1.938rem] inline-block pb-[0.313rem]  text-main font-semibold">{`안녕하세요, ${nickname}님`}</span>
      <span className="inline-block pb-[1.125rem] text-xs text-gray-400">{email}</span>
      <MyPageEditButton nickname={nickname} />
    </section>
  );
};
