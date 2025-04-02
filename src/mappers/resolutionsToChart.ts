import { SingleBarDataType } from '@/types/chart';
import { ResolutionDataType } from '@/types/resolution';

export function resolutionToChart(data: ResolutionDataType[]) {
  const resolutionChartData: SingleBarDataType[] = data.map((item) => ({
    name: item.resolution,
    count: item.count,
  }));
  return resolutionChartData;
}
