import { CountryDataType } from '@/types/country';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useUserCountries = () => {
  return useSuspenseQuery({
    queryKey: ['userCountries'],
    queryFn: () => fetchData<CountryDataType[]>('/dashboard/countryStats'),
  });
};
