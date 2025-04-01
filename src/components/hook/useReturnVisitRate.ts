import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useReturnVisitRate = () => {
  return useSuspenseQuery<number>({
    queryKey: ['returnVisitRate'],
    queryFn: async () => {
      const data = await fetchData('/dashboard/visitedRate');
      return Math.round(data.visitedUsersRate);
    },
  });
};
