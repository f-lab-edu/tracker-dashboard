import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/WithBoundarySuspense';
import { VisitorsPageByPeriodCount } from '@/components/stats/VisitorsPageByPeriodCount';
import { VisitorsPeriodCount } from '@/components/stats/VisitorsPeriodCount';

export const DateStatPage = () => {
  return (
    <CommonLayout>
      <WithBoundarySuspense>
        <VisitorsPageByPeriodCount />
      </WithBoundarySuspense>
      <WithBoundarySuspense>
        <VisitorsPeriodCount />
      </WithBoundarySuspense>
    </CommonLayout>
  );
};
