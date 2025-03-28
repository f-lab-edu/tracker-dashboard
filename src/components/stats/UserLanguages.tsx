import { getAxiosData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

interface UserLanguagesDataType {
  language: string;
  count: number;
}

export const UserLanguages = () => {
  const { data } = useSuspenseQuery<UserLanguagesDataType[]>({
    queryKey: ['userLanguage'],
    queryFn: () => getAxiosData('/dashboard/languageStats'),
  });

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
