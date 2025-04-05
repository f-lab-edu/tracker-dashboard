import { VisitorsPageByPeriodDataType } from '@/types/visitorsPage';

export function visitorPageByPeriodToChart(
  data: VisitorsPageByPeriodDataType[]
) {
  const chartData: { name: string; [key: string]: number | string }[] = [];
  const chartKeys = Array.from(new Set(data.map((item) => item.url)));

  data.forEach((item) => {
    const dataObject = chartData.find((entry) => entry.name === item.date);
    if (dataObject) {
      dataObject[item.url] = Number(item.visitCount);
    } else {
      chartData.push({
        name: item.date,
        [item.url]: Number(item.visitCount),
      });
    }
  });
  return { chartData, chartKeys };
}
