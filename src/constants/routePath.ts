export const ROUTE_PATH = {
  root: '/',
  login: '/login',
  callback: '/callback',
  myPage: {
    index: '/my-page',
    comment: '/my-page/comment',
    edit: '/my-page/edit',
  },
  roadmap: {
    index: '/roadmap',
    detail: '/roadmap/:step',
  },
  journal: {
    index: '/journal',
    new: '/journal/new',
  },
  summary: '/summary',
  community: '/community',
} as const;
