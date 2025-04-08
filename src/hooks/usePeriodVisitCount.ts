import { VisitorsPageByPeriodDataType } from '@/types/visitorsPage';
import { fetchData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export const usePeriodVisitCounts = (startDate: string, endDate: string) => {
  return useSuspenseQuery({
    queryKey: ['periodVisitCounts', startDate, endDate],
    queryFn: () =>
      fetchData<VisitorsPageByPeriodDataType[]>(
        `/dashboard/visitorsPageByPeriodCount`,
        {
          startDate,
          endDate,
        }
      ),
  });
};
