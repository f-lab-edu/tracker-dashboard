import { BrowserDataType } from '@/types/browser';
import { SingleBarDataType } from '@/types/chart';

export function browserToChart(data: BrowserDataType[]) {
  const browserData: SingleBarDataType[] = data.map((item) => ({
    name: item.browser,
    count: item.count,
  }));
  return browserData;
}
