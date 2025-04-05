import { SingleBarDataType } from '@/types/chart';
import { ScrollDepthDataType } from '@/types/scroll';

export function scrollToChart(data: ScrollDepthDataType[]) {
  const scrollData: SingleBarDataType[] = data.map((item) => {
    const pathname = new URL(item.url).pathname;
    return {
      name: pathname,
      count: Math.floor(Number(item.avgScrollDepth)),
    };
  });
  return scrollData;
}
