import { Input } from 'antd';

import { NEW_PLAN_TITLE } from '@/constants';

import type { ChangeEvent } from 'react';

type PlanNameSectionProps = {
  planName: string;
  handlePlanInputChange: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void;
};

export const PlanNameSection = ({ planName, handlePlanInputChange }: PlanNameSectionProps) => {
  return (
    <section>
      <div>
        <p className="py-2">{NEW_PLAN_TITLE.planName}</p>
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
