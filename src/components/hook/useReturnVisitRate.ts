import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface ReturnVisitRateDataType {
  domain: string;
  visitedUsersRate: number;
}

export const useReturnVisitRate = () => {
  return useSuspenseQuery<ReturnVisitRateDataType>({
    queryKey: ['returnVisitRate'],
    queryFn: () => fetchData('/dashboard/visitedRate'),
  });
};
