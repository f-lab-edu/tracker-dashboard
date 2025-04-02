import { useUserDevices } from '@/hooks/useUserDevices';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserDevices = () => {
  const { data } = useUserDevices();

  return (
    <Card width="fit">
      <Title title="Device Stats" />
      <PieChartTemplate data={data} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
