import { OsDataType } from '@/types/os';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useUserOses = () => {
  return useSuspenseQuery({
    queryKey: ['userOs'],
    queryFn: () => fetchData<OsDataType[]>('/dashboard/osStats'),
  });
};
