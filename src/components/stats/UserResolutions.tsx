import { API_BASE_URL } from '@/config/api';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BarChartWrapper } from '../charts/BarChartWrapper';
import { Card } from '../common/Card';

export const UserResolutions = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userResolution'],
    queryFn: async () => {
      const res = await axios(`${API_BASE_URL}/dashboard/resolutionStats`, {
        withCredentials: true,
      });
      return res.data;
    },
  });
  if (isLoading) return <p>로딩중</p>;
  if (error) return <p>에러발생</p>;
  return (
    <Card width="fit">
      <BarChartWrapper
        data={data}
        labelKey="resolution"
        valueKey="count"
        title="userResolution Stats"
        barColor="#FFD700"
        barBg="#5e3b00"
        chartWidth={450}
        chartHeight={300}
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
