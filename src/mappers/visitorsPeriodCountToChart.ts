import { PeriodVisitCountType } from '@/types/visitorsCount';

export function visitorPeriodCountToChart(dates: PeriodVisitCountType[]) {
  const chartData = dates.map((item) => ({
    name: item.date,
    totalVisitCount: item.totalVisitCount,
    uniqueVisitors: item.uniqueVisitors,
  }));
  const chartKeys = ['totalVisitCount', 'uniqueVisitors'];
  return { chartData, chartKeys };
}
