import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';
import { useUserCountries } from '../hook/useUserCountries';

export const UserCountries = () => {
  const { data } = useUserCountries();

  return (
    <Card width="fit">
      <Title title="Country Stats" />
      <PieChartTemplate data={data} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
