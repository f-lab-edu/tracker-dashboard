import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PieChartDataType } from '../components/charts/PieChartTemplate';

interface UserCountriesDataType {
  country: string;
  count: number;
}

export const useUserCountries = () => {
  return useSuspenseQuery<PieChartDataType[]>({
    queryKey: ['userCountries'],
    queryFn: async () => {
      const data = await fetchData<UserCountriesDataType[]>(
        '/dashboard/countryStats'
      );
      return data.map((item) => ({
        name: item.country,
        value: item.count,
      }));
    },
  });
};
