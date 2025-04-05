import { CHART_COLORS } from '@/constants/colors';
import { useScrollDepth } from '@/hooks/useScrollDepth';
import { scrollToChart } from '@/mappers/scrollsToChart';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const PerPageAverageScrollDepth = () => {
  const { data } = useScrollDepth();
  const scrollDepthData = scrollToChart(data);

  return (
    <Card>
      <Title title="Average ScrollDepth" />
      {data ? (
        <BarChartTemplate data={scrollDepthData} barColors={CHART_COLORS} />
      ) : (
        <p>스크롤이 없는 사이트입니다</p>
      )}
    </Card>
  );
};
