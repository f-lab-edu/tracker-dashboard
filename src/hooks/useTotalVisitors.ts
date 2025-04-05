import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface TotalVisitorsDataType {
  totalVisitCount: string;
  uniqueVisitors: number;
}

export const useTotalVisitors = () => {
  return useSuspenseQuery({
    queryKey: ['totalVisitors'],
    queryFn: () =>
      fetchData<TotalVisitorsDataType[]>('/dashboard/totalVisitorsCount'),
  });
};
