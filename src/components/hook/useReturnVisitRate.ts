import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface ReturnVisitRateType {
  domain: string;
  visitedUsersRate: number;
}

export const useReturnVisitRate = () => {
  return useSuspenseQuery<number>({
    queryKey: ['returnVisitRate'],
    queryFn: async () => {
      const data = await fetchData<ReturnVisitRateType>(
        '/dashboard/visitedRate'
      );
      return Math.round(data.visitedUsersRate);
    },
  });
};
