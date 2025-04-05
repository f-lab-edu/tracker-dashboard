import { CHART_COLORS } from '@/constants/colors';
import { useUserOses } from '@/hooks/useUserOses';
import { osesToChart } from '@/mappers/osesToChart';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserOses = () => {
  const { data } = useUserOses();
  const osData = osesToChart(data);

  return (
    <Card width="fit">
      <Title title="Os Stats" />
      <PieChartTemplate data={osData} colors={CHART_COLORS} />
    </Card>
  );
};
