import { Modal } from 'antd';
import { useState } from 'react';

import { PullUpSteps } from '@/types/plan';

import { WorkoutCardProps } from './index';

type SelectableWorkoutCardProps = Omit<WorkoutCardProps, 'additionalStyle' | 'children'> & {
  isSelected?: boolean;
  onAdd: (id: PullUpSteps, name: string, color: string) => void;
  onDelete: (id: PullUpSteps) => void;
};

export const SelectablePullUpCard = ({
  id,
  name,
  imageSrc,
  color,
  width = '',
  height = '',
  isSelected = false,
  onAdd,
  onDelete,
}: SelectableWorkoutCardProps) => {
  const [isCardSelected, setCardSelected] = useState(isSelected);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    if (isCardSelected) {
      setIsModalOpen(true);
    } else {
      setCardSelected(true);
      onAdd(id, name, color);
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setCardSelected(false);
    onDelete(id);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <button
          id={`${id}`}
          name={name}
          type="button"
          className="relative cursor-default rounded-md"
          style={{
            backgroundColor: color,
            width,
            height,
            opacity: isCardSelected ? '1' : '0.5',
            borderWidth: isCardSelected ? '3px' : '',
            borderColor: isCardSelected ? 'white' : '',
          }}
          onClick={handleCardClick}
        >
          <img src={imageSrc} alt={name} />
          {isCardSelected && (
            <img
              className="absolute left-2 top-2"
              src="/assets/images/check-icon.svg"
              alt="check-icon"
            />
          )}
        </button>
        <p className="inline-block break-words pt-1 text-center text-xs tracking-tight">{name}</p>
      </div>

      <Modal title={name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>확인 버튼을 클릭하면 운동이 삭제됩니다.</p>
      </Modal>
    </div>
  );
};
