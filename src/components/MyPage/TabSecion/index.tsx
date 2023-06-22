import { Outlet } from 'react-router-dom';

import { Tabs } from '@/components/Tabs';

import { MY_PAGE_TABS, MY_PAGE_TAB_STYLE } from '../../../pages/MyPage/constants';

export const TabSection = () => {
  return (
    <section className="flex flex-col mt-[3.125rem]">
      <div className="flex justify-center gap-x-2">
        <Tabs tabData={MY_PAGE_TABS} tabStyle={MY_PAGE_TAB_STYLE} />
      </div>
      <Outlet />
    </section>
  );
};

export const CommunityList = () => {
  return (
    <div className="w-[21.875rem] h-[10.625rem] px-6 mt-[1.625rem]">
      <span className="text-xs text-gray-500">0개의 작성한 글이 있습니다.</span>
    </div>
  );
};

export const CommentList = () => {
  return (
    <div className="w-[21.875rem] h-[10.625rem] px-6 mt-[1.625rem]">
      <span className="text-xs text-gray-500">0개의 작성한 댓글이 있습니다.</span>
    </div>
  );
};
