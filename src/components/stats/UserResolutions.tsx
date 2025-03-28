import { getAxiosData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { BarChartTemplate } from '../charts/BarChartTemplate';
import { Card } from '../common/Card';
import { Title } from '../common/Title';

interface ResolutionDataType {
  resolution: string;
  count: number;
}

export const UserResolutions = () => {
  const { data } = useSuspenseQuery<ResolutionDataType[]>({
    queryKey: ['resolutionStats'],
    queryFn: () => getAxiosData('/dashboard/resolutionStats'),
  });

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
        barColor="#FFD700"
        marginRight={50}
        marginTop={20}
      />
    </Card>
  );
};
