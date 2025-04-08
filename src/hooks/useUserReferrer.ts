import { ReferrerDataType } from '@/types/referrer';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useUserReferrer = () => {
  return useSuspenseQuery({
    queryKey: ['userReferrer'],
    queryFn: () => fetchData<ReferrerDataType[]>('/dashboard/referrer'),
  });
};
