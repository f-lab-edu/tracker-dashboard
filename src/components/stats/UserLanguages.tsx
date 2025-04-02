import { useUserLanguages } from '@/hooks/useUserLanguages';
import { languagesToChart } from '@/mappers/languagesToChart';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserLanguages = () => {
  const { data } = useUserLanguages();
  const languagesData = languagesToChart(data);

  return (
    <Card width="fit">
      <Title title="Language Stats" />
      <PieChartTemplate data={languagesData} colors={['#FFD700', '#917800']} />
    </Card>
  );
};
