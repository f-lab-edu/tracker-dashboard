import { CHART_COLORS } from '@/constants/colors';
import { useUserDevices } from '@/hooks/useUserDevices';
import { devicesToChart } from '@/mappers/devicesToChart';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { EmptyState } from '../common/EmptyState';
import { Title } from '../common/Title';

export const UserDevices = () => {
  const { data } = useUserDevices();
  const devicesData = devicesToChart(data);

  return (
    <Card width="full">
      <Title title="Device Stats" />
      {devicesData?.length ? (
        <PieChartTemplate data={devicesData} colors={CHART_COLORS} />
      ) : (
        <EmptyState />
      )}
    </Card>
  );
};
