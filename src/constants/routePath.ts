export const ROUTE_PATH = {
  root: '/',
  login: '/login',
  callback: '/callback',
  myPage: {
    index: '/my-page',
    comment: '/my-page/comment',
    edit: '/my-page/edit',
  },
  roadmap: '/roadmap',
  roadmapDetail: '/roadmap/:step',
  journal: '/journal',
  newJournal: '/journal/new',
} as const;
