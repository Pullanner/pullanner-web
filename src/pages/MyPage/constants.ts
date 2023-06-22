export const MY_PAGE_TABS = [
  {
    name: '작성글',
    path: '/my-page',
  },
  {
    name: '작성 댓글',
    path: '/my-page/comment',
  },
];

export const MY_PAGE_TAB_STYLE = {
  active: 'w-36 h-8 border-b border-primary text-white text-center text-main font-bold',
  inActive: 'w-36 h-8 text-gray-500 text-center text-main font-normal',
} as const;
