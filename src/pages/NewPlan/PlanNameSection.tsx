import { Input } from 'antd';

import type { ChangeEvent } from 'react';

type PlanNameSectionProps = {
  planName: string;
  handlePlanInputChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
};

export const PlanNameSection = ({ planName, handlePlanInputChange }: PlanNameSectionProps) => {
  return (
    <section>
      <div>
        <p className="py-2">😎 이번 풀업 계획의 이름은 뭘로 할까요?</p>
      </div>
      <Input
        status={planName.length ? '' : 'error'}
        showCount
        maxLength={20}
        allowClear
        value={planName}
        onChange={handlePlanInputChange}
        placeholder="1자 이상 20자 이하로 입력해주세요"
      />
    </section>
  );
};
