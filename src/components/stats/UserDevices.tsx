import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';
import { useUserDevices } from '../hook/useUserDevices';

export const UserDevices = () => {
  const { data } = useUserDevices();
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
