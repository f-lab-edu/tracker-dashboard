import { MultiBarDataType } from '@/types/chart';
import { VisitorsPageByPeriodDataType } from '@/types/visitorsPage';

export function visitorPageByPeriodToChart(
  data: VisitorsPageByPeriodDataType[]
) {
  const groupedMap = new Map<string, MultiBarDataType>();
  data.forEach((item) => {
    let pathname = item.url;

    const key = item.date;
    if (!groupedMap.has(key)) {
      groupedMap.set(key, { name: key });
    }
    const current = groupedMap.get(key)!;
    current[pathname] = Number(item.visitCount);
    current[`${pathname}_unique`] = item.uniqueVisitors;
  });
  const chartData = Array.from(groupedMap.values());
  const chartKeys = data.map((item: VisitorsPageByPeriodDataType) => {
    let pathname = item.url;
    return pathname;
  });
  return { chartData, chartKeys };
}
