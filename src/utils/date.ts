import dayjs from 'dayjs';

export const checkPastDate = (dateString: string): boolean => {
  const inputDate = dayjs(dateString);
  const today = dayjs();

  return inputDate.isBefore(today, 'day');
};

export const convertToUTCDate = (dateString: string, timeString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  const [hour, minute] = timeString.split(':').map(Number);

  const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute));

  return utcDate.toISOString();
};
