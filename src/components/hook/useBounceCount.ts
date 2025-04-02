import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface BounceCountsType {
  name: string;
  count: number;
}

interface BounceRawDataType {
  url: string;
  bouncedUsers: number;
}

interface FormattedType {
  [url: string]: number;
}

export const useBounceCount = () => {
  return useSuspenseQuery<BounceCountsType[]>({
    queryKey: ['bounceCount'],
    queryFn: async () => {
      const data = await fetchData<BounceRawDataType[]>(
        '/dashboard/bounceRate'
      );
      const formattedBounceData = data.reduce<FormattedType>((acc, cur) => {
        acc[cur.url] = (acc[cur.url] || 0) + cur.bouncedUsers;
        return acc;
      }, {});

      const arrayBounceData = Object.entries(formattedBounceData).map(
        ([url, count]) => ({
          name: url === '/' ? '/home' : url,
          count: count,
        })
      );
      return arrayBounceData;
    },
  });
};
