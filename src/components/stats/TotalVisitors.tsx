import { getAxiosData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Card } from '../common/Card';

interface TotalVisitorsDataType {
  totalVisitCount: string;
  uniqueVisitors: number;
}

export const TotalVisitors = () => {
  const { data } = useSuspenseQuery<TotalVisitorsDataType[]>({
    queryKey: ['totalVisitors'],
    queryFn: () => getAxiosData('/dashboard/totalVisitorsCount'),
  });
  const { totalVisitCount, uniqueVisitors } = data[0];

  return (
    <Card bgColor="bg-primary-100" borderRadius="xl" width="fit">
      <div className="flex gap-4 text-accent-200">
        <div>
          <p className="text-lg font-bold">Total Visitors</p>
          <p className="text-center text-3xl mt-4">{totalVisitCount}</p>
        </div>
        <div>
          <p className="text-lg font-bold">Real Visitors</p>
          <p className="text-center text-3xl mt-4">{uniqueVisitors}</p>
        </div>
      </div>
    </Card>
  );
};
