import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';
import { useUserBrowsers } from '../hook/useUserBrowsers';

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
