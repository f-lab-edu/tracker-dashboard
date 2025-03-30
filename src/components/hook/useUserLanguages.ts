import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

interface UserLanguagesDataType {
  language: string;
  count: number;
}

export const useUserLanguages = () => {
  return useSuspenseQuery<UserLanguagesDataType[]>({
    queryKey: ['userLanguage'],
    queryFn: () => fetchData('/dashboard/languageStats'),
  });
};
