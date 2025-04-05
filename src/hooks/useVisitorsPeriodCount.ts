import { PeriodVisitCountType } from '@/types/visitorsCount';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useVisitorsPeriodCount = (startDate: string, endDate: string) => {
  return useSuspenseQuery({
    queryKey: ['periodVisitorsCount', startDate, endDate],
    queryFn: () =>
      fetchData<PeriodVisitCountType[]>('/dashboard/visitorsByPeriodCount', {
        startDate,
        endDate,
      }),
  });
};
