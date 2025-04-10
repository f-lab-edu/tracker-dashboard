import { CHART_COLORS } from '@/constants/colors';
import { useScrollDepth } from '@/hooks/useScrollDepth';
import { scrollToChart } from '@/mappers/scrollsToChart';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { EmptyState } from '../common/EmptyState';
import { Title } from '../common/Title';

export const PerPageAverageScrollDepth = () => {
  const { data } = useScrollDepth();
  const scrollDepthData = scrollToChart(data);
  return (
    <Card>
      <Title title="Average ScrollDepth" />
      {scrollDepthData?.length ? (
        <BarChartTemplate data={scrollDepthData} barColors={CHART_COLORS} />
      ) : (
          <EmptyState />
      )}
    </Card>
  );
};
