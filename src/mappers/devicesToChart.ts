import { PieChartDataType } from '@/types/chart';
import { DeviceDataType } from '@/types/device';

export function devicesToChart(data: DeviceDataType[]) {
  const devicesData: PieChartDataType[] = data.map((item) => ({
    name: item.isMobile === 1 ? 'Mobile' : 'Desktop',
    value: item.count,
  }));
  return devicesData;
}
