export const COMMUNITY_TABS = [
  {
    name: '전체',
    category: 'total',
  },
  {
    name: '자유게시판',
    category: 'articles',
  },
  {
    name: '스터디모집',
    category: 'studies',
  },
] as const;

export const COMMUNITY_TAB_STYLE = {
  active: 'w-14 h-8 rounded bg-primary text-black text-center text-xs font-bold p-1 mr-4',
  inActive: 'w-14 h-8 rounded text-center text-xs font-normal mr-4',
} as const;
export const COMMUNITY_FILTER_CRITERIA = {
  latest: '최신순',
  likes: '좋아요순',
  views: '조회순',
} as const;
