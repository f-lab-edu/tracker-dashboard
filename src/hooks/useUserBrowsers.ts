import { BrowserDataType } from '@/types/browser';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useUserBrowsers = () => {
  return useSuspenseQuery({
    queryKey: ['userBrowsers'],
    queryFn: () => fetchData<BrowserDataType[]>('/dashboard/browsersStats'),
  });
};
