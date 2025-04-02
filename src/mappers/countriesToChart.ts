import { PieChartDataType } from '@/types/chart';
import { CountryDataType } from '@/types/country';

export function countriesToChart(data: CountryDataType[]) {
  const countriesData: PieChartDataType[] = data.map((item) => ({
    name: item.country,
    value: item.count,
  }));
  return countriesData;
}
