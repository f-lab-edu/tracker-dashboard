import { CHART_COLORS } from '@/constants/colors';
import { useBounceCount } from '@/hooks/useBounceCount';
import { bouncesToChart } from '@/mappers/bouncesToChart';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { EmptyState } from '../common/EmptyState';
import { Title } from '../common/Title';

export const UserBounce = () => {
  const { data } = useBounceCount();
  const bounceData = bouncesToChart(data);

  return (
    <Card width="full">
      <Title title="Bounced Count Stats" />
      {bounceData?.length ? (
        <BarChartTemplate
          data={bounceData}
          barColors={CHART_COLORS}
          marginRight={30}
          marginTop={10}
        />
      ) : (
        <EmptyState />
      )}
    </Card>
  );
};
