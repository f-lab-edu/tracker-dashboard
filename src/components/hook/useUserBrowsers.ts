import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export interface UserBrowsersDataType {
  browser: string;
  count: number;
}

export const useUserBrowsers = () => {
  return useSuspenseQuery<UserBrowsersDataType[]>({
    queryKey: ['userBrowsers'],
    queryFn: () => fetchData('/dashboard/browsersStats'),
  });
};
