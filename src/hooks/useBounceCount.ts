import { BounceRawDataType } from '@/types/bounce';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useBounceCount = () => {
  return useSuspenseQuery({
    queryKey: ['bounceCount'],
    queryFn: () => fetchData<BounceRawDataType[]>('/dashboard/bounceRate'),
  });
};
