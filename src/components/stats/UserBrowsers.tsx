import { useUserBrowsers } from '@/hooks/useUserBrowsers';
import { browserToChart } from '@/mappers/browserToChart';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserBrowsers = () => {
  const { data } = useUserBrowsers();
  const browserData = browserToChart(data);

  return (
    <Card width="fit">
      <Title title="Browser Stats" />
      <BarChartTemplate
        data={browserData}
        barColors={['#FFD700']}
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
