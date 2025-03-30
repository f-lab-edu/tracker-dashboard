import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface ResolutionDataType {
  resolution: string;
  count: number;
}

export const useUserResolution = () => {
  return useSuspenseQuery<ResolutionDataType[]>({
    queryKey: ['resolutionStats'],
    queryFn: () => fetchData('/dashboard/resolutionStats'),
  });
};
