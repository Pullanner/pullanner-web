import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Tabs } from '@/components/Tabs';
import { MY_PAGE_TABS, MY_PAGE_TAB_STYLE } from '@/pages/MyPage/constants';

export const TabSection = () => {
  return (
    <section className="flex flex-col pt-[3.125rem]">
      <div className="flex justify-center gap-x-2">
        <Tabs tabData={MY_PAGE_TABS} tabStyle={MY_PAGE_TAB_STYLE} />
      </div>
      <Outlet />
    </section>
  );
};

// TODO: 임시 List Data Type 추후 수정
type ListDataType = {
  id: number;
  content: string;
};

type ListItemProps = {
  list: ListDataType;
};

type TabListProps = {
  totalInfo: string;
  listData: ListDataType[];
  listItemComponent: (arg0: ListItemProps) => ReactElement<ListItemProps>;
};

const TabList = ({ totalInfo, listData, listItemComponent }: TabListProps) => {
  return (
    <div className="w-[21.875rem] p-6">
      <div className="text-xs text-gray-500">{totalInfo}</div>
      {listData &&
        listData.map((list) => {
          return (
            <div key={list.id} className="py-2">
              {listItemComponent({ list })}
            </div>
          );
        })}
    </div>
  );
};

// TODO: 실제 데이터에 따라 PostItem과 CommentItem 컴포넌트로 분리하기
const ListItem = ({ list }: ListItemProps) => {
  return <span className="text-sm">{list.content}</span>;
};

export const MyPostList = () => {
  // TODO: 임시 데이터 추후 실제 데이터를 받아오는 것으로 수정
  const myPostListData = [{ id: 1, content: '새로운 글' }];
  return (
    <TabList
      totalInfo={`${myPostListData.length}개의 작성한 글이 있습니다.`}
      listData={myPostListData}
      listItemComponent={ListItem}
    />
  );
};

export const MyCommentList = () => {
  const myCommentListData = [{ id: 1, content: '새로운 글' }];
  return (
    <TabList
      totalInfo={`${myCommentListData.length}개의 작성한 댓글이 있습니다.`}
      listData={myCommentListData}
      listItemComponent={ListItem}
    />
  );
};
