import { BounceRawDataType, FormattedType } from '@/types/bounce';
import { SingleBarDataType } from '@/types/chart';

export function bouncesToChart(data: BounceRawDataType[]) {
  const formattedBounceData = data.reduce<FormattedType>((acc, cur) => {
    acc[cur.url] = (acc[cur.url] || 0) + cur.bouncedUsers;
    return acc;
  }, {});
  const BounceChartData = Object.entries(
    formattedBounceData
  ).map<SingleBarDataType>(([url, count]) => ({
    name: url === '/' ? '/home' : url,
    count: count,
  }));
  return BounceChartData;
}
