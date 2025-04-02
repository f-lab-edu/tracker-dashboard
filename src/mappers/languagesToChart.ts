import { PieChartDataType } from '@/types/chart';
import { LanguageDataType } from '@/types/language';

export function languagesToChart(data: LanguageDataType[]) {
  const languagesData: PieChartDataType[] = data.map((item) => ({
    name: item.language,
    value: item.count,
  }));
  return languagesData;
}
