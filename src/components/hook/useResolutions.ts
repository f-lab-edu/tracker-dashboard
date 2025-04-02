import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { SingleBarData } from '../charts/BarChartTemplate';

interface ResolutionDataType {
  resolution: string;
  count: number;
}

export const useUserResolution = () => {
  return useSuspenseQuery<SingleBarData[]>({
    queryKey: ['resolutionStats'],
    queryFn: async () => {
      const data = await fetchData<ResolutionDataType[]>(
        '/dashboard/resolutionStats'
      );
      return data.map((item) => ({
        name: item.resolution,
        count: item.count,
      }));
    },
  });
};
