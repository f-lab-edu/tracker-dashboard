import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';
import { useUserCounties } from '../hook/useUserCountries';

export const UserCountries = () => {
  const { data } = useUserCounties();

  return (
    <Card width="fit">
      <Title title="Country Stats" />
      <PieChartTemplate data={data} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
