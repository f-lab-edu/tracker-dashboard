import { LanguageDataType } from '@/types/language';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useUserLanguages = () => {
  return useSuspenseQuery({
    queryKey: ['userLanguage'],
    queryFn: () => fetchData<LanguageDataType[]>('/dashboard/languageStats'),
  });
};
