export const getImpossiblePullUps = (possiblePullUps: number[]) => {
  const allPullUps = [1, 2, 3, 4, 5, 6, 7, 8];

  return allPullUps.filter((pullUp) => {
    return !possiblePullUps.includes(pullUp);
  });
};
