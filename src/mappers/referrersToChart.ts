import { PieChartDataType } from '@/types/chart';
import { ReferrerDataType } from '@/types/referrer';

export function referrersToChart(data: ReferrerDataType[]) {
  const referrersData: PieChartDataType[] = data.map((item) => ({
    name: item.path === '' ? 'direct' : item.path,
    value: Number(item.count),
  }));
  return referrersData;
}
