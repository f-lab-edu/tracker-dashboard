import { useReturnVisitRate } from '@/hooks/useReturnVisitRate';
import { FiActivity } from 'react-icons/fi';
import { Card } from '../common/Card';

export const ReturnVisitRate = () => {
  const { data } = useReturnVisitRate();
  const returnData = Math.round(data.visitedUsersRate);

  return (
    <Card borderRadius="xl" width="full">
      <div>
        <p className="text-lg font-bold">Return Visit Rate</p>
        <div className="flex gap-4 items-center justify-center mt-4">
          <FiActivity size={30} />
          <p className="text-center text-3xl">{returnData}%</p>
        </div>
      </div>
    </Card>
  );
};
