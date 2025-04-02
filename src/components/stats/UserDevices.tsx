import { useUserDevices } from '@/hooks/useUserDevices';
import { devicesToChart } from '@/mappers/DevicesToChart';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserDevices = () => {
  const { data } = useUserDevices();
  const devicesData = devicesToChart(data);

  return (
    <Card width="fit">
      <Title title="Device Stats" />
      <PieChartTemplate data={devicesData} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
