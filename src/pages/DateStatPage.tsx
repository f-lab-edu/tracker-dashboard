import { DashboardSlogan } from '@/components/common/DashboardSlogan';
import { CommonLayout } from '@/components/common/layout/CommonLayout';
import { WithBoundarySuspense } from '@/components/common/WithBoundarySuspense';
import { VisitorsPageByPeriodCount } from '@/components/stats/VisitorsPageByPeriodCount';
import { VisitorsPeriodCount } from '@/components/stats/VisitorsPeriodCount';

export const DateStatPage = () => {
  return (
    <CommonLayout>
      <div className="flex flex-col gap-6 mx-8 lg:mx-0">
        <DashboardSlogan />
        <WithBoundarySuspense>
          <VisitorsPageByPeriodCount />
        </WithBoundarySuspense>
        <WithBoundarySuspense>
          <VisitorsPeriodCount />
        </WithBoundarySuspense>
      </div>
    </CommonLayout>
  );
};
