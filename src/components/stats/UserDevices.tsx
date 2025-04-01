import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';
import { useUserDevices } from '../hook/useUserDevices';

export const UserDevices = () => {
  const { data } = useUserDevices();

  return (
    <Card width="fit">
      <Title title="Device Stats" />
      <PieChartTemplate data={data} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
