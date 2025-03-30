import { SessionDataType } from '@/types/session';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useSession = () => {
  return useSuspenseQuery<{ user: SessionDataType }>({
    queryKey: ['userSession'],
    queryFn: () => fetchData('/dashboard/sessionClient'),
    staleTime: 1000 * 60 * 5,
  });
};
