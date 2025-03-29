import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';
import { useUserLanguages } from '../hook/useUserLanguages';

export const UserLanguages = () => {
  const { data } = useUserLanguages();
  const languageData = data.map(
    (item: { language: string; count: number }) => ({
      name: item.language,
      value: item.count,
    })
  );

  return (
    <Card width="fit">
      <Title title="Language Stats" />
      <PieChartTemplate data={languageData} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
