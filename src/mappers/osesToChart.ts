import { PieChartDataType } from '@/types/chart';
import { OsDataType } from '@/types/os';

export function osesToChart(data: OsDataType[]) {
  const osesData: PieChartDataType[] = data.map((item) => ({
    name: item.os,
    value: item.count,
  }));
  return osesData;
}
