import dayjs from 'dayjs';

import { DATE_FORMAT_YYYY_MM_DD } from '@/constants';

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

export const checkAfterDate = (date: string): boolean => {
  const inputDate = dayjs(date);
  const today = dayjs();

  return inputDate.isAfter(today, 'day');
};

export const convertToUTCDate = (dateString: string, timeString: string) => {
  const [year, month, day] = dateString.split('-').map(Number);
  const [hour, minute] = timeString.split(':').map(Number);

  const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute));

  return utcDate.toISOString();
};

export const parseDateIntoYearMonthDay = (dateString: string) => {
  const [date] = dateString.split('T');
  const [year, month, day] = date.split('-');

  return { year, month, day };
};

export const parseDateIntoYearMonth = (dateString: string) => {
  const [year, month, _] = dateString.split('-');

  return { year, month };
};

export const getDaysSinceSpecificDate = (dateString: string) => {
  const [date] = dateString.split('T');
  const nowDate = dayjs();
  const daysSinceSpecificDate = nowDate.diff(date, 'day');

  return daysSinceSpecificDate;
};

export const getEndDateOfMonth = (dateString: string) => {
  return dayjs(dateString).endOf('month').format(DATE_FORMAT_YYYY_MM_DD);
};

export const getDateSubtractedByDays = (dateString: string, days: number) => {
  return dayjs(dateString).subtract(days, 'day').format(DATE_FORMAT_YYYY_MM_DD);
};

export const getDateAddedByDays = (dateString: string, days: number) => {
  return dayjs(dateString).add(days, 'day').format(DATE_FORMAT_YYYY_MM_DD);
};
