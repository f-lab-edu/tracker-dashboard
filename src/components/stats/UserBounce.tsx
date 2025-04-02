import { useBounceCount } from '@/hooks/useBounceCount';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserBounce = () => {
  const { data } = useBounceCount();

  return (
    <Card width="fit">
      <Title title="Bounced Count Stats" />
      <BarChartTemplate
        data={data}
        barColors={['#FFD700']}
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
