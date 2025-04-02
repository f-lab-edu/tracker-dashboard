import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PieChartDataType } from '../components/charts/PieChartTemplate';

interface UserLanguagesDataType {
  language: string;
  count: number;
}

export const useUserLanguages = () => {
  return useSuspenseQuery<PieChartDataType[]>({
    queryKey: ['userLanguage'],
    queryFn: async () => {
      const data = await fetchData<UserLanguagesDataType[]>(
        '/dashboard/languageStats'
      );
      return data.map((item) => ({
        name: item.language,
        value: item.count,
      }));
    },
  });
};
