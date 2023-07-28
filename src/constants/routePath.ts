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
  plan: {
    index: '/plan',
    new: '/plan/new',
    detail: '/plan/:id',
  },
  summary: '/summary',
  community: '/community',
  deleteAccount: '/delete-account',
} as const;
