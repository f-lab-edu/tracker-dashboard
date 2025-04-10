import { CHART_COLORS } from '@/constants/colors';
import { useUserLanguages } from '@/hooks/useUserLanguages';
import { languagesToChart } from '@/mappers/languagesToChart';
import { PieChartTemplate } from '../charts/PieChartTemplate';
import { Card } from '../common/Card';
import { EmptyState } from '../common/EmptyState';
import { Title } from '../common/Title';

export const UserLanguages = () => {
  const { data } = useUserLanguages();
  const languagesData = languagesToChart(data);

  return (
    <Card width="fit">
      <Title title="Language Stats" />
      {languagesData?.length ? (
        <PieChartTemplate data={languagesData} colors={CHART_COLORS} />
      ) : (
        <EmptyState />
      )}
    </Card>
  );
};
