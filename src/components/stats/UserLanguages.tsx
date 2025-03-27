import { API_BASE_URL } from '@/config/api';
import {
  QUERY_NOT_STALE_TIME_MS,
  QUERY_REFETCH_INTERVAL_MS,
} from '@/lib/constant';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PieChartWrapper } from '../charts/PieChartWrapper';
import { Card } from '../common/Card';

export const UserLanguages = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userLanguage'],
    queryFn: async () => {
      const res = await axios.get(`${API_BASE_URL}/dashboard/languageStats`, {
        withCredentials: true,
      });
      return res.data;
    },
    refetchInterval: QUERY_REFETCH_INTERVAL_MS,
    staleTime: QUERY_NOT_STALE_TIME_MS,
  });
  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러발생</p>;
  return (
    <Card width="fit">
      <PieChartWrapper
        data={data}
        dataKey={'count'}
        nameKey={'language'}
        colors={['#FFD700', '#917800']}
        title="Language Stats"
        chartWidth={300}
        chartHeight={300}
        chartRadius={80}
      />
    </Card>
  );
};
