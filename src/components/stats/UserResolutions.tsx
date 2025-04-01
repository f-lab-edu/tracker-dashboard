import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';
import { useUserResolution } from '../hook/useResolutions';

export const UserResolutions = () => {
  const { data } = useUserResolution();
  const resolutionData = data.map(
    (item: { resolution: string; count: number }) => ({
      name: item.resolution,
      count: item.count,
    })
  );

  return (
    <Card width="fit">
      <Title title="Resolution Stats" />
      <BarChartTemplate
        data={resolutionData}
        barColors={['#FFD700']}
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
