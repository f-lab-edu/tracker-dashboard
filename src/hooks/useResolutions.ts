import { ResolutionDataType } from '@/types/resolution';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useUserResolution = () => {
  return useSuspenseQuery({
    queryKey: ['resolutionStats'],
    queryFn: () =>
      fetchData<ResolutionDataType[]>('/dashboard/resolutionStats'),
  });
};
