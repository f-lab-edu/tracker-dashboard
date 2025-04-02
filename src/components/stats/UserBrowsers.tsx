import { useUserBrowsers } from '@/hooks/useUserBrowsers';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

export const UserBrowsers = () => {
  const { data } = useUserBrowsers();

  return (
    <Card width="fit">
      <Title title="Browser Stats" />
      <BarChartTemplate
        data={data}
        barColors={['#FFD700']}
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
