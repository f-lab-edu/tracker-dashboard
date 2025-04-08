import { CHART_COLORS } from '@/constants/colors';
import { useBounceCount } from '@/hooks/useBounceCount';
import { bouncesToChart } from '@/mappers/bouncesToChart';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserBounce = () => {
  const { data } = useBounceCount();
  const bounceData = bouncesToChart(data);

  return (
    <Card width="full">
      <Title title="Bounced Count Stats" />
      <BarChartTemplate
        data={bounceData}
        barColors={CHART_COLORS}
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
