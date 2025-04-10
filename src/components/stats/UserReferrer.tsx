import { CHART_COLORS } from '@/constants/colors';
import { useUserReferrer } from '@/hooks/useUserReferrer';
import { referrersToChart } from '@/mappers/referrersToChart';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { EmptyState } from '../common/EmptyState';
import { Title } from '../common/Title';

export const UserReferrer = () => {
  const { data } = useUserReferrer();
  const referrersData = referrersToChart(data);

  return (
    <Card width="full">
      <Title title="Referrer Stats" />
      {referrersData?.length ? (
        <PieChartTemplate data={referrersData} colors={CHART_COLORS} />
      ) : (
        <EmptyState />
      )}
    </Card>
  );
};
