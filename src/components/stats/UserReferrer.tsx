import { useUserReferrer } from '@/hooks/useUserReferrer';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserReferrer = () => {
  const { data } = useUserReferrer();

  return (
    <Card width="fit">
      <Title title="Referrer Stats" />
      <PieChartTemplate data={data} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
