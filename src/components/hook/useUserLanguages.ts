import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PieChartDataType } from '../charts/PieChartTemplate';

interface UserLanguagesDataType {
  language: string;
  count: number;
}

export const useUserLanguages = () => {
  return useSuspenseQuery<PieChartDataType[]>({
    queryKey: ['userLanguage'],
    queryFn: async () => {
      const data = await fetchData('/dashboard/languageStats');
      return data.map((item: UserLanguagesDataType) => ({
        name: item.language,
        value: item.count,
      }));
    },
  });
};
