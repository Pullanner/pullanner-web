import { redirect } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants';

export const rootLoader = () => {
  return redirect(ROUTE_PATH.roadmap);
};
