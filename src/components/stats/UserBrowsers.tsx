import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';
import { UserBrowsersDataType, useUserBrowsers } from '../hook/useUserBrowsers';

export const UserBrowsers = () => {
  const { data } = useUserBrowsers();
  const browsersData = data.map((item: UserBrowsersDataType) => ({
    name: item.browser,
    count: item.count,
  }));

  return (
    <Card width="fit">
      <Title title="Browser Stats" />
      <BarChartTemplate
        data={browsersData}
        barColor="#FFD700"
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
