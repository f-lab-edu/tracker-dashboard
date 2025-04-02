import { useBounceCount } from '@/hooks/useBounceCount';
import { bouncesToChart } from '@/mappers/bouncesToChart';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserBounce = () => {
  const { data } = useBounceCount();
  const bounceData = bouncesToChart(data);

  return (
    <Card width="fit">
      <Title title="Bounced Count Stats" />
      <BarChartTemplate
        data={bounceData}
        barColors={['#FFD700']}
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
