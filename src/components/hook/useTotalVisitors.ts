import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export interface TotalVisitorsDataType {
  totalVisitCount: string;
  uniqueVisitors: number;
}

export const useTotalVisitors = () => {
  return useSuspenseQuery<TotalVisitorsDataType>({
    queryKey: ['totalVisitors'],
    queryFn: async () => {
      const data = await fetchData('/dashboard/totalVisitorsCount');
      return data[0];
    },
  });
};
