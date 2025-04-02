import { useUserReferrer } from '@/hooks/useUserReferrer';
import { referrersToChart } from '@/mappers/referrersToChart';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserReferrer = () => {
  const { data } = useUserReferrer();
  const referrersData = referrersToChart(data);

  return (
    <Card width="fit">
      <Title title="Referrer Stats" />
      <PieChartTemplate data={referrersData} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
