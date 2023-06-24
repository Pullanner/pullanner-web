export const getPercent = (currentAmount: number, totalAmount: number) => {
  return (currentAmount / totalAmount) * 100;
};

export const getPercentWidth = (percent: number) => {
  if (percent < 10) {
    return 'w-[5%]';
  }
  if (percent < 20) {
    return 'w-[10%]';
  }
  if (percent < 30) {
    return 'w-[20%]';
  }
  if (percent < 40) {
    return 'w-[30%]';
  }
  if (percent < 50) {
    return 'w-[40%]';
  }
  if (percent < 60) {
    return 'w-[50%]';
  }
  if (percent < 70) {
    return 'w-[60%]';
  }
  if (percent < 80) {
    return 'w-[70%]';
  }
  if (percent < 90) {
    return 'w-[80%]';
  }
  if (percent < 100) {
    return 'w-[90%]';
  }
  if (percent === 100) {
    return 'w-full';
  }
};
