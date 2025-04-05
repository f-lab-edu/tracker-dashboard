import { CHART_COLORS } from '@/constants/colors';
import { useUserDevices } from '@/hooks/useUserDevices';
import { devicesToChart } from '@/mappers/devicesToChart';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserDevices = () => {
  const { data } = useUserDevices();
  const devicesData = devicesToChart(data);

  return (
    <Card width="fit">
      <Title title="Device Stats" />
      <PieChartTemplate data={devicesData} colors={CHART_COLORS} />
    </Card>
  );
};
