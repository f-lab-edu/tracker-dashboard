import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface PeriodVisitCountType {
  date: string;
  totalVisitCount: number;
  uniqueVisitors: number;
}

interface ChartDataType {
  name: string;
  [key: string]: string | number;
}

interface UserPeriodVisitCountType {
  chartData: ChartDataType[];
  chartKeys: string[];
}

export const useVisitorsPeriodCount = (startDate: string, endDate: string) => {
  return useSuspenseQuery<UserPeriodVisitCountType>({
    queryKey: ['periodVisitorsCount'],
    queryFn: async () => {
      const result = await fetchData<PeriodVisitCountType[]>(
        '/dashboard/visitorsByPeriodCount',
        {
          startDate,
          endDate,
        }
      );
      const chartData = result.map((item) => ({
        name: item.date,
        totalVisitCount: item.totalVisitCount,
        uniqueVisitors: item.uniqueVisitors,
      }));
      const chartKeys = ['totalVisitCount', 'uniqueVisitors'];
      return { chartData, chartKeys };
    },
  });
};
