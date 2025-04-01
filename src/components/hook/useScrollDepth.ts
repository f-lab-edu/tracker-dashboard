import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { SingleBarData } from '../charts/BarChartTemplate';

interface userScrollDepth {
  url: string;
  avgScrollDepth: string;
}

export const useScrollDepth = () => {
  return useSuspenseQuery({
    queryKey: ['userScrollDepth'],
    queryFn: async () => {
      const data = await fetchData('/dashboard/perPageAverageScrollDepth');
      const chartData: SingleBarData[] = data.map((item: userScrollDepth) => {
        const pathname = new URL(item.url).pathname;
        return {
          name: pathname === '/' ? '/home' : pathname,
          count: Math.floor(Number(item.avgScrollDepth)),
        };
      });
      return chartData;
    },
  });
};
