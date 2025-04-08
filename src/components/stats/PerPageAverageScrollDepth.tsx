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
      {scrollDepthData?.length ? (
        <BarChartTemplate data={scrollDepthData} barColors={CHART_COLORS} />
      ) : (
          <span className="mt-4 text-primary-100">스크롤이 없는 사이트입니다</span>
      )}
    </Card>
  );
};
