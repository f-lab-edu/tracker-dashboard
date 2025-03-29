import { Card } from '../common/Card';
import { useTotalVisitors } from '../hook/useTotalVisitors';

export const TotalVisitors = () => {
  const { data } = useTotalVisitors();
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
