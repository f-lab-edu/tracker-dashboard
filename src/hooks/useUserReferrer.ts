import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PieChartDataType } from '../components/charts/PieChartTemplate';

interface UserReferrerDataType {
  path: string;
  count: number;
}

export const useUserReferrer = () => {
  return useSuspenseQuery<PieChartDataType[]>({
    queryKey: ['userReferrer'],
    queryFn: async () => {
      const data = await fetchData<UserReferrerDataType[]>(
        '/dashboard/referrer'
      );
      const chartData: PieChartDataType[] = data.map((item) => ({
        name: item.path === '' ? 'direct' : item.path,
        value: item.count,
      }));
      return chartData;
    },
  });
};
