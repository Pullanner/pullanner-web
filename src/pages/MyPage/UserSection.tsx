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
      className="flex w-[6.25rem] h-7 border border-white rounded-[1.25rem] items-center"
    >
      <span className="px-3 text-xs">정보수정</span>
      <img src="/assets/images/edit-icon.svg" alt="editIcon" />
    </Link>
  );
};

export const UserSection = ({ profileImage, nickname, email }: UserSectionProps) => {
  return (
    <section className="pt-12 pb-7 flex flex-col justify-center items-center">
      <ProfileImage imageUrl={profileImage} imageSize="6rem" />
      <span className="inline-block mt-[1.938rem] pb-[0.313rem]  text-main font-semibold">{`안녕하세요, ${nickname}님`}</span>
      <span className="inline-block pb-[1.125rem] text-xs text-gray-400">{email}</span>
      <MyPageEditButton nickname={nickname} />
    </section>
  );
};
