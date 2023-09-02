export const PLAN_TYPE = {
  strength: 'strength',
  master: 'master',
} as const;

export const PLAN_MESSAGE = {
  pastDate: '오늘 이전 날짜에는 플랜을 생성할 수 없어요.',
  pastTime: '현재 시각 이전으로는 플랜을 생성할 수 없어요.',
};

export const PLAN_TIME_FORMAT = 'HH:mm';

export const NEW_PLAN_DESCRIPTION = {
  strength: '가능한 풀업 동작을 반복해서 연습하며 근력을 키워보아요.',
  master: '아직 불가능한 풀업 동작을 가능할 때까지 제대로 연습해볼까요?',
};
