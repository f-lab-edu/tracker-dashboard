import { getAxiosData } from '@/utils/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { FiActivity } from 'react-icons/fi';
import { Card } from '../common/Card';

interface ReturnVisitRateDataType {
  domain: string;
  visitedUsersRate: number;
}

export const ReturnVisitRate = () => {
  const { data } = useSuspenseQuery<ReturnVisitRateDataType>({
    queryKey: ['returnVisitRate'],
    queryFn: () => getAxiosData('/dashboard/visitedRate'),
  });

  const roundedReturnRate = Math.round(data.visitedUsersRate);
  return (
    <Card borderRadius="xl" width="fit">
      <div>
        <p className="text-lg font-bold">Return Visit Rate</p>
        <div className="flex gap-4 items-center justify-center mt-4">
          <FiActivity size={30} />
          <p className="text-center text-3xl">{roundedReturnRate}%</p>
        </div>
      </div>
    </Card>
  );
};
