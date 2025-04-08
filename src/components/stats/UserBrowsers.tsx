import { CHART_COLORS } from '@/constants/colors';
import { useUserBrowsers } from '@/hooks/useUserBrowsers';
import { browserToChart } from '@/mappers/browserToChart';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserBrowsers = () => {
  const { data } = useUserBrowsers();
  const browserData = browserToChart(data);

  return (
    <Card width="full">
      <Title title="Browser Stats" />
      <BarChartTemplate
        data={browserData}
        barColors={CHART_COLORS}
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
