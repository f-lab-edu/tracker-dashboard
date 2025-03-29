import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { MdOnlinePrediction } from 'react-icons/md';
import { Card } from '../common/Card';

interface OnlineUsersDataType {
  onlineUsersCount: number;
}

export const OnlineUsers = () => {
  const { data } = useSuspenseQuery<OnlineUsersDataType>({
    queryKey: ['onlineUser'],
    queryFn: () => fetchData('/dashboard/onlineUsersCount'),
    refetchInterval: 10000,
    staleTime: 0,
  });

  return (
    <Card borderRadius="xl" width="fit">
      <div>
        <p className="text-lg font-bold">Online User Count</p>
        <div className="flex gap-4 items-center justify-center mt-4">
          <MdOnlinePrediction size={30} />
          <p className="text-center text-3xl">{data.onlineUsersCount}</p>
        </div>
      </div>
    </Card>
  );
};
