import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface ReturnVisitRateType {
  domain: string;
  visitedUsersRate: number;
}

export const useReturnVisitRate = () => {
  return useSuspenseQuery({
    queryKey: ['returnVisitRate'],
    queryFn: () => fetchData<ReturnVisitRateType>('/dashboard/visitedRate'),
  });
};
