import { ScrollDepthDataType } from '@/types/scroll';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useScrollDepth = () => {
  return useSuspenseQuery({
    queryKey: ['userScrollDepth'],
    queryFn: () =>
      fetchData<ScrollDepthDataType[]>('/dashboard/perPageAverageScrollDepth'),
  });
};
