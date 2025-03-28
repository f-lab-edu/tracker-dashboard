import { getAxiosData } from '@/utils/api';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export const useAxiosQuery = <T>(
  url: string,
  queryKey: string[],
  options?: UseQueryOptions<T>
) => {
  return useQuery<T>({
    queryKey,
    queryFn: () => getAxiosData(url),
    ...options,
  });
};
