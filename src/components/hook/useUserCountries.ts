import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface UserCountriesDataType {
  country: string;
  count: number;
}

export const useUserCounties = () => {
  return useSuspenseQuery<UserCountriesDataType[]>({
    queryKey: ['userCountries'],
    queryFn: () => fetchData('/dashboard/countryStats'),
  });
};
