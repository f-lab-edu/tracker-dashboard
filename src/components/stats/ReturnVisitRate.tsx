import { API_BASE_URL } from '@/config/api';
import {
  QUERY_NOT_STALE_TIME_MS,
  QUERY_REFETCH_INTERVAL_MS,
} from '@/lib/constant';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FiActivity } from 'react-icons/fi';
import { Card } from '../common/Card';
export const ReturnVisitRate = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['returnVisitRate'],
    queryFn: async () => {
      const res = await axios.get(`${API_BASE_URL}/dashboard/visitedRate`, {
        withCredentials: true,
      });
      return res.data;
    },
    refetchInterval: QUERY_REFETCH_INTERVAL_MS,
    staleTime: QUERY_NOT_STALE_TIME_MS,
  });
  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러발생 </p>;

  const roundedReturnRate = Math.round(data.visitedUsersRate);
  return (
    <Card borderRadius="xl" width="fit">
      <div>
        <p className="text-lg font-bold">Return Visit Rate</p>
        <div className="flex gap-4 items-center justify-center mt-4">
          <FiActivity size={30} />
          <p className="text-center text-3xl">{roundedReturnRate}%</p>
        </div>
      </div>
    </Card>
  );
};
