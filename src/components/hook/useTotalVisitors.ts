import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface TotalVisitorsDataType {
  totalVisitCount: string;
  uniqueVisitors: number;
}

export const useTotalVisitors = () => {
  return useSuspenseQuery<TotalVisitorsDataType[]>({
    queryKey: ['totalVisitors'],
    queryFn: () => fetchData('/dashboard/totalVisitorsCount'),
  });
};
