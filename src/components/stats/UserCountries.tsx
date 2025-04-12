import { CHART_COLORS } from '@/constants/colors';
import { useUserCountries } from '@/hooks/useUserCountries';
import { countriesToChart } from '@/mappers/countriesToChart';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { EmptyState } from '../common/EmptyState';
import { Title } from '../common/Title';

export const UserCountries = () => {
  const { data } = useUserCountries();
  const countriesData = countriesToChart(data);

  return (
    <Card width="full">
      <Title title="Country Stats" />
      {countriesData?.length ? (
        <PieChartTemplate data={countriesData} colors={CHART_COLORS} />
      ) : (
        <EmptyState />
      )}
    </Card>
  );
};
