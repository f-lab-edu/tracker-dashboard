import { CHART_COLORS } from '@/constants/colors';
import { useUserOses } from '@/hooks/useUserOses';
import { osesToChart } from '@/mappers/osesToChart';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { EmptyState } from '../common/EmptyState';
import { Title } from '../common/Title';

export const UserOses = () => {
  const { data } = useUserOses();
  const osData = osesToChart(data);

  return (
    <Card width="full">
      <Title title="Os Stats" />
      {osData?.length ? (
        <PieChartTemplate data={osData} colors={CHART_COLORS} />
      ) : (
        <EmptyState />
      )}
    </Card>
  );
};
