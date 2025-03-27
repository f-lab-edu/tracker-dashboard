import { API_BASE_URL } from '@/config/api';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PieChartWrapper } from '../charts/PieChartWrapper';
import { Card } from '../common/Card';

export const UserDevices = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userDevice'],
    queryFn: async () => {
      const res = await axios.get(`${API_BASE_URL}/dashboard/deviceStats`, {
        withCredentials: true,
      });
      return res.data;
    },
  });
  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러발생</p>;
  const deviceData = data.map((item: { isMobile: number; count: number }) => ({
    name: item.isMobile === 1 ? 'Mobile' : 'Desktop',
    value: item.count,
  }));
  return (
    <Card width="fit">
      <PieChartWrapper
        data={deviceData}
        dataKey={'value'}
        nameKey={'name'}
        colors={['#FFD700', '#917800']}
        title="userDevice Stats"
        chartWidth={300}
        chartHeight={300}
        chartRadius={80}
      />
    </Card>
  );
};
