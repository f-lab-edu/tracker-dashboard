import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';
import { useUserCounties } from '../hook/useUserCountries';

export const UserCountries = () => {
  const { data } = useUserCounties();
  const countryData = data.map((item: { country: string; count: number }) => ({
    name: item.country,
    value: item.count,
  }));

  return (
    <Card width="fit">
      <Title title="Country Stats" />
      <PieChartTemplate data={countryData} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
