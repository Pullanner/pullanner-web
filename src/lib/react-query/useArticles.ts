import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { API_PATH } from '@/constants';
import { handleAuthRequest } from '@/lib/axios/handleAuthRequest';
import { getAuthRequest } from '@/lib/axios/useAuthApi';
import type { SetModalType } from '@/stores/atoms/modalTypeAtom';
import { ArticleData, Category, FilterName } from '@/types/article';

import { queryKeys } from './queryKeys';

import type { Dispatch, SetStateAction } from 'react';
import type { URLSearchParams } from 'url';

export const useGetAllArticles = (
  accessToken: string,
  setAccessToken: Dispatch<SetStateAction<string>>,
  setModalType: SetModalType,
  params: URLSearchParams,
): UseQueryResult<ArticleData> => {
  const category = (params.get('category') || 'total') as Category;
  const filterName = params.get('sort') as FilterName;
  const pageNumber = params.get('page');
  const searchWord = params.get('search');

  return useQuery({
    queryKey: [
      queryKeys.articles,
      accessToken,
      setAccessToken,
      category,
      filterName,
      pageNumber,
      searchWord,
    ],
    queryFn: () => {
      return handleAuthRequest({
        authRequest: (token) => {
          return getAuthRequest(API_PATH.articles, token, { params });
        },
        accessToken,
        setAccessToken,
        setModalType,
      });
    },
    enabled: !!accessToken.length,
  });
};
