import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PieChartDataType } from '../charts/PieChartTemplate';

interface UserCountriesDataType {
  country: string;
  count: number;
}

export const useUserCounties = () => {
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
