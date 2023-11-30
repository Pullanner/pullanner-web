export const PLAN_TYPE = {
  strength: 'strength',
  master: 'master',
} as const;

export const PLAN_TIME_FORMAT = 'HH:mm';

export const PLAN_TYPE_KR = {
  strength: '💪 근력 키우기 플랜',
  master: '🏆 동작 마스터 플랜',
} as const;

export const PLAN_MESSAGE = {
  pastDate: '오늘 이전 날짜에는 플랜을 생성할 수 없어요.',
  pastTime: '현재 시각 이전으로는 플랜을 생성할 수 없어요.',
  allMaster: `모든 풀업 운동이 가능해서 마스터 할 동작이 없어요! 대신, [${PLAN_TYPE_KR.strength}]을 만들 수 있어요.`,
} as const;

export const NEW_PLAN_DESCRIPTION = {
  strength: `[${PLAN_TYPE_KR.strength}]에서는 가능한 풀업 운동을 계획해서 연습할 수 있어요. 풀업으로 열심히 근력을 키워볼까요?`,
  master: `[${PLAN_TYPE_KR.master}]에서는 아직 불가능한 풀업 운동을 계획해서 연습할 수 있어요. 모든 동작을 마스터하는 그날까지!`,
} as const;

export const NEW_PLAN_TITLE = {
  planName: '😎 이번 풀업 계획의 이름은 뭘로 할까요?',
  workoutTime: '⏰ 풀업 운동을 언제 할까요?',
  workoutTable: '💪 어떤 풀업 운동을 해볼까요?',
};

export const WORKOUT_TIME_DESCRIPTION =
  '플랜 날짜가 오늘이면, 현재 시각보다 이후의 시각으로 설정해주세요.';

export const WORKOUT_TABLE_DESCRIPTION = {
  manual: ' 연습할 풀업 운동을 선택 후, 횟수(Count)와 세트(Set)를 입력해주세요.',
  hanging: 'Hanging은 횟수 대신 초(Second) 단위로 입력해주세요.',
} as const;
