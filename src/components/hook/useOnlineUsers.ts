import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface OnlineUsersDataType {
  onlineUsersCount: number;
}

export const useOnlineUser = () => {
  return useSuspenseQuery<OnlineUsersDataType>({
    queryKey: ['onlineUser'],
    queryFn: () => fetchData('/dashboard/onlineUsersCount'),
    refetchInterval: 10000,
    staleTime: 0,
  });
};
