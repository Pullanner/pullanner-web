import { WarningIcon } from '@/icons/WarningIcon';

export const WARNING_MESSAGE_OPTION = {
  type: 'warning' as const,
  content: '',
  duration: 5,
  style: {
    marginTop: '75vh',
  },
  icon: WarningIcon(),
};
