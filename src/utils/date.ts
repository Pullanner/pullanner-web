import dayjs from 'dayjs';

export const checkPastDate = (date: string): boolean => {
  const inputDate = dayjs(date);
  const today = dayjs();

  return inputDate.isBefore(today, 'day');
};

export const checkPastDateTime = (date: string, time: string): boolean => {
  const inputDate = dayjs(`${date} ${time}`);
  const now = dayjs();

  return inputDate.isBefore(now, 'minute');
};

export const convertToUTCDate = (dateString: string, timeString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  const [hour, minute] = timeString.split(':').map(Number);

  const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute));

  return utcDate.toISOString();
};

export const parseDateIntoYearMonthDay = (dateString: string) => {
  const joinDateWithoutTime = dateString.split('T')[0];
  const [year, month, day] = joinDateWithoutTime.split('-');

  return { year, month, day };
};

export const getDaysSinceSpecificDate = (dateString: string) => {
  const specificDateWithoutTime = dateString.split('T')[0];
  const nowDate = dayjs();
  const daysSinceSpecificDate = nowDate.diff(specificDateWithoutTime, 'day');

  return daysSinceSpecificDate;
};
