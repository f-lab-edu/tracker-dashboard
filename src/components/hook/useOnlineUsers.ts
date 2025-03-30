import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface OnlineUsersDataType {
  onlineUsersCount: number;
}

const REFRESH_INTERVAL_MS = 10 * 1000;
const STALE_TIME_IMMEDIATE = 0;

export const useOnlineUser = () => {
  return useSuspenseQuery<OnlineUsersDataType>({
    queryKey: ['onlineUser'],
    queryFn: () => fetchData('/dashboard/onlineUsersCount'),
    refetchInterval: REFRESH_INTERVAL_MS,
    staleTime: STALE_TIME_IMMEDIATE,
  });
};
