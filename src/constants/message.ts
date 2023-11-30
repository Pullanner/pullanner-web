import { SuccessIcon } from '@/icons/SuccessIcon';
import { WarningIcon } from '@/icons/WarningIcon';

export const SUCCESS_MESSAGE_OPTION = {
  type: 'success' as const,
  content: '',
  duration: 5,
  style: {
    marginTop: '75vh',
  },
  icon: SuccessIcon(),
};

export const WARNING_MESSAGE_OPTION = {
  type: 'warning' as const,
  content: '',
  duration: 5,
  style: {
    marginTop: '75vh',
  },
  icon: WarningIcon(),
};
