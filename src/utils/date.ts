import dayjs from 'dayjs';

export const checkPastDate = (dateString: string): boolean => {
  const inputDate = dayjs(dateString);
  const today = dayjs();

  return inputDate.isBefore(today, 'day');
};
