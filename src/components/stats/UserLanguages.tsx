import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';
import { useUserLanguages } from '../hook/useUserLanguages';

export const UserLanguages = () => {
  const { data } = useUserLanguages();

  return (
    <Card width="fit">
      <Title title="Language Stats" />
      <PieChartTemplate data={data} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
