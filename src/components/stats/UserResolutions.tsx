import { CHART_COLORS } from '@/constants/colors';
import { useUserResolution } from '@/hooks/useResolutions';
import { resolutionToChart } from '@/mappers/resolutionsToChart';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { EmptyState } from '../common/EmptyState';
import { Title } from '../common/Title';

export const UserResolutions = () => {
  const { data } = useUserResolution();
  const resolutionData = resolutionToChart(data);

  return (
    <Card width="full">
      <Title title="Resolution Stats" />
      {resolutionData?.length ? (
        <BarChartTemplate
          data={resolutionData}
          barColors={CHART_COLORS}
          marginRight={50}
          marginTop={20}
        />
      ) : (
        <EmptyState />
      )}
    </Card>
  );
};
