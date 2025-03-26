import { API_BASE_URL } from '@/config/api';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Card } from '../common/Card';

export const TotalVisitors = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['totalVisitors'],
    queryFn: async () => {
      const res = await axios.get(
        `${API_BASE_URL}/dashboard/totalVisitorsCount`,
        { withCredentials: true }
      );
      return res.data[0];
    },
  });
  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러발생 </p>;

  return (
    <Card bgColor="bg-primary-100" borderRadius="xl" width="fit">
      <div className="flex gap-4 text-accent-200">
        <div>
          <p className="text-lg font-bold">Total Visitors</p>
          <p className="text-center text-3xl mt-4"> {data.totalVisitCount}</p>
        </div>
        <div>
          <p className="text-lg font-bold">Real Visitors</p>
          <p className="text-center text-3xl mt-4">{data.uniqueVisitors}</p>
        </div>
      </div>
    </Card>
  );
};
