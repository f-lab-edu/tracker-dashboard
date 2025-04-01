import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { SingleBarData } from '../charts/BarChartTemplate';

export interface UserBrowsersDataType {
  browser: string;
  count: number;
}

export const useUserBrowsers = () => {
  return useSuspenseQuery<SingleBarData[]>({
    queryKey: ['userBrowsers'],
    queryFn: async () => {
      const data = await fetchData('/dashboard/browsersStats');
      return data.map((item: UserBrowsersDataType) => ({
        name: item.browser,
        count: item.count,
      }));
    },
  });
};
