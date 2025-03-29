import { fetchData } from '@/utils/api';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

export const useAxiosQuery = <T>(
  url: string,
  queryKey: string[],
  options?: UseQueryOptions<T>
) => {
  return useQuery<T>({
    queryKey,
    queryFn: () => fetchData(url),
    ...options,
  });
};
