import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePreviousPage = (previousPageNumber = -1) => {
  const navigate = useNavigate();
  const navigateToPreviousPage = useCallback(() => {
    navigate(previousPageNumber);
  }, [navigate, previousPageNumber]);

  return navigateToPreviousPage;
};
