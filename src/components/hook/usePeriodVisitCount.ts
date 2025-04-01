import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface VisitorsPageByPeriodDataType {
  url: string;
  date: string;
  visitCount: string;
  uniqueVisitors: number;
}

interface ChartDataType {
  name: string;
  [key: string]: string | number;
}

interface UsePeriodVisitCountsType {
  chartData: ChartDataType[];
  chartKeys: string[];
}

export const usePeriodVisitCounts = (startDate: string, endDate: string) => {
  return useSuspenseQuery<UsePeriodVisitCountsType>({
    queryKey: ['periodVisitCounts', startDate, endDate],
    queryFn: async () => {
      const result = await fetchData(`/dashboard/visitorsPageByPeriodCount`, {
        startDate,
        endDate,
      });

      const groupedMap = new Map<string, ChartDataType>();
      result.forEach((item: VisitorsPageByPeriodDataType) => {
        let pathname = new URL(item.url).pathname;
        if (pathname === '/') {
          pathname = '/home';
        }
        const key = item.date;
        if (!groupedMap.has(key)) {
          groupedMap.set(key, { name: key });
        }
        const current = groupedMap.get(key)!;
        current[pathname] = Number(item.visitCount);
        current[`${pathname}_unique`] = item.uniqueVisitors;
      });
      const chartData = Array.from(groupedMap.values());
      const chartKeys = result.map((item: VisitorsPageByPeriodDataType) => {
        let pathname = new URL(item.url).pathname;
        if (pathname === '/') {
          pathname = '/home';
        }
        return pathname;
      });
      return { chartData, chartKeys };
    },
  });
};
