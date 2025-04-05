import { CHART_COLORS } from '@/constants/colors';
import { useUserResolution } from '@/hooks/useResolutions';
import { resolutionToChart } from '@/mappers/resolutionsToChart';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserResolutions = () => {
  const { data } = useUserResolution();
  const resolutionData = resolutionToChart(data);

  return (
    <Card width="fit">
      <Title title="Resolution Stats" />
      <BarChartTemplate
        data={resolutionData}
        barColors={CHART_COLORS}
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
