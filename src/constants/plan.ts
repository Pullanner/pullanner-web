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
  strength:
    '[💪 근력 키우기 플랜]에서는 가능한 풀업 운동을 계획해서 연습할 수 있어요. 풀업으로 열심히 근력을 키워볼까요?',
  master:
    '[🏆 동작 마스터 플랜]에서는 아직 불가능한 풀업 운동을 계획해서 연습할 수 있어요. 모든 동작을 마스터하는 그날까지!',
};
