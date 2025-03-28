import { getAxiosData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

interface UserDevicesDataType {
  isMobile: number;
  count: number;
}

export const UserDevices = () => {
  const { data } = useSuspenseQuery<UserDevicesDataType[]>({
    queryKey: ['userDevice'],
    queryFn: () => getAxiosData('/dashboard/deviceStats'),
  });

  const deviceData = data.map((item: { isMobile: number; count: number }) => ({
    name: item.isMobile === 1 ? 'Mobile' : 'Desktop',
    value: item.count,
  }));
  return (
    <Card width="fit">
      <Title title="Device Stats" />
      <PieChartTemplate data={deviceData} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
